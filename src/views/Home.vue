<template>
  <div>
		<input type="file" @change="handleFile">
    <div class="div1" @click="add"></div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			obj: {
				d: 0
			},
			file: ''
		};
	},
	methods: {
		handleFile(e) {
			// console.log(e.target.files[0])
			this.file = e.target.files[0];
		},
		add() {
			const param = new FormData();
			param.append('file', this.file);
			// this.$api.home.fileUpload(param).then(res => {
			// 	console.log(res);
			// });
		}
	},
	created() {},
	mounted() {},
	watch: {}
};
</script>

<style lang="scss" scoped>
  .div1{
    width: 150px;
    height: 150px;
    background: greenyellow;
  }
</style>
