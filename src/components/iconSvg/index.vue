<template>
	<svg :style="style" class="icon-svg" aria-hidden="true">
	  <use :xlink:href="'#icon-'+name"></use>
	</svg>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: ''
		},
		width: {
			type: String,
			default: ''
		},
		height: {
			type: String,
			default: ''
		}
	},
	computed: {
		style() {
			const w = this.width && this.width / 16;
			const h = this.height && this.height / 16;
			const s = this.size && this.size / 16;
			return {
				width: (w || s) + 'rem',
				height: (h || s) + 'rem'
			};
		}
	}
};
</script>

<style lang="scss" scoped>
    .icon-svg {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
		}
</style>
