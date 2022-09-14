import anime from 'animejs/lib/anime.es.js';

const animeSet = {
    fadeIn,
    fadeOut,
    slideUp,
    slideUpDelay,
    slideDownQuick
}

// fade in
function fadeIn(el) {
    anime({
        targets: el,
        opacity: [0, 1],
        duration: 1000
    })
}

// fade out
function fadeOut(el) {
    anime({
        targets: el,
        opacity: [1, 0],
        duration: 1000
    })
}


// swipe up
function slideUp(el) {
    anime({
        targets: el,
        translateY: [50, 0]
    })
}

// Swipe up with delay
function slideUpDelay(el) {
    anime({
        targets: el,
        translateY: [50, 0],
        delay: 500
    })
}


// Swipe down quickly
function slideDownQuick(el) {
    anime({
        targets: el,
        translateY: [-50, 0],
        easing: 'easeInOutExpo',
        duration: 500
    })
}

export default {
    created: function() {
        this._anime = animeSet;
    }
}