<template>	
<div id="good">
	<div class="left">
		<strong class="fen">4.5</strong>
		<div>综合评价</div>
		<p class="shang">高于周边商家43.9%</p>
	</div>
	<div class="right">
		<div class="one">
			<span class="first">服务态度</span>
			<span class="second">4.6</span>
		</div>
		<div class="two">
			<span class="first">菜品评价</span>
			<span class="second">4.4</span>
		</div>
		<div class="three">
			<span class="first">送达时间</span>
			<span class="second">30分钟</span>
		</div>
	</div>


<div class="pingjia">
	<ul>
		<li class="box1">全部(932)</li>
		<li class="box2">满意(898)</li>
		<li class="box3">不满意(34)</li>
		<li class="box4">有图(32)</li>
		<li class="box5">味道好(14)</li>
		<li class="box6">送货快(12)</li>
	</ul>
</div>
	<div id="all">
		<div class="all1">
			<span class="time">2017-08-07</span>
			<img class="im" src="../assets/img/2.png">
		</div>
		<div class="all2" >
			<h3 class="h">匿名评价</h3>
			<span class="h1">按时送达</span>
		</div>
		
	</div>

</div>


</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	#good{
		margin-top: 10px;
		border-top:1px solid #ccc;
		.left{
			width:160px;
			height:74px;
		    border-right: 1px solid #ddd;
		    text-align: center;
		    line-height: 1.5;
		    margin-left:-15px;
		    .fen{
		    	margin-top: 20px;
		    	font-size: 30px;
			    line-height: 1;
			    font-weight: 400;
			    color: #f60;
			    display: block;
		    }
		    .shang{
			  	font-size: .266667rem;
	    		color: #999;
		    }
		}
		.right{
			float:right;
		.one{	 
			margin-top:-77px;
			margin-right:90px;
			color:#6f6f6f;
			font-size:14px;
			.second{
				padding-left: 40px;
				color:#f60;
			}
		}
		.two{	 
			margin-top:10px;
			margin-right:90px;
			color:#6f6f6f;
			font-size:14px;
			.second{
				padding-left: 40px;
				color:#f60;
			}
		}
		.three{	 
			margin-top:10px;
			margin-right:90px;
			color:#6f6f6f;
			font-size:14px;
			.second{
				padding-left:20px;
				color:#c0c0c0;
				font-size:12px;
			}
		}
	}
	.pingjia{
		border-top:10px solid #eee;
		margin-top: 20px;
		.box1{
			color: #fff;
		    background-color: #3190e8;
		    display: inline-block;
		    padding: .2rem;
		    margin: 0.066667rem .133333rem;
		    border-radius: 0.133333rem;
		    margin-top: 10px;
		    margin-left:10px;
		}
		.box2{
			display: inline-block;
		    padding: .2rem;
		    margin: 0.066667rem .133333rem;
		    border-radius: 0.133333rem;
		    color: #6d7885;
		    background-color: #ebf5ff;
		}
		.box3{
			color: #aaa;
		    background-color: #f5f5f5;
		    display: inline-block;
		    padding: .2rem;
		    margin: 0.066667rem .133333rem;
		    border-radius: 0.133333rem;
		}
		.box4{
			display: inline-block;
		    padding: .2rem;
		    margin: 0.066667rem .133333rem;
		    border-radius: 0.133333rem;
		    color: #6d7885;
		    background-color: #ebf5ff;
		}
		.box5{
			display: inline-block;
		    padding: .2rem;
		    margin: 0.066667rem .133333rem;
		    border-radius: 0.133333rem;
		    color: #6d7885;
		    background-color: #ebf5ff;
		    margin-left:10px;
		    margin-top: 10px;
		}
		.box6{
			display: inline-block;
		    padding: .2rem;
		    margin: 0.066667rem .133333rem;
		    border-radius: 0.133333rem;
		    color: #6d7885;
		    background-color: #ebf5ff;
		}
	}
	#all{
		.all1{
			border-top:1px solid #eee;
			position:relative;
			margin-top: 10px;
			.time{
				position: absolute;
			    top: .133333rem;
			    right: 0;
			    font-size: .32rem;
			    color: #999;
			    margin-top: 20px;
			     margin-right: 20px;

			}
			.im{
				position: absolute;
			    top: 0;
			    left: 0;
			    width: 1.8rem;
			    height: 1.8rem;
			    border-radius: 50%;
			    margin-top: 20px;
			     margin-left: 20px;
			}
		}
		.all2{
			.h{
				font-size: .346667rem;
			    margin-top: 20px;
			    margin-bottom: .133333rem;
			    color: #666;
			    margin-left: 70px;
			}
			.h1{
				font-size: .333333rem;
			    color: #999;
			    vertical-align: middle;
			    margin-left: 120px;
			}
		}
	}
	}
	



</style>