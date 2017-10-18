<template>
	<div class="details">
    <div class="header">
      <i class="iconfont" @click="back">&#xe720;</i>
      <h3 >{{params.title}}</h3>
      <i class="iconfont">&#xe72a;</i>
    </div>
    
    <div class="some_details">
      <h4>{{params.title}}</h4>
      <div class="time">
        <span v-if='params.date'>日期: {{params.date}}</span>
        <span v-if='params.username' class="username">作者: {{params.username}}</span>
      </div>
    </div>
		<div class="text_contain" v-html="details"></div>

    <div class="bottom_nav clearfix" v-if='nav_show'>
      <p class="zan" @click.once='praise_plus'  v-bind:class='{praise:praised}'>
        <i class="iconfont">&#xe71a;</i>
        <span>{{params.praise}}</span>
      </p>
      <p class="collect">
        <i class="iconfont">&#xe6df;</i>
        <span>10</span>
      </p>
      <p class="comment">
        <i class="iconfont">&#xe70d;</i>
        <span>{{params.comment}}</span>
      </p>
    </div>
	</div>
</template>

<script>
  export default {
    data(){
      return {
        details:'',
        params:{},
        nav_show:true,
        praised:false
      }
    },
    mounted(){
      this.getDetail();
      this.params = this.$route.query.param;
      console.log(this.params)
      window.addEventListener('scroll',this.nav_scroll)
    },
    beforeDestory(){
      window.removeEventListener('scroll',this.nav_scroll)
    },
    computed:{
      praise_plus(){
        this.params.praise++;
        this.praised = true;
      }
    },
    methods: {
      getDetail() {
        this.$axios.get('/api/sf_info?id=' + this.$route.query.param.id).then((res) => {
          this.details = res.data.data[0].info;
        })
      },
      back(){
        this.$router.history.go(-1);
      },
      nav_scroll(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(document.documentElement.offsetHeight + 40 <= (scrollTop + window.innerHeight)){
          this.nav_show = false;
        }else{
          this.nav_show = true;
        }
      },

    }

  }

</script>

<style  lang="scss" rel="stylesheet/sass">
  .header{
    height: 1.167rem;
    background:#049b62;
    display: flex;
    line-height: 1.167rem;
    color:#fff;
    i.iconfont{
     font-size: 0.48rem;
     padding: 0 0.267rem;
    }
    h3{
      flex:1;
      text-align: center;
    }
  }

  .some_details{
    padding:0.267rem;
    color:#333;
    border-bottom: 1px solid #ccc;
    h4{
      margin:0.267rem 0;
      color:#666;
    }
    .time{
      span{
        margin-right: 20px;
      }
    }
  }

  .text_contain{
    padding:0.267rem;
    color:#333;
    h2{
      color:#000;
      margin-bottom: 0.4rem;
      padding: 0.133rem 0;
      border-bottom: 1px solid #ccc;
    }
    p{
      text-indent: 0.213rem;
      margin-bottom:0.187rem;
    }

    pre.hljs{
      background:#eee;
      padding:0.16rem;
    }
  }

  .bottom_nav{
    position: fixed;
    left:0;
    bottom: 0;
    
    width:100%;
    padding:0.133rem 0;
   background: #fff;
    box-shadow: 1px 1px 30px #000;
    p{
      width:33%;
      float:left;
      color:#666;
      text-align: center;
      i,span{
        vertical-align: middle;
      }
    }
    p.praise{
      color:#049b62;
    }
  }
    
</style>


