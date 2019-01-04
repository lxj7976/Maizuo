export default {
	 money(state){
	 	var m=0;
	 	  state.list.forEach((item)=>{
              m+=item.price*item.count;
	 	  })
	 	  return m;
	 }
}