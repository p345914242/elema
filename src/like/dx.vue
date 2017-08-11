<template>	
	<div>
		<div id="dx">
			<input id="usname" type="text" value="" placeholder="手机号"/><br/>
			<input id="psword" type="text" value="" placeholder="验证码"/><br/>
			<input type="button" value="登录" @click="valclick()"/>
		</div>
	</div>
</template>

<script>
import router from "../router";
import Vue from "vue";
export default{
	methods:{
		valclick(){
			console.log(document.getElementById("usname").value);
			console.log(document.getElementById("psword").value);
		}
	}
}
</script>

<style scoped lang="scss">
$ui-width: 750px;
  @function px2rem($px) {
      @return $px/$ui-width*15rem;
}
</style>