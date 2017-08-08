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
			<swipe-item class="slide2">
				<ul>
					<li v-for="(data,index) in hou" :key="data.id" @click="listclick(data.id)">
						<img v-bind:src="data.image_hash | imgpathcovert" :key="data.id">
					  	<p>{{data.name}}</p>
					</li>
				</ul>
			</swipe-item>
		</swipe>
		<div id="list">
			<h3>推荐商家</h3>
			<ul v-infinite-scroll="loadMore" 
				infinite-scroll-disabled="loading"
				infinite-scroll-distance="10">

				<li v-for="(data,index) in list" :key="data.id" @click="handleclick(data.id)">
					<img v-bind:src="data.image_path | imgpathcovert" :key="data.id">
					<span class="name">{{data.name}}</span>
					<div>
						评分<span class="rating">{{data.rating}}</span>
						月售<span>{{data.distance}}</span>
					</div>
					<div class="price">
						<span>¥{{data.piecewise_agent_fee.rules[0].price}}起送/{{data.piecewise_agent_fee.description}}</span>
						<span class="distance">{{data.distance}}m/
						<span class="lead_time">{{data.order_lead_time}}分钟</span></span>
					</div>
				</li>					  
			</ul>
			<p>{{msg}}</p>	
		</div>
		<div id="footer">
			<ul>
			<router-link to="/home" tag="li" activeClass="active">
			<i class="iconfont icon-eliaomo"></i><p>外卖</p></router-link>
            <router-link to="/faxian" tag="li" activeClass="active">
            <i class="iconfont icon-faxian"></i><p>发现</p></router-link>
            <router-link to="/dingdan" tag="li" activeClass="active">
            <i class="iconfont icon-dingdan"></i><p>订单</p></router-link>
            <router-link to="/wode" tag="li" activeClass="active">
            <i class="iconfont icon-wode"></i><p>我的</p></router-link>
			</ul>
		</div>
	</div>	
</template>

<script>
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import router from "../router";
require('vue-swipe/dist/vue-swipe.css');
require('../assets/font_hh4yenufrlpojemi/iconfont.css')
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
$ui-width: 750px;
	@function px2rem($px) {
	    @return $px/$ui-width*7.5rem;
}
#home{
	.my-swipe {
		height: px2rem(1000px);
		color: #fff;
		list-style: none;
		text-align: center;

		li{
			width:25%;
			height:px2rem(320px);
			float: left;
			margin-top:px2rem(60px);
			font-size:px2rem(20px);
			img{
				width:px2rem(200px);
				height:px2rem(200px);
			}
		}
	}

	.slide1{
		color:#000;
	}

	.slide2{
		color:#000;
	}
	#list{
		padding-top:px2rem(60px);
		background-color:#eee;
		h3{
			background-color:#fff;
			height:px2rem(200px);
			line-height:px2rem(200px);
			width:100%;
			font-size:px2rem(80px);
			text-indent:px2rem(80px);
		}
		li{
			
			height:px2rem(500px);
			background-color:#fff;
			padding:px2rem(80px) px2rem(60px);
			border-bottom:1px solid #eee;
			img{
				float:left;
				padding-right:px2rem(40px);
				width:px2rem(350px);
				height:px2rem(350px);
			}
			.name{
				width:px2rem(100px);
				font-size:px2rem(80px);
				font-weight:700;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
			}
			div{
				font-size:px2rem(30px);
				span{
					font-size:px2rem(30px);
					font-weight:400;
				}
				.rating{
					color:red;
				}
			}
			.price{
				width:100%;
				border-bottom:1px solid #ccc;

				.distance{
					float:right;

					.lead_time{
						color:blue;
					}
				}
			}
			
		}
	}
	#footer{
		ul{
			width:100%;
			height:px2rem(300px);
			background-color:#fff;
			border-top:px2rem(4px) solid #eee;
			display: flex;
			position: fixed;
			bottom: 0px;
			li{
				flex:1;
				padding-top:px2rem(25px);
				text-align: center;
				z-index: 100;
				p{
					font-size:px2rem(50px);
				}
			}
		}
	}
}
</style>