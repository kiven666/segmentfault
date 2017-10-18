<template>
	<div class="special_colum content">
		<!-- loading动画 -->
	    <!-- <div class="loading" v-if='isLoad'>
	      <img src="../assets/loading.gif">
	    </div> -->
	  <load :isLoad='isLoad'></load>
		<div v-if='isShow'>
			<div class="search_bar">
        <div class="search_ipt">
          <input type="text" placeholder="搜索问答、文章和人" name="">
          <i class="iconfont">&#xe741;</i>
        </div>
        <i class="iconfont">&#xe6ea;</i>
      </div>
      <ul class="column_list clearfix">
      	<li><router-link to='/detail'>	推荐的</router-link></li>
      	<li><router-link to='/detail'>	热门的</router-link></li>
      	<li><router-link to='/detail'>	全部的</router-link></li>
      </ul>
		</div>
		<ul class="text_container">
   	 	<li v-if='!ignore'>
	      <div class="bind_text">
	        <h3>绑定邮箱</h3>
	        <p>获取更多segmentfault新动态，跟百万程序猿一起涨姿势！</p>
	        <div class="operation">
	          <div>
	            <span @click='hulve' class="ignore">忽略</span>
	            <span class="bind_email">绑定邮箱</span>
	          </div>
	        </div>
	      </div>
	      <div class="imgs">
	        <img src="../assets/stu4.png">
	      </div>
    	</li>
    	
		</ul>

	</div>
</template>


<script>
	import load from './child/loading'
	export default {
		data(){
			return {
				isLoad:true,
				isShow:false,
				ignore:false
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
    methods:{
    	hulve(){
      	this.ignore = true;
    	}
    },
    components:{
    	load
    }
	}
</script>


<style lang="scss">
	.special_colum{
		flex:1;
		.column_list{
	    overflow-x: auto;
	    white-space: nowrap;
			height: 1.067rem;
			background:#049b62;
			line-height: 1.067rem;
			margin-top: -10px;
			li{
				float:left;
				color:#fff;
				padding:0 0.267rem;
			}
		}
	}
</style>