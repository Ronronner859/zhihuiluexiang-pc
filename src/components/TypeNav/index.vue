<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveshow"  @mouseenter="entershow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过度动画 -->
        <transition name="sort">
        <div class="sort" v-show="show">
          <div
            class="all-sort-list2"
            @click="goSearch"
          >
            <div
              v-for="(item_1,index) in categoryList"
              :key="item_1.categoryId"
              class="item"
              :class="{cur:currentIndex==index}"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="item_1.categoryName"
                  :data-category1Id="item_1.categoryId"
                >{{item_1.categoryName}}</a>
                <!-- <router-link to="/search">{{item_1.categoryName}}</router-link> -->
              </h3>
              <!--                  二三级分类 js完成-->
              <div
                :style="{display:currentIndex==index?'block':'none'}"
                class="item-list clearfix"
              >
                <div
                  v-for="(item_2,index) in item_1.categoryChild"
                  :key="item_2.categoryId"
                  class="subitem"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="item_2.categoryName"
                        :data-category2Id="item_2.categoryId"
                      >{{item_2.categoryName}}</a>
                      <!-- <router-link to="/search">{{item_2.categoryName}}</router-link> -->
                    </dt>
                    <dd>
                      <em
                        v-for="(item_3,index) in item_2.categoryChild"
                        :key="item_3.categoryId"
                      >
                        <a
                          :data-categoryName="item_3.categoryName"
                          :data-category3Id="item_3.categoryId"
                        >{{item_2.categoryName}}</a>
                        <!-- <router-link to="/search">{{item_3.categoryName}}</router-link> -->
                      </em>
                    </dd>
                  </dl> 
                </div>
              </div>
            </div>
          </div>
        </div>
        </transition>
      </div>
      
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">智慧乐坊超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// loadsh函数 按需加载
import _ from 'lodash';

export default {
    name:'TypeNav',
    data(){
      return{
        currentIndex:-1,
        show:true
      }
    },
    // 组件挂载完毕 发送请求获取数据
    mounted() {
        // 通知vuex发送请求 获取数据 存储在仓库中
        
        if(this.$route.path != '/home'){
          this.show  = false
        }
    },
     computed: {
        // 右侧需要的是一个函数 当使用这个计算属性的时候 ，右侧的函数会立即执行
        // 注入一个参数state 即为大仓库中的数据
        ...mapState({
            categoryList:state => state.home.categoryList
        }),
 
    },
      methods:{
        // changeIndex(index){
        //   this.currentIndex = index
        //     console.log(index)
        //
        // },
        changeIndex:_.throttle(function(index){
          this.currentIndex = index
          console.log(index)
        },50),
        goSearch(event){
          // 编程式导航+事件委派  点击的一定是a? 路由参数是需要传递的
          // 如何确定一点事a标签 怎么区分一级二级三级的标题
          // 通过dataset获取自定义属性 
          // this.$router.push('/search') 
          let emment = event.target
          console.log(emment.dataset);
          let {categoryname,category1id,category2id,category3id} = emment.dataset
          if(categoryname){
            // 整理路由跳转的参数
            let location = {name:'search'}
            let query = {categotyName:categoryname}
            if(category1id){
              query.category1Id = category1id
            }else if(category2id){  
              query.category2Id = category2id
            }else{
              query.category3Id = category3id
            }   
            location.query = query
          this.$router.push(location)
          }
        },
        entershow(){
          if(this.$route.path!='/home'){
            this.show = true
          }
        },
        leaveshow(){
          if(this.$route.path!= '/home'){
            this.changeIndex = -1
            this.show = false
          }
        }
      }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }
    
    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //&:hover {
          //    .item-list {
          //        display: block;
          //    }
          //
          //}
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    .sort-enter {
      height: 0px;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active {
      transition: all .5s linear;
    }
  }
}
</style>
