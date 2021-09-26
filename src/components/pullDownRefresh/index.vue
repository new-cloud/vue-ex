<template>
    <van-list
	  v-model="loading"
      :finished="finished"
      :finished-text="recommendList.length > 0 ? '没有更多了' : ''"
	  class="recommendList"
      @load="onLoad"
	>
        <div v-show="init">
            <slot v-if="recommendList.length > 0" :data="recommendList"></slot>
            <van-empty v-else description="暂无数据" />
        </div>
	</van-list>
</template>

<script>
export default {
    props: {
        // 接口地址
        api: {
            type: String,
            default: ''
        },
        // 接口参数对象
        apiParams: {
            type: Object,
            default: () => {}
        },
        // 选中的列表
        multipleSelection: {
            type: Array,
            default: () => []
        }
    },
    name: 'pullDownRefresh',
    data() {
        return {
            // 分页初始数据
            paramsInit: {
                pageNum: 1,
                pageSize: 10
            },
            // 分页实际数据
            params: {},
            loading: false,
            finished: false,
            // 列表
			recommendList: [],
            // 列表第一次渲染的等待 防止空状态闪屏
            init: false,
            scrollTop: null
        }
    },
    watch: {
        // 监听接口地址 地址变化重新加载
        api(val) {
            // console.log(val, this.api)
            this.refresh()
        },
        // 监听接口参数 参数变化重新加载
        apiParams: {
            handler() {
                // console.log(this.apiParams)
                this.refresh()
            },
            deep: true
        }
    },
    created() {
        this.params = { ...this.paramsInit }
    },
    methods: {
        onLoad() {
            this.toast = this.$toast.loading({
				duration: 0,
			  	message: '加载中...',
			  	forbidClick: true
			})
            const modl = this.api.split('/')[0]
            const fn = this.api.split('/')[1]
            this.$api[modl][fn]({
                ...this.apiParams,
                ...this.params
            }).then(res => {
                console.log(res)
                // 如果有选中列表 循环判断更改选中状态
                if (this.multipleSelection.length > 0) {
                    res.list.forEach(item => {
                        console.log(this.multipleSelection)
                        if (this.multipleSelection.includes(item.positionId)) {
                            item.checked = true
                        }
                    })
                }
                this.recommendList = [...this.recommendList, ...res.list]
				this.params.pageNum += 1
				this.loading = false
				if (this.recommendList.length === res.total) {
					this.finished = true
				}
                this.init = true
                this.toast && this.toast.clear()
            })
            // setTimeout(() => {
            //     this.recommendList = [...this.recommendList, ...this.arr]
			// 	this.params.pageNumber += 1
			// 	this.loading = false
			// 	if (this.recommendList.length === 20) {
			// 		this.finished = true
			// 	}
			// 	if (this.recommendList.length === 4) {
			// 		this.$store.commit('app/SET_LOADING', false)
			// 	} else {
			// 		this.toast && this.toast.clear()
			// 	}
            // }, 500)
        },
        // 重置列表
        refresh() {
            // 重置分页数据
            this.params = { ...this.paramsInit }
            this.loading = true
            this.finished = false
            // 重置列表第一次渲染的等待 防止空状态闪屏
            this.init = false
            this.recommendList = []
            this.onLoad()
        }
    }
}
</script>
