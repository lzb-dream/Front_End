<template>
  <img :src="$store.state.songsList.bottomComponentData.songsListData[$store.state.songsList.bottomComponentData.index].songImg" alt="">
    13245

<div class="bottom">
	<div class="xunhuan">
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-xunhuan"></use>
		</svg>
	</div>

	<svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-shangyishoushangyige"></use>
	</svg>
	
	<div @click="pauseOfplay" class="pauseOfplay">
		<svg class="icon" aria-hidden="true" v-if="$store.state.songsList.playState">
			<use xlink:href="#icon-bofang"></use>
		</svg>
		<svg class="icon" aria-hidden="true" v-else>
			<use xlink:href="#icon-zanting1"></use>
		</svg>
	</div>

	<svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-xiayigexiayishou"></use>
	</svg>
	<svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-gedan1"></use>
	</svg>
</div>
</template>

<script setup>
import { nextTick, onMounted, watch } from "vue";
import {useStore} from "vuex"
let myStore = useStore()
function pauseOfplay(){
	myStore.commit('changeWatchData')
}
onMounted(()=>{
	watch(()=>myStore.state.songsList.watchData,function(){
		nextTick(()=>{
			console.log('1')
		})
		
	})
})
</script>

<style scoped lang="less">
  img {
    position: fixed;
    width: 100%;
    height: 100%;
    filter: blur(33px);
  }
  .bottom {
	width: 100%;
	fill: aliceblue;
	.xunhuan {
		.icon {
			width: 0.4rem;
			height: 0.4rem;
		}
	}
	.pauseOfplay {
		.icon {
			width: 0.9rem;
			height: 0.9rem;
		}
	}
	position: fixed;
	bottom: 15px;
	display: flex;
	justify-content: space-around;
	align-items: center;
  }
</style>