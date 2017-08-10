<template>
<div id="like">
	<section class="one">
		
		
		<div class="bg"></div>

		<div class="font">
			<nav>
				<i class="return" @click="holleclick"><</i>
			</nav>
			<div class="top">
				<div class="top_img">
                <img v-bind:src="image_path | imgpathcovert">
					
				</div>
				<div class="top_text">
					<h3 class="ell">{{name}}</h3>
					<p class="ell">
						<span>蜂鸟派送</span>／31分钟送达／配送费¥5
					</p>
					<p class="ell">公告：{{promotion_info}}</p>
				</div>
				<p class="youhui">
					<i class="youhui_text">减</i>
					<span>新用户有巨额优惠！</span>
				</p>
			</div>
		</div>
	</section>

	<section class="two">
	<div>
		
		<div class="header">
			<ul>
				<router-link tag="li" to="/like/food" activeClass="active"><em>商品</em></router-link>
				<router-link tag="li" to="/like/good/good" activeClass="active">评价</router-link>
			</ul>
		</div>

		<router-view></router-view>

		</div>
	</section>
</div>	
</template>

<script>
import router from "../router";
import Vue from "vue";
	export default{
		data(){
			return{
				name:[],
				promotion_info:[],
				image_path:[],

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
		
		methods:{
			holleclick(){
				router.push('/home');
			},

		},
		mounted(){

        console.log(this.$route.params.like)
		axios.get(`/shopping/restaurant/${this.$route.params.like}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=38.913689&longitude=121.614761`).then(res=>{
			console.log(res.data);
			console.log(res.data.image_path);
			this.name = res.data.name;
			this.promotion_info = res.data.promotion_info;
			this.image_path = res.data.image_path
		});

	  },
	}
</script>



<style scoped lang="scss">
#like{
	width:100%;
	
	position:fixed;

	.one{
		display:flex;
		top: 0;
		height: 7.6rem;
    	position: relative;
    	.bg{
    		width: 100%;
    		height: 100%;
    		position: absolute;
    		background: #bbacb9;
    		filter: blur(0.08rem);
    		z-index: 1;
    	}
    	.font{
    		width: 100%;
    		height: 100%;
    		position: absolute;
    		
    		box-sizing: border-box;
    		z-index: 2;
    		nav{
    			position: relative;  				
    				.return{
    					font-style: normal;
    					color: #fff;
    					font-size: 23px;
    					padding-left: .6rem;
    				}
    			}
    	.top{
    		padding-left: .6rem;	
    		.top_img img{
    				width: 3.7rem;
    				height: 3.8rem;
    				border-radius: .4rem;
    				float: left;
    		}
    		.top_text{
    			margin-left: 4.3rem;
    			color: #fff;
    			.ell{
    				overflow: hidden;
    				white-space: nowrap;
    				text-overflow: ellipsis;
    			}
    			h3{
    				font-size: 18px;
    			}
    			p{
    				font-size: 14px;
    			}
    		}
    		.youhui{
    			    font-size: 12px;
    				color: #fff;
    				line-height: 30px;
    			.youhui_text{
	    				display: inline-block;
					    width: 15px;
					    height: 15px;
					    background: #f07373;
					    line-height: 15px;
					    text-align: center;
					    vertical-align: middle;
					    font-style: normal;
					    font-size: 10px;
					    margin-right: .1rem;
    				}	
    			}
    		}
    	}
	}
	.header{
		height: 2.2rem;
	 	background: #fff;
		ul{display:flex;
			
			li{
				flex:1;
				list-style: none;
				height: 2.2rem;
				line-height: 2.2rem;
				text-align: center;				
				em{
					color: #3190e8;
					border-bottom: .05rem solid #3190e8;
					padding: .1rem .05rem;
					font-style: normal;
				}
			}

		}
	}
}	

</style>