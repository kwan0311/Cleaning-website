<template>
    <div class="basic-info">
        <p class="description">
            We are an internet based housekeeping service company<br>
            Enriching users' lives with technology<br>
            Our mission is "User Oriented"
        </p>
        <div class="welfare">
            <div class="welfare-carousel">
                <carousel :ui="ui.ClipCarousel" :data="welfareList" :duration="4000"></carousel>
            </div>
            <div class="welfare-content">
                <h3>
                    Start searching today
                </h3>
                <h3>
                    and find the best
                </h3>
                <h3>
                    cleaner for you
                </h3>
                <a href="#" style=color:lightseagreen;font-weight:bold;>
                    Start Searching
                </a>
            </div>
        </div>
        <div class="welfare">
            <div class="welfare-content">
                <h3>
                    Know our team, our
                </h3>
                <h3>
                    best backup
                </h3>
                <a href="#" style=color:lightseagreen;font-weight:bold;>
                    About Us
                </a>
            </div>
            <div class="welfare-carousel">
                <carousel :ui="ui.ClipCarousel" :data="welfareList2" :duration="4000"></carousel>
            </div>
        </div>
        <div class="welfare">
            <div class="welfare-carousel">
                <carousel :ui="ui.ClipCarousel" :data="welfareList3" :duration="4000"></carousel>
            </div>
            <div class="welfare-content">
                <h3>
                    Your idea is our best
                </h3>
                <h3>
                    way to improve
                </h3>
                <a href="#" style=color:lightseagreen;font-weight:bold;>
                    About
                </a>
            </div>
        </div>

        <div class="basic-info">
            <p class="description">
                We always believe that you will find the most<br>
                suitable cleaner here<br>
            </p>
        </div>
        <NavBar :message="username"></NavBar>
    </div>
</template>

<script>
import './index.less'
import NavBar from '@/common/nav-bar.vue'
import Carousel from '@c/Carousel/index.vue'
import ClipCarousel from '@c/Carousel/ui/clip-carousel.vue'
import FullCarousel from '@c/Carousel/ui/full-carousel.vue'

export default {
    components: {
        NavBar,
        Carousel
    },
    data() {
        return {
            ui: {
                ClipCarousel,
                FullCarousel
            },
            username:"",
            staticBanner: false,
            linkActiveTab: 0,
            welfareList: [
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.talkimages.cn%2Fimages%2Fmedium%2F20133060%2Ftkf003_236229.jpg&refer=http%3A%2F%2Fwww.talkimages.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611216&t=cd62fa0ed7d27f430f2db93cabe8ffb8',
                    desc: {
                        title: '',
                        content: ''
                    }
                },
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.mac69.com%2FJPG-180515%2F180515_308%2Fov0fwSiCmG_small.jpg&refer=http%3A%2F%2Fphoto.mac69.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611297&t=f253d096709077697c2b3aedc3d42a63',
                    desc: {
                        title: '',
                        content: ''
                    }
                },
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.talkimages.cn%2Fimages%2Fmedium%2F20133060%2Ftkf003_236229.jpg&refer=http%3A%2F%2Fwww.talkimages.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611216&t=cd62fa0ed7d27f430f2db93cabe8ffb8',
                    desc: {
                        title: '',
                        content: ''
                    }
                }
            ],
            welfareList2: [
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.mac69.com%2FJPG-180515%2F180515_308%2Fov0fwSiCmG_small.jpg&refer=http%3A%2F%2Fphoto.mac69.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611297&t=f253d096709077697c2b3aedc3d42a63',
                    desc: {
                        title: '',
                        content: ''
                    }
                },
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.mac69.com%2FJPG-180515%2F180515_308%2Fov0fwSiCmG_small.jpg&refer=http%3A%2F%2Fphoto.mac69.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611297&t=f253d096709077697c2b3aedc3d42a63',
                    desc: {
                        title: '',
                        content: ''
                    }
                },
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.mac69.com%2FJPG-180515%2F180515_308%2Fov0fwSiCmG_small.jpg&refer=http%3A%2F%2Fphoto.mac69.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611297&t=f253d096709077697c2b3aedc3d42a63',
                    desc: {
                        title: '',
                        content: ''
                    }
                }
            ],
            welfareList3: [
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.mac69.com%2F180516%2FJPG180516_412%2F3Eli663sht_small.jpg&refer=http%3A%2F%2Fphoto.mac69.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611282&t=13305eb76e7fb0321b0f117fcc4de00d',
                    desc: {
                        title: '',
                        content: ''
                    }
                },
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.mac69.com%2F180516%2FJPG180516_412%2F3Eli663sht_small.jpg&refer=http%3A%2F%2Fphoto.mac69.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611282&t=13305eb76e7fb0321b0f117fcc4de00d',
                    desc: {
                        title: '',
                        content: ''
                    }
                },
                {
                    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.mac69.com%2F180516%2FJPG180516_412%2F3Eli663sht_small.jpg&refer=http%3A%2F%2Fphoto.mac69.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664611282&t=13305eb76e7fb0321b0f117fcc4de00d',
                    desc: {
                        title: '',
                        content: ''
                    }
                }
            ],
            qrcodeImgShow: false,
            joinUsExpand: false,
            contactUsExpand: false,
            legalInfoExpand: false
        }

    },
    
    methods: {
        fetchData() {
            this.username=this.$route.query.username;
            NavBar.username=this.$route.query.username;
        },
        expandFooterNav(index) {
            if (index == 1) {
                this.joinUsExpand = !this.joinUsExpand;
            }
            else if (index == 2) {
                this.contactUsExpand = !this.contactUsExpand;
            }
            else if (index == 3) {
                this.legalInfoExpand = !this.legalInfoExpand;
            }
        },
        
        qrcodeImgEnter(el, done) {
            this.anime({
                targets: el,
                opacity: [0, 1],
                easing: 'linear',
                duration: 200,
                complete() {
                    done();
                }
            })
        },
        qrcodeImgLeave(el, done) {
            this.anime({
                targets: el,
                opacity: [1, 0],
                easing: 'linear',
                duration: 200,
                complete() {
                    done();
                }
            })
        },
        
    }
}
</script>