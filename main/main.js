const swiper = new Swiper('.swiper', {
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