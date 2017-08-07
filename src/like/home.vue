<template>

	

	<div id="home">
			<swipe class="my-swipe">
			  <swipe-item class="slide1">	  
				  <ul>
					  <li v-for="(data,index) in qian" :key="data.id" @click="listclick(data.id)">
					  <img v-bind:src="data.image_hash | imgpathcovert" :key="data.id">
					  	<p>{{data.name}}</p>
					  </li>
				  </ul>	
			  </swipe-item>
			  <swipe-item class="slide2"><ul>
					  <li v-for="(data,index) in hou" :key="data.id">
					  <img v-bind:src="data.image_hash | imgpathcovert" :key="data.id">
					  	<p>{{data.name}}</p>
					  </li>
				  </ul>
			  </swipe-item>
			</swipe>


					<div id="list">
					
					      <ul v-infinite-scroll="loadMore"
				  infinite-scroll-disabled="loading"
				  infinite-scroll-distance="10">
								  <li v-for="(data,index) in list" :key="data.id" @click="handleclick(data.id)">
								  
								  	<p>{{data.name}}</p>
								  	<img v-bind:src="data.image_path | imgpathcovert" :key="data.id">
								  </li>
								  
						  </ul>
						  <p >{{msg}}</p>	
					</div>



		<div id="footer">
		<ul>
			
			<router-link to="/home" tag="li" activeClass="active">外卖</router-link>
            <router-link to="/faxian" tag="li" activeClass="active">发现</router-link>
            <router-link to="/dingdan" tag="li" activeClass="active">订单</router-link>
            <router-link to="/wode" tag="li" activeClass="active">我的</router-link>
		</ul>
			
		</div>
   
	</div>	


</template>

<script>
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import router from "../router";
require('vue-swipe/dist/vue-swipe.css');
import {Swipe, SwipeItem} from 'vue-swipe';
import Vue from "vue"
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
import { Indicator } from 'mint-ui';

	export default{
		data(){
			return{
				qian:[],
				hou:[],
				img:[],
				image:[],
				list:[],
				loading:false,
				offset:0,
				msg:"loading..."



			}
		
		
	},
	filters:{
	  		

	  		imgpathcovert(value){
	  			if(value.length == 36){
	  			return"http://fuss10.elemecdn.com/" + value.slice(0,1) + "/" + value.slice(1,3) + "/" + value.slice(3)+".jpeg";
	  		}
	  			else{
	  			return"http://fuss10.elemecdn.com/" + value.slice(0,1) + "/" + value.slice(1,3) + "/" + value.slice(3)+".png";
	  		}
	  			
	  		}
	  	},
	  	
	  	


	
	mounted(){
		
		axios.get("/shopping/v2/entries?latitude=38.88831359999999&longitude=121.5330421&templates[]=main_template").then(res=>{
			console.log(res.data);
			this.qian = res.data[0].entries.slice(0,8);
			this.hou = res.data[0].entries.slice(8);
			this.img = this.qian[0].image_hash
			this.image = "http://fuss10.elemecdn.com/" + this.img.slice(0,1) + "/" + this.img.slice(1,3) + "/" + this.img.slice(3)+".jpeg";
			});

		Indicator.open('加载中...');
		axios.get(`/shopping/restaurants?latitude=38.8884016&longitude=121.5330541&offset=${this.offset}&limit=20&extras[]=activities&terminal=h5`).then(res=>{
			console.log(res.data);
			this.list = res.data;
			Indicator.close();
			
			

		})
	  },
	  methods:{
	  	selected(){

	  	},

	  	listclick(id){
	  		
	  		router.push({name:"list",params:{list:id}})
	  	},
	  	handleclick(id){
	  		
	  		router.push({name:"like",params:{like:id}})
	  	},
	  	loadMore(){
	  		this.offset = this.offset + 20;
	  		
	  		

	  		
	  		axios.get(`/shopping/restaurants?latitude=38.8884016&longitude=121.5330541&offset=${this.offset}&limit=20&extras[]=activities&terminal=h5`).then(res=>{
		
			this.list = [...this.list,...res.data];
		})
	  	 }
	  	}



	}

	

</script>

<style scoped lang="scss">

		#home{
			
			.my-swipe {
			  height: 200px;
			  color: #fff;
			  list-style: none;
			  text-align: center;
			  li{
				width:25%;
				height:100px;
				float: left;
				img{
					width:30px;
					height:30px;
				}
			}
			}

			.slide1 {
			  background-color: #0089dc;
			  color: #fff;
			}

			.slide2 {
			  background-color: #ffd705;
			  color: #000;
			}

			.slide3 {
			  background-color: #ff2d4b;
			  color: #fff;
			}
			#list{
				li{
					width:100%;
					height:100px;
					img{
						width:40px;
						height:40px;
					}
				}
			}
			#footer{
				ul{
					width:100%;
					height:50px;
					display: flex;
					position: fixed;
					bottom: 0px;
					li{
						flex:1;
						text-align: center;
						line-height: 50px;
						z-index: 100;

					}
				}
			}

			
		}
</style>