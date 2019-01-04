
Vue.directive("gotop",(el,binding)=>{
    el.onclick=function(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }
})


import Vue from 'vue';

Vue.directive("scroll",(el,binding)=>{  //binding 是只读的  bind update 都能执行这个回调函数
	var dis=el.getAttribute("dis");
	window.addEventListener("scroll",()=>{
		var st = document.body.scrollTop || document.documentElement.scrollTop;
		if(st>400){
			binding.value.flag=true      //bingding.value 传过来的obj
		}
		else{
			binding.value.flag=false;
		}
	})
})

Vue.directive('gotop',(el,binding)=>{
		el.onclick=function(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop=0;
		}
})