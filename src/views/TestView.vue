<template>
  <h1>test</h1>
  <h3>{{$store.state.test.a}}</h3>
  <h3>{{a.a}}</h3>
  <button @click="change">改变</button>
</template>

<script setup>
import {useStore} from 'vuex'
let myStore = useStore()
let a = myStore.state.test
function change() {
  myStore.commit('test/changeA','改变')
  console.log(myStore.state.test.a)
}
</script>

<style scoped>

</style>