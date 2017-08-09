<template>
<div id="like">
	<section class="one">
		<div class="bg"></div>
		<div class="font">
			<div class="top">
				<div class="top_img">
					<img src="../assets/img/shop-logo.f6d85f8.png"/>
				</div>
				<div class="top_text">
					<h3 class="ell">麦当劳</h3>
					<p class="ell">
						<span>蜂鸟派送</span>／31分钟送达／配送费¥5
					</p>
					<p class="ell">公告：新店开张，优惠大酬宾！</p>
				</div>
				<p class="youhui">
					<i class="youhui_text">减</i>
					<span>新用户有巨额优惠！</span>
				</p>
			</div>
		</div>
	</section>

	
<div>

	
</div>

=======
	<section class="two">
		<div>
			<span class="show">商品</span>
		</div>
		<div>
			<span>评价</span>
		</div>
	</section>
</div>	
</template>

<script>

</script>

<style scoped lang="scss">
#like{
	width:100%;
	height:100%;
	.one{
		height: 6.6rem;
    	position: relative;
    	.bg{
    		width: 100%;
    		height: 100%;
    		position: absolute;
    		// background: url(../assets/img/shop-logo.f6d85f8.png) no-repeat center;
    		// background-size: cover;
    		background: #bbacb9;
    		filter: blur(0.08rem);
    		z-index: 1;
    	}
    	.font{
    		width: 100%;
    		height: 100%;
    		position: absolute;
    		padding: .6rem;
    		box-sizing: border-box;
    		z-index: 2;
    		.top_img img{
    				width: 3.7rem;
    				height: 3.8rem;
    				border-radius: .4rem;
    				float: left;
    		}
    		.top_text{
    			margin-left: 4rem;
    			color: #fff;
    			.ell{
    				overflow: hidden;
    				white-space: nowrap;
    				text-overflow: ellipsis;
    			}
    			h3{
    				font-size: 24px;
    			}
    			p{
    				font-size: 12px;
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
	.two{
		height: 2.2rem;
		background: #fff;
		div{
			width: 50%;
		    height: 2.2rem;
		    float: left;
		    text-align: center;
		    line-height: 2.2rem;
		    font-size: 16px;
		    background: #fff;
		    .show{
		    	color: #3190e8;
			    border-bottom: .05rem solid #3190e8;
			    padding: .1rem .05rem;
		    }
		}
	}
}	
</style>