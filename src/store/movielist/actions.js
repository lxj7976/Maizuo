import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
	getList(context,obj){
        if(!context.state.hasMore){
          Toast({
                  message:"没有更多数据了",
                  position: 'bottom',
                  duration: 1500  // 显示时间是无限的
           });
          return;
        }
         var t= Toast({
                  iconClass:"fa fa-spinner fa-pulse",
                  position: 'middle',
                  duration: -1  // 显示时间是无限的
           });
         context.commit("changeLoading",true);  //把loading改为true,意思就是发请求过程不能再发请求了
        axios.get("/mz/v4/api/film/"+obj.type,{ 
        	params:{
        		__t:new Date().getTime(),
        		page:context.state.page,
        		count:obj.count
        	}
        }).then((res)=>{
                t.close(); //把toast框关闭
        	context.commit("getList",{type:obj.type,list:res.data.data.films});
        	if(obj.page==="movielist"){
        		console.log(res.data.data.films);
        		context.commit("getMoreList",{list:res.data.data.films});
            var current = res.data.data.page.current;
            var total  = res.data.data.page.total;
            context.commit("changeHasMorePage",current!==total)
            context.commit("changeLoading",false);
        	}
        })
	}
}