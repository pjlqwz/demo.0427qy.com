$(".menu-button").on("click",function(e){var c_w_sb=$(window).height();$('.flexnav').height(c_w_sb);$(this).toggleClass("cur");$('.flexnav').toggleClass('show');e.stopPropagation();})
$(function(){$(".header .bocweb-nav .nav0").on("click",function(e){$(".header-down").addClass("active");e.stopPropagation();})
$(".nav_btn_wrap .nav_btn").on("click",function(e){$(".header-down").addClass("active");e.stopPropagation();})
$(document).on("click",function(){$(".header-down").removeClass("active");})
$(".header-down .cha").on("click",function(){$(".header-down").removeClass("active");})
$(".header-down .downbox").on("click",function(e){e.stopPropagation();})
$(".fixed-erweima").on("click",function(e){$(this).fadeOut(1100);$(".fixed-erweima .imgbox").delay(1200).removeClass('active');})
$(".fixed-erweima .imgbox").on("click",function(e){e.stopPropagation();})
$(".wxk0").on("click",function(){$(".fixed-erweima").fadeIn(1100);$(".header-down").removeClass("active");$(".fixed-erweima .imgbox").delay(1500).addClass('active');})
$(".top_search_icon").on("click",function(){$(".search_wrap").addClass('show1');$("header").addClass('hide1');})
$(".search_close").on("click",function(){$(".search_wrap").removeClass('show1');$("header").removeClass('hide1');})})
$(function(){$(window).scroll(function(){var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;var eltop=$(".f_pf1").find(".totop");if(scrollTop>0){eltop.show();}else{eltop.hide();}});$(".f_pf1").find(".totop").click(function(){var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;if(scrollTop>0){$("html,body").animate({scrollTop:0},"slow");}});});var swiper1=new Swiper('.swiper-container',{autoplay:3000,loop:true,slidesPerView:1,spaceBetween:0,breakpointsInverse:true,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',pagination:'.swiper-pagination',observer:true,observeParents:true,autoplayDisableOnInteraction:false,paginationClickable:true,breakpoints:{320:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:1,spaceBetween:0},1080:{slidesPerView:1,spaceBetween:0},1200:{slidesPerView:1,spaceBetween:0}}});var swiper4=new Swiper('.swiper-container4',{autoplay:3000,loop:true,slidesPerView:3,spaceBetween:40,breakpointsInverse:true,nextButton:'.swiper-button-next2',prevButton:'.swiper-button-prev2',paginationClickable:true,observer:true,observeParents:true,autoplayDisableOnInteraction:false,breakpoints:{320:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:1,spaceBetween:0},1023:{slidesPerView:2,spaceBetween:30},1080:{slidesPerView:3,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:30}}});$(".idx_proflli em").click(function(){if($(this).parents('.idx_proflli').hasClass('on')){$(this).parents('.idx_proflli').removeClass('on').find('div').stop().slideUp(300);}else{$(this).parents('.idx_proflli').find('div').removeAttr("style");$(this).parents('.idx_proflli').addClass('on').find('div').stop().slideDown(300);}});$(".eyidx_News .eyidxnews_tit ul li").hover(function(){var tab_flag1=$(this).index();$(this).addClass('on').siblings().removeClass('on');$('.eyidx_News .eyidxnews_list .list_Part').eq(tab_flag1).addClass('on').siblings().removeClass('on');},function(){});$('.e_top').click(function(){$('html,body').animate({scrollTop:0},500);return false})
var swiper2=new Swiper('.ab_honor .wiper-container3',{autoplay:3000,loop:true,slidesPerView:4,spaceBetween:20,breakpointsInverse:true,nextButton:'.ab_honor .swiper-button-next',prevButton:'.ab_honor .swiper-button-prev',pagination:'.ab_honor .swiper-pagination',paginationClickable:true,observer:true,observeParents:true,autoplayDisableOnInteraction:false,breakpoints:{414:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:2,spaceBetween:10},1023:{slidesPerView:2,spaceBetween:10},1399:{slidesPerView:3,spaceBetween:20}}});$(".cp_type .bd ul li p span").click(function(){if($(this).parents('li').hasClass('on')){$(this).parents('li').removeClass('on').find('div').stop().slideUp();}else{$(this).parents('li').find('div').removeAttr("style");$(this).parents('li').addClass('on').find('div').stop().slideDown();}});if(document.body.clientWidth<=1079){$(".cp_type .hd").click(function(){if($(this).hasClass('on')){$(this).next('div').removeAttr("style");$(this).removeClass('on').next('div').stop().slideUp();}else{$(this).next('div').removeAttr("style");$(this).addClass('on').next('div').stop().slideDown();}});}
$('.kfView .toTop').click(function(){$('html,body').animate({scrollTop:0},500);return false})
function copyArticle(event){const range=document.createRange();range.selectNode(document.getElementById('copy'));const selection=window.getSelection();if(selection.rangeCount>0)selection.removeAllRanges();selection.addRange(range);document.execCommand('copy');alert('成功复制QQ号码');}
$(document).ready(function(){$(".nav li a").each(function(){$this=$(this);if($this[0].href==String(window.location)){$this.addClass("navon");$("#navId1").removeClass("navon")
if($this.attr('id')=="t1"){$("#navId1").addClass("navon")}}});});$('.nav_menu').on('click',function(){$('.top_right').toggleClass('open');$(this).toggleClass('open');});$('.header-nav a, .nav-mobile .demo').on('click',function(){$('.nav-mobile').removeClass('open');$('.burger').removeClass('open');});if(document.body.clientWidth<=1023){$(".lff_top .lfftop_main .top_right .nav li> i").click(function(){if($(this).parents('li').hasClass('on')){$(this).parents('li').removeClass('on').find('div').stop().slideUp(300);}else{$(this).parents('li').find('div').removeAttr("style");$(this).parents('li').addClass('on').find('div').stop().slideDown(300);}});}
$(".top_search").find("em").click(function(){if($(".top_right").attr("id")!="showopen")
{$(".top_right").attr("id","showopen");$("#js-search-overlay").fadeIn();}});$("#js-search-overlay").click(function(){$(this).fadeOut();$(".top_right").attr("id","");})
$(".moblie-search-close").click(function(){$("#js-search-overlay").fadeOut();$(".top_right").attr("id","");})
$(document).ready(function() {
    // 为有子菜单的栏目添加点击事件
    $(".cp_type .bd ul li p").on("click", function(e) {
      // 获取点击的元素
      var $this = $(this);
      // 获取父级li元素
      var $parentLi = $this.parent();
      
      // 检查是否有下级栏目
      if ($parentLi.find("div").length > 0) {
        e.preventDefault(); // 阻止默认链接行为
        
        // 如果当前已经是展开状态，则收起
        if ($parentLi.hasClass("on")) {
          $parentLi.removeClass("on").find("div").stop().slideUp(300);
        } else {
          // 关闭其他已展开的菜单（可选，取消注释下面两行可实现手风琴效果）
          // $(".cp_type .bd ul li.on").removeClass("on").find("div").stop().slideUp(300);
          
          // 展开当前点击的菜单
          $parentLi.addClass("on").find("div").stop().slideDown(300);
        }
      }
    });
    
    // 页面加载时自动展开当前活动的菜单
    $(".cp_type .bd ul li.active").addClass("on").find("div").show();
    
    // 如果没有活动菜单，则默认展开第一个有下级栏目的菜单
    if ($(".cp_type .bd ul li.active").length === 0) {
      var $firstWithChildren = $(".cp_type .bd ul li").filter(function() {
        return $(this).find("div").length > 0;
      }).first();
      
      if ($firstWithChildren.length > 0) {
        $firstWithChildren.addClass("on").find("div").show();
      }
    }
  }); 