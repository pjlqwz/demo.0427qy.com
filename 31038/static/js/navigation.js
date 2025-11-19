//头部
$(function(){
	$('.sub-nav').before('<em class="dot"><i class="fa fa-angle-down"></i></em>');
	$('.container .mnav').appendTo('.m-wrap');
	$('.m-btn').click(function() {
        $('#m-nav').toggleClass("m-open").siblings("#m-nav").removeClass("m-open");
        $('#mask').slideToggle(0).siblings("#mask").slideToggle(0);
        $('body').toggleClass("open").siblings("body").removeClass("open");
    })
	$('.dot').click(function(e) {
		dropSwift($(this), '.sub-nav');
		e.stopPropagation();
	});  
	function dropSwift(dom, drop) {
		dom.next().slideToggle();
		dom.parent().siblings().find('.fa').removeClass('open');
		dom.parent().siblings().find(drop).slideUp();
		var iconChevron = dom.find('.fa');
		if (iconChevron.hasClass('open')) {
			iconChevron.removeClass('open');
		} else {
			iconChevron.addClass('open');
		}
	}
	$('.nav-bar li').hover(function(){
       $(this).addClass('on');  
     },
	 function(){
       $(this).removeClass('on'); 
    });

	$('#mask').click(function(){
	  $(this).hide();
	  $('.search-bg').hide();
	  $('#m-nav').removeClass("m-open");
	  $('body').removeClass("open");
	});
	
  	var new_scroll_position = 0;
	var last_scroll_position;
	var header = document.getElementById("header");
	window.addEventListener('scroll', function(e) {
	  last_scroll_position = window.scrollY;
	  // Scrolling down
	  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
		header.classList.add("slideUp");
	  // Scrolling up
	  } else if (new_scroll_position > last_scroll_position) {
		header.classList.remove("slideUp");
	  }
	  new_scroll_position = last_scroll_position;
	});
	
});
//导航高亮
$(function(){
    var surl = location.href;
	var surl2 = $("#place a:eq(1)").attr("href");
	$("nav ul li a").each(function() {
		if ($(this).attr("href")==surl || $(this).attr("href")==surl2) $(this).parent().addClass("active")
	});
});
//搜索
$(function(){
        var t = true
        $('.jz-search-btn').on('click', function () {
            t = !t;
            if (!t) {
                $(this).children().removeClass('fa-search')
                $(this).children().addClass('fa-close')
                $('.b-nav-search_wrap').animate({top: $('#nav-box').height()+'px'}, 200)
            } else {
                $(this).children().removeClass('fa-close')
                $(this).children().addClass('fa-search')
                $('.b-nav-search_wrap').animate({top: '0px'}, 200)
            }
        })
});
//夜间模式
$(document).ready(function(){
		if(zbp.cookie.get('night') == '0'){
			$('body').removeClass('night');
			$(".jz-night-btn a").attr("title","关灯");
		}else if(zbp.cookie.get('night') == '1'){
			$('body').addClass('night');
			$(".jz-night-btn a").attr("title","开灯");
		}
		//系统暗黑模式自动适配,部分浏览器支持
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			zbp.cookie.set('night','0');
			zbp.cookie.set('nightz','1');
			if(zbp.cookie.get('nighty') == '0'){
				$('body').removeClass('night');
				$(".jz-night-btn a").attr("title","关灯");
			}else if(zbp.cookie.get('nighty') == '1'){
				$('body').addClass('night');
				$(".jz-night-btn a").attr("title","系统已开启暗黑模式");
			}
		}else{
			zbp.cookie.set('nightz','0');	
			zbp.cookie.set('nighty','1');	
		}	
});
//夜间模式切换
function switchNightMode(){
    if(zbp.cookie.get('night') == '1' || $('body').hasClass('night')){
		if (zbp.cookie.get('nightz') == '1') {
        zbp.cookie.set('nighty','0');
		}else{
		zbp.cookie.set('night','0');
		}
        $('body').removeClass('night');
		$(".jz-night-btn a").attr("title","关灯");
    }else{
		if (zbp.cookie.get('nightz') == '1') {
		zbp.cookie.set('nighty','1');
		}else{
		zbp.cookie.set('night','1');
		}
        $('body').addClass('night');
		$(".jz-night-btn a").attr("title","开灯");
    }
};