<template>
  <div ref="container" class="vue-pull-refresh">
    <div class="vue-pull-refresh-msg">
      <template v-if="loading">
        <i class="iconfont vue-pull-refresh-loading">&#xe71e;</i>
        正在加载
      </template>
      <template v-else>
        <i class="iconfont" :class="{'icon-reverse': flag}" style="width: 1rem; height: 1rem; vertical-align: middle;fill: currentColor;overflow: hidden;">&#xe6e8;</i>
        {{msg}}
      </template>
    </div>
    
    <slot name="list"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      next: { // 刷新函数
        type: Function,
        required: true
      }
    },
    data() {
      return {
        msg: '',
        flag: 0, // 表示是否达到刷新条件
        loading: 0,  // 表示是否正在刷新中
        touchStart: 0,  // 手指触摸屏幕的起点
        distance: 0     // 手指滑动的距离
      }
    },
    mounted() {
      const container = this.$refs.container
      container.addEventListener('touchstart', (e) => {
        // 如果loading为true就代表刷新函数正在进行，此时阻止下拉操作，返回
        if (this.loading) { 
          e.preventDefault()
          return
        }
        // 取第一个手指的触摸点作为起始点
        this.touchStart = e.targetTouches[0].clientY
      })
      container.addEventListener('touchmove', (e) => {
        // 如果没有触摸起始点，返回
        if (!this.touchStart) {
          return
        }
        if (this.loading) {
          e.preventDefault()
          return
        }

        const touch = e.targetTouches[0]
        const scrollTop = container.scrollTop
        if (scrollTop === 0) {
          this.distance = touch.clientY - this.touchStart
          if (this.distance > 0) {
            e.preventDefault()
            if (this.distance < 80) {
              container.style.overflow = 'inherit'
              container.style.transform = 'translate3D(0px, ' + this.distance +'px, 0px)'
              if (this.distance > 55) {
                  this.msg = '释放刷新'
                  this.flag = 1
              } else {
                  this.msg = '下拉刷新'
              }
            }
          }
        }
      })
      container.addEventListener('touchend', (e) => {
        if (this.distance === 0) {
          return
        }
        if (this.loading) {
          e.preventDefault()
          return
        }
        
        if (this.flag && this.distance > 0) {
          container.style.transform = 'translate3D(0px, 50px, 0px)'
          this.loading = 1
          this.next().then(() => {
              this.flag = 0
              this.loading = 0
              container.scrollTop = 0
              container.style.overflow = 'auto'
              container.style.transform = 'translate3D(0px, 0px, 0px)'
          })
          return
        }
        // 重置变量
        this.flag = 0
        container.style.overflow = 'auto'
        container.style.transform = 'translate3D(0px, 0px, 0px)'
      })
    }
  }
</script>
<style>
  .vue-pull-refresh {
    height: 100%;
    overflow-y: auto;
    transition: 330ms;
    -webkit-overflow-scrolling: touch;
  }
  .vue-pull-refresh-msg {
    margin-top: -50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #666;
    border-bottom: 1px solid #ccc;
  }
  .vue-pull-refresh-msg .icon-reverse {
    transform: rotate(180deg);
    transition: all .3s ease;
  }
  .vue-pull-refresh-loading {
    display: inline-block;
    vertical-align: middle;
    -webkit-animation:loadRotate 1s linear infinite;
    animation:loadRotate 1s linear infinite;
  }
  @-webkit-keyframes loadRotate{
    from{
      -webkit-transform: rotate(0deg);
    }
    to{
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes loadRotate{
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>