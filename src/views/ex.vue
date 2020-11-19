<!--  -->
<template>
	<div class=''>
		<zhDialog :visible.sync="show"></zhDialog>
		<button @click="show=true">add</button>
	</div>
</template>

<script>
import zhDialog from '@/components/zh-dialog';

export default {
	components: {
		zhDialog
	},
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

</style>
