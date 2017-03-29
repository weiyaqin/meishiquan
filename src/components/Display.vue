<template>
    <div>
        <h4>Count is {{count}} {{id}}</h4>
        <h3>{{username}}</h3>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
      computed:{
      	...mapGetters([
          'count','id','username'
      	])
      }
    }
</script>
