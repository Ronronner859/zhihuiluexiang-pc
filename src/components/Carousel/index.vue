<template>
    <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in list" :key="item.id">
                <img :src="item.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'Carousel',
    // 将轮播图封装为一个全局组件
    // 父亲传过来的数据
    props: ['list'],
    watch: {
        list: {
            // 因为数据是父组件传过来的，父亲给的时候就是一个对象，里面是有数据的
            immediate: true,

            handler(newValue, oldValue) {
                this.$nextTick(() => {
                    var mySwiper = new Swiper(this.$refs.mySwiper, {
                        // direction: 'vertical', // 垂直切换选项
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        clickable: true,
                        // 如果需要滚动条
                        scrollbar: {
                            el: '.swiper-scrollbar',
                        },
                    });
                });
            },
        },
    },
};
</script>

<style></style>
