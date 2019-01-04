<template>
		<div>
			<ul>
				<li v-for="(item,key,index) in cinemaObj">
					<h2 @click="toggle(key)">{{key}}</h2>
					<ul v-show="item.flag">
						<li v-for="subItem in item">
								{{subItem.name}}
						</li>
					</ul>
				</li>
			</ul>

		</div>
		
</template>

<script>
export default {
	data(){
		return {
			cinemaObj:{}
		}
	},
	created(){
		this.$http.get("/mz/v4/api/cinema",{
			params:{
				__t:new Date().getTime()
			}
		}).then((res)=>{
		    var arr=[];
			res.data.data.cinemas.forEach((item)=>{
				if(!this.cinemaObj[item.district.name]){
					this.cinemaObj[item.district.name]=[];
					arr.push(item.district.name);
					this.cinemaObj[item.district.name].flag=false;
				}
				this.cinemaObj[item.district.name].push(item);

			})
			this.cinemaObj[arr[0]].flag=true;
				this.$forceUpdate();

		})
	},
	methods:{
		toggle(item){
			this.cinemaObj[item].flag=!this.cinemaObj[item].flag;
					this.$forceUpdate();
		}
	}
}

</script>