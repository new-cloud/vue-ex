<template>
  <div>
    <div class="div1" @click="add"></div>
  </div>
</template>

<script>
import jiejie from '@/utils';

export default {
	data() {
    return {
      obj: {
        d: 0
      }
    }
	},
	methods: {
		add() {
    this.obj.e = 0;
    console.log('after--', this.obj);
      console.log(jiejie);
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
