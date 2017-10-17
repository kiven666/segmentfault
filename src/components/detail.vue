<template>
	<div class="details">
    <div class="header">
      <i class="iconfont" @click="back">&#xe720;</i>
      <h3 >{{params.title}}</h3>
      <i class="iconfont">&#xe72a;</i>
    </div>
    
    <div class="some_details">
      <h4>{{params.title}}</h4>
      
    </div>
		<div class="text_contain" v-html="details"></div>
	</div>
</template>

<script>
  export default {
    data(){
      return {
        details:'',
        params:{}
      }
    },
    mounted(){
      this.getDetail();
      this.params = this.$route.query.param;
      console.log(this.params)
    },
    methods: {
      getDetail() {
        this.$axios.get('/api/sf_info?id=' + this.$route.query.param.id).then((res) => {
          this.details = res.data.data[0].info;
        })
      },
      back(){
        this.$router.history.go(-1);
      }
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
    
</style>


