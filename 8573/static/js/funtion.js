jQuery(document).ready(function($) {
	//计算navbar宽度
	// function menuwidth(){
	// 	var width=$(".nav" ).width();
	// 	var size=$(".nav > ul > li").size();
	// 	$(".nav > ul > li").css("width",Math.floor(width/size)+"px");
	// }
	// setTimeout(menuwidth,10);
	// $(window).resize(function(){
	// 	menuwidth();
	// });
	//nav横向下拉菜单栏
	$("ul.one li").hover(function(){
		$(this).addClass("cu")
		$(this).find("ul.two").stop(false,true).slideDown("400")
	},function(){
		$(this).removeClass("cu")
		$(this).find("ul.two").stop(false,true).slideUp("400")
	});

	$(".top_wx_btn").click(function(event) {
		$(".opacity_wx,.top_wx_area").fadeToggle(400)
	});
	$(".opacity_wx,.top_wx_head span").click(function(event) {
		$(".opacity_wx,.top_wx_area").fadeOut(400)
	});

	// about_slide
	$(".about_slide").slick({
		dots:true,//指示点
		autoplay:true,
		arrows:true,
		// customPaging: function (slider, i) {
		// 	console.log(slider);
		// 	return  (i + 1) + '/' + slider.slideCount;
		// },
		// infinite:false,
		autoplaySpeed:4500,//自动播放间隔
	});

	$(".pro_slide .pro_hd ul li").click(function(event) {
		$(this).addClass("on").siblings().removeClass("on");
		var index=$(this).index();
		$(".pro_slide .pro_bd > .pro_slick").eq(index).addClass("cur").siblings().removeClass("cur");
	});


	// case_slide
	$(".case_slide").slick({
		dots:false,//指示点
		autoplay:true,
		infinite: false,
		arrows:true,
		fade: true,
		autoplaySpeed:4000,//自动播放间隔
	});

	$(".news_slide").slick({
		dots:true,//指示点
		autoplay:false,
		infinite: false,
		arrows:false,
		slidesToShow: 3,
		autoplaySpeed:4500,//自动播放间隔
		responsive: [
			{
				breakpoint:991,
				settings: {
				slidesToShow: 2,
				}
			},
			{
				breakpoint:767,
				settings: {
				slidesToShow:1,
				}
			}]
	});

	// 上下内页分类一级
	$(".nav_item").slick({
		dots:false,//指示点
		slidesToShow:5,//显示个数
		slidesToScroll:5,//轮播个数
		infinite:false,
	});
	// 上下内页分类二级
	$(".cont_nav .one_a").click(function(){
		$(this).toggleClass("ez").parents().siblings().find("a").removeClass("ez");
		$(this).parents().siblings().find(".second").hide(300);
		$(this).siblings(".second").slideToggle(300);
	})
	$(".cont_nav .second a").click(function(){
		$(this).toggleClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
		$(this).parents().siblings().find(".third").hide(300);  
		$(this).siblings(".third").slideToggle(300); 
	})

	// 手机端
	// 内页分类下拉
	$(".model-classify-btn").click("touchstart",function(){
		$(this).toggleClass("down");
		$(".model-classify-nav").slideToggle()
	})
	// 内页分类二级
	$(".model-classify-nav .one_a").click("touchstart",function(){
		$(this).toggleClass("ez").parents().siblings().find("a").removeClass("ez");
		$(this).parents().siblings().find(".second").hide(300);
		$(this).siblings(".second").slideToggle(300);
	})
	$(".model-classify-nav .er_a").click("touchstart",function(){
		$(this).toggleClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
		$(this).parents().siblings().find(".third").hide(300);  
		$(this).siblings(".third").slideToggle(300); 
	})
});