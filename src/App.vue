<template>
  <router-view/>
  <BottomComponent/>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: black;
}
</style>

<script setup>
import BottomComponent from '@/components/BottomComponent'
</script>
<!--inco通用css代码-->
<!--<style type="text/css">-->
<!--    .icon {-->
<!--       width: 1em; height: 1em;-->
<!--       vertical-align: -0.15em;-->
<!--       fill: currentColor;-->
<!--       overflow: hidden;-->
<!--    }-->
<!--</style>-->