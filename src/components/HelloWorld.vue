<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>{{msg2}}</h2>
  </div>
</template>

<script>
export default {
	props: ['msg'],
	data() {
		return {
			msg2: 'aaaaaaaa'
		};
	}
};
</script>

<style lang="scss" scoped></style>
