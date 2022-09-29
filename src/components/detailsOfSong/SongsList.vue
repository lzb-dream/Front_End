<template>
  <div class="Box">
    <div class="songListTop">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-playCircle"></use>
        </svg>
        <span class="left-text">播放全部<span class="left-number">(共{{content}}首)</span></span>
      </div>

      <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)" class="topRight">
        <span class="buttonText">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiahao"></use>
          </svg>
          <span>收藏({{collectionNumber}})</span>
        </span>
      </van-button>
    </div>
    <ul>
      <li v-for="(i,index) in data.songsListData" :key="i" @click="playSong(index)">
        <div class="li-item">
          <span>{{index+1}}</span>
          <div class="li-item-div">
            <span>{{i.songName}}</span>
            <span class="makeName">{{i.makeName}}</span>
          </div>
        </div>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-caidan"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
  .Box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    height: 325px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 15px;
    .songListTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .topRight {
        width: 110px;
        height: 38px;
        color: white;
        padding: 0;
        .buttonText {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
      .topLeft {
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left-text {
          font-size: large;
          font-weight: bold;
          .left-number {
            font-size: xx-small;
            font-weight: normal;
            color: #4d4c4c;
          }
        }
      }
    }
    ul {
      height: 340px;
      display: inline-block;
      overflow-y: scroll;
      fill: #7e7c7c;
      margin-bottom: 5px;
      li {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        .li-item {
          width: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        .li-item-div {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .makeName {
            font-size: xx-small;
            color: #7e7c7c;
          }
        }
      }
      }

    }
  }
</style>

<script setup>
import {defineProps, watch, ref, onBeforeMount, reactive, onMounted} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
let props = defineProps(['collectionNumber'])
let collectionNumber = ref()
watch(()=>props.collectionNumber,(n)=>{
  collectionNumber.value = n.collectionNumber
})
let content = ref(null)
var myUseStore = useStore()
let myUseToute = useRoute()
let id = myUseToute.query.id
myUseStore.commit('songsList/getId',id)
const data = reactive({songsListData:[]})

onBeforeMount(()=>{
    if (sessionStorage[id]){
      myUseStore.commit('songsList/changeSongsListData',{value:JSON.parse(sessionStorage[id]),data:data})
    }else {
      myUseStore.dispatch('songsList/getSongsListData',data)
    }
})
onMounted(()=>{

})
// 响应式的
// let a = myUseStore.state.songsList.bottomComponentData
function playSong(index) {
  //记住辨别用户点击的哪一部歌单和歌单里面的哪一首歌曲
  myUseStore.commit('songsList/deepCapyBottomComponentData',index)
  //监听点击的那首歌曲然后利用监听器播放
  myUseStore.commit('songsList/changeWatchData')

}
watch(()=>data.songsListData,()=>{
    //一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调
    //仅当 data.songsListData 被替换时触发
    content.value = data.songsListData.length
})
// watchEffect(()=>{
//   console.log('我是watchEffect',data.songsListData)
// })
</script>

