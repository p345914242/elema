import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./like/home.vue";
import list from "./like/list.vue";
import like from "./like/like.vue";
import faxian from "./like/faxian.vue";
import dingdan from "./like/dingdan.vue";
import wode from "./like/wode.vue";
<<<<<<< HEAD
import dlzc from "./like/dlzc.vue";
=======
import food from "./like/food.vue";
import good from "./like/good.vue";
>>>>>>> 52492b014a2c910281e00f10c5ceb0789ce4df0c



Vue.use(VueRouter);



const routes =[
{path: '/', redirect: '/home'},
{path:'/home',component:Home},
{path:"/list/:list", name:"list",component:list},
{path:'/faxian',component:faxian},
{path:'/dingdan',component:dingdan},
{path:'/wode',component:wode},
<<<<<<< HEAD
{path:'/dlzc',component:dlzc},
{path:"/like/:like", name:"like",component:like}
=======
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
  	]
},
>>>>>>> 52492b014a2c910281e00f10c5ceb0789ce4df0c
]



const router = new VueRouter({
	mode:'hash',
	routes
})

export default router;