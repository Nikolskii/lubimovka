//горизонтальный скролл секции plays

function scrollHorizontally(e) {
    e = window.event || e;
    let delta = Math.max(-1, Math.min(1, (e./*wheelDelta*/mousewheel || -e.detail)));
    document.querySelector('.plays__container').scrollLeft -= (delta * 35);
    e.preventDefault();
}
if (document.querySelector('.plays__container').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.querySelector('.plays__container').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.querySelector('.plays__container').addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    document.querySelector('.plays__container').attachEvent("onmousewheel", scrollHorizontally);
}

scrollHorizontally()
