<!--  -->
<template>
	<div class=''>
		<div v-show="show">
			<div class="cover"></div>
			<div class="modal">
				<div class="item"></div>
			</div>
		</div>
		<button @click="show=!show">地点弟弟</button>
	</div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			show: false
		};
	},
	computed: {},
	watch: {},
	methods: {

	},
	created() {

	},
	mounted() {

	}
};
</script>
<style lang='scss' scoped>
.cover{ 
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
	z-index: 1;
    height: 100%;
    background-color: rgba(0,0,0,.45);
}
.modal{
	position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
	z-index: 1;
    overflow: auto;
    outline: 0;
}
.item{
	width: 300px;
	height: 300px;
	margin: 0 auto;
	background: red;
	transition: all .2s;
}
</style>
