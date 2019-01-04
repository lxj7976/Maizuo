<template>
	<div>
		<ul>
			<li v-for="item in nowplaying">
         <router-link :to="'/detail/'+item.id">
				<img :src="item.cover.origin" />
         </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
   import {mapState,mapActions,mapMutations} from 'vuex';
   export default {
   	  created(){
            this.resetList();
   	  		this.getList({type:"now-playing",count:5});
   	  },
   	  computed:{
   	  	  ...mapState({
   	  	  	"nowplaying":(state)=>state.movielist["now-playing"]
   	  	  })
   	  },
   	  methods:{
   	  	  ...mapActions(["getList"]),
           ...mapMutations(["resetList"])
   	  }
   }

</script>