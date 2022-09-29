
<template>
      <van-swipe class="my-swipe" :autoplay="3000" ><!-- 行内选中样式  indicator-color="red"-->
        <van-swipe-item v-for="image in state.imageData" :key="image">
          <img :src="image" alt="无">
        </van-swipe-item>
      </van-swipe>
</template>

<script setup>
import {getSwiperImage} from "@/request/api/home";
import {onMounted, reactive} from "vue";
//修改当前组件样式
// const themeVars = {
//     swipeIndicatorActiveBackgroundColor: 'yellow'
// }
const state = reactive({
  imageData:[]
})
onMounted(async ()=>{
  let result =  await getSwiperImage()
  state.imageData = result.data.data
})

</script>

<style scoped lang="less">
//轮播图选中样式
  .van-swipe__indicator--active {
      background-color: #42b983;
      opacity: .8;
  }
  .my-swipe .van-swipe-item {
    height: 3rem;
    padding: 0.1rem;
    img {
      height: 100%;
      width: 100%;
      border-radius: 0.1rem;
    }
  }

</style>