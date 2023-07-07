// 무비차트 swiper
const swiper = new Swiper('.swiper.movieChart-list', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    alllowSlideNext: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// event swiper
const eventSwiper = new Swiper('.swiper.event-list', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 32,
    alllowSlideNext: false,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

// event swiper 자동 멈추기 / 재생하기
var btnEventControl = document.querySelector('.btn-event-control');
btnEventControl.onclick = function() {
    if (btnEventControl.classList.contains('active')) {
        btnEventControl.classList.remove('active');
        eventSwiper.autoplay.start();
    } else {
        btnEventControl.classList.add('active');
        eventSwiper.autoplay.stop();

    }
}

//go to top
var btnGoToTop = document.querySelector('.btn-gotoTop');
btnGoToTop.onclick = function() {
    window.scrollTo({top: 0, behavior: "smooth"});
}