$(document).ready(function(){
	
	        var galleryTop = new Swiper('.gallery-top', {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 10,
                    loop:true,
                    loopedSlides: 4, //looped slides should be the same
                    initialSlide :0,  //设定初始化时slide的索引。
                });
                var galleryThumbs = new Swiper('.gallery-thumbs', {
                    direction: 'vertical',
                    spaceBetween: 10,
                    slidesPerView: 4,
                    loop:true,
                    loopedSlides: 4, //looped slides should be the same
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    initialSlide :0,  //设定初始化时slide的索引。
                    slideToClickedSlide: true
                });
                galleryTop.params.control = galleryThumbs;
                galleryThumbs.params.control = galleryTop;
        
          
    var swiper = new Swiper('.swiper-container-pro', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 80,
        nextButton: '.swiper-button-next-pro',
        prevButton: '.swiper-button-prev-pro',
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1200: {
              slidesPerView: 2,
              slidesPerColumn: 2,
              spaceBetween: 40,
            },
            991: {
              slidesPerView: 2,
              slidesPerColumn: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              slidesPerColumn: 2,
              spaceBetween: 20,
            },
            567: {
              slidesPerView: 1,
              slidesPerColumn: 2,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              slidesPerColumn: 2,
              spaceBetween: 20,
            }
        } 
    });

    var swiper = new Swiper('.swiper-container-case', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 26,
        nextButton: '.swiper-button-next-case',
        prevButton: '.swiper-button-prev-case',
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1200: {
              slidesPerView: 4,
              slidesPerColumn: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              slidesPerColumn: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerColumn: 2,
              spaceBetween: 16,
            },
            567: {
              slidesPerView: 2,
              slidesPerColumn: 2,
              spaceBetween: 15,
            },
            320: {
              slidesPerView: 2,
              slidesPerColumn: 2,
              spaceBetween: 10,
            }
        } 
    });

    //mc banner
    $('.swiper-container-banner').swiper({pagination: '.swiper-pagination-banner li',slidesPerView: 1,paginationClickable: true,spaceBetween: 0,autoplay:5500,autoplayDisableOnInteraction:false,nextButton: '.swiper-button-next-banner',prevButton: '.swiper-button-prev-banner'});
            

	//计算navbar宽度
    function menuwidth(){
        var width=$(".nav_box" ).width();
        var size=$(".nav_box > ul > li").size();
        $(".nav_box > ul > li").css("width",Math.floor(width/size-1)+"px");
    }
    setTimeout(menuwidth,100);
    $(window).resize(function () {
        menuwidth();
    })
    //当调整浏览器窗口的大小时，发生 resize 事件。

    //隐藏导航跟wrap的切换
    $(".nav_button").click(function(){
        $(".class").removeClass("page-prev").addClass("page-in");
        $(".wrap").removeClass("page-active").addClass("page-next page-in")
        $(".opacity2").show()
        pageSlideOver();
    })
    $(".opacity2,.class_close").on('click touchstart',function(){
        $(".class").addClass("page-prev page-out")
        $(".wrap").removeClass("page-next").addClass(" page-out")
        $(".opacity2").hide()
        pageSlideOver();
    })
    function pageSlideOver(){
        $('.page-out').on('transitionend', function(){
            $(this).removeClass('page-out');
        });
        $('.page-in').on('transitionend', function(){
            $(this).removeClass('page-in');
        });
    }
    //隐藏菜单二级导航下拉
    $(".ericon").click(function(){
        $(this).toggleClass("xz").parents().siblings().find(".ericon").removeClass("xz");
        $(this).parents().siblings().find(".menu_body").hide(300);
        $(this).siblings(".menu_body").slideToggle()
    })
    $(".thricon").click(function(){
        $(this).toggleClass("tz").parents().siblings().find(".thricon").removeClass("tz");
        $(this).parents().siblings().find(".thr_body").hide(300);
        $(this).siblings(".thr_body").slideToggle()
    })

    //nav横向下拉菜单栏
    // $("ul.one li").hover(function(){
    //     $(this).addClass("cu")
    //     $(this).find("ul.two").stop(false,true).slideDown("400")
    //     },function(){
    //     $(this).removeClass("cu")
    //     $(this).find("ul.two").stop(false,true).slideUp("400")
    //     })
    //
    
        //侧边菜单栏 展开
        $(".left_list .first li a").click(function() {
            $(this).addClass('cu1')
            $(this).parent().siblings().find('a').removeClass('cu1')
            $(this).parent().siblings().find('.second a').removeClass('cu2')
            $(this).parent().siblings().find('.second').slideUp();
            $(this).siblings('.second').slideToggle();
        });
        $(".second li a").click(function() {
            $(this).addClass('cu2')
            $(this).parent().siblings().find('a').removeClass('cu2')
            $(this).parent().siblings().find('.third').slideUp();
            $(this).siblings('.third').slideToggle();
        });

        //手机 展开分类
        $(".classify").click(function() {
            $(this).parents().find('.class_list').slideToggle(300);
            $(this).toggleClass('close_c');
        });

        $(".class_list .mfirst li a").click(function() {
            $(this).addClass('cu1')
            //$(this).parent().addClass('li_bg')
            $(this).parent().siblings().find('a').removeClass('cu1')
            //$(this).parent().siblings().removeClass('li_bg')
            $(this).parent().siblings().find('.msecond a').removeClass('cu2')
            $(this).parent().siblings().find('.msecond').slideUp();
            $(this).siblings('.msecond').slideToggle();
        });
        $(".class_list .msecond li a").click(function() {
            $(this).addClass('cu2')
            $(this).parent().siblings().find('a').removeClass('cu2')
            $(this).parent().siblings().find('.mthird').slideUp();
            $(this).siblings('.mthird').slideToggle();
        });

    

    //面包屑导航
    //$(".here a:last-child").addClass('in');

    // 鼠标滚动渐入
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };

    
});
