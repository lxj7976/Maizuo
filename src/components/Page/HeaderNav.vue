<template>
    <div><MyHeader :toggle="toggle" />
    <MyNav :flag="flag" :toggle="toggle"  /></div>
</template>
<script>
import MyHeader from "./MyHeader";
import MyNav from "./Nav";
export default {
	data(){
		return {
			flag:false
		}
	},
	components:{
		MyHeader,MyNav
	},
	methods:{
		toggle(){
			this.flag=!this.flag;
		}
	}
}
</script>	

