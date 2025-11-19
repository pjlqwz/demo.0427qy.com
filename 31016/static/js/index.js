/*图片懒加载*/
$(function() {
    $("img.lazy").lazyload({
    threshold :180,
     effect:"fadeIn",
		failurelimit : 10
});
});
/*2.banner*/
$(function(){
    var swiper = new Swiper('.banner_container', {
        loop : true,
        autoplay:4500,
        pagination: '.banner_pagination',
        paginationClickable: true,
        calculateHeight: true,//自动高度
        effect:'fade',
        lazyLoading : true
    });
});
/*3.热门院校*//*
$(function(){
    var swiper = new Swiper('.hot_container', {
        loop : true,
        autoplay:3000,
        paginationClickable: true,
        effect:'slide',
        lazyLoading : true,
        slidesPerView:6,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            414: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    });
});*/
/*6.院校库*/
$(function(){
    $(".depot_left_item").eq(0).addClass("depot_left_active");
    $(".depot_left_item").eq(0).children(" .depot_left_text").css("color","#0a7cf9");
    $(".depot_left_item").hover(
        function () {
            $(".depot_left_item .depot_left_text").css("color","#333");
            $(this).children(".depot_left_text").css("color","#0a7cf9");
            $(this).addClass("depot_left_active").siblings().removeClass("depot_left_active");
            var navlis=$(".depot_left_item");
            var n=navlis.index(this);
            var listlis=$(".depot_right_item");
            listlis.eq(n).show().siblings(listlis).hide();
        }
    );
    $(".depot_left_phone_slide").eq(0).addClass("depot_phone_active");
    $(".depot_left_phone_slide").hover(
        function () {
            $(this).addClass("depot_phone_active").siblings().removeClass("depot_phone_active");
            var navlis=$(".depot_left_phone_slide");
            var r=navlis.index(this);
            var listlis=$(".depot_right_item");
            listlis.eq(r).show().siblings(listlis).hide();
        }
    );
});
/*6.院校库 左侧国家导航 移动*/
$(function(){
    var mySwiper = new Swiper('.depot_left_phone',{
        //simulateTouch:false,
        //loop:true,
        slidesPerView: 5.8,
        breakpoints: {
            1024: {
                slidesPerView: 5.8,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 5.8,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 5.8,
                spaceBetween: 0
            },
            414: {
                slidesPerView: 3.8,
                spaceBetween: 0
            },
            320: {
                slidesPerView: 2.8,
                spaceBetween: 0
            }
        }
    });
});
/*9.留学专题*/
$(function(){
    var swiper = new Swiper('.topic_container', {
        loop : true,
        slidesPerView: 4,
        nextButton: '.topic_next',
        prevButton: '.topic_prev',
        lazyLoading : true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
});
/**********************院校库**********************/
/*院校库 banner*/
$(function(){
    var swiper = new Swiper('.colleges_banner_container', {
        loop : true,
        autoplay:4500,
        pagination: '.colleges_banner_pagi',
        paginationClickable: true,
        //effect:'fade',
        lazyLoading : true
    });
});
/*院校库 筛选*/
$(function(){
    var searchlis=$(".colleges_search_item").children("a");
    searchlis.click(function(){
        $(this).addClass("search_text_active").siblings().removeClass("search_text_active");
    })

});
/**********************专题页**********************/
/*专题页 banner*/
$(function(){
    var swiper = new Swiper('.page_container', {
        loop : true,
        autoplay:3000,
        pagination: '.page_pagi',
        paginationClickable: true,
        effect:'fade',
        lazyLoading : true
    });
});
/*国家页小 banner*/
$(function(){
    var swiper = new Swiper('.country_list_banner', {
        loop : true,
        //autoplay:3000,
        pagination: '.country_pagi',
        paginationClickable: true,
        //effect:'fade',
        lazyLoading : true
    });
});
/*国家页*/
$(function(){
    var swiper = new Swiper('.country_topic_container', {
        loop : true,
        slidesPerView: 3,
        nextButton: '.country_topic_next',
        prevButton: '.country_topic_prev',
        lazyLoading : true,
        breakpoints: {
            767:{
                slidesPerView: 2,
                spaceBetween: 0
            },
            414: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
});
/*关于我们*/
$(function(){
    $(".about_table_list").click(function(){
        $(this).addClass("about_table_list_active").siblings(".about_table_list").removeClass("about_table_list_active");
    })
});
/*学校首页*/
$(function(){
    var swiper = new Swiper('.school_nav', {
        simulateTouch:false,
        slidesPerView: 6,
        breakpoints: {
            375: {
                slidesPerView: 4,
                spaceBetween: 0
            }
        }
    });
    $(".school_nav_list").click(function(){
        $(this).addClass("school_nav_active").siblings().removeClass("school_nav_active");
    })
});
/*学校首页 banner*/
$(function(){
    var swiper = new Swiper('.school_product_body', {
        //simulateTouch:false,
        loop : true,
        grabCursor : true,
        slidesPerView: 4,
        nextButton: '.school_product_next',
        prevButton: '.school_product_prev',
        breakpoints: {
            414:{
                slidesPerView: 3,
                spaceBetween: 0
            },
            413: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    });
});
$(function(){
    var top=$("#school_nav");
    var school_body=$(".school_body");
    $(window).scroll(function(){
        if($(document).scrollTop()>=470){
            top.addClass("school_nav_fixed");
            top.removeClass("swiper-container school_nav swiper-container-horizontal");
            top.children(".school_nav_item").removeClass("swiper-wrapper");
            top.children(".school_nav_item").children(".school_nav_list").removeClass("swiper-slide swiper-slide-active swiper-slide-next");
            school_body.css("padding-top","40px")
        }else{
            top.removeClass("school_nav_fixed");
            top.addClass("swiper-container school_nav swiper-container-horizontal");
            top.children(".school_nav_item").addClass("swiper-wrapper");
            top.children(".school_nav_item").children(".school_nav_list").addClass("swiper-slide swiper-slide-active swiper-slide-next");
            school_body.css("padding-top",0)
        }
    });
});
