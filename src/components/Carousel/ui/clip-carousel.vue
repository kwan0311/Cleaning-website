<style lang="less" scoped>
.clip-carousel {
    width: 100%;
    height: 100%;
    position: relative;
}

.carousel-item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-size: cover;
    background-position: center;

    .desc {
        width: 100%;
        padding: 40px 60px 40px 52px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        color: white;
        font-family: "TencentSans";
        background-image: linear-gradient(bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));

        h4 {
            font-size: 24px;
            font-weight: bold;
            margin: 0px 0px 8px;

            @media screen and (max-width: 992px) {
                font-size: 16px;
                margin: 0px 0px 24px;
            }
        }

        p {
            line-height: 29px;

            @media screen and (max-width: 992px) {
                font-size: 14px;
            }
        }

        .page-btn {
            position: absolute;
            top: 40px;
            right: 80px;
            display: flex;
            opacity: 0;
            transition: all 0.2s;

            i {
                display: block;
                width: 20px;
                height: 26px;
                background-size: 10px 16px;
                background-repeat: no-repeat;
                background-position: center;
                cursor: pointer;
            }

            .left-btn {
                background-image: url("https://www.tencent.com/img/index/sli-left-icon.png");
            }

            .right-btn {
                margin-left: 28px;
                background-image: url("https://www.tencent.com/img/index/sli-right-icon.png");
            }

            @media screen and (max-width: 992px) {
                display: none;
            }
        }

        @media screen and (max-width: 992px) {
            padding: 24px;
        }
    }

    .clip-img {
        width: 43px;
        height: 100%;
        position: absolute;
        top: 0px;
        right: 0px;

        @media screen and (max-width: 992px) {
            display: none;
        }
    }
}

.clip-carousel:hover {
    .page-btn {
        opacity: 1;
    }
}
</style>

<template>
    <div class="clip-carousel">
        <transition
            @enter="itemEnterAnime"
            @leave="itemLeaveAnime"
        >
            <div
                class="carousel-item"
                :key="scope.currentItemIndex"
                :style="currentItemStyle"
            >
                <div class="desc">
                    <h4>{{ scope.currentItem.desc.title }}</h4>
                    <p>{{ scope.currentItem.desc.content }}</p>
                    <div class="page-btn">
                        <i class="left-btn" @click="scope.beforeItemAction"></i>
                        <i class="right-btn" @click="scope.nextItemAction"></i>
                    </div>
                </div>
                <img class="clip-img" src="https://www.tencent.com/img/index/i_tri.png">
            </div>
        </transition>
    </div>
</template>

<script>
import ui from '@lib/interface/comp.ui.mixin'

export default {
    name: 'BookList',
    mixins: [ui],
    data() {
        return {
        }
    },
    computed: {
        currentItemStyle() {
            return `background-image: url("${this.scope.currentItem.src}")`
        }
    },
    methods: {
        itemEnterAnime(el, done) {
            this.anime({
                targets: el,
                opacity: [0, 1],
                easing: 'linear',
                duration: 300,
                complete() {
                    done();
                }
            })
        },
        itemLeaveAnime(el, done) {
            this.anime({
                targets: el,
                duration: 300,
                complete() {
                    done();
                }
            })
        }
    }
}
</script>