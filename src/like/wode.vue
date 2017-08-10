<template>
<div>
	<div id="box">
		<div class="top">
			<div class="cl" @click="holleclick"><</div>
			<h1>我的</h1>
		</div>

		<div class="min">
				<span class="left"></span>
					<router-link to="/dlzc" tag="a" activeClass="active">
					<div class="cen">
						<p class="dz">登录/注册</p>
						<p class="bom">
							<span class="le"></span>
							<span class="ri">登录后享受更多特权</span>
						</p>
					</div>
					<span class="right">></span>
				</router-link>
		</div>
	</div>
 	<div id="it">
		<div class="l">
			<span></span>
			<p>优惠</p>
		</div>
		<div class="r">
			<span></span>
			<p>积分</p>
		</div>
	</div>
	<div id="wje">
		<div class="w">
			<div class="up">
				<div class="ft"></div>
				<div class="gh">
					<p @click="ddclick">我的订单<span>></span></p>
					
				</div>
			</div>
			<div class="center">
				<div class="ft"></div>
				<div class="gh">
					<p>积分商城<span>></span></p>
					
				</div>				
			</div>
			<div class="bm">
				<div class="ft"></div>
				<div class="gh">
					<p>饿了么会员卡<span>></span></p>
					
				</div>				
			</div>
		</div>
	</div>
	<div id="fx">

			<div class="one">
				<div class="ft"></div>
				<div class="gh">
					<p>服务中心<span>></span></p>
					
				</div>				
			</div>
			<div class="two">
				<div class="ft"></div>
				<div class="gh">
					<p>下载饿了么APP<span>></span></p>
					
				</div>				
			</div>


	</div>	
</div>
</template>

<script>
import router from "../router";
import Vue from "vue";
export default{

		methods:{
			holleclick(){
				router.push('home');
			},
			
			ddclick(){
				router.push('dingdan');
			}
	
		}
	}

</script>

<style scoped lang="scss">
$ui-width: 750px;
  @function px2rem($px) {
      @return $px/$ui-width*15rem;
}
	a{
		text-decoration: none;
		color: #fff;
	}
	#box{
		background: #00a8ff;
		.top{
			height: px2rem(100px);
			padding: px2rem(20px);
			line-height: px2rem(100px);
			.cl{
				display: inline-block;
				font-size: px2rem(55px);
				color: #fff;
			}
			h1{
				display: inline-block;
				font-size: px2rem(55px);
				color: #fff;
				margin-left: px2rem(480px);
			}
		}
		.min{
			width: 100%;
			overflow: hidden;
			height: px2rem(250px);
			padding-top: px2rem(50px);
			.left{
				float: left;
				display: block;
				width: px2rem(150px);
				height: px2rem(150px);
				border-radius: 100%;
				background: #000;
				margin-left: px2rem(60px);
			}
			.cen{
				margin-left: px2rem(40px);
				float: left;
				.dz{
					font-size: px2rem(60px);
					color: #fff;
				}
				.bom{
					color: #fff;
					.le{
						float: left;
						display: inline-block;
						width: px2rem(40px);
						height: px2rem(60px);
						background: #fff;
						margin-right: px2rem(30px);
					}
					.ri{
						font-size: px2rem(30px);
					}
				}
			}
			.right{
				float: right;
				color: #fff;
				margin-right: px2rem(60px);
				margin-top: px2rem(40px);
			}
		}
	}
	#it{
		display:flex;
		height: px2rem(270px);
		width: 100%;
		background: #fff;
		border-bottom: px2rem(2px) solid #efefef;
		border-top: px2rem(8px) solid #efefef;
		overflow: hidden;
		.l{
			width: 50%;
			height: 100%;
			text-align: center;
			border-right: px2rem(4px) solid #efefef;
			padding-top: px2rem(70px);
			span{
				width: px2rem(120px);
				height: px2rem(120px);
				background: #000;
				display: inline-block;
				border-radius: 100%;
			}
			p{
				font-size: px2rem(30px);
			}
		}
		.r{
			width: 50%;
			height: 100%;
			text-align: center;
			padding-top: px2rem(70px);
			span{
				width: px2rem(120px);
				height: px2rem(120px);
				background: #000;
				display: inline-block;
				border-radius: 100%;
			}
			p{
				font-size: px2rem(30px);
			}
		}
	}
	#wje{
		width: 100%;
		height: px2rem(500px);
		background: #f5f5f5;
		overflow:hidden;
		border-top: px2rem(2px) solid #efefef;
		border-bottom: px2rem(2px) solid #efefef;

		.w{
			margin-top: px2rem(20px);
			background: #fff;
			position: relative;
			.up{
				width: 100%;
				height: px2rem(160px);
				line-height: px2rem(160px);
				.ft{
					width: px2rem(40px);
					height: px2rem(40px);
					background: #000;
					float: left;
					margin-left: px2rem(40px);
					margin-top: px2rem(55px);
				}
				.gh{
					width: 100%;
					position: absolute;
					top: 0;
					right: 0;
					float:left;
					border-bottom: px2rem(2px) solid #f5f5f5;
					p{
						margin-left: px2rem(100px);
						height: px2rem(159px);
						border-bottom: px2rem(2px) solid #efefef;
						span{
							float:right;
							margin-right: px2rem(30px);

						}
					}
					
				}
			}
			.center{
				width: 100%;
				height: px2rem(160px);
				line-height: px2rem(160px);
				.ft{
					width: px2rem(40px);
					height: px2rem(40px);
					background: #000;
					float: left;
					margin-left: px2rem(40px);
					margin-top: px2rem(55px);
				}
				.gh{
					width: 100%;
					position: absolute;
					top: px2rem(160px);
					right: 0;
					float:left;
					border-bottom: px2rem(2px) solid #f5f5f5;
					p{
						margin-left: px2rem(100px);
						height: px2rem(159px);
						border-bottom: px2rem(2px) solid #efefef;
						span{
							float:right;
							margin-right: px2rem(30px);

						}
					}
					
				}
			}
			.bm{
				width: 100%;
				height: px2rem(160px);
				line-height: px2rem(160px);
				.ft{
					width: px2rem(40px);
					height: px2rem(40px);
					background: #000;
					float: left;
					margin-left: px2rem(40px);
					margin-top: px2rem(55px);
				}
				.gh{
					width: 100%;
					position: absolute;
					top: px2rem(320px);
					right: 0;
					float:left;
					border-bottom: px2rem(2px) solid #f5f5f5;
					p{
						margin-left: px2rem(100px);
						height: px2rem(159px);
						span{
							float:right;
							margin-right: px2rem(30px);

						}
					}
					
				}
			}
		}
	}
	#fx{
		width: 100%;
		height: px2rem(830px);		
		padding-top:px2rem(20px);
		background: #f5f5f5;
		position: relative;
		.one{
			width: 100%;
			height: px2rem(160px);
			line-height: px2rem(160px);
			background: #fff;
		.ft{
			width: px2rem(40px);
			height: px2rem(40px);
			background: #000;
			float: left;
			margin-left: px2rem(40px);
			margin-top: px2rem(55px);
		}
		.gh{
			width: 100%;
			position: absolute;

			right: 0;
			float:left;
			border-bottom: px2rem(2px) solid #f5f5f5;
			p{
				margin-left: px2rem(100px);
				height: px2rem(159px);
				span{
					float:right;
					margin-right: px2rem(30px);

				}
			}
			
		}
	}
		.two{
			width: 100%;
			height: px2rem(160px);
			line-height: px2rem(160px);
			background: #fff;
		.ft{
			width: px2rem(40px);
			height: px2rem(40px);
			background: #000;
			float: left;
			margin-left: px2rem(40px);
			margin-top: px2rem(55px);
		}
		.gh{
			width: 100%;
			position: absolute;
			top: px2rem(180px);
			right: 0;
			float:left;
			border-bottom: px2rem(2px) solid #f5f5f5;
			p{
				margin-left: px2rem(100px);
				height: px2rem(159px);
				span{
					float:right;
					margin-right: px2rem(30px);

				}
			}
			
		}
	}
	}
</style>