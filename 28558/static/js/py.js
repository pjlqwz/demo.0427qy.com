//Content
$(function(){
	$(".quick dl").each(function(){
	var index=$(this).index();
	$(this).hover(function(){
		$(this).children("dd").stop(true).css("display","block");
		},function(){
		$(this).children("dd").stop(true).css("display","none");
		})
	})
})
//
$(function(){
	$(".inPro dl dd").height($(".inPro dl dt img").height());
	$(".inPro dl").hover(function(){
		$(this).children("dd").css({"height":"100%"});
		$(this).children("dd").fadeToggle(300);
	})
})
//
$(function(){
	$(".parameterCon dl dt").click(function(){
		$(this).next("dd").fadeToggle(300);
	})
})
//wapMenu
$(function(){
	$(".wapMenu").click(function(){
		$(".nav").height($(window).height()-70);
		$(".nav").fadeToggle(600);
	})
})
//
$(function() {
	// 悬浮窗口
	$(".yb_conct").hover(function() {
		$(".yb_conct").css("right", "5px");
		$(".yb_bar .yb_ercode").css('height', '200px');
	}, function() {
		$(".yb_conct").css("right", "-127px");
		$(".yb_bar .yb_ercode").css('height', '53px');
	});
	// 返回顶部
	$(".yb_top").click(function() {
		$("html,body").animate({
			'scrollTop': '0px'
		}, 300)
	});
});
//banner
$('.DB_tab25').DB_tabMotionBanner({
	key:'b28551',
	autoRollingTime:6000,                            
	bgSpeed:500,
	motion:{
		DB_1_1:{top:50,opacity:0,speed:1000,delay:500},
		DB_1_2:{top:50,opacity:0,speed:1000,delay:1000},
		DB_1_3:{top:50,opacity:0,speed:1000,delay:1500},
		DB_1_4:{top:50,opacity:0,speed:1000,delay:2000},
		DB_2_1:{top:50,opacity:0,speed:1000,delay:500},
		DB_2_2:{top:50,opacity:0,speed:1000,delay:1000},
		DB_3_1:{top:80,opacity:0,speed:1000,delay:500},
		DB_3_2:{top:50,opacity:0,speed:1000,delay:1000},
		DB_4_1:{top:80,opacity:0,speed:1000,delay:500},
		DB_4_2:{top:50,opacity:0,speed:1000,delay:1000},
		DB_5_1:{top:80,opacity:0,speed:1000,delay:500},
		DB_5_2:{top:50,opacity:0,speed:1000,delay:1000},
		DB_6_1:{top:50,opacity:0,speed:1000,delay:500},
		DB_6_2:{top:50,opacity:0,speed:1000,delay:1000},
		end:null
	}
})


