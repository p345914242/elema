<template>

<div id="all" >	
	<div id="head">
		<hi></hi>
		<h1 class="find">发现</h1>
	</div>
		<div class="entry">
			<a class="box1">
				<img class="im1" src="../assets/img/3.png"/>
				<p class="title">积分商城</p>
				<p class="tips">0元好物在这里!</p>
			</a>
			<a class="box2">
				<img class="im2" src="../assets/img/4.png"/>
				<p class="title">美味爆料</p>
				<p class="tips">无啤酒不夏天</p>
			</a>
			<a class="box3">
				<img class="im3" src="../assets/img/5.png"/>
				<p class="title">推荐有奖</p>
				<p class="tips">5元现金拿不停</p>
			</a>
			<a class="box4">
				<img class="im4" src="../assets/img/6.png"/>
				<p class="title">有红包快抢</p>
				<p class="tips">礼包福利领不停</p>
			</a>
		</div>
		<div class="meddle">
			<img class="im5" src="../assets/img/7.png"/>
		</div>
		<div class="time">
			<h3 class="up">-限时好礼-</h3>
			<p class="down" >小积分换豪礼</p>
		</div>
		<div class="foot">
			<a class="one">
				<img  class="o" src="../assets/img/8.png"/>
				<div class="one_1">
					<p class="p1">iPhone 7 32G</p>
					<span class="s1">499积分</span>
					<span class="s2">¥4499</span>

					<span class="s3">抽奖活动</span>
				</div>
			</a>
			

			<a class="two">
				<img  class="o" src="../assets/img/9.png"/>
				<div class="one_1">
					<p class="p1">7元饿了么红包</p>
					<span class="s1">3500积分</span>
					<span class="s2">¥7</span>

					<span class="s4">0元兑换</span>

				</div>
			</a>
			
			<a class="three">
				<img  class="o" src="../assets/img/10.png"/>
				<div class="one_1">
					<p class="p1">转出你的PS4</p>
					<span class="s1">399积分</span>

					<span class="s5">0元抽奖</span>
				</div>
			</a>
		</div>
		
		<a  class="zui" href="#">
		<p class="more">查看更多></p>
		</a>
		
</div>


</template>
<script>
 import Vue from "vue"
import head from "./head.vue";
 Vue.component("hi",head);
export default{
}
// 	data(){
// 		return{
// 			qian:[],
// 		}
// 	},
	

// 	filters:{
	  		

// 	  		imgpathcovert(value){
// 	  			if(value.length == 36){
// 	  			return"http://fuss10.elemecdn.com/" + value.slice(0,1) + "/" + value.slice(1,3) + "/" + value.slice(3)+".jpeg";
// 	  		}
// 	  			else{
// 	  			return"http://fuss10.elemecdn.com/" + value.slice(0,1) + "/" + value.slice(1,3) + "/" + value.slice(3)+".png";
// 	  		}
	  			
// 	  		}
// 	  	},
// 	mounted(){
// 		 this.$store.dispatch("UPDATE_NAME","发现");
// 		axios.get("/shopping/v2/entries?latitude=38.88831359999999&longitude=121.5330421&templates[]=main_template").then(res=>{
// 			console.log(res.data);
            
// 			this.qian = res.data[0].entries.slice(0,8);
			
// 			this.hou = res.data[0].entries.slice(8);
// 			this.img = this.qian[0].image_hash
// 			this.image = "http://fuss10.elemecdn.com/" + this.img.slice(0,1) + "/" + this.img.slice(1,3) + "/" + this.img.slice(3)+".jpeg";
// 			});
// 	}
// }

</script>

<style scoped lang="scss">
	#all{
	 #head{
	 	width:375px;
	 	height:43.98px;
		position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 8844;
	    .find{
			position: absolute;
		    top: 0;
		    left: 50%;
		    height: 1.173333rem;
		    max-width: 50%;
		    white-space: nowrap;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    font-weight: 700;
		    font-size: 1em;
		    line-height: 1.173333rem;
		    transform: translateX(-50%);
	    }
	 }
	 .entry{
	 	width:100%;
	 	height:174px;
	 	margin-top: 44px;

	 	
	 	.box1,.box2,.box3,.box4{
	 		width:49%;
	 		height:86.5px;
	 		display:inline-block;
	 		border-bottom:1px solid #f2f2f2;
	 		border-right:1px solid #f2f2f2;
	 		.im1,.im2,.im3,.im4{
	 			// display:inline-block;
	 			width:45px;
	 			height:45px;
	 			margin-top: 20px;
	 			margin-left:120px;

	 		}
	 		
	 		.title{
				line-height: 1.2;
			    font-size: 18px;
			    margin-bottom: .16rem;
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    color: rgb(255, 151, 0);
			    margin-top: -45px;
			    margin-left:15px;

	 		}
	 		.tips{
				line-height: 1.2;
			    font-size: .32rem;
			    color: #999;
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    margin-top: 5px;
			    margin-left:15px;	
	 		}

	 	}
	 	.box2{
		 		float:right;
		 		border-right:0;
		 		width:50%;
		 		
		 		.title{
		 			color: rgb(245, 120, 93);
		 		}
	 		}
	 	.box3{
	 		border-bottom:0;
	 		.title{
	 			color:rgb(27, 169, 225);
	 		}
	 	}
	 	.box4{
	 		border-bottom:0;
	 		border-right:0;
	 		width:50%;
	 		float:right;
 		.title{
 			color:rgb(162, 207, 38);
 		}
	 	}
	 }
	 .meddle{
		 	.im5{
			 	width:100%;
			 	height:97.5px;
			}
	 }
	 .time{
	 		margin-top: 10px;
			padding-top: .52rem;
		    text-align: center;
		   
		    font-weight: 700;
		    color: #333;
	 	.down{
			font-size: .293333rem;
		    color: #999;
		    text-align: center;
		    padding-bottom: .213333rem;
			
	 	}
	 }
	 .foot{
	 	
	 	width:100%;
	 	height:192px;
	 	margin-top: 10px;
	 	.one,.two,.three{
	 		position:relative;
	 		width:32%;
	 		height:164.98px;
	 		display:inline-block;
	 	}
	 	.o{
			width: 111px;
		    height: 110px;
		    margin-bottom: .253333rem
	 	}
	 	.one_1{
	 		margin-left:10px;
	 		.p1{
	 			font-size:13px;
	 			color:#5c5c5c;
	 		}
	 		.s1{
			font-size: .346667rem;
		    line-height: .48rem;
		    color: #ff5339
	 		}
	 		.s2{
				font-size: .293333rem;
			    color: #aaa;
			    max-width: 1.066667rem;
			    display: inline-block;
			    vertical-align: middle;
			    text-decoration: line-through;
	 		}
	 	}
	 	.s3 ,.s4,.s5{
			position: absolute;
		    top: 0;
		    left: 0;
		    font-size: .293333rem;
		    color: #fff;
		    background: #413d3c;
		    padding: .066667rem;
		    margin-left:10px;
	 	}
	 }
	 .zui{
	 	text-decoration:none;
	 	.more{
		font-size: .8rem;
	    color: #999;
	    text-align: center;
	   margin-top: -20px;
	 }
	}
}
</style>