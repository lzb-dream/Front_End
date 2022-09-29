

//嵌套模块不能有createStore
//相同变量名互不影响因为在不同作用域
import {getSongsListData} from "@/request/api/detailsOfSong";

export const songsList = {
  //命名空间
  namespaced:true,
  state:{
    songsListData:[],
    bottomComponentData:{songsListId:'',songsListData:[],index:0},//深拷贝songsListData
    songsListId:'',
    playState:true,
    watchData:true,
  },
  getters: {
    //给bottomComponentData深拷贝一份用与底部播放防止点击其他歌单时数据更新
    //要写个点击事件来深拷贝

  },
  mutations:{
    changeWatchData(state){
      state.watchData=!state.watchData
    },
    changePlayState(state,value){
      state.playState = value
    },
    changeSongsListData(state,obj){
      state.songsListData = obj.value
      obj.data.songsListData= state.songsListData
    },
    getId(state,songsListId){
      state.songsListId = songsListId
    },
    deepCapyBottomComponentData(state,index){
      if (state.bottomComponentData.songsListId!==state.songsListId){
        //响应式不能给对象直接重新赋值，可以更新内部的属性值相当于const 个人感觉这就是vuex的响应式原理
        state.bottomComponentData.songsListData = JSON.parse(sessionStorage[state.songsListId])
        state.bottomComponentData.songsListId = state.songsListId
        state.bottomComponentData.index = index
      }else {
        state.bottomComponentData.index = index
      }
      sessionStorage.setItem('bottomComponentData', JSON.stringify({songsListId:state.bottomComponentData.songsListId,index:state.bottomComponentData.index}))
    },
    getSessionBottomComponentData(state){
      if (sessionStorage.getItem('bottomComponentData')) {
        state.bottomComponentData.songsListId = JSON.parse(sessionStorage.getItem('bottomComponentData')).songsListId
        state.bottomComponentData.songsListData = JSON.parse(sessionStorage[JSON.parse(sessionStorage.getItem('bottomComponentData')).songsListId])
        state.bottomComponentData.index = JSON.parse(sessionStorage.getItem('bottomComponentData')).index
      }
    }
  },
  actions: {
    async getSongsListData(context,songsListDataObj){
      let data = await getSongsListData(context.state.songsListId)
      console.log(data)
      data = data.data.songsListData
      context.commit('changeSongsListData',{value:data,data:songsListDataObj})
      sessionStorage[context.state.songsListId] = JSON.stringify(context.state.songsListData);
}
  }



}