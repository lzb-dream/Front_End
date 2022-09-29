<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhaocaimao"></use>
      </svg>
      <span>每日推荐</span>
    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tvset"></use>
      </svg>
      <span>私人FM</span>
    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>

    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangdianxiaoshoupaihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped lang="less" >
  .iconList {
    width: 100%;
    height: 2rem;
    //margin-top: 0.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconItem {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 100%;
        height: 50%;
      }
    }
  }
</style>