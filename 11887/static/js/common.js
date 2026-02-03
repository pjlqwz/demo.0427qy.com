$(document).ready(function(){
      //返回顶部
      $("#gototop").click(function(){
          $("html,body").animate({scrollTop :0}, 800);return false;
      });
      $("#gotoinquiry").click(function(){
            $("html,body").animate({scrollTop:$("#inquiry").offset().top-70},800);return false;
      });

      // 搜索
      $("#search_btn").click(function(){
          $("#topsearch").slideToggle();$("html,body").animate({scrollTop :0}, 800);
      });

      // 友情链接
      $("#link_btn").click(function(){
          if ($(".link_list").css('display') == "none"){
            $("#link_btn").addClass("glyphicon-minus");
          }else{
            $("#link_btn").removeClass("glyphicon-minus");
          }
          $(".link_list").slideToggle();      
      });

      $("#tags_btn").click(function(){
          if ($(".tags_rows").css('display') == "none"){
            $("#tags_btn").addClass("glyphicon-minus");
          }else{
            $("#tags_btn").removeClass("glyphicon-minus");
          }
          $(".tags_rows").slideToggle();      
      });

      if($(window).width()>768){
          //鼠标划过就展开子菜单
          $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).slideDown();
          }, function() {
            $(this).find('.dropdown-menu').stop(true, true).slideUp();
          });    
      }

      //scrollTop
      $(window).scroll(function(){
          var scrolls = $(window).scrollTop()
          if (scrolls > 60) {
            $("#top_nav").addClass("navbar-up");
            $(".flash").addClass("flash-up");
          }else{
            $("#top_nav").removeClass("navbar-up");
            $(".flash").removeClass("flash-up");
          }
      });
  
});