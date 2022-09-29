<template>
  <SongsIntroduce :songsTopData="state.songsTopData" :songsIntroduce="state.songsIntroduce"/>
  <SongsList :collectionNumber="state.songsIntroduce"/>
</template>

<script setup>
import SongsIntroduce from "@/components/detailsOfSong/SongsIntroduce";
import SongsList from "@/components/detailsOfSong/SongsList";
import {getSongsIntroduceData} from '@/request/api/detailsOfSong'
import {onMounted,reactive} from "vue";
import {useRoute} from "vue-router";
const state = reactive({
  songsTopData:{},
  songsIntroduce:{}
})
let myUseRoute = useRoute()
state.songsTopData = myUseRoute.query
onMounted(async () => {
  let id = state.songsTopData.id
  let result = await getSongsIntroduceData(id)
  state.songsIntroduce = result.data.songsIntroduce
})
</script>

<style scoped lang="less">

</style>