<style lang="less" scoped>
nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 2;
    width: 100%;
    height: 72px;
    transition: all 0.3s;

    @media screen and (max-width: 992px) {
        height: 56px;
    }
}

.nav-inner {
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 992px) and (max-width: 1250px) {
        width: 100%;
        padding: 0px 24px;
    }

    @media screen and (max-width: 992px) {
        width: 100%;
        justify-content: center;
    }
}



.action-box {
    width: 850px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 992px) {
        display: none;
    }
}

.menu {
    height: 100%;
    display: flex;
}

.menu-item {
    height: 100%;
    padding: 0px 36px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    &>a {
        font-weight: bold;
        opacity: 0.9;
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 4px;
            position: absolute;
            bottom: -8px;
            left: 0px;
            background-color: #194ac3;
            opacity: 0;
            transform-origin: 50% 0%;
            transform: scaleX(0);
            transition: all 0.2s;
        }
    }
}

.menu-item:hover>a::after {
    opacity: 1;
    transform: scaleX(1);
}



.menu-expand-mask {
    width: 100%;
    height: 420px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: white;
    transform-origin: 50% 0%;
}


.white-nav {
    background-color: white;

    .menu-item>a {
        color: #2b2e2e;
    }


}


.transparent-nav {
    background-color: transparent;

    .menu-item>a {
        color: rgb(3, 3, 3);
    }

}

.menu-open-icon {
    display: none;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 22px;
    left: 22px;
    background-size: 100% 100%;
    z-index: 2;

    @media screen and (max-width: 992px) {
        display: block;
    }
}



.menu-panel-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
}

.menu-panel {
    width: 260px;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    z-index: 2;
}

.panel-menu {
    width: 100%;
    margin-top: 90px;

    li {
        width: 100%;
        height: 64px;
        padding-left: 56px;
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: #2a2e2e;
        opacity: 0.95;
    }
}

</style>

<template>
    <nav :class="navClass">
        <div class="nav-inner">
            <h1>
                <a href="/">Company Name</a>
            </h1>
            <div class="action-box">
                <ul class="menu">
                    <li class="menu-item" @mouseenter="expandSubMenu(0)" @mouseleave="shrinkSubMenu(0)">
                        <a href="">Home</a>

                      
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(0)" @mouseleave="shrinkSubMenu(0)">
                        <a href="#"></a>
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(1)" @mouseleave="shrinkSubMenu(1)" id="serviceid">
                        
                        <router-link :to="{ path: '/service' }">Service</router-link>
                   
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(0)" @mouseleave="shrinkSubMenu(0)">
                        <a href="#"></a>
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(2)" @mouseleave="shrinkSubMenu(2)">
                        <a href="#">About</a>
                      
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(0)" @mouseleave="shrinkSubMenu(0)">
                        <a href="#"></a>
                    </li>
                   
                    <li class="menu-item" @mouseenter="expandSubMenu(4)" @mouseleave="shrinkSubMenu(4)">
                        <router-link :to="{ path: '/login' }">login:{{username}}</router-link>
                        
                    </li>
                    
                </ul>
               
            </div>
        </div>
        <transition @enter="maskShowAnime" @leave="maskHideAnime">
            <div v-show="expand" class="menu-expand-mask"></div>
        </transition>
        <div class="menu-open-icon" @click="openMenuPanel"></div>
        <div v-show="menuPanelShow" class="menu-panel-mask" @click="closeMenuPanel"></div>
        <transition @enter="menuPanelShowAnime" @leave="menuPanelHideAnime">
            <div v-show="menuPanelShow" class="menu-panel">
                <div class="menu-close-icon" @click="closeMenuPanel"></div>
                <ul class="panel-menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <router-link :to="{ path: '/service' }">Service</router-link>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <router-link :to="{ path: '/login' }">login:{{username}}</router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </nav>
</template>

<script>
import util from '@lib/util'


export default {
    data() {
        return {
            expand: false,
            currentMenuIndex: -1,
            scrollDirection: 'down',
            pageScroll: 0,
            menuPanelShow: false,
            username: 'Login',
        }
    },
    props: {
        message:{
            type: String,
            default: ""
        }
    },
    mounted(){
        let str = this.message;
        this.username=str;
    },
    computed: {
        navClass() {
            if (this.pageScroll < 30) {
                if (this.expand) {
                    return 'white-nav white-nav-expand'
                }
                else {
                    return 'transparent-nav'
                }
            }
            else if (this.pageScroll >= 30 && this.pageScroll < 50) {
                return 'white-nav'
            }
            else {
                if (this.scrollDirection == 'down') {
                    return 'white-nav hide-nav'
                }
                else {
                    return 'white-nav'
                }
            }
        }
    },
    created() {
        this.handleScroll();
    },
    methods: {
        openMenuPanel() {
            this.menuPanelShow = true;
        },
        closeMenuPanel() {
            this.menuPanelShow = false;
        },
        handleScroll() {
            window.addEventListener('scroll', event => {
                let scrollTop = util.getPageScrollY();
                if (scrollTop > this.pageScroll) {
                    this.scrollDirection = 'down';
                }
                else {
                    this.scrollDirection = 'up';
                }

                this.pageScroll = scrollTop;
            })
        },
        expandMenu() {
            this.expand = true;
        },
        shrinkMenu() {
            this.expand = false;
        },
        expandSubMenu(index) {
            this.currentMenuIndex = index;
        },
        shrinkSubMenu(index) {
            this.currentMenuIndex = -1;
        },
        maskShowAnime(el, done) {
            this.anime({
                targets: el,
                scaleY: [0, 1],
                opacity: [0, 1],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        maskHideAnime(el, done) {
            this.anime({
                targets: el,
                scaleY: [1, 0],
                opacity: [1, 0],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        subMenuShowAnime(el, done) {
            this.anime({
                targets: el,
                translateY: [-30, 0],
                opacity: [0, 1],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        subMenuHideAnime(el, done) {
            this.anime({
                targets: el,
                translateY: [0, -30],
                opacity: [1, 0],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        menuPanelShowAnime(el, done) {
            this.anime({
                targets: el,
                translateX: [-260, 0],
                easing: 'linear',
                duration: 250,
                complete() {
                    done();
                }
            })
        },
        handleClick1() {
            debugger
            console.log("ddsa")
            console.log(this.$router)
            this.$router.go("/test")
        },
        menuPanelHideAnime(el, done) {
            this.anime({
                targets: el,
                translateX: [0, -260],
                easing: 'linear',
                duration: 250,
                complete() {
                    done();
                }
            })
        },
    }
}
</script>