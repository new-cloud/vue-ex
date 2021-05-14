<!--  -->
<template>
    <transition name="dialog-fade">
	<div v-show="visible" class="dialog__wrapper" @click.self="handleWrapperClick">
		<!-- <div class="modal"></div> -->
		<div class="dialog"
          :style="style">
            <button @click="hide">关闭</button>
		</div>

	</div>
    </transition>
</template>

<script>

export default {
	props: {
		visible: {
			type: Boolean,
			default: false
		},
		// close-on-click-modal    是否可以通过点击 modal 关闭 Dialog
		closeOnClickModal: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: '700px'
		},
		top: {
			type: String,
			default: '15vh'
		}
	},
	data() {
		return {
		};
	},
	computed: {
		style() {
			const style = {};
			style.marginTop = this.top;
			style.width = this.width;
			return style;
		}
	},
	methods: {
		hide() {
			this.$emit('update:visible', false);
		},
		handleWrapperClick() {
			if (!this.closeOnClickModal) return;
			this.hide();
		}
	},
	created() {

	},
	mounted() {

	}
};
</script>
<style lang='scss' scoped>
.dialog-fade-enter-active {
  animation: dialog-fade-in .3s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .3s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
.dialog__wrapper{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    overflow: auto;
    .modal{
        // position: fixed;
        // top: 0;
        // right: 0;
        // bottom: 0;
        // left: 0;
    	// z-index: 1;
        // height: 100%;
    }
    .dialog{
    	position: relative;
        z-index: 1;
        margin: 0 auto;
        background: greenyellow;
    }
}

</style>
