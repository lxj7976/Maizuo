<template>
  <div id="app">
    <HeaderNav />
    <router-view class="content" />
  </div>
</template>

<script>
import HeaderNav from "@/components/Page/HeaderNav"
export default {
  name: 'App',
  components:{
  	HeaderNav
  }

 
}
</script>

<style lang='scss'>
  @import "./assets/css/style.css";
  $sc:25;
 .content{
 	margin-top:50/$sc+rem;
 }
	
</style>
