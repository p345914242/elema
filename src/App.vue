<template>
<div>

   <hello>
    
   </hello>

   <router-view></router-view> 
</div>

</template>

<script>
import Vue from"vue";
import header from "./header.vue";

Vue.component("hello",header);
 



export default {
  data(){
    return{
      
      
    }
  },

  methods:{
    
  },
  compoents:{
    "header":header, 
  }
}
</script>

<style lang="scss">
*{padding: 0; margin: 0;}
ul{list-style: none;}


</style>
