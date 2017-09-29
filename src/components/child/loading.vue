<template>
	<div>
		<!-- loading动画 -->
	    <div class="loading" v-if='isLoad'>
	      <img src="../../assets/loading.gif">
	    </div>
	    <!-- <div class="sth" @click='doSomething'>点我向父组件传数据</div> -->
	</div>
</template>


<script type="text/javascript">
	export default {
		props:{
			isLoad:Boolean
		},
		data(){
			return {

			}
		},
		methods:{
			doSomething(){
				let obj = {
					a:'11ww'
				}
				this.$emit('letsDo',obj,'andMore')
			}
		}
	}
</script>

<style lang='scss' scoped>
	.loading{
	    width:100vw;
	    height:100vh;
	    background:#c0c0c0;
	    position:fixed;
	    left:0;
	    top:0;
	    bottom:0;
	    z-index:100000;
	    img{
	      position:absolute;
	      left:50%;
	      top:50%;
	      width:2.8rem;
	      height:2rem;
	      border-radius:1rem;
	      transform:translate(-50%,-50%)
	    }
  	}
</style>