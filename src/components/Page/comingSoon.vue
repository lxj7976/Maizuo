<template>
	<div class="imgbox">
		<ul>
			<li v-for="(item,index) in comingsoon" :key="index">
				<router-link :to="'/detail/'+item.id">
					<img :src="item.cover.origin" />
				</router-link>
				<p>
                    <span>{{item.name}}</span><i>{{item.grade}}</i>
                </p>
			</li>
		</ul>
	</div>
</template>

<script>
   import {mapState,mapActions} from 'vuex';

   export default {
   	  created(){
   	  		this.getList({type:"coming-soon",count:5})
   	  },
   	  computed:{
   	  	  ...mapState({
   	  	  	"comingsoon":(state)=>state.movielist["coming-soon"]
   	  	  })
   	  },
   	  methods:{
   	  	  ...mapActions(["getList"])
   	  }
   }

</script>
<style lang="scss" scoped>
$sc:25;
.imgbox{

    ul{
        margin-top: 18px;
        margin-bottom: 10px;
        li{
            margin: 0 17px 17px 17px;
            background-color: #f9f9f9;
            -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
            -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
            box-shadow: 0.5px 0.5px 1px #a8a8a8;
            cursor: pointer;     
            p{
    
                    padding-right: 0;
                    padding-left: 28px;
                    box-sizing: border-box;
                span{
					line-height: 35px;
                    font-size: 12px;
    				text-align: center;
                }   
                i{
                    color: #f78360;
                    text-align: center;
                    margin-right: 15px;
                    font-size: 18px;
					float:right;
                }
            }
                     
        }
    }
    
}
</style>
