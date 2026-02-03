
$(function () {

   // banner
     $(".mobBanner").swiper({
        autoplay : 3000,
        paginationClickable :true,
        pagination: '.page_ban',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    })

   /*********导航下拉框**********/
    $(".nav_box > .yiji").hover(function () {
        $(this).find(".libox").stop(true, false).slideDown();
    },function () {
        $(this).find(".libox").slideUp();
    });

    $(".carousel").carousel({
          interval: 4000
    })
    $(".carousel").carousel("next")
    $(".carousel").carousel("prev")
    
    // 头部
    $(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT >50) {
            $("#header").addClass("head_up");
        } else {
            $("#header").removeClass("head_up");
        }
    });

   
    /******滚回头部******/
    $(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT >300) {
            $(".back-top").addClass("on");
        } else {
            $(".back-top").removeClass("on");
        }
    });

    $(".back-top").click(function(){
        $("html,body").animate({scrollTop:'0px'},800);
    });
    //手机案例展示滚动
      $(".swiper-case").swiper({
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          pagination: '.page_case',
          autoplay : 3000,
          slidesPerView: 1,
          paginationClickable :true,
      });
    
    // 内页导航
    $(".nav_ny > .yiji").hover(function () {
        $(this).find(".libox").stop(true, false).slideDown();
    },function () {
        $(this).find(".libox").slideUp();
    });
    // 手机内页导航
    $(".mol_navs").click(function(){
         $(this).toggleClass("mol_navs2");
         $(this).siblings(".mol_nav_ny").slideToggle(300);
         
    })
    $(".molicon").click(function(){
         $(this).toggleClass("xz").parents().siblings().find(".molicon").removeClass("xz");
         $(this).parents().siblings().find(".mol_er").hide(300);
         $(this).siblings(".mol_er").toggle(300);
         
    }) 
    // 产品详情
    $(".swiper-pdec").swiper({
        autoplay : 3000,
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    });

     //隐藏导航跟wrap的切换
    $(".mol_navbutton,.navbtn,.navbtn1").click(function(){
      $(".left_nav").removeClass("page-prev").addClass("page-in");
      $(".wrap").removeClass("page-active").addClass("page-next page-in")
      $(".opacity2").show()
      // pageSlideOver();
    })
    $(".opacity2,.class-close").on('click touchstart',function(){
      $(".left_nav").addClass("page-prev page-out")
      $(".wrap").removeClass("page-next").addClass(" page-out")
      $(".opacity2").hide()
      // pageSlideOver();
      return false;
    });
    // 侧边二级导航下拉
      $(".ericon").click(function(){
          $(this).toggleClass("xz").parents().siblings().find(".ericon").removeClass("xz");
          $(this).parents().siblings().find(".menu_body").hide(300);
          $(this).siblings(".menu_body").slideToggle()
      })
    // 侧边三级下拉
      $(".thricon").click(function(){
          $(this).toggleClass("tz").parents().siblings().find(".thricon").removeClass("tz");
          $(this).parents().siblings().find(".thr_body").hide(300);
          $(this).siblings(".thr_body").slideToggle()
      })






     

   

    
    
   
    // animate鼠标滚动渐入
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    
    
    

    
    

     
    
});

