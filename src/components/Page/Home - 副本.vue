<template>
		<div>
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="(item, index) in billboard" :key="index">
						 <img :src="item.imageUrl" /> 
			        </div>
			        
			    </div>
			</div>
		</div>
</template>
<script>
	import Swiper from "swiper";
	import "../../../node_modules/swiper/dist/css/swiper.css";
	export default {
		data(){
			return {
				billboard:[]
			}
		},
        created(){
        	this.$http.get("/mz/v4/api/billboard/home",{
        		params:{
        			__t:new Date().getTime()
        		}
        	}).then((res)=>{
        		console.log(res)
        		this.billboard = res.data.data.billboards;
        		
        	})

        },
        watch:{
        	billboard(){
        		this.$nextTick(()=>{
        			var mySwiper = new Swiper ('.swiper-container', {
    
               loop: true, // 循环模式选项
               autoplay: {
				    delay: 3000,
                     disableOnInteraction: false
        		}
        	})

        		})
        		
	      }
        }
    }
</script>
<style lang="scss">
.swiper-container {
    width: 100%;
    height: 300px;
}  
img{
	max-width: 100%;
}
</style>