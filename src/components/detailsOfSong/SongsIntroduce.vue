<template>
  <div class="TopBox">
    <div class="Top">
      <div class="topItem">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-xitongfanhui"></use>
        </svg>
        <span class="topTitle">歌单</span>
      </div>
      <div class="topItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-caidan"></use>
        </svg>
      </div>
    </div>
    <img :src="props.songsTopData.photo" class="backGroundImage" alt="">

    <div class="center">
      <img :src="props.songsTopData.photo" alt="" class="left">
      <div class="right">
        <span class="title">{{props.songsTopData.title}}</span>
        <div class="nickname"><img :src="props.songsIntroduce.headPortrait" alt=""><span>{{props.songsIntroduce.nickname}}</span></div>
        <div class="introduce">{{props.songsIntroduce.introduce}}</div>
      </div>
    </div>

    <div class="last">
      <div class="last-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{props.songsIntroduce.commentsNumber}}</span>
      </div>
      <div class="last-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{props.songsIntroduce.shareNumber}}</span>
      </div>
      <div class="last-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="last-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps,onMounted,} from "vue";
let props = defineProps(['songsTopData','songsIntroduce'])
onMounted(()=>{
  introduce()
})
function introduce() {
  let introduceDiv = document.querySelector('.introduce')
  introduceDiv.addEventListener('touchstart',function () {
    this.style.display = 'block'
    this.style.backgroundColor = 'rgba(30,10,10,0.73)'
    this.addEventListener('touchend',function () {
      this.style.display = '-webkit-box'
      this.style.backgroundColor = ''
    })
  })
}
// //监听props传过来的值时要用函数返回值的方式写监听对象
// watch(()=>props.songsIntroduce,(n,o)=>{
//   console.log('n',n,'o',o)
// })
// //深度监听在页面渲染时执行一次
// watchEffect(()=>{
//   console.log(props.songsIntroduce)
// })
</script>

<style scoped lang="less">
.TopBox {
  fill: white;
  color: white;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 30px;
  .Top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topItem {
      width: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .topTitle {
        font-size: large;
      }
    }
  }

  .backGroundImage {
    width: 100%;
    height: 470px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    filter: blur(20px);
  }

  .center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    height: 133px;
    .left {
      width: 34%;
      border-radius: 10px;
    }
    .right {
      width: 56%;
      height: 100%;
      .title {
        font-size: large;
        display: inline-block;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .nickname {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
        img {
          border-radius: 50%;
          margin-right: 10px;
          width: 40px;
          height: 40px;
        }
      }
      .introduce {
        position: relative;
        border-radius: 5px;
        line-height: 15px;
        font-size: xx-small;
        overflow: hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        z-index: 1;
        //height: auto;
      }
    }
  }

  .last {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .last-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: -1;
      span {
        display: inline-block;
        margin-top: 5px;
      }
    }
  }
}


</style>