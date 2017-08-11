import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./like/home.vue";
import list from "./like/list.vue";
import like from "./like/like.vue";
import faxian from "./like/faxian.vue";
import dingdan from "./like/dingdan.vue";
import wode from "./like/wode.vue";

import dlzc from "./like/dlzc.vue";

import food from "./like/food.vue";
import good from "./like/good.vue";
import jifen from "./like/jifen.vue";
import youhui from "./like/youhui.vue";
import dx from "./like/dx.vue";
import mima from "./like/mima.vue";




Vue.use(VueRouter);



const routes =[
{path: '/', redirect: '/home'},
{path:'/home',component:Home},
{path:"/list/:list", name:"list",component:list},
{path:'/faxian',component:faxian},
{path:'/dingdan',component:dingdan},
{path:'/jifen',component:jifen},
{path:'/youhui',component:youhui},
{path:'/wode',component:wode},
{path:'/dlzc/:dlzc', name:'dlzc',component:dlzc,
  children:[

    {
      path:'dx',
      component:dx      
    },
    {
      path:'mima',
      component:mima
    },
          {

        path:"/dlzc/:dlzc",
        redirect:"/dlzc/:dlzc/dx"
      }

  ]
},
{path:'/food',component:food},
{path:'/good',component:good},
{path:"/like/:like", name:"like",component:like,
	children:[


  		{
  			path:"food",
  			component:food
  		},
      {
        path:"good",
        component:good
      },
  		{

  			path:"/like/:like",
  			redirect:"/like/:like/food"
  		}
  	]},
  ]



const router = new VueRouter({
	mode:'hash',
	routes
})

export default router;