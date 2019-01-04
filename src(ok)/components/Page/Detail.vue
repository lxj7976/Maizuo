<template>
	<div>
		{{movie.name}}
		<img :src=" movie.cover.origin" />
		{{movie.premiereAt|formateDate}}

	</div>
</template>

<script>
export default {
	data(){
		return {
			movie:{
				cover:{}
			}
		}
	},
	created(){
		var id=this.$route.params.id;
		this.$http.get("/mz/v4/api/film/"+id,{
			params:{
				__t:new Date().getTime()
			}
		}).then((res)=>{
			this.movie = res.data.data.film
			this.$root.bus.$emit("moviename",this.movie.name);
		})
	}

}

</script>
<style>
	img{
		max-width: 100%;
	}
</style>