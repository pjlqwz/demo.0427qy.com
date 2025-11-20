$(document).ready(function(){
	//设计案例切换
	$('.tabs-nav li').mouseover(function(){
		var liindex = $('.tabs-nav li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.tabs-content ul.tabs-pane').eq(liindex).fadeIn(150).siblings('ul.tabs-pane').hide();
		var liWidth = $('.tabs-nav li').width();
	});
	});
