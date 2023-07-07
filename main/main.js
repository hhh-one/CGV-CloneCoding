var headerContent = document.querySelector('.header-content');
var nav = document.querySelector('.nav');
var fixedBtnWrap = document.querySelector('.fixedBtn-wrap');

//fixed
window.addEventListener('scroll', function () {
    var headerH = headerContent.offsetHeight;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= headerH) {
        nav.classList.add('fixed');
        fixedBtnWrap.classList.add('topBtn');
    } else {
        nav.classList.remove('fixed');
        fixedBtnWrap.classList.remove('topBtn');
    }
});


var navMenu = document.querySelector('.nav-menu');
var navOvermenu = document.querySelectorAll('.nav-overmenu');

//sub nav
for (var i = 0; i < navMenu.children.length; i++) {
    navMenu.children[i].firstElementChild.addEventListener('mouseenter', function () {
        for (var j = 0; j < navOvermenu.length; j++) {
            navOvermenu[j].style.display = 'block';
        }
    })
}

nav.addEventListener('mouseleave', function () {
    for (var j = 0; j < navOvermenu.length; j++) {
        navOvermenu[j].style.display = 'none';
    }
})

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
btnEventControl.onclick = function () {
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
btnGoToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// special Hall
var specialHallList = document.querySelector('.specialHall-list');
var imgWrap = document.querySelector('.specialHall-content .img-wrap');

specialHallList.addEventListener('mouseover', function() {
    if (event.target.tagName !== "LI") {
        return;
    }
    var list = specialHallList.children; //li 배열
    var imgList = imgWrap.children; //img 배열

    for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active');
        imgList[i].classList.remove('active');
    }

    event.target.classList.add('active');
    var index = event.target.id;
    imgList[index].classList.add('active');
})