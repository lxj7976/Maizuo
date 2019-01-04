<template>
		<div>
			<Swiper />
		<nowPlaying />
		<hr />
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
<style lang="scss">

</style>
