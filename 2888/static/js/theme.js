var hasclick1=false,hasclick2=false,hasclick3=false,hasclick4=false,hasclick5=false,hasclick6=false;
var nav=function(){
	if(hasclick1){$('.mobile-nav-toggle').unbind('click');}
	$('.mobile-nav-toggle').click(function(){
		 if( $(this).hasClass('open')){
			$(this).removeClass('open');
		 	$('.col-right').slideUp();
			$('.w-admin-nav').slideUp();
			$('.login-navTel').slideUp();
			$('.w-nav').find('.submenu').animate({'left':'100%'},500);
		 }else{
			$(this).addClass('open');
			$('.col-right').slideDown();
			$('.w-admin-nav').slideDown();
			$('.login-navTel').slideDown();
		 }
		 return false;
	});
	if(hasclick1){$('.w-admin-nav li .fa').unbind('click');}
	$('.w-nav li .li-parent-div .fa').click(function(){
		$(this).parent().parent().siblings('.submenu').animate({'left':0},500);
		return false;
	});
	if(hasclick1){$('.w-nav .back-div').unbind('click');}
	$('.w-nav .back-div').click(function(){
		$(this).parent('.submenu').animate({'left':'100%'},500);
		return false;
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
	if($(window).width()>767){
	    conMenu();
	}else{
	    conMenu_tel();
	}
	$('.col-right').show();
	$('.col-right').css({'padding-bottom':$('.topLogBoxTel').height()});
	$('.w-header-common .w-nav').css({'height':$(window).height()-parseInt($('.col-right').css('padding-top')) - parseInt($('.col-right').css('padding-bottom'))}); 
	$('.login-navTel').show();
	$('.body-login-special .w-nav').css({'height':$(window).height()-parseInt($('.login-navTel').css('padding-top'))});
	$('.col-right').hide();
	$('.login-navTel').hide();
	var oldWidth=$(window).width();
	$(window).resize(function(){
		var newWidth=$(window).innerWidth();
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
		$('.w-header-common .w-nav').css({'height':$(window).height()-parseInt($('.col-right').css('padding-top')) - parseInt($('.col-right').css('padding-bottom'))});
		$('.body-login-special .w-nav').css({'height':$(window).height()-parseInt($('.login-navTel').css('padding-top'))});
		oldWidth=$(window).width();
	});
});
