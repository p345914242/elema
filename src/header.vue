<template>
	
		<div id="header">
  <div class="map">@大连<span>26度，晴</span></div>
    <input type="text" placeholder="搜索商家，商品">
    <div class="fenlei">a a a a a a a</div>

    
  </div>
	
	
</template>

<script>

</script>

<style lang="scss">

#header{
	box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding:20px;
  background: #0085ff;
  color: white;
      .map{
        width: 100%;
        height:24px;
        font-size: 24px;
        line-height: 24px;
          span{
            float: right;
          }
      }
      input{
        width:100%;
        height:30px;
        border-radius: 30px;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
      }

}

</style>