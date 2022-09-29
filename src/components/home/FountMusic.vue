<template>
  <div class="TopFound">
    <span class="TopText">发现好歌单</span>
    <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)" class="TopButton">
      <span class="buttonText">查看更多</span>
    </van-button>
  </div>

  <van-swipe :loop="false" :width="150" class="fountSwipe" :show-indicators=false >
    <van-swipe-item class="fountSwipeItem" v-for="i in state.fountMusicList" :key="i">
      <router-link :to="{name:'detailsOfSong',query:i}">
        <img :src="i.photo" alt="无" >
        <div class="amountOfPlay">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
          {{i.amountOfPlay}}
        </div>
        <span class="musicTitle">{{i.title}}</span>
      </router-link>
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
import {getFountMusicData} from '@/request/api/home'
import {onMounted,reactive} from "vue";
// import {useRouter} from "vue-router";
// const myUseRouter = useRouter()
// const { proxy } = getCurrentInstance();
const state = reactive({
  fountMusicList:[],
  clickData:{}
})
onMounted( async ()=>{
  let fountMusicData = await getFountMusicData()
  state.fountMusicList = fountMusicData.data
})
// function spend(e) {
//   console.log(e)
//   let songData = JSON.parse(e.path[1].dataset.item)
//   console.log(songData)
//   // myUseRouter.push({name:'detailsOfSong'})
//
// }
</script>

<style scoped lang="less">
.TopFound {
  margin-bottom: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  .TopText {
    font-size: large;
    font-weight: bold;
  }
  .TopButton {
    height: 0.6rem;
    .buttonText {
      font-size: small;
    }
  }
}

.fountSwipe {
    height: 4rem;
    .fountSwipeItem {
      height: 100%;
      position: relative;
      margin: 0.1rem;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 0.3rem;
      }
      .amountOfPlay {
        width: 100%;
        padding-right: 0.1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        left: 100%;
        top: 10%;
        color: white;
        z-index: 1;
        transform: translate(-100%,0);
        font-size: small;
        .icon {
          height: 0.4rem;
          width: 0.4rem;
        }
      }
    }
  }




  //button {
  //  height: 0.5rem;
  //  padding-right: 10px;
  //  padding-left: 10px;
  //  border-radius: 50px;
  //  font-size: small;
  //  font-weight: 300;
  //  border-width: thin;
  //}

</style>