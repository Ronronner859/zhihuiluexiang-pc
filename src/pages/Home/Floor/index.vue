<template>
    <!--楼层-->
    <div class="floor">
        <div class="py-container">
            <div class="title clearfix">
                <h3 class="fl">{{ list.name }}</h3>
                <div class="fr">
                    <ul class="nav-tabs clearfix">
                        <li class="active" v-for="(item, index) in list.navList" :key="index">
                            <a href="#tab1" data-toggle="tab">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane">
                    <div class="floor-1">
                        <div class="blockgary">
                            <ul class="jd-list">
                                <li v-for="(keyword, index) in list.keywords" :key="index">
                                    {{ keyword }}
                                </li>
                            </ul>
                            <img :src="list.bigImg" />
                        </div>
                        <div class="floorBanner">   
                            <!-- 放轮播图的地方 -->
                            <!-- 父子关系 -->
                            <Carousel :list="list.carouselList"></Carousel>
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img :src="list.recommendList[0]" />
                            </div>
                            <div class="floor-conver-pit">
                                <img :src="list.recommendList[1]" />
                            </div>
                        </div>
                        <div class="split center">
                            <img src="./images/floor-1-4.png" />
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img src="./images/floor-1-5.png" />
                            </div>
                            <div class="floor-conver-pit">
                                <img src="./images/floor-1-6.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    // 父传子
    props: ['list'],
    mounted() {
        // 因为请求是从父组件发过来的 不是其本身调用的 所有当结构已经有了的情况下执行mounted
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
    },
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

<style lang="less" scoped>
.floor {
    margin-top: 15px;

    .py-container {
        width: 1200px;
        margin: 0 auto;

        .title {
            .fl {
                float: left;
                color: #c81623;
                font-size: 20px;
                line-height: 30px;
                margin: 9px 0;
                font-weight: 700;
            }

            .fr {
                float: right;

                .nav-tabs {
                    margin: 10px 0 0;
                    display: inline-block;

                    li {
                        float: left;
                        line-height: 18px;

                        a {
                            padding-top: 1px;
                            font-weight: 400;
                            background-color: #fff;

                            &::after {
                                content: '|';
                                padding: 0 10px;
                            }
                        }

                        &:nth-child(7) {
                            a {
                                &::after {
                                    content: '';
                                }
                            }
                        }

                        &.active {
                            a {
                                color: #e1251b;
                            }
                        }
                    }
                }
            }
        }

        .tab-content {
            border-top: 2px solid #c81623;
            border-bottom: 1px solid #e4e4e4;

            .tab-pane {
                .floor-1 {
                    height: 360px;
                    display: flex;

                    .blockgary {
                        width: 210px;
                        height: 100%;
                        background: #f7f7f7;

                        .jd-list {
                            padding: 15px 0;
                            overflow: hidden;

                            li {
                                list-style-type: none;
                                float: left;
                                width: 40%;
                                margin: 0 10px;
                                border-bottom: 1px solid #e4e4e4;
                                text-align: center;
                                line-height: 26px;
                            }
                        }

                        img {
                            width: 100%;
                        }
                    }

                    .floorBanner {
                        width: 330px;
                        height: 100%;
                    }

                    .split {
                        width: 220px;
                        height: 100%;
                        position: relative;

                        .floor-x-line {
                            position: absolute;
                            background: #e4e4e4;
                            width: 220px;
                            height: 1px;
                            top: 180px;
                        }

                        .floor-conver-pit {
                            width: 100%;
                            height: 50%;

                            img {
                                width: 100%;
                                height: 100%;
                                transition: all 400ms;

                                &:hover {
                                    opacity: 0.8;
                                }
                            }
                        }
                    }

                    .center {
                        border: 1px solid #e4e4e4;
                    }
                }
            }
        }
    }
}
</style>
