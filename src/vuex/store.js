import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

const state = { 
  count: 0,
  username: null
} 

const mutations = { 
  add(state,num){
    state.username=num
  },
  heid(state,num){
    if(state.count<=0){
      state.count = 0
    }else{
      state.count= state.count - num
    }
  }
} 

export default new Vuex.Store({ 
	state, 
	mutations,
	actions,
	getters
})