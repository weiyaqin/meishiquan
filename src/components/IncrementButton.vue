<template>
    <div>
        <button @click='add("zhangshan")'>Increment +1</button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {mapActions} from 'vuex'
  import tool from '../config-mock' 
  export default {
  	created(){
  	  console.log(mapActions)
  	},
  	methods:{
  	 //  ...mapActions([
  		// 'add'
  	 //  ])
      add(str){
        console.log(this.$stroe)
        this.$store.dispatch('add',str)
      }
  	}
  }
</script>
