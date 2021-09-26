<template>
    <van-nav-bar
      :style="style"
      :border="border"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
        <template #left v-if="leftArrow">
            <icon-svg :name="background ? 'back-fff' : 'back'"></icon-svg>
        </template>
        <template #title v-if="title && isTitle">
            <span :style="'color:' + (background ? '#fff' : '#333333')">{{ title }}</span>
        </template>
        <template #right v-if="rightText">
            <span style="color: #1989fa; font-size: 1rem">{{ rightText }}</span>
        </template>
    </van-nav-bar>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        isTitle: {
            type: Boolean,
            default: true
        },
        leftArrow: {
            type: Boolean,
            default: true
        },
        rightText: {
            type: String,
            default: ''
        },
        rightTextKye: {
            type: String,
            default: ''
        },
        border: {
            type: Boolean,
            default: true
        },
        position: {
            type: String,
            default: ''
        },
        background: {
            type: String,
            default: ''
        }
    },
    computed: {
        style() {
            return {
                width: '100%',
                position: this.position,
                background: this.background
            }
        }
    },
    methods: {
        onClickLeft() {
            if (this.$route.meta.navBar.backPath) {
                this.$router.push(this.$route.meta.navBar.backPath)
            } else {
                this.$router.go(-1)
            }
        },
        onClickRight() {
            console.log(this.rightTextKye)
            this.$router.push(this.rightTextKye)
        }
    }
}
</script>

<style lang='scss' scoped>
    .van-nav-bar .icon-svg{
        width: 22px;
        height: 22px;
    }
</style>
