<template>
  	<div id="header">
    	<div class="map">
      		<i class="iconfont icon-suozaidi"></i>大连
      		<span>
        		<div>
          			<p>26°</p>
          			<p>晴</p>
        		</div>
        		<i class="iconfont icon-tianqi"></i>
      		</span>
      	</div>
    	<input type="text" placeholder="搜索商家，商品">
    	<ul>
    		<li v-for="(data,index) in list" :key="data.id" @click="handclick(data.id)">
    			{{data.word}}
    		</li>
    	</ul>
  	</div>
	
	
</template>

<script>
export default{
	data(){
		return{
			list:[],
			offset:0
		}
	},
	mounted(){
		axios.get("/shopping/v3/hot_search_words?latitude=38.8883437&longitude=121.5330936").then(res=>{
			console.log(res.data);
			this.list = res.data;
		})
	},
	motheds:{
		handclick(id){
			router.push({name:"search",params:{search:id}})
		}
	}
}
</script>

<style lang="scss">
$ui-width: 750px;
  @function px2rem($px) {
      @return $px/$ui-width*15rem;
}
*{
  padding:0;
  margin:0;
}
#header{
	box-sizing: border-box;
  width: 100%;
  height: px2rem(325px);
  padding:px2rem(26px) px2rem(36px);
  background: #0085ff;
  color: white;
      .map{
        width: 100%;
        height:px2rem(96px);
        font-size: px2rem(48px);
        line-height:px2rem(96px);
          span{
            float: right;
            height:px2rem(70px);
            font-size:px2rem(28px);
            div{
              float:left;
              p{
                weight:px2rem(72px);
                line-height: px2rem(45px);
                text-align:right;
              }
            }
            i{
              float:right;
              font-size:px2rem(70px);
            }
          }
      }
      input{
        width:100%;
        height:px2rem(90px);
        margin:px2rem(16px) 0;
        border:0;
        border-radius: px2rem(90px);
        font-size: px2rem(30px);
        line-height: px2rem(30px);
        text-align: center;
      }
      ul{
      	width:100%;
      	height:px2rem(60px);
      	overflow:hidden;
      	white-space: nowrap;
      	li{
      		float:left;
      		margin-right: px2rem(40px);
      		font-size: px2rem(28px);
      	}
      }

}

</style>