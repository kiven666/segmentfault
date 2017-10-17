<template>
	<div class="text_container">
	  <ul>
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
	        <img src="../../assets/stu4.png">
	      </div>
    	</li>

      <router-link :to="{path:'/detail/' + item.id,query: {param:item}}"  v-for="(item,index) in allMsg" key="index">
        <li>
          <div class="bind_text">
            <h3>{{item.title}}</h3>
            <p>{{item.username}} 3小时前</p>
            <div class="operation">
              <div>
		            <span class="ignore">
		              <i class="iconfont">&#xe71b;</i> 4
		            </span>
                <span class="bind_email"><i class="iconfont">&#xe70c;</i> 6</span>
              </div>
              <div class="from" v-if="item.type == 1">#前端</div>
              <div class="from" v-if="item.type == 2">#后端</div>
            </div>
          </div>
        </li>
      </router-link>

	  </ul>
	</div>
</template>


<script type="text/javascript">

	export default{
		name:'all',
		data (){
			return {
        allMsg:[],
        ignore:false
			}
		},
    mounted (){
      this.getMsg();
    },
    methods:{
		  getMsg (){
        this.$axios.get('/api/sf_list').then((res) => {
           this.allMsg = res.data.data;
           console.log(this.allMsg)
        })
      },
      hulve(){
        this.ignore = true;
      }
    }

	}
</script>
