import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./like/home.vue";
import list from "./like/list.vue";
import like from "./like/like.vue";



Vue.use(VueRouter);



const routes =[
{path:'/home',component:Home},
{path:'/list',component:list},
{path:'/like',component:like},
{path:"/like/:like", name:"like",component:like}
]


const router = new VueRouter({
	mode:'hash',
	routes
})

export default router;