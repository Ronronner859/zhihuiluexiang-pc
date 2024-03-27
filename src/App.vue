<template>
  <div>
    <HeaderIndex/>
     <router-view/>
     <!-- 在home和search下显示的 登录或者注册时隐藏的 -->
    <!-- <FooterIndex v-show="$route.path=='/home'||$route.path=='/search'"/> -->
    <FooterIndex v-show="$route.meta.show"></FooterIndex>
  </div>
</template>

<script>
// 引入
import  HeaderIndex from './components/Header/HeaderIndex.vue'
import FooterIndex from './components/Footer/FooterIndex.vue'
export default {
  name: '',
  components:{
    HeaderIndex,
    FooterIndex
  },
  mounted() {
    //TODO: 优化
    this.$store.dispatch('categoryList')
  },
}
</script>

<style>

</style>
