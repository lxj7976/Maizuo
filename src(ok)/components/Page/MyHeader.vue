<template>
	<div class="myheader">
		<i class="fa fa-bars" @click="toggle"></i><h3>{{title}}</h3>
		<router-link to="/city">
		<span>{{city}} <i class="fa fa-angle-down"></i></span>
		</router-link>
	</div>

</template>
<script>
export default {
	props:["toggle"],
	data(){
		return {
			title:"卖座电影",
			city:"北京"
		}
	},
	created(){
		 this.$root.bus.$on("moviename",(name)=>{
		 	this.title=name;
		 })
		 this.$root.bus.$on("cityname",(name)=>{
		 	this.city=name;
		 })
		 this.$router.beforeEach((to,from,next)=>{
		 	 this.changetitle(to.path);
		 	next();
		 })
	},
	methods:{
		changetitle(path){
			switch(path){
				case "/city":this.title='选择城市';break;
				default:this.title="卖座电影";
			}
		}
	}
}
</script>	

<style lang="scss" scoped>
   $sc:25;
   .myheader{
   	    background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: 50/$sc+rem;
	    line-height: 50/$sc+rem;
	    overflow: hidden;
   	    color:#efefef;
   	    i{
   	    	margin-left: 10/$sc+rem;
   	    }
	   	h3{
			display: inline-block;
			padding: 0 1em;
		    font-size: 14px;
		}
		a{
		   color:#999;
		   font-size:14px;
		   float:right;
		   margin-right:20px;
		}
   }
	
</style>