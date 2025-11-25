//product list

$(function(){

	$("#secondNav").hover(function(){

		$(this).children("ul").stop().fadeToggle();

	})

})

//nav second

$(function(){

	$("#secondNav2").hover(function(){

		$(this).children("ul").stop().fadeToggle();

	})

})

//wapMenu

$(function(){

	$(".wapMenu").click(function(){

		$(".nav1").height($(document).height()-70);

		$(".nav1").fadeToggle(600);

	})

})

//

$(function() {

	// 悬浮窗口

	$(".yb_conct").hover(function() {

		$(".yb_conct").css("right", "5px");

		$(".yb_bar .yb_ercode").css('height', '200px');

	}, function() {

		$(".yb_conct").css("right", "-90px");

		$(".yb_bar .yb_ercode").css('height', '53px');

	});

	// 返回顶部

	$(".yb_top").click(function() {

		$("html,body").animate({

			'scrollTop': '0px'

		}, 300)

	});

});

//honor

/*if(screen.width>801){

	var dgpro = new ScrollPicleft();

	dgpro.scrollContId = "ScollName1"; // 内容容器ID""

	dgpro.arrLeftId = "LeftID1"; //左箭头ID

	dgpro.arrRightId = "RightID1"; //右箭头ID

	

	dgpro.frameWidth = 1120; //显示框宽度

	dgpro.pageWidth = 377; //翻页宽度

	dgpro.speed = 10; //移动速度(单位毫秒，越小越快)

	dgpro.space = 10; //每次移动像素(单位px，越大越快)

	dgpro.autoPlay = true; //自动播放

	dgpro.autoPlayTime = 3; //自动播放间隔时间(秒)

	

	dgpro.initialize(); //初始化

}

if(screen.width<800){

	var dgpro = new ScrollPicleft();

	dgpro.scrollContId = "ScollName1"; // 内容容器ID""

	dgpro.arrLeftId = "LeftID1"; //左箭头ID

	dgpro.arrRightId = "RightID1"; //右箭头ID

	

	dgpro.frameWidth = 320; //显示框宽度

	dgpro.pageWidth = 240; //翻页宽度

	dgpro.speed = 10; //移动速度(单位毫秒，越小越快)

	dgpro.space = 10; //每次移动像素(单位px，越大越快)

	dgpro.autoPlay = true; //自动播放

	dgpro.autoPlayTime = 3; //自动播放间隔时间(秒)

	

	dgpro.initialize(); //初始化

}*/

