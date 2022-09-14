<style lang="less" scoped>
.full-carousel {
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
    background-position: center top;
}

.slide-tab {
    display: flex;
    position: absolute;
    bottom: 24px;
    right: 32px;

    .slide-item {
        width: 8px;
        height: 8px;
        background-color: white;
        transition: all 0.3s;
        cursor: pointer;
    }

    .current-item {
        width: 24px;
        background-color: #0052d9;
    }
}

.slide-item + .slide-item {
    margin-left: 8px;
}
</style>

<template>
    <div class="full-carousel">
        <transition
            @enter="itemEnterAnime"
            @leave="itemLeaveAnime"
        >
            <div
                class="carousel-item"
                :key="scope.currentItemIndex"
                :style="currentItemStyle"
            >
            </div>
        </transition>
        <ul class="slide-tab">
            <li
                class="slide-item"
                :class="{ 'current-item': scope.currentItemIndex == index }"
                v-for="(item,index) in scope.data"
                :key="index"
                @click="scope.toItemAction(index)"
            >
            </li>
        </ul>
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