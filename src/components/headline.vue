<template>

  <div class="content">
    <load :isLoad='isLoad' @letsDo = 'letsDo'></load>
    <div v-if='isShow'>
      <div class="search_bar">
        <div class="search_ipt">
          <input type="text" placeholder="搜索问答、文章和人" name="">
          <i class="iconfont">&#xe741;</i>
        </div>
        <i class="iconfont">&#xe714;</i>
        <i class="iconfont">&#xe6e0;</i>
      </div>

      <swiper :options="swiperOption" class='swiper-box clearfix' ref="mySwiper">
       <!-- slides -->
        <swiper-slide class='swiper-slide'><router-link to='/headline' exact>全部</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/headline/leading'>前端</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/headline/after'>后端</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/ios'>ios</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/andoroid'>Android</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/safe'>安全</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/tool'>工具</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/monkey'>程序猿</router-link></swiper-slide>
        <swiper-slide class='swiper-slide'><router-link to='/bisiness'>行业</router-link></swiper-slide>
      </swiper>

      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import load from './child/loading'
  export default{
    name:'headline',
    data(){
      return{
        swiperOption: {
          notNextTick: true,
          freeMode : true,
          slidesPerView : 'auto'
        },
        isLoad:true,
        isShow:false
      }
    },
    mounted(){
      var time = Math.floor(Math.random()*2000);
      var self = this;
      setTimeout(()=>{  //模拟加载
        this.isLoad = false;
        this.isShow = true;
      },time);
    },
    methods:{
      letsDo(...obj){
        console.log('obj is:' + obj);
      }
    },
    components:{
      load,
      swiper,
      swiperSlide
    }
  }


</script>


<style lang="scss">
  @import "../fonts/swiper.min.css";
  
  .content{
    flex:1;
    overflow: auto;
    .search_bar{
      display: flex;
      justify-content:space-around;
      background:#006741;
      padding: 12px 0;
      .search_ipt{
        width: 7rem;
        input{
          width: 90%;
          height: 0.8rem;
          vertical-align: middle;
          padding-left: 5px;
          padding-right: 0.667rem;
          box-sizing: border-box;
          outline: none;
        }
        i{
          width: 0.56rem;
          height: 0.56rem;
          margin-left: -0.8rem;
          vertical-align: middle;
        }
      }
    }

    .sider_nav{
      overflow-x:scroll;
      /* display: flex;
      justify-content:space-around;
      flex-wrap:nowrap; */
      width: 100%;
      height: 1rem;
      background: #006741;
      color:#fff;
      overflow-y: hidden;
      li{
        height: 100%;
        width: 1.6rem;
        line-height: 1rem;
        float: left;
        text-align: center;
      }
    }

    .text_container li{
      padding:0.267rem;
      display: flex;
      justify-content:space-around;
      border-bottom: 1px solid #ccc;
      .bind_text{
        flex:1;
        h3{
          font-size:0.48rem;
          color:#000;
        }
        p{
          color:#666;
        }
        .operation{
          display: flex;
          justify-content:space-between;
          .from{
            color:#666;
            align-self:flex-end;
          }
          span{
            color:#049b62;
            i{
              vertical-align: middle;
            }
          }
        }
      }
      .imgs{
        width: 1.6rem;
        margin-top: 0.4rem;
        margin-left: 0.267rem;
        img{
          width: 1.4rem;
          height: 1.4rem;
          vertical-align: middle;
        }
      }
    }


    .swiper-box {
      width: 100%;
      height: 1.067rem;
      margin: 0 auto;
      overflow:hidden;
      box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
    }
    .swiper-slide {
      padding: 0 20px;
      width: auto;
      color:#fff;
      background: #049b62;
     
      text-align: center;
      color: #fff;
      line-height: 1.067rem;
    }

    a.active{
      color:red;
    }

  }
</style>