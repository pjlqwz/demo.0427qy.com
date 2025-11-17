$(function () {

    $(".product_Small_title li").click(function () {
        var index = $(this).index();
        $(".product_Small_title li a").removeClass("current");
        $(this).find("a").addClass("current");
        $(".product_inner ul").eq(index).show().siblings().hide();
        $(".product_inner ul li").removeClass("fadeInUp animated");
        $(".product_inner ul").eq(index).find("li").addClass("fadeInUp animated");
        setTimeout(function () {
            $(".product_inner ul li").removeClass("fadeInUp animated");
        });
    })
    $("#product .product_inner ul li").hover(function(){
        $(this).addClass("on");
        $(this).find(".icon").stop(200).animate({"top": "50%", "opacity": 1})
    },function(){
        $(this).removeClass("on");
        $(this).find(".pic_bg").stop(200).animate({"top": "-200%", "opacity": 0})
    })
    $(".list-img ul li").hover(function(){
        $(this).addClass("on");
        $(this).find(".icon").stop(200).animate({"top": "50%", "opacity": 1})
    },function(){
        $(this).removeClass("on");
        $(this).find(".pic_bg").stop(200).animate({"top": "-200%", "opacity": 0})
    })
    $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if(scrollHeight>700){
            $("#about .about_img").addClass("bounceIn animated");
            $("#about .about_text").addClass("bounceInRight animated")
            $("#about .Cake   ").addClass("slideInDown animated");
            $("#about .coffee   ").addClass("rollIn animated");
        }
        if(scrollHeight>1200){
            $("#product .title ").addClass("slideInDown animated");
            $("#product .product_Small_title  ").addClass("bounceIn animated");
            $("#product .product_inner  ").addClass("flipInX animated");
        }
        if(scrollHeight>1500){
            $("#product .title").addClass("bounceIn animated");
            $("#product .inner").addClass("bounceInDown animated")
            $("#product .more").addClass("bounceInDown animated");
        }
        if(scrollHeight>1700){
            $("#Advertising ").addClass("fadeInLeft animated");

        }
        if(scrollHeight>2000){
            $("#news .title")   .addClass("flipInX animated");
            $("#news .inner").addClass("fadeInDown animated");
            $("#news .date").addClass("flipInX animated");
            $("#news .pic").addClass("fadeInLeft animated");
            $("#news .text").addClass("fadeInRight animated")
            $("#news .more").addClass("fadeInUp animated")
        }
        if(scrollHeight>2200){
            $("#footer_small .footer_nav ").addClass("fadeInDownBig animated");
            $("#footer_small .footer_code ").addClass("fadeInDown animated");
        }
        if(scrollHeight>2300){
            $("#footer .copyright").addClass("fadeInDown animated");
        }
    })
})