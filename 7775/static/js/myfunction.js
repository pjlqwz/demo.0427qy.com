$(function(){

    //     var swiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     effect: 'cube',
    //     grabCursor: true,
    //     loop:true,
    //     cube: {
    //         shadow: true,
    //         slideShadows: true,
    //         shadowOffset: 20,
    //         shadowScale: 0.94
    //     }
    // });
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    if($(window).width()>767){
        if(!$("body").hasClass("index")){
            var height=$("#banner").height();
            $('body,html').animate({ "scrollTop": height-100+"px" }, 1000);
        }
    }
     if($(window).width()<767){
         if(!$("body").hasClass("index")){
           $(".friendship").hide();
        }
     }
    $("#header").addClass("pulse animated");
    $(".content .index-about .index-about-left").hover(function(){
        $(this).find("a").addClass("swing animated");
    },function(){
        $(this).find("a").removeClass("swing animated")
    })
     $(window).scroll(function(){
        var scrollHeight = $(window).scrollTop();
        if(scrollHeight>300){
            $(".show-text").addClass("fadeInLeft animated");
            $(".show-images").addClass("fadeInLeft animated");
        }
        if(scrollHeight>1100){
            $(".index-news .index-title").addClass("fadeInUp animated");
        }
         if(scrollHeight>1400){
            $(".news-main li").addClass("fadeInRight animated");
        }
         if(scrollHeight>2000){
            $(".content .index-about .index-about-right img").addClass("scales");
            $(".content .index-about .index-about-left").addClass("fadeInLeft animated");
        }
        if(scrollHeight>2300){
            $(".index-pro .index-title").addClass("fadeInUp animated");
        }
        if(scrollHeight>2400){
            $(".content .index-pro .index-proList").addClass("fadeInLeft animated");
        }
     })
})