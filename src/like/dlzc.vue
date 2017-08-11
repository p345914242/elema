<template>	
	<div id="up">
		<div class="head">
			<div class="top">
				<img src="../assets/img/img.png" alt="">				
			</div>
			<div class="bom">
				<div class="left">
					<p @click="dxclick" activeClass="active">短信登录</p>
				</div>
				<div class="right">
					<p @click="mimaclick" activeClass="active">密码登录</p>
				</div>			
			</div>
		</div> 
		<router-view></router-view>
	</div>
</template>

<script>
import router from "../router";
import Vue from "vue";
export default{
	methods:{
		dxclick(){
			router.push('dx');
		},
		mimaclick(){
			router.push('mima');
		}
	}
}
</script>

<style scoped lang="scss">
$ui-width: 750px;
  @function px2rem($px) {
      @return $px/$ui-width*15rem;
}

#up{
	padding-top: 30px;
	height: auto;
	.head{
		margin: 0 auto;
		display: flex;
		width: 300px;
		text-align: center;
		flex-direction: column;
		.top{
			display: inline-block;
			text-align: center;
			box-sizing: inherit;
			margin-bottom: 40px;
			img{
				width: 140px;
				height: 60px;
			}
		}
		.bom{
			width: 100%;
			display: flex;
			.left{
				display:inline-block;
				width: 50%;
				text-align: center;
				p{
					display: inline-block;
					font-size: 14px;
					padding-bottom: 4px;
					.active{
						color: #2395ff;
						border-bottom: 2px solid #2395ff;

					}
				}
			}
			.right{
				display: inline-block;
				width: 50%;
				text-align:center;
				p{
					display: inline-block;
					font-size: 14px;
					padding-bottom: 4px;
					.active{
						color: #2395ff;
						border-bottom: 2px solid #2395ff;

					}
				}
			}
		}
	}
}
</style>