export default {
	inc(state,id){
		state.list.forEach((item)=>{
			if(item.id===id){
				item.count++;
			}
		})
	},
	dec(state,id){
		state.list.forEach((item)=>{
			if(item.id===id){
				if(item.count>1){
					item.count--;
				}
				
			}
		})
	},
	addProduct(state,p){
		state.list.push({id:++state.count,name:p.name,price:p.price,count:1})
	}
}