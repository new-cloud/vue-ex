<template>
    <van-tabbar v-model="active" @change="$router.push(active)">
        <van-tabbar-item name="/Home">
            <span>主页</span>
            <template #icon="props">
                <icon-svg :name="props.active ? 'home-active' : 'home'"></icon-svg>
            </template>
        </van-tabbar-item>
        <van-tabbar-item name="/user">
            <span>我的</span>
            <template #icon="props">
                <icon-svg :name="props.active ? 'my-active' : 'my'"></icon-svg>
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        leftArrow: {
            type: Boolean,
            default: true
        },
        border: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            active: '/Home'
        }
    },
    watch: {
        $route: {
          handler(val) {
            this.active = val.path
          },
          deep: true
        }
    },
    created() {
        this.active = this.$route.path
    }
}
</script>

<style lang='scss' scoped>
    .icon-svg{
        width: 23px;
        height: 23px;
    }
</style>
