export default {
    props: {
        data: {
            // List data collection
            type: Array,
            default: () => {
                
                return []
            }
        },
        autoPlay: {
            // auto display the image
            type: Boolean,
            default: true
        },
        duration: {
            // auto image changing round, every (ms) for each image
            type: Number,
            default: 3000
        },
        showPageButton: {
             // whether display the last image buttom(<) and next img button(>) or not
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            currentItemIndex: 1,
            timer: null
        }
    },
    computed: {
        currentItem() {
            return this.data[this.currentItemIndex]
        }
    },
    mounted() {
        if(this.autoPlay) {
            this.initAutoPlay();
        }
    },
    beforeDestroy() {
        if(this.autoPlay) {
            clearInterval(this.timer);
        }
    },
    methods: {
        initAutoPlay() {
            this.timer = setInterval(() => {
                this.nextItem();
            }, this.duration)
        },
        beforeItem() {
            if(this.currentItemIndex == 0) {
                this.currentItemIndex = this.data.length - 1;
            }
            else {
                this.currentItemIndex--;
            }
        },
        nextItem() {
            if(this.currentItemIndex == this.data.length - 1) {
                this.currentItemIndex = 0;
            }
            else {
                this.currentItemIndex++;
            }
        },
        toItemAction(index) {
            this.currentItemIndex = index;
            if(this.autoPlay) {
                clearInterval(this.timer);
                this.initAutoPlay();
            }
        },
        // move to the next img
        beforeItemAction() {
            this.beforeItem();
            if(this.autoPlay) {
                clearInterval(this.timer);
                this.initAutoPlay();
            }
        },
        // move to the before img
        nextItemAction() {
            this.nextItem();
            if(this.autoPlay) {
                clearInterval(this.timer);
                this.initAutoPlay();
            }
        }
    }
}