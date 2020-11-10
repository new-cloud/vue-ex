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
	<div class='pie'>
		<div v-for="item of 4" :key="item">
			<div :class="['slice','slice-'+item,sliceCke==item && 'sliceCke']" @click="itemChange(item)"></div>
        	<img src="./灯光遥控器.png" class="imgs" alt="">
			<span
			 :class="['slice-text slice-text-ok', 'slice-text-'+item]"
			 @mouseover="sliceCke = item"
			 @mouseout="sliceCke = 0"
			 @click="itemChange(item)">理论赛</span>
		</div>
        <div class="inner-circle"></div>
    </div>
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
			arr2: ['xx', 'mm', 'll'],
			sliceCke: 0
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
		},
		itemChange(item) {
			console.log(item);
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
	.pie {
        position: relative;
        margin: 1em auto;
        padding: 0;
        width: 160px;
        height: 160px;
        border-radius: 50%;
       	// box-shadow: 0px 0px 4px 1px rgb( 0, 0, 0, 0.3);
        overflow: hidden;
    }
    .slice {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 50%;
        transform-origin: 0% 100%;
        background: rgb(231, 41, 73);
        box-sizing: border-box;
		border: 1px solid rgba(250, 250, 250);
        cursor:pointer;
    }
    .imgs{
        position: absolute;
        display: block;
        width: 16px;
		height: 16px;
        cursor:pointer;
    }
	.slice-text{
		display: none;
		font-size: 15px;
        cursor:pointer;
	}
	.sliceCke{
		background: #E1EFFF;
        border: 1px solid #93B6DE;
		opacity: 0.96;
		& + .imgs{
			display: none !important;
		}
		& ~ .slice-text-ok{
			position: absolute;
        	display: block;
		}
	}
	@for $i from 1 through 4 {
	  .slice-#{$i} {
		  	&:hover{
				background: #E1EFFF;
        		border: 1px solid #93B6DE;
				opacity: 0.96;
				& + .imgs{
					display: none !important;
				}
				& ~ .slice-text-#{$i}{
					position: absolute;
        			display: block;
				}
			}
	   }
	}
    .slice-1 {
		transform: rotate(-30deg) skewY(-30deg);
		& + .imgs{
    	    bottom: 120px;
    	    left: 72px;
    	}
		& ~ .slice-text-1{
			width: 50px;
			bottom: 120px;
        	left: 55px;
		}
	}
    .slice-2 {
		transform: rotate(-90deg) skewY(-30deg);
		& + .imgs{
    	    bottom: 92px;
    	    left: 29px;
		}
		& ~ .slice-text-2{
			width: 50px;
			bottom: 92px;
        	left: 10px;
		}
    }
    .slice-3 {
		transform: rotate(-150deg) skewY(-30deg);
		& + .imgs{
    	    bottom: 48px;
    	    left: 29px;
		}
		& ~ .slice-text-3{
			width: 50px;
			bottom: 48px;
        	left: 10px;
		}
    }
    .slice-4 {
		transform: rotate(-210deg) skewY(-30deg);
		& + .imgs{
    	    bottom: 28px;
    	    left: 72px;
		}
		& ~ .slice-text-4{
			width: 50px;
			bottom: 20px;
        	left: 55px;
		}
    }
    .inner-circle {
      position: absolute;
      margin-top: 60px;
      margin-left: 60px;
      width: 40px;
      height: 40px;
      /* line-height: 30px; */
      text-align: center;
      border-radius: 100%;
      background-color: rgba(230, 230, 230, 1);
    }
</style>
