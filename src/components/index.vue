<template>
  <div>
    111
    <Display></Display>
    <IncrementButton></IncrementButton>
    <heid></heid>
  </div>
</template>

<script>
// import show from 
import Display from './Display'
import IncrementButton from './IncrementButton'
import heid from './heid'
import store from '../vuex/store'

export default {
  name: 'stroe',
  components: {
    Display,
    IncrementButton,
    heid
  },
  store,
  created (){
    // store.commit('add',1)
    // store.commit('updata','hello')
    // console.log(store.state.count)
  }
}
</script>

