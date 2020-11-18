<!--  -->
<template>
    <div  v-on:mouseover="stop()" v-on:mouseout="move()" class="app">
        <transition-group tag="ul" name="image">
            <li v-for="(items,index) in list" v-show="index===num" :key="index" >
                <img :src="items" alt="">
                <div>
                <span
                v-for="(items,index) in data" :key="index"
                class="nav"
                @click="change(index)"
                :class="{'active':index==num}">{{items}}</span>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			data: ['1', '2', '3'],
			time: '',
			num: 0,
			list: [
				'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*mb-WQILTlSEAAAAAAAAAAABkARQnAQ',
				'https://gw.alipayobjects.com/zos/antfincdn/888xda6kBc/Ant%252520Design%252520shouyepeitu.svg',
				'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZhzDQLMyYlYAAAAAAAAAAABkARQnAQ'
			]
		};
	},
	methods: {
		play() {
			this.time = setInterval(() => {
				this.num++;
				if (this.num === 3) {
					this.num = 0;
				}
			}, 2000);
		},
		change(i) {
			this.num = i;
		},
		stop() {
			clearInterval(this.time);
		},
		move() {
			this.play();
		}
	},
	created() {

	}
};
</script>
<style lang='scss' scoped>
li{
    list-style: none;
}

</style>
