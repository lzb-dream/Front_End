import { createStore } from 'vuex'
import {songsList} from './SongList'
import test from './test'
export default createStore({
  state:{
    content:1,
    a:'1234'
  },
  //getters相对于计算属性
  getters: {

  }
  ,
  //处理同步
  mutations: {

  }
  ,
  //处理异步请求
  actions: {

  }
  ,
  //modules里面的getters就会合并在总getters里面
  //而state会以模块键值的方式存在state里面
  modules: {
    songsList,
    test
  }
})
// import {reactive} from "vue";
//
// const createStore = reactive({
//     data:{username:'刘强东',statu:true},
//     changeUserName:function (value) {
//         console.log(this)
//         if (this.data.statu){
//             this.data.username = value
//             this.data.statu = false
//         } else {
//             this.data.username = '刘强东'
//             this.data.statu = true
//         }
//         console.log(this.data.username)
//     }
// })


