<template>
  <div class="hello">

    <router-view></router-view>

    <footer>
      <ul class="foot_bar">
        <li>
          <router-link v-bind:to="'/headline'">
            <i class="iconfont">&#xe6de;</i>
            <span>头条</span>
          </router-link>
        </li>
        <li>
          <router-link to='/special_colum'>
            <i class="iconfont">&#xe6e6;</i>
            <span>专栏</span>
          </router-link>
        </li>
        <li>
          <router-link to='/qus_ans'>
            <i class="iconfont">&#xe70c;</i>
            <span>问答</span>
          </router-link>
        </li>
        <li>
          <router-link to='/discover'>
            <i class="iconfont">&#xe6e8;</i>
            <span>发现</span>
          </router-link>
        </li>
        <li>
          <router-link to='/myzone'>
            <i class="iconfont">&#xe6e4;</i>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      // this.$axios.get('/api/sf_list').then((res) => {
      //   console.log(res)
      // })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss" rel="stylesheet/sass">
  .hello{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }


  footer{
    border-top:1px solid #ccc;
    padding-bottom: 10px;
    .foot_bar{
      display: flex;
      justify-content:space-around;
      box-shadow: 0 0px 3px #ccc;
      li{
        flex:1;
        text-align: center;
        .active{
          color:#049b62
        }
        .iconfont{
          display: block;
          font-size: 0.56rem;
        }
      }
    }
  }
</style>
