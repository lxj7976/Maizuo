<template>
  <div v-scroll="obj"  dis="400">
      <ul class="letters">
			<li v-for="zm in letters" class="row" @click="go(zm)"><span>{{zm}}</span></li>
		
      </ul>
      <ul>
			<li v-for="(item,index) in cities">
					<h2 v-if="index===0 || index!==0 && item.zm!==cities[index-1].zm" :ref="item.zm">{{item.zm}}</h2>
					<span class="row slh" @click="writeCookie(item)">{{item.name}}</span>

			</li>

      </ul>
		<div class="top" v-show="obj.flag" v-gotop>回到顶部</div>
  </div>
</template>
<script>
export default {
	data(){
		return {
			cities:[],
			letters:[],
			obj:{
				flag:false
			}
		}
	},
	created(){
		this.getLetters();
		this.$http.get("/mz/v4/api/city",{params:{
			__t:new Date().getTime()
		}}).then((res)=>{
			this.cities = res.data.data.cities.sort((a,b)=>{
				// return a.pinyin.localeCompare(b.pinyin);
				return a.pinyin[0].charCodeAt()-b.pinyin[0].charCodeAt()
			}).map((item)=>({
				name:item.name,
				zm:item.pinyin[0],
				id:item.id
			}))
			
			
		})
	},
	methods:{
		getLetters(){
			for(var i=65;i<91;i++){
				if(String.fromCharCode(i)==="I" || String.fromCharCode(i)==="O" 
					|| String.fromCharCode(i)==="U" || String.fromCharCode(i)==="V")
				{
					continue;
				}
				this.letters.push(String.fromCharCode(i));
			}
			console.log(this.letters)
		},
		go(zm){
			document.documentElement.scrollTop = this.$refs[zm][0].offsetTop-50;
			document.body.scrollTop = this.$refs[zm][0].offsetTop-50;
		},
		writeCookie(item){
		    var d=new Date();
		    d.setDate(d.getDate()+7);
		    document.cookie="cityId="+item.id+";expires="+d+";path=/";
		    document.cookie="cityName="+encodeURI(item.name)+";expires="+d+";path=/";
		   this.$router.push({'name':'cinema'});
		    this.$root.bus.$emit("cityname",item.name)
		} 
	}
}
</script>

<style lang="scss">
   $sc:25;
	h2{
		background: #ccc;
		clear:both;
	}
	.row{
		width: 25%;
		float:left;
		font-size: 20px;
		display: inline-block;
	}
	.slh{
		text-overflow:ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.letters{
		display: block;
	}
	.top{
		position: fixed;
		bottom: 100/$sc+rem;
		right:100/$sc+rem;
	}
</style>