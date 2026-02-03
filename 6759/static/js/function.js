$(document).ready(function(){  
    $(".pc_Menu ul li").hover(function(){
        $(this).find(".listmenuBox").stop(true,false).slideToggle("400");
    });  
    $(".btnsear .sear").click(function(){
        $("#head .search").stop(true,false).fadeToggle("400");
    });
    $(".btnsear .btnNav").click(function(){
        $(".menuliBox").animate({right:"0"},600);
        $("#wrap_index").animate({right:"80%"},700);
        $("#shadow").fadeIn("400");
    });
    $(".phone_Btn .menu_close").click(function(){
        $(".menuliBox").animate({right:"-100%"},600);
        $("#wrap_index").animate({right:"0"},500);
        $("#shadow").fadeOut("400");
    });
    $(".menuliBox ul li a").click(function(){
        $(this).siblings("ul").stop(true,false).slideToggle("400");
        $(this).parent().siblings().find("ul").slideUp("400");
    });
    $(".slick_banner").slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        dots:true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            // console.log(slider);
            return '0' + (i + 1) + ' / 0' + slider.slideCount;
        },
    });
    $(".pdCenNav .navItem").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var index = $(this).index();
        console.log(index);
        $(".pdCenImg .row").eq(index).addClass("cur").siblings().removeClass("cur");
    })
    /*page*/
    $(".sidel_nav ul li a").click(function(){
        $(this).siblings("ul").stop(true,false).slideToggle("400");
        $(this).parent().siblings().find("ul").slideUp("400");
    });
    $(".pagetitle .cate").click(function(){
        $(this).find(".on").removeClass("on").siblings().addClass("on");
        $(".catemenu").stop(true,false).slideToggle("400");
    });
     $('.slider-for').slick({
        autoplay:true, 
        infinite:false,
        asNavFor:'.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow:4,
        arrows:false,   
        infinite:false,     
        asNavFor:'.slider-for', 
        focusOnSelect:true,  
    });
     $(".slick_pdmenu").slick({
        dots:false,
        autoplay:false,        
        infinite: false,
        arrows:false,
        slidesToShow:4,
    });
    $(".pdeatilmenu .slick-slide").click(function(){
        var index = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".pdetailIntro .cp").eq(index).addClass("cur").siblings().removeClass("cur"); 
    });
    new WOW().init();
});