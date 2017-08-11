<template>	
	<div>
		<input type="text" id="tel" placeholder="手机/邮箱/用户名"/><br/>
		<input type="text" id="pw" placeholder="密码"><br/>
		<input type="button" value="登录" @click="dl">
	</div>
</template>

<script>
import router from "../router";
import Vue from "vue";
export default{
	methods:{
		dl(){
			console.log(document.getElementById('tel').value);
			console.log(document.getElementById('pw').value);
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