//Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import EasySlider from "vue-easy-slider"

// import components from './config/components'

//third import
import VueWebStorage from 'vue-web-storage'
import 'animate.css/animate.min.css'
import Service from './pages/index/Service.vue'
import Login from './pages/index/Login.vue'
import { Carousel } from 'ant-design-vue'
import index from './pages/index/index.vue'

//css file import
import '@/style/main.less'

//boot start
import boot from './config/boot'

boot.configAnime(); //Animition setup

const routes = [
    { path:'/service', component: Service},
    { path:'/login', component: Login},
    {path:'/', component: index}
]

const router = new VueRouter({
    routes, // route link set
  })

//using vue component
Vue.use(VueWebStorage);
Vue.use(VueRouter)
Vue.use(Carousel)
Vue.use(EasySlider)
//Register the Vue global component
// components.reg();

function createVue(options) {
    let vm = new Vue({
        el: '#app',
        router,
        ...options
    })
    return vm
}

export default createVue