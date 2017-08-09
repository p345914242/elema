<template>

	
<div>
	              
	<hi></hi>
                  <ul>
					  <li v-for="(data,index) in qian" :key="data.id" @click="listclick(data.id)">
					  <img v-bind:src="data.image_hash | imgpathcovert" :key="data.id">
					  	<p>{{data.name}}</p>
					  </li>
				  </ul>	
	
</div>

</template>

<script>
import Vue from "vue"
import head from "./head.vue";
Vue.component("hi",head);
export default{
	data(){
		return{
			qian:[],
		}
	},
	

	filters:{
	  		

	  		imgpathcovert(value){
	  			if(value.length == 36){
	  			return"http://fuss10.elemecdn.com/" + value.slice(0,1) + "/" + value.slice(1,3) + "/" + value.slice(3)+".jpeg";
	  		}
	  			else{
	  			return"http://fuss10.elemecdn.com/" + value.slice(0,1) + "/" + value.slice(1,3) + "/" + value.slice(3)+".png";
	  		}
	  			
	  		}
	  	},
	mounted(){
		 this.$store.dispatch("UPDATE_NAME","发现");
		axios.get("/shopping/v2/entries?latitude=38.88831359999999&longitude=121.5330421&templates[]=main_template").then(res=>{
			console.log(res.data);
            
			this.qian = res.data[0].entries.slice(0,8);
			
			this.hou = res.data[0].entries.slice(8);
			this.img = this.qian[0].image_hash
			this.image = "http://fuss10.elemecdn.com/" + this.img.slice(0,1) + "/" + this.img.slice(1,3) + "/" + this.img.slice(3)+".jpeg";
			});
	}
}

</script>

<style scoped lang="scss">
		
</style>