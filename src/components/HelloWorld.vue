<template>
  <div class="hello">
       <div class="demo">
          <div class="baidu">百度一下</div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $sc:25;
   .demo{
      width: 100/$sc+rem;
      background: red;
   }
   .baidu{
        width: 100/$sc+rem;
        height: 36/$sc+rem;
        line-height: 36/$sc+rem;
        text-align: center;
        color: #fff;
        font-size: 15px;
        letter-spacing: 1px;
        background: #3385ff;
        border-bottom: 1px solid #2d78f4;
        outline: medium;
        -webkit-appearance: none;
        -webkit-border-radius: 0;
   }
</style>
