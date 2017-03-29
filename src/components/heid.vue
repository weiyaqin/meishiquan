<template>
    <div>
        <button @click='heid'>Increment -1</button>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
  	created(){
  	  console.log(mapActions)
  	},
  	methods:{
  	  ...mapActions([
  		'heid'
  	  ])
  	}
  }
</script>
