<template>
<div id="food">
	<section class="three">
		<ul class="left">
			<li v-for="(data,index) in qian" :key="data.id">
			<a href="javascript:void(0)" @click="goAnchor('#anchor-'+index)">		  	
				{{data.name}}</a>
					</li>
		</ul>
		<ul class="right">
				<li v-for="(data,index) in qian" :key="data.id" :id="'anchor-'+index">
					<header>
						<strong>{{data.name}}</strong>
						<span>{{data.description}}</span>
					</header>
					<ul>
						<li class="con" v-for="(item,index) in data.foods" >
							<div class="l">
							<img v-bind:src="item.image_path | imgpathcovert">	
							</div>
							<div class="r">
						        <h4>{{item.name}}</h4>
								<p class="p1">{{item.description}}</p>
								<p class="p2">月售{{item.month_sales}}份，好评率{{item.satisfy_rate}}%</p>
								<div class="money">
									<span>￥{{item.specfoods[0].price}}</span>
									<div class="add">
										<span class="add_span">
											+
						  				</span>
									</div>
								</div>
							</div>
						 </li>
				    </ul>
				</li>
			</ul>
	</section>

	<section class="four">
		<div class="car_img">
			
		</div>
		<div class="car_text">
			<h4>￥0</h4>
			<p>配送费￥5</p>
		</div>
		<a href="javascript:;" class="buy">去结算</a>
	</section>


</div>
</template>

<script>
	export default{

		data(){
			return{
				qian:[],
				img:[],
                
				

			}
		},
		filters:{
	  		
	  		imgpathcovert(value){
	  			console.log(value);
	  			if(value===null){
	  				return null
	  			}else{
	  				return"http://fuss10.elemecdn.com/" + value.slice(0,1) + "/" + value.slice(1,3) + "/" + value.slice(3)+".jpeg";
	  			}
	  			
	  			
	  			
	  			
	  	}
	  			
	  		
	  	},


	  	methods: {
		    goAnchor(selector) {
		    	var a = document.querySelector(".right");
		        var anchor = this.$el.querySelector(selector);
		        a.scrollTop = anchor.offsetTop;
		       
		    }
		},
		mounted(){
			
		console.log(this.$route.params.like);
		axios.get(`/shopping/v2/menu?restaurant_id=${this.$route.params.like}`).then(res=>{
			console.log(res.data);
			this.qian = res.data;
            this.img = this.qian[0].image_hash
			
			});
		
		
	  },

		

	}
</script>

<style scoped lang="scss">
#food{
	width:100%;
	
	.three{
		    height: 509.5px;
		    padding-bottom: 1.2rem;
		    box-sizing: border-box;
		    position: relative;
		    .left{
		    	width: 4.5rem;
    			float: left;
    			background: #f4f4f4;
    			overflow-y: auto;
    			height: 100%;
    			li{
    				padding: 8px 5px;
				    font-size: 14px;
				    border-bottom: 1px solid #ccc;
				    position: relative;
				    text-align: center;
				    height: 28px;
				    line-height: 28px;
				    overflow: hidden;
				    a{
				    	color: black;
				    	text-decoration: none;
				    }
    			}
    			.open{
    					background: #fff;
    					border-top:1px solid #fcfcfc;
    					border-left:3px solid #3190e8;
    			}
		    }
		    .right{
		    	margin-left: 4.5rem;
    			background: #fff;
    			overflow-y:auto;
    			height: 100%; 
    			header{
    				    padding: .5rem;
					    box-sizing: border-box;
					    width: 100%;
					    background: #f1f1f1;
					    line-height: 1.5rem;
					    strong{
					    	font-size: 14px;
    						color: #666;
					    }
					    span{
					    	font-size: 10px;
    						color: #999;
					    }
    			}
    			.con{
    				background: #fff;
    				padding: .6rem;
    				border-bottom: 1px solid #f2f2f2;
    				.l{
    					width: 4.5rem;
					    height: 4.5rem;
					    float: left;
					    img{
					    	width:100%;
					    }
    				}
    				.r{
    					margin-left: 4.7rem;
    					h4{
    						font-size: 16px;
    					}
    					.p1{
    						font-size: 12px;
    						color: #999;
    					}
    					.p2{
    						font-size: 14px;
    						color: #666;
    					}
    					.money{
    						    margin-top: .2rem;
							    height: 20px;
							    line-height: 20px;
							    font-size: 14px;
							    span{
							    	font-size: 14px;
								    font-weight: bold;
								    color: #f60;
							    }
							    .add{
							    	float: right;
								    	.add_span{
								    	    	    background: #3190e8;
												    border-radius:50%;
												    color:#fff;
												    padding-right: 5px;
												    line-height: 20px;
												}
								    }
    					}
    				}
    			}
		    }
	}
	.four{
		    height: 45px;
		    width: 100%;
		    position: fixed;
		    left: 0;
		    bottom: 0;
		    background: #3d3d3f;
		    padding-left: 4px;
		    box-sizing: border-box;
		    z-index: 10;
		    .car_img{
		    	    background-color: #ff0;
		    	    width: 53px;
		    	    height: 53px;
		    	    border-radius:50%;
		    	    position: absolute;
				    left: 0.8rem;
				    top: -0.58rem;
		    }
		    .car_text{
		    	color: #fff;
		    	margin-left:80px;
		    	margin-top: 5px;		    	
		    	h4{
		    		font-size: 14px;
		    	}
		    	p{
		    		font-size: 10px;
		    	}
		    }
		    .buy{
		    	padding-left: 10px;
		    	padding-right: 10px;
			    height: 45px;
			    background: #535356;
			    position: absolute;
			    right: 0;
			    top: 0;
			    color: #fff;
			    font-weight: 600;
			    font-size: 16px;
			    line-height: 45px;
			    text-decoration: none;
		    }
	}
	
}
</style>