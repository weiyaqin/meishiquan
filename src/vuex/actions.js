import Vue from 'vue'
const add = function({commit,state}){
  // commit('add',1)
  Vue.Tool.ajax({
          url: 'api.Demo.tests',
          data: {name: 'zhangsan'},
          success(data, res){
            commit('add',8888)
          },
          error(res){
            console.log(res)
          }
        })
}

const heid = function({commit,state}){
  commit('heid',1)
}

export{
  add,
  heid
}