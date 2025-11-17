window.document.menuStyle = false;
var hasclick1=false,hasclick2=false,hasclick3=false,hasclick4=false,hasclick5=false,hasclick6=false;
var nav=function(){
	if(hasclick1){$('.mobile-nav-toggle').unbind('click');}
	$('.mobile-nav-toggle').click(function(){
		 if( $(this).hasClass('open')){
			$(this).removeClass('open');
		 	$('.col-right').removeClass('show');
			$('.w-admin-nav').removeClass('show');
			$('.login-navTel').removeClass('show');
			if($(window).width()<960){
				$('.submenu').css({'left':'100%'});
			}
		 }else{
			$(this).addClass('open');
			$('.col-right').addClass('show');
			$('.w-admin-nav').addClass('show');
			$('.login-navTel').addClass('show');
		 }
		 return false;
	});
	if(hasclick1){$('.w-admin-nav li .fa').unbind('click');}
	var subMH,thisT,mT;
	if($(window).width()>960){
		$('.w-nav li').hover(function(){
			thisT = $(this).offset().top-$(window).scrollTop();
			subMH = $(this).children('.submenu').children('ul').innerHeight();
			if($(window).height()> (thisT+subMH)){
				mT=thisT;
			}else{
				mT=$(window).height()-subMH;
			}
			subMH = $(this).children('.submenu').children('ul').css({'margin-top':mT});
		});
	}
	$('.w-nav li .li-parent-div .fa').click(function(){
		if($(window).width()<960){
			$(this).parent().parent().siblings('.submenu').animate({'left':0},500);
			return false;
		}
	});
	if(hasclick1){$('.w-nav .back-div').unbind('click');}
	$('.w-nav .back-div').click(function(){
		$(this).parent('.submenu').animate({'left':'100%'},500);
		return false;
	});
	$("body").bind("click", function (e) {
		 e = window.event || e; // 兼容IE7
		 obj = $(e.srcElement || e.target);
		 if ($(obj).is(".w-header *")) {
		   } else {
			$('.col-right').removeClass('show');
			$('.w-admin-nav').removeClass('show');
			$('.login-navTel').removeClass('show');
			$('.mobile-nav-toggle').removeClass('open');
		 }
	});
	hasclick1=true;
}
var conMenu=function(){
	$('.w-com-menu-H li').hover(function(){
	    var $conSubMenu=$(this).children('.ul-submenu');
		$conSubMenu.show();
		var wid_parent=$conSubMenu.parent().width();
		var wid_parent_left=$(this).offset().left;
		var window_w=$(window).width();
		var wid=0;
		var $conSubMenuli=$conSubMenu.children('ul').children('li');
		for(var j=0; j<$conSubMenuli.length;j++){
			var li_width=$conSubMenuli.eq(j).width();
			wid=wid+li_width;
		}
		if(wid_parent_left>(wid-wid_parent)/2){
			if((window_w-wid_parent_left)>(wid+wid_parent)/2){
		        $conSubMenu.css({'width':wid+1,'left':-(wid-wid_parent)/2});
			}else{
				$conSubMenu.css({'width':wid+1,'right':-(window_w-wid_parent_left-wid_parent)});
			}
		}else{
			$conSubMenu.css({'width':wid+1,'left':-wid_parent_left});
		}
		},function(){	
		  $(this).children('.ul-submenu').removeAttr("style");
	});
	if(hasclick4 || hasclick5){$('.w-com-menu li .div-parent .fa').unbind('click');}
	$('.w-com-menu-V > .w-com-menu-in > .ul-parent > li').mouseleave(function(){
		$(this).find('.ul-submenu').find('.open').removeClass('open');
		$(this).find('.ul-submenu').find('.ul-submenu').slideUp();
	});
	$('.w-com-menu-V li .div-parent .fa').click(function(){
		$(this).parent().parent().siblings().find('.ul-submenu').slideUp();
		$(this).parent().parent().siblings().removeClass('open');
		$(this).parent().parent().siblings().find('.open').removeClass('open');
		if($(this).parent().siblings('.ul-submenu').is(':hidden')){
			$(this).parent().siblings('.ul-submenu').slideDown();
			$(this).parent().parent().addClass('open');
		}else{
			$(this).parent().siblings('.ul-submenu').slideUp();
			$(this).parent().siblings('.ul-submenu').find('.ul-submenu').slideUp();
			$(this).parent().parent().removeClass('open');
			$(this).parent().parent().find('.open').removeClass('open');
		}
		return false;
	});
	hasclick4=true;
}
var conMenu_tel=function(){
	if(hasclick5 || hasclick4){$('.w-com-menu .fa-plus').unbind('click');}
	$('.w-com-menu .fa-plus').click(function(){
		$(this).parent().parent().siblings('li').find('.ul-submenu').slideUp();
		$(this).parent().parent().siblings('li').removeClass('open');
		$(this).parent().parent().siblings('li').find('.open').removeClass('open');
		if($(this).parent().siblings('.ul-submenu').is(':hidden')){
			$(this).parent().siblings('.ul-submenu').slideDown();
			$(this).parent().parent().addClass('open');
		}else{
			$(this).parent().siblings('.ul-submenu').slideUp();
			$(this).parent().siblings('.ul-submenu').find('.ul-submenu').slideUp();
			$(this).parent().parent().removeClass('open');
			$(this).parent().parent().find('.open').removeClass('open');
		}
		return false;
	});
	hasclick5=true;
}
$(function(){
	nav();
	if($('.banner').is(':visible')){		
		}else{
			$('.w-header').addClass('header-nobanner');
	    }
    if($(window).width()>960){
		if($(window).scrollTop()> 5){
			$('.w-header-common').addClass('mini');
		}
	}
	$(window).scroll(function(){
		if($(window).width()>960){
			if($(window).scrollTop()> 5){
			    $('.w-header-common').addClass('mini');
			}else{
				$('.w-header-common').removeClass('mini');
			}
		}
	});
	if($(window).width()>767){
	    conMenu();
	}else{
	    conMenu_tel();
	}
	if($(window).width()<960){
		$('.col-right').css({'padding-bottom':$('.topLogBoxTel').height()});
		$('.w-header-common .w-nav').css({'height':$(window).height()-parseInt($('.col-right').css('padding-top')) - parseInt($('.topLogBoxTel').height())}); 
	}else{
	    $('.w-header-common .w-nav').css({'height':$(window).height()-parseInt($('.col-right').css('padding-top'))}); 
	}
	$('.body-login-special .w-nav').css({'height':$(window).height()-parseInt($('.login-navTel').css('padding-top'))});
	$('.product-detail-top3 .product-detail-image-big .magnifier').remove();
    $('.product-detail-top3 .product-detail-image-big img').attr('data-zoom',false);
	var oldWidth=$(window).width();
	$(window).resize(function(){
		var newWidth=$(window).innerWidth();
		nav();
		if(oldWidth>767){
		    if(newWidth<768){
			   $('.w-com-menu-H .ul-submenu').removeAttr("style");
			   $('.w-com-menu li').unbind('mouseenter').unbind('mouseleave');
			   $('.w-com-menu-V .ul-submenu').slideUp();
			   $('.w-com-menu-V .open').removeClass('open');
			   conMenu_tel();
		    }
		}else{
			if(newWidth>768){
		       $('.w-com-menu .ul-submenu').removeAttr("style");
			   $('.w-com-menu .ul-submenu').removeAttr("style");
			   $('.w-com-menu .open').removeClass('open');
			   conMenu();
		       }
		}
		if($(window).width()<960){
			$('.col-right').css({'padding-bottom':$('.topLogBoxTel').height()});
			$('.w-header-common .w-nav').css({'height':$(window).height()-parseInt($('.col-right').css('padding-top')) - parseInt($('.topLogBoxTel').height())}); 
		}else{
			$('.w-header-common .w-nav').css({'height':$(window).height()-parseInt($('.col-right').css('padding-top'))}); 
		}
		$('.body-login-special .w-nav').css({'height':$(window).height()-parseInt($('.login-navTel').css('padding-top'))});
		oldWidth=$(window).width();
	});
});
