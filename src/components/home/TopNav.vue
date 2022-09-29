<template>
  <div class="Top">
      <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
      </div>
      <div class="TopCenter">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
      </div>
      <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo1"></use>
          </svg>
      </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .Top {
    padding: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .TopCenter {
      width: 60%;
      display: flex;
      justify-content: space-between;
      .active {
        font-weight: bold;
      }
    }
  }
</style>