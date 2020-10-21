<template>
  <div>
		<input type="file" @change="handleFile">
    <div class="div1" @click="add"></div>
		<ul>
			<li v-for="(item,i) of arr2" :key="i">
				<span>{{item}}</span>
			</li>
		</ul>
		<div>{{obj[2]}}</div>
		<div>{{obj.age}}</div>
		<button @click="sdd">sdd</button>
  </div>
</template>

<script>

export default {
	data() {
		return {
			obj: {
				2: 'ss',
				d: 0
			},
			file: '',
			arr: [
				{ id: 1, name: 'ff' },
				{ id: 2, name: 'xx' },
				{ id: 3, name: 'mm' },
				{ id: 4, name: 'hh' }
			],
			arr2: ['xx', 'mm', 'll']
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
			this.$api.home.fileUpload(param).then(res => {
				console.log(res);
			});
		},
		sdd() {
			this.obj[2] = 'oo';
			// this.$set(this.arr2, 2, 'gg');
		}
	},
	created() {},
	mounted() {
			// this.obj.age = 10;
			// console.log(this.obj);
			// this.$set(this.obj, 'age', 10)
	},
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
