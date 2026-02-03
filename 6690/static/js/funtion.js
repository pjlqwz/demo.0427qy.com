
$(function () {
   
   /*********导航下拉框**********/
    $(".nav_box > .yiji").hover(function () {
        $(this).find(".libox").stop(true, false).slideDown();
    },function () {
        $(this).find(".libox").slideUp();
    });
    // 搜索框
    $(".searchbox").hover(function () {
       $(".searchbox .sear").addClass("input_h");
    },function(){
       $(".searchbox .sear").stop(true, true).delay(400).removeClass("input_h");
    });

   // banner
     $(".single-item").slick({
    });
   
   // 产品展示轮播
    $(".multiple-items").slick({
         infinite:true,//循环
         slidesToShow:4,//显示个数
         slidesToScroll:4,//轮播个数
         infinite: false,
         dots:true,//指示点
         speed: 300,
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             }]
     });

    $(".link-items").slick({
         infinite:true,//循环
         slidesToShow:4,//显示个数
         slidesToScroll:4,//轮播个数
         infinite: false,
         speed: 300,
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 4,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 991,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             }]
     });
    //隐藏导航跟wrap的切换
    $(".mol_navbutton,.f_navbtn").click(function(){
      $(".left_nav").removeClass("page-prev").addClass("page-in");
      $(".wrap").removeClass("page-active").addClass("page-next page-in")
      $(".opacity2").show()
      $("#wrap_index").height($(window).height())
      // pageSlideOver();
    })
    $(".opacity2").on('click touchstart',function(){
      $(".left_nav").addClass("page-prev page-out")
      $(".wrap").removeClass("page-next").addClass(" page-out")
      $(".opacity2").hide()
      $("#wrap_index").css("height","auto")
      // pageSlideOver();
      return false;
    });
    // 二级下拉
      $(".ericon").click(function(){
          $(this).toggleClass("xz").parents().siblings().find(".ericon").removeClass("xz");
          $(this).parents().siblings().find(".menu_body").hide(300);
          $(this).siblings(".menu_body").slideToggle()
      })
    // 三级下拉
      $(".thricon").click(function(){
          $(this).toggleClass("tz").parents().siblings().find(".thricon").removeClass("tz");
          $(this).siblings(".er").toggleClass("aon");
          $(this).parents().siblings().find(".thr_body").hide(300);
          $(this).siblings(".thr_body").slideToggle()
      })
    // 返回顶部
    $(".back_top").click(function(){
        $("html,body").animate({scrollTop:'0px'},800);
    });
    
    // 内页侧边导航
    $(".one > li > a").click(function(){
       $(this).toggleClass("ez").parents().siblings().find("a").removeClass("ez");
       $(this).parents().siblings().find(".second").hide(300);
       $(this).siblings(".second").toggle(300);
    })
    $(".second > li > a").click(function(){
        $(this).toggleClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        $(this).parents().siblings().find(".third").hide(300);  
        $(this).siblings(".third").toggle(300); 
    })
    $(".third > li > a").click(function(){
        $(this).toggleClass("xuan").parents().siblings().find("a").removeClass("xuan");
        $(this).parents().siblings().find(".thr_nr").hide(); 
        $(this).siblings(".thr_nr").toggle();
    })
    // 手机内页导航下拉
      $(".nav_btn").click(function(){
          $(".con-left-nav").slideToggle()
          $(this).toggleClass("up")
      })

     // 产品多图详情
      $('.slider-for').slick({
          slidesToShow:1,
          slidesToScroll:1,
          arrows:true,
          fade:true,
          asNavFor:'.slider-nav'
      });
      $('.slider-nav').slick({
          slidesToShow:4,
          slideToScroll:1,
          asNavFor:'.slider-for',
          focusOnSelect:true
      });
    
      if($('.slick2 .slider-nav .slick-list .slick-track').children(".slick-slide").length == 0){
          $(".slick2").hide();
      }
    


    // animate鼠标滚动渐入
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    
    
    
});

