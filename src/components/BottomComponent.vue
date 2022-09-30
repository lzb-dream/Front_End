<template>
  <div class="bottom">
    <div class="bottom-left" @click="showPopup">
      <img v-if="bottomComponentData.songsListData[bottomComponentData.index]" :src="bottomComponentData.songsListData[bottomComponentData.index].songImg" alt="">
      <img v-else src="https://tse2-mm.cn.bing.net/th/id/OIP-C.kOO64kf6YdDrVsP4BvFG3wHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
      <div class="left-item">
        <template v-if="bottomComponentData.songsListData[bottomComponentData.index]">
          <audio class="audio" :src="`https://music.163.com/song/media/outer/url?id=${bottomComponentData.songsListData[bottomComponentData.index].songId}.mp3`" ref="audio"></audio>
          <span>{{bottomComponentData.songsListData[bottomComponentData.index].songName}}</span>
          <span>{{bottomComponentData.songsListData[bottomComponentData.index].makeName}}</span>
        </template>
        <template v-else>
          <span>网易云</span>
          <span>听你想听</span>
        </template>
      </div>
		<div class="bottomClick">点击进入歌词</div>
    </div>

    <van-popup v-model:show="show" position="right" :style="{ height: '100%', width: '100%' }" closeable>
      <VanPopupOfContent/>
    </van-popup>
<!--       <van-cell @click="showPopup"/>-->
    <div class="bottom-right" ref="div" @click="pauseOrPlay">
<!--      {{bottomComponentData.songsListData[bottomComponentData.index].songId}}-->
<!--      {{$store.state.songsList.playState}}-->
      <svg class="icon iconClick" aria-hidden="true" v-if="$store.state.songsList.playState">
        <use xlink:href="#icon-playCircle"></use>
      </svg>
      <svg class="icon iconClick" aria-hidden="true" v-else >
        <use xlink:href="#icon-zanting"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-bofangliebiao"></use>
      </svg>
    </div>
  </div>
</template>
<style scoped lang="less">
.bottom {
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 0;
  height: 54.67px;
  border-top: 0.5px solid rgba(197, 197, 194, 0.98);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  .bottom-left {
    display: flex;
    align-items: center;
    width:75%;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
    .left-item {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-weight: bold;
      }
      span:last-child {
        display: inline-block;
        margin-top: 5px;
        font-size: xx-small;
        font-weight: 300;
        color: #7e7c7c;
      }
    }
	.bottomClick {
		margin-left: 40px;
		font-size: xx-small;
		font-weight: 300;
		color: #d7d7d7;
	}
  }
  .bottom-right {
    display: flex;
    align-items: center;
    .icon:nth-of-type(1) {
      margin-right: 10px;
    }
  }
  .van-overlay {
    background-color: red;
  }
}



</style>
<script setup>
import VanPopupOfContent from '@/components/theWidget/VanPopupOfContent'
import {useStore} from 'vuex'
import {onMounted, ref, watch,nextTick} from "vue";
const show = ref(false);

const showPopup = () => {
  show.value = true;
};

const myStore = useStore()
const bottomComponentData = myStore.state.songsList.bottomComponentData
myStore.commit('songsList/getSessionBottomComponentData')
//ref 可以在dom渲染之前获取dom元素
const audio = ref(null)
console.log(audio.value)
const div = ref(null)
function pauseOrPlay(e) {
  nextTick(()=>{
    // let songId =
    let targetClassName = e.target.classList.value==='icon iconClick'
    if (targetClassName){
	if (myStore.state.songsList.playState){
		audio.value.play()
	}else {
		audio.value.pause()
	}
    myStore.commit('songsList/changePlayState',!myStore.state.songsList.playState)
  }
  })
}
onMounted(()=>{
  watch(()=>myStore.state.songsList.watchData,()=>{
  // 当 paused 属性由 true 转换为 false 时触发 play 事件，事件触发原因一般为 play() 方法调用，或者 autoplay 标签设置。
  //  vue 是异步框架数据更新页面不会在第一时间更新所以用定时器延时解决
  //   setTimeout(()=>{
  //     console.log(n)
  //     console.log(audio.value)
  //     myStore.commit('songsList/changePlayState',false)
  //     audio.value.autoplay = true
  //   },200)
    nextTick(()=>{
      console.log(audio.value)
      myStore.commit('songsList/changePlayState',false)
      audio.value.autoplay = true
    })
  //   console.log(audio.value)
  //   myStore.commit('songsList/changePlayState',false)
  //   audio.value.autoplay = true

})
})
</script>

