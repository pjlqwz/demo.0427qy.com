$(function() {
        var swiper1 = new Swiper('.banner .swiper-container', {
            loop: true,
            // 滑动事件
            autoplay: { delay: 3500, stopOnLastSlide: false, disableOnInteraction: false, }, observer: true, observeParents: true, pagination: { el: '.banner .swiper-pagination', clickable: true, },
        })

        var swiper21 = new Swiper('.ho2_swiper .swiper-container', {
            // 避免 屏幕宽度变化后 不再进行轮播
            observer: true, observeParents: true,
            // 滑动事件
            autoplay: { delay: 3500, stopOnLastSlide: false, disableOnInteraction: false, },
            slidesPerView: 1,
        })

        function bbb() {
            var num = 4;//一个幻灯片有16个,4行4列
            $(".cx").each(function() {
                var ele = $(this)
                var i = ele.index()
                var j = parseInt(i / num) + 1
                var k = "cx" + j
                ele.addClass(k)
            })
            var n = parseInt(($(".cx").length - 1) / num) + 1
            for (var p = 1; p <= n; p++) { $(".cx" + p).wrapAll('<div class="swiper-slide" />') }
        }

        bbb()

        aaa();
        function aaa() {
            var num = 12;//一个幻灯片有16个,4行4列
            $(".cy").each(function() {
                var ele = $(this)
                var i = ele.index()
                var j = parseInt(i / num) + 1
                var k = "cy" + j
                ele.addClass(k)
            })
            var n = parseInt(($(".cy").length - 1) / num) + 1
            for (var p = 1; p <= n; p++) { $(".cy" + p).wrapAll('<div class="swiper-slide" />') }
        }

        var swiper31 = new Swiper('.ho3_swiper .swiper-container', {
            // 避免 屏幕宽度变化后 不再进行轮播
            observer: true, observeParents: true, pagination: { el: '.ho3_swiper .swiper-pagination', clickable: true, },
        })

        var swiper4 = new Swiper('.home_4 .swiper-container', {
            observer: true, observeParents: true, slidesPerView: 1,
            navigation: { nextEl: '.home_4 .swiper-button-next', prevEl: '.home_4 .swiper-button-prev', },
            effect: 'fade', fadeEffect: { crossFade: true, }
        })

        var swiper5 = new Swiper('.ho5_swiper .swiper-container', {
            loop: true,
            // 避免 屏幕宽度变化后 不再进行轮播
            observer: true, observeParents: true, slidesPerView: 2, spaceBetween: 40,
            // 滑动事件
            autoplay: { delay: 3500, stopOnLastSlide: false, disableOnInteraction: false, }, breakpoints: {
                1280: {
                    spaceBetween: 30
                }, 900: {
                    slidesPerView: 1, spaceBetween: 20
                }
            }
        })
        $(".ho2_map .mo").mouseenter(function() { $(this).addClass("on").siblings().removeClass("on") })
        $(".hc_video").click(function() { BigPicture({ el: $(this)[0], vidSrc: $(this).attr("vidSrc") }) })
    })