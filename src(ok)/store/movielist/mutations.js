export default {
	getList(state,p){
		state[p.type]=p.list
	},
	getMoreList(state,p){
		console.log(p);
		state.list=state.list.concat(p.list);
	},
	resetList(state){
		state.list=[];
		state.page =1;
	    state.loading=false,  //true 表示正在发请求， false 表示可以发请求了
	    state.hasMore=true   //true,还有数据，false 没有更多数据了
	},
	changeLoading(state,flag){  //改变loading
		state.loading=flag;
	},
	changeHasMorePage(state,flag){
		state.hasMore = flag;   //更改hasMore的值，如图为false,就没有新数据了
		state.page += state.hasMore?1:0;  //如果还有数据，页数加一
	}
}