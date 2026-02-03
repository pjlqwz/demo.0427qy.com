var mySwiper1 = new Swiper('.index-banner-swiper', {
	 pagination: {
        el: '.swiper-pagination',
		clickable: true,
      },

    direction: 'horizontal',

    loop: true,

    speed: 800,

    autoplay:{
    delay: 3000,
    disableOnInteraction: false,
},

})

var mySwiper2 = new Swiper('.index-reason-swiper', {

    direction: 'horizontal',

    loop: true,

    simulateTouch: false,

    pagination: {

        el: '.swiper-pagination',

        // clickable :true,

    },

})

var _offsetWidth = document.body.offsetWidth;

if (_offsetWidth < 640) {

    var galleryThumbs = new Swiper('.gallery-thumbs', {

        spaceBetween: 10,

        slidesPerView: 3,

        loop: true,

        freeMode: true,

        loopedSlides: 4, //looped slides should be the same

        watchSlidesVisibility: true,

        watchSlidesProgress: true,

    });

    var galleryTop = new Swiper('.gallery-top', {

        spaceBetween: 10,

        loop: true,

        loopedSlides: 3, //looped slides should be the same

        navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

        },

        pagination: {

            el: '.swiper-pagination',

            clickable: true,

        },

        simulateTouch: false,

        thumbs: {

            swiper: galleryThumbs,

        },

    });

} else {

    var galleryThumbs = new Swiper('.gallery-thumbs', {

        spaceBetween: 10,

        slidesPerView: 4,

        loop: true,

        freeMode: true,

        loopedSlides: 4, //looped slides should be the same

        watchSlidesVisibility: true,

        watchSlidesProgress: true,

    });

    var galleryTop = new Swiper('.gallery-top', {

        spaceBetween: 10,

        loop: true,

        loopedSlides: 4, //looped slides should be the same

        navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

        },

        pagination: {

            el: '.swiper-pagination',

            clickable: true,

        },

        simulateTouch: false,

        thumbs: {

            swiper: galleryThumbs,

        },

    });

}







if (_offsetWidth >= 640 && _offsetWidth < 960) {

    var swiper3 = new Swiper('.index-driver-swiper', {

        slidesPerView: 3,

        spaceBetween: 20,

        loop: true,

        autoplay: {

            delay: 5000,

        },

        pagination: {

            el: '.swiper-pagination',

            clickable: true,

        },

        navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

        },

    });

} else if (_offsetWidth < 640) {

    var swiper3 = new Swiper('.index-driver-swiper', {

        slidesPerView: 2,

        spaceBetween: 20,

        loop: true,

        autoplay: {

            delay: 5000,

        },

        pagination: {

            el: '.swiper-pagination',

            clickable: true,

        },

        navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

        },

    });

} else {

    var swiper3 = new Swiper('.index-driver-swiper', {

        slidesPerView: 4,

        spaceBetween: 20,

        loop: true,

        autoplay: {

            delay: 5000,

        },

        pagination: {

            el: '.swiper-pagination',

            clickable: true,

        },

        navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

        },

    });

}

if (_offsetWidth < 640) {

    var swiper3 = new Swiper('.index-about-swiper', {

        slidesPerView: 2,

        spaceBetween: 20,

        navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

        },

    });

} else {

    var swiper3 = new Swiper('.index-about-swiper', {

        slidesPerView: 3,

        spaceBetween: 20,

        autoplay: {

            delay: 5000,

        },

        navigation: {

            nextEl: '.swiper-button-next',

            prevEl: '.swiper-button-prev',

        },

    });

}



// 控制Swiper切换到指定slide

$(function() {

    $(".index-reason .reason-nav ul li").click(function() {

        $(this).addClass("li-active").siblings().removeClass("li-active");

        var _index = $(this).index();

        mySwiper2.slideTo(_index + 1);

    })

})