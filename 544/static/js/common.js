

$(document).ready(function(){
	
	///导航下拉
	$('.g_nav01 table tr td').mouseover(function(){
	
	$(this).find('.nav_tan').stop(true,true).slideDown();
	$(this).children("a").addClass("cur");
	});
	$('.g_nav01 table tr td').mouseleave(function(){
	
	$(this).find('.nav_tan').stop(true,true).slideUp('fast');
	$(this).children("a").removeClass("cur");
	});
	//搜索
	$(".isearch span").click(
	function(){
		$(".search01").toggle();
		}
	)
	
});


