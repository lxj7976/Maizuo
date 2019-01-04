<template>
	<div class="myheader">
		<i class="fa fa-bars" @click="toggle"></i><h3>{{title}}</h3>
		<div class="right">
			<router-link to="/user">
                <i class="fa fa-user-o user"></i>
            </router-link>
            <router-link to="/city">
                <i class="fa fa-angle-down down"></i> 
				<span>{{city}}</span>
            </router-link>
            
            
        </div>
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
        this.$root.bus.$on("cityname",(name)=>{
			this.city=name
		}),
		this.$root.bus.$on("moviename",(name)=>{
			this.title=name
		}),
        this.$router.afterEach((to,from)=>{
            this.changeTitle(to.path);
        })
    },
    methods:{
        changeTitle(path){
            switch(path){
                case "/home":
                case "/film":this.title="卖座电影"; break;
                case "/movie":this.title="全部影院"; break;
                case "/shop":this.title="商城"; break;
                case "/user":this.title="登录"; break;
                case "/city":this.title="选择城市"; break;
                case "/card":this.title="查询/绑定/激活卖座卡"; break;
                default:;
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
		 
		}
		.right{
            float: right;
            a{
                color:#999;
               span{
                    font-size: 14px;
                    color:#999;
                }
                .down{
                    font-size: 16px;
                }
                .user{
                    font-size: 16px;
                    width: 48px;
                    text-align: center;
            } 
            }
            
            
        }
   }
	
</style>