$(function () {
    // pc菜单hover事件
    $(".menu>li").hover(function () {
        $(this).find(".menu_2").slideDown(200);
        if($(this).find(".menu_2").length>0){
            $(this).find("i").show();
        }
    }, function () {
        $(this).find(".menu_2").hide();
    })
	
    $(".pro_list dl dt").hover(function(){
        $(this).find(".pop").show();
         $(this).find(".read_more").addClass("fadeInLeft animated");
    },function(){
        $(this).find(".pop").hide();
    })
    $(".logo").addClass("fadeInDownBig animated");
    $(".server").addClass("fadeInLeft animated");
    $(".pro_show .title").addClass("fadeInRight animated");
    $(".inside").addClass("fadeInUpBig animated");
    $(".location p.right").addClass("bounceInLeft animated");
    $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if(scrollHeight>100){
           $(".pro_list").addClass("fadeInUp animated");
        }
        if(scrollHeight>600){
           $(".about_border").addClass("fadeInLeft animated");
           $(".describe").addClass("fadeInLeft animated");
           $(".about_images").addClass("fadeInRight animated");
        }
        if(scrollHeight>1100){
        //    $(".news_left").addClass("rollIn animated");
           $(".news_left").addClass("scale");
           $(".news_right").addClass("rotateInDownRight animated");
        }
        if(scrollHeight>1250){
            $(".friend_box").addClass("bounceInRight animated");
        }
    })  
})