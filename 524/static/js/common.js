$(document).ready(function(){
	// 友情链接
	$(".footer .friend_links a:last").css("border",0)

	// 行业资讯
	$(".inewslistl li .msg").eq(0).show();
	$(".inewslistl li .title").hover(function(){
		$(".inewslistl li .msg").hide();
		$(".titlecur").removeClass("titlecur");
		$(this).siblings().show();
		$(this).addClass("titlecur");

	})
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


