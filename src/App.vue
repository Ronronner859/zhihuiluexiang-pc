<template>
  <div id="app">
    <HeaderIndex></HeaderIndex>
    <FooterIndex/>
  </div>
</template>

<script>
// 引入
import  HeaderIndex from './components/Header/HeaderIndex.vue'
import FooterIndex from './components/Footer/FooterIndex.vue'
export default {
  name: 'App',
  components:{
    HeaderIndex,
    FooterIndex
  } 
}
</script>

<style>

</style>
