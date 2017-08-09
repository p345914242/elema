<template>
  	
	<div id="head"><span></span>{{myappname}}</div>
	
</template>

<script>
export default{
	data(){
		return{
		
		}

	},
   computed:{
       myappname(){
         return this.$store.state.appname
       }       
  },
	mounted(){
		
     
		
	},
 

	motheds:{
		handclick(id){
			
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
#head{
	box-sizing: border-box;
  width: 100%;
  height: px2rem(50px);
  background: #0085ff;
  color: white;
      
}

</style>