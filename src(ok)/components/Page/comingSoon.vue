<template>
	<div>
		<ul>
			<li v-for="item in comingsoon">
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
           this.resetList();//page 变为1
   	  		this.getList({type:"coming-soon",count:5})
   	  },
   	  computed:{
   	  	  ...mapState({
   	  	  	"comingsoon":(state)=>state.movielist["coming-soon"]
   	  	  })
   	  },
   	  methods:{
   	  	  ...mapActions(["getList"]),
           ...mapMutations(["resetList"])
   	  }
   }

</script>