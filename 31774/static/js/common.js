/* 头部 */
$(window)
    .scroll(function () {
        var win_h = $(window)
            .scrollTop();
        if (win_h >= 100) {
            $(".webtop")
                .addClass("fxd");
        } else {
            $(".webtop")
                .removeClass("fxd");
        }
    })


$(".websearch_btn a")
    .click(function () {
        $(".websearch")
            .toggleClass("show")
            .slideDown();
    })
$(".websearch a.close")
    .click(function () {
        $(this)
            .parents('div.websearch')
            .removeClass("show")
            .slideDown();
    });


/* 首页Banner start */
var BaSwiper = new Swiper('.eyba_swiper .swiper-container', {
    loop: true
    , autoplay: {
        delay: 5000
        , disableOnInteraction: false
    , }
    , slidesPerView: 1
    , navigation: {
        prevEl: '.eyba_swiper .swiper-button-prev'
        , nextEl: '.eyba_swiper .swiper-button-next'
    , }
    , pagination: {
        el: '.eyba_swiper .swiper-pagination'
        , clickable: true
    , }
});
/* 首页Banner end */
/* 首页技术文章 start */
var artSwiper = new Swiper('.webarticle_swiper .swiper-container', {
    loop: true
    , autoplay: {
        delay: 5000
        , disableOnInteraction: false
    , }
    , slidesPerView: 3
    , spaceBetween: 30
    , navigation: {
        prevEl: '.webarticle_swiper .swiper-button-prev'
        , nextEl: '.webarticle_swiper .swiper-button-next'
    , }
    , breakpoints: {
        1280: {
            slidesPerView: 3
            , spaceBetween: 20
        , }
        , 820: {
            slidesPerView: 2
            , spaceBetween: 20
        , }
        , 767: {
            slidesPerView: 1
            , spaceBetween: 12
        , }
        , 320: {
            slidesPerView: 1
            , spaceBetween: 10
        , }
    }
});
/* 首页技术文章 end */
/* 首页合作伙伴 start */
var partSwiper = new Swiper('.webpartner_swiper .swiper-container', {
    loop: true
    , autoplay: {
        delay: 5000
        , disableOnInteraction: false
    , }
    , slidesPerView: 6
    , spaceBetween: 20
    , navigation: {
        prevEl: '.webpartner_swiper .swiper-button-prev'
        , nextEl: '.webpartner_swiper .swiper-button-next'
    , }
    , breakpoints: {
        1280: {
            slidesPerView: 5
            , spaceBetween: 20
        , }
        , 920: {
            slidesPerView: 4
            , spaceBetween: 20
        , }
        , 767: {
            slidesPerView: 2
            , spaceBetween: 12
        , }
        , 320: {
            slidesPerView: 1
            , spaceBetween: 10
        , }
    }
});
/* 首页合作伙伴 end */
/* 返回顶部 */
$(function () {
    $(window)
        .scroll(function () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            var eltop = $(".webview_top");
            if (scrollTop > 0) {
                eltop.show();
            } else {
                eltop.show();
            }
        });
    $(".webview_top")
        .click(function () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop > 0) {
                $("html,body")
                    .animate({
                        scrollTop: 0
                    }, "slow");
            }
        });
});