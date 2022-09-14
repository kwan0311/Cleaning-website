import createVue from '@/main'
import './index.less'

import NavBar from '@/common/nav-bar.vue'
import Carousel from '@c/Carousel/index.vue'
import ClipCarousel from '@c/Carousel/ui/clip-carousel.vue'
import FullCarousel from '@c/Carousel/ui/full-carousel.vue'

createVue({
    name:'Index',
    components: {
        NavBar,
        Carousel
    },
    data: {
        ui: {
            ClipCarousel,
            FullCarousel
        },
        bannerTextIndex: 0,
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
        developList: [
            {
                src: 'https://www.tencent.com/data/index/index_develop_bg1.jpg'
            },
            {
                src: 'https://www.tencent.com/data/index/index_develop_bg2.jpg'
            },
            {
                src: 'https://www.tencent.com/data/index/index_develop_bg3.jpg'
            }
        ],
        qrcodeImgShow: false,
        joinUsExpand: false,
        contactUsExpand: false,
        legalInfoExpand: false
    },
    created() {
        this.initBanner();
    },
    computed:{
        key(){
            debugger
            return this.$route.path + Math.random();
        }
    },
    methods: {
        expandFooterNav(index) {
            if(index == 1) {
                this.joinUsExpand = !this.joinUsExpand;
            }
            else if(index == 2) {
                this.contactUsExpand = !this.contactUsExpand;
            }
            else if(index == 3) {
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
})