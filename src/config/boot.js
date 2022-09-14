import Vue from 'vue'

import anime from 'animejs/lib/anime.es.js'
function configAnime() {
    Vue.prototype.anime = anime;
}


export default {
    configAnime
}