<template>
  <img :src="$store.state.songsList.bottomComponentData.songsListData[$store.state.songsList.bottomComponentData.index].songImg" alt="">
    13245
  <div class="bottom">底部</div>

</template>

<script setup>

</script>

<style scoped lang="less">
  img {
    position: fixed;
    width: 100%;
    height: 99%;
    filter: blur(33px);
  }
  .bottom {
    position: fixed;
    top: 100%;
    transform: translate(0,-100%);
  }
</style>