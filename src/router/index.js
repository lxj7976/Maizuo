import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Page/Home"
import Film from "@/components/Page/film"
import City from "@/components/Page/City"
import Shop from "@/components/Page/Shop"
import MovieList from "@/components/Page/MovieList"
import Detail from "@/components/Page/Detail"
import Cinema from '@/components/Page/Cinema'
import User from '@/components/page/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{name: 'home'}
      
    },
    {
    	path:"/home",
    	name:'home',
    	component:Home
    },
    {
    	path:"/film",
    	name:"film",
    	component:Film,
      redirect:{name:'movielist'},
      children:[
          {
             path:":type",
             name:'movielist',
             component:MovieList
          }
      ]
    },
    {
      path:"/detail/:id",
      component:Detail
    },
    {
      path:"/cinema",
      name:"cinema",
      component:Cinema
    },
    {
      path:"/shop",
      component:Shop
    },
    {
      path:"/city",
      name:'city',
      component:City
    },
    {
      path:"/user",
      name:"user",
      component:User
    }
  ]
})
