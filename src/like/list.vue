<template>

	
<div id="list">
	<div class="headdd">
		<span class="ba" @click="backclick()">《</span>
		<span class="title">美食</span>
	</div>
	<ul>
		<li v-for="(data,index) in resdata" :key="data.id" @click="infoclick(data.id)">
			<img v-bind:src="data.image_path | imgpathcovert" :key="data.id">
			<span class="l_name">{{data.name}}</span>
			<div>
				评分<span class="l_rating">{{data.rating}}</span>
				月售<span>{{data.distance}}</span>
			</div>
			<div class="l_price">
				<span>¥{{data.piecewise_agent_fee.rules[0].price}}起送/{{data.piecewise_agent_fee.description}}</span>
				<span class="l_distance">{{data.distance}}m/
					<span class="l_lead_time">{{data.order_lead_time}}分钟</span>
				</span>
			</div>
		</li>
	</ul>
</div>

</template>

<script>
import router from "../router";
import Vue from "vue"
export default{
	data(){
		return{
			resdata:[],
			img:[],
			image:[],
			offset:0,
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
		axios.get(`/shopping/restaurants?latitude=38.97109&longitude=121.52793&keyword=&offset=${this.offset}&limit=20&extras[]=activities&restaurant_category_ids[]=209&restaurant_category_ids[]=211&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=218&restaurant_category_ids[]=219&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=263&restaurant_category_ids[]=264&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269`).then(res=>{
			headers: {'Access-Control-Allow-Origin'};
			console.log(res.data);
			this.image = "http://fuss10.elemecdn.com/" + this.img.slice(0,1) + "/" + this.img.slice(1,3) + "/" + this.img.slice(3)+".jpeg";
			this.resdata = res.data;
		})
	},
	methods:{
		backclick(){
			router.push('/home');
		},
		infoclick(id){
			router.push({name:"like",params:{like:id}});
		}
	}
}

</script>

<style scoped lang="scss">
$ui-width: 750px;
	@function px2rem($px) {
	    @return $px/$ui-width*7.5rem;
}
#list{
	.headdd{
		height:px2rem(200px);
		background:skyblue;
		color:white;
		font-size:px2rem(100px);
		line-height: px2rem(200px);
		text-align: center;
		.ba{
			float: left;
		}
		.title{
			font-weight: 700;
		}
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
			.l_name{
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
				.l_rating{
					color:red;
				}
			}
			.l_price{
				width:100%;
				border-bottom:1px solid #ccc;

				.l_distance{
					float:right;

					.l_lead_time{
						color:blue;
					}
				}
			}
			
		}
}
</style>