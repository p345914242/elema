import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./like/home.vue";
import list from "./like/list.vue";
import like from "./like/like.vue";
import faxian from "./like/faxian.vue";
import dingdan from "./like/dingdan.vue";
import wode from "./like/wode.vue";
import food from "./like/food.vue";



Vue.use(VueRouter);



const routes =[
{path: '/', redirect: '/home'},
{path:'/home',component:Home},
{path:"/list/:list", name:"list",component:list},
{path:'/faxian',component:faxian},
{path:'/dingdan',component:dingdan},
{path:'/wode',component:wode},
{path:'/food',component:food},
{path:"/like/:like", name:"like",component:like,
children:[

  		{
  			path:"food",
  			component:food
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