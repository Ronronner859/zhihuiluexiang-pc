<template>
  <div>
    <!-- 三级全局组件 ：全局组件不需要引入和注册-->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- 数据值父组件给的   -->
    <Floor v-for="floor in floorsList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
  name: '',
  data() {
    return {
      
    }
  },
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFlooerList')
  },
  computed: {
    ...mapState({
      floorsList:state=>state.home.floorsList
    })
  },
}
</script>

<style>

</style>