<template>
	<div>
		<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
			<li v-for="item in movielist.list">
				<img :src="item.poster.origin" />
            {{item.name}}
            <div v-if="type==='now-playing'">Yes</div>
            <h1 v-else>{{item.premiereAt|formateDate}}</h1>
			</li>
		</ul>
	</div>
</template>

<script>
   import {mapState,mapActions,mapMutations} from 'vuex';
   export default {
       data(){
         return {
           type:''
         }
       },
       computed:{
            ...mapState(["movielist","list"])
       },
   	 watch:{
          $route:{
             handler(n){
                  this.type=n.params.type;
                  this.resetList();
                  if(!this.type){
                     this.type='now-playing'
                  }
                  this.getList({type:this.type,page:'movielist',count:7});
             },
             immediate:true
          }
       },
       methods:{
          ...mapMutations(["resetList"]),
          ...mapActions(["getList"]),
          loadMore(){
             this.getList({type:this.type,page:'movielist',count:7});
          }
       }
   }

</script>