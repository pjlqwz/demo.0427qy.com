$(function () {
    $(".header_nav>ul>li").each(function () {
        if ($(this).children('.s_navbox').children('.s_a').find('a').length < 1) {
            $(this).children('.s_navbox').remove()
        } else {
            $(this).mouseover(
                function () {
                    $(this).children('').next('.s_navbox').stop(true, true).delay(100).slideDown(200);
                })
            $(this).mouseleave(
                function () {
                    $(this).children('').next('.s_navbox').stop(true, true).delay(100).slideUp(100);
                })
        }
    })

    //点击逐渐展开移动端导航
    $(".a_js").click(function (e) {
        e.preventDefault()
        $(this).toggleClass("active");
        if (!$(".a_js").hasClass("active")) {
            $(".m_nav").stop(true, false).delay(300).animate({
                width: "0",
                height: "0"
            }, 0);
            $(".m_nav").find(".closecover").stop(true, false).delay(0).animate({
                opacity: "0"
            }, 300);
            $(".m_nav").find(".closeicon").stop(true, false).delay(200).animate({
                opacity: "0"
            }, 300);
            $(".m_nav").find(".m_navList").stop(true, false).delay(0).animate({
                right: "-80%"
            }, 300);
            $('body').css('overflow', 'auto');
        } else {
            $(".m_nav").stop(true, false).delay(0).animate({
                width: "100%",
                height: "100%"
            }, 0);
            $(".m_nav").find(".closecover").stop(true, false).delay(0).animate({
                opacity: "0.9"
            }, 300);
            $(".m_nav").find(".closeicon").stop(true, false).delay(200).animate({
                opacity: "1"
            }, 300);
            $(".m_nav").find(".m_navList").stop(true, false).delay(0).animate({
                right: "0"
            }, 300);
            $('body').css('overflow', 'hidden');
        }
    })
    //点击关闭，逐渐隐藏
    $(".a_closed").click(
        function () {
            $(".a_js").removeClass("active");
            $(".m_nav").stop(true, false).delay(300).animate({
                width: "0",
                height: "0"
            }, 0);
            $(".m_nav").find(".closecover").stop(true, false).delay(0).animate({
                opacity: "0"
            }, 300);
            $(".m_nav").find(".closeicon").stop(true, false).delay(200).animate({
                opacity: "0"
            }, 300);
            $(".m_nav").find(".m_navList").stop(true, false).delay(0).animate({
                right: "-80%"
            }, 300);
            $('body').css('overflow', 'auto');
        }
    )

    //判断是否有子标题
    $('.m_navList ul li').each(function () {
        $(this).children('.m_f_a').find('i').addClass('icon')
        if ($(this).children('.m_s_nav').find('a').length < 1) {
            $(this).children('.m_f_a').children('i').removeClass('icon');
        }
    });

    //点击图标展开关闭子导航
    $('.m_navList ul li').find('.m_f_a i').click(function () {
        $(this).parent().parent().siblings().children('.m_s_nav').slideUp();
        $(this).parent().parent().siblings().children('.m_f_a').find('i').removeClass('icon_on')
        $(this).parent().next().toggle("normal").prev().children('i').toggleClass('icon_on');
    })

    var swiper1 = new Swiper('.index_slide_box', {
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    $('.news_nav ul li').eq(0).addClass('active')
    $('.news_bottom ul').hide();
    $('.news_bottom ul').eq(0).show();
    $('.news_nav ul li').hover(function (event) {
        $(this).addClass('active').siblings().removeClass('active')
        $('.news_bottom ul').eq($(this).index()).show().siblings().hide();
        return false;
    });

    var swiper2 = new Swiper('.index_ads_slides', {
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper3 = new Swiper('.index_server_list', {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        navigation: {
            nextEl: '.server-button-next',
            prevEl: '.server-button-prev',
        },
        breakpoints: {
            '@0.00': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            '@1.50': {
                slidesPerView: 4,
                spaceBetween: 25,
            },
        }
    });

    $('.title-nav span').eq(0).addClass('active')
    $('.set4_server').hide();
    $('.set4_server').eq(0).show();
    $('.title-nav span').hover(function (event) {
        $(this).addClass('active').siblings().removeClass('active')
        $('.set4_server').eq($(this).index()).show().siblings().hide();
        return false;
    });

    //返回顶部出现及隐藏
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.backtop').show();
        }
        if ($(window).scrollTop() < 500) {
            $('.backtop').hide();
        }
    });

    $(window).trigger('scroll')

    $(".backtop").click(function () {//返回顶部
        $("body,html").stop(true, false).animate({
            "scrollTop": "0"
        }, 500)
        return false;
    })

    /*$('.zc').click(function () {
      $('.login-pop').show();
    })*/
    $('.login-pop .close-pop,.mask_login').click(function () {
        $('.login-pop').hide();
    })


    $('.bigimage_pop .close-pop1,.mask_image').click(function () {
        $('.bigimage_pop').hide();
    })
    $('.changephone').click(function () {
        $('.changephone_pop').show();
    })
    $('.changephone_pop .close-pop,.mask_login').click(function () {
        $('.changephone_pop').hide();
    })

    var swiper4 = new Swiper('.nlpj_nav1', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10
    });
    var swiper5 = new Swiper('.nlpj_nav2', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.nlpj_nav2 .swiper-button-next',
            prevEl: '.nlpj_nav2 .swiper-button-prev',
        },
    });
    var swiper6 = new Swiper('.nlpj_nav3', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        spaceBetween: 50,
        navigation: {
            nextEl: '.nlpj_nav3_wrap .swiper-button-next',
            prevEl: '.nlpj_nav3_wrap .swiper-button-prev',
        },
        breakpoints: {
            '@0.00': {
                spaceBetween: 20,
            },
            '@0.75': {
                spaceBetween: 20,
            },
            '@1.00': {
                spaceBetween: 20,
            },
            '@1.50': {
                spaceBetween: 50,
            },
        }
    });

    $('.nlpj_nav1 .swiper-slide').eq(0).addClass('active')
    $('.nlpj_bottom1 ul').hide();
    $('.nlpj_bottom1 ul').eq(0).show();
    $('.nlpj_nav1 .swiper-slide').hover(function (event) {
        $(this).addClass('active').siblings().removeClass('active')
        $('.nlpj_bottom1 ul').eq($(this).index()).show().siblings().hide();
        return false;
    });
    $('.nlpj_nav2 .swiper-slide').eq(0).addClass('active')
    $('.nlpj_bottom2 ul').hide();
    $('.nlpj_bottom2 ul').eq(0).show();
    $('.nlpj_nav2 .swiper-slide').hover(function (event) {
        $(this).addClass('active').siblings().removeClass('active')
        $('.nlpj_bottom2 ul').eq($(this).index()).show().siblings().hide();
        return false;
    });

    $('.pop_close').click(function () {
        $('.ads_pop').hide();
    });


   

})

