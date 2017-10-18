<template>
	<div class="text_container">
    <pull-refresh :next="refresh">
  	  <ul slot="list">
     	 	<li v-if='!ignore' class="list-item">
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
          <li class="list-item">
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
    </pull-refresh>
	</div>
</template>


<script type="text/javascript">

  import pullRefresh from './pull_refresh'

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
        })
      },
      hulve(){
        this.ignore = true;
      },
      refresh() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const appendList = []
            const temp = {}
            this.getMsg();
            // while (appendList.length < 3) {
            //   const index = Math.floor(Math.random() * 10)
            //   console.log(this.backup)
            //   if (!temp[`attr${index}`]) {
            //     temp[`attr${index}`] = this.backup[index]
            //     appendList.push(this.backup[index])
            //   }
            // }
            // for (let i = 0; i < appendList.length; i++) {
            //     this.list.unshift(appendList[i])
            // }
            resolve()
          }, 2000)
        })
      }
    },
    components:{
      pullRefresh
    }

	}
</script>
