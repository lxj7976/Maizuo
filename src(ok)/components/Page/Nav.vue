<template>
   <div>
    <transition enter-active-class="animated slideInLeft"
	 leave-active-class="animated slideOutLeft">
	<div class="mynav"  v-if="flag" >
		<ul>
			<li v-for="item in nav" :key="item.id" @click="toggle">
				<router-link :to="item.path">{{item.text}}
				<i  class="fa fa-chevron-right right"></i>
				</router-link>
			</li>	
		</ul>
	</div>
	</transition>
     <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
	   <div class="mask" v-if="flag" @click="toggle"></div>
	 </transition>
   </div>
</template>
<script>
export default {
	props:["flag","toggle"],
	data(){
		return {
			nav:[
			   {id:1,
			   text:'首页',
			   path:"/home"
			   },
			   {id:2,
			   text:'影片',
			   path:"/film"
			   },
			   {id:3,
			   text:'影院',
			   path:"/cinema"
			   },
			   {id:4,
			   text:'商城',
			   path:"/shop"
			   },
			   {id:5,
			   text:'我的',
			   path:"/my"
			   },
			   {id:6,
			   text:'卖座卡',
			   path:"/card"
			   },
			]
		}
	}
}

</script>

<style lang="scss">
$sc:25;
 .mynav{
 	 border-top: 1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: fixed;
    display: block;
    top: 50/$sc+rem;
    right: 110px;
    bottom: 0;
    left: 0;
    z-index:200;
    li{
    	line-height: 50/$sc+rem;
 

    }
	a{
		  	box-sizing: border-box;
		    display: block;
		    width: 100%;
		    padding: 0 16px;
		    border-bottom: 1px dotted #333;
		    color: #9a9a9a;
    		font-size: 14px;
		    .right{
		    	    float: right;
				    color: #666;
				    font-size: 14px;
				    margin-top:20/$sc+rem;
		    }
	}
 }
 .mask {
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:100;
 background:rgba(0,0,0,.5);
 }
 
</style>