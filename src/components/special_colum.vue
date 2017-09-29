<template>
	<div class="special_colum">
		<!-- loading动画 -->
	    <!-- <div class="loading" v-if='isLoad'>
	      <img src="../assets/loading.gif">
	    </div> -->
	    <load :isLoad='isLoad'></load>
		<div v-if='isShow'>
			<h3>我是专栏内容</h3>
		</div>
	</div>
</template>


<script>
	import load from './child/loading'
	export default {
		data(){
			return {
				isLoad:true,
				isShow:false
			}
		},
		mounted(){
	      var time = Math.floor(Math.random()*2000);
	      var self = this;
	      setTimeout(()=>{
	        this.isLoad = false;
	        this.isShow = true;
	      },time);
	    },
	    components:{
	    	load
	    }
	}
</script>


<style lang="scss">
	.special_colum{
		flex:1;
	}
</style>