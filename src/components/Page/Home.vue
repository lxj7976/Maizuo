<template>
		<div class="box">
			<Swiper />
		<nowPlaying />
		<div class="more-button">
           更多放映电影
        </div>
        <div class="upcoming">
            <span>即将上映</span>
        </div>
		<comingSoon />
		</div>
</template>
<script>
	import Swiper from "../Common/Swiper"
	import nowPlaying from './nowPlaying'
	import comingSoon from './comingSoon'
	export default {
		components:{
            Swiper,nowPlaying,comingSoon
        }
    }
</script>
<style lang="scss" scoped>
$sc:25;
.box{
    background:rgba($color:  #aaa, $alpha: .3);
}
.swiper-container {
    margin-top: 50/$sc+rem;
    width: 100%;
} 
img{
    max-width: 100%;
}

.more-button{
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
}
.upcoming{
    width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: 40/$sc+rem;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
}
</style>

