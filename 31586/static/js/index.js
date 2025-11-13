if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	new WOW().init();
};
$(document).ready(function(){
	
	//banner
	jQuery(".index_ban").slide({mainCell:".p",titCell:".x ul",effect:"fold",autoPage:"<li></li>",autoPlay:true});
 
	//indexbox
	jQuery(".indexbox1_gun").slide({mainCell:"ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:1,vis:4,delayTime:1500,interTime:3500});
	jQuery(".indexbox6").slide({mainCell:".indexbox6_nr",titCell:".indexbox6_bt li",effect:"left",trigger:"click",easing:"easeOutElastic"});
	jQuery(".indexbox8").slide({mainCell:".indexbox8_nr",effect:"left",easing:"easeOutElastic",pnLoop:false});
	jQuery(".indexbox8_xun").slide({mainCell:"ul",effect:"left",easing:"easeOutElastic",prevCell:".sprev",nextCell:".snext"});
	
	//index_ourcase
	jQuery(".index_ourcase_ban").slide({mainCell:".p",titCell:".x ul",effect:"leftLoop",autoPage:"<li></li>",autoPlay:true});
	
	//index_ser
	new Marquee("index_ser",0,1,null,null,50,1000);
	
	//foot_link
	$('.foot_link_down').click(function() {
		if($(this).hasClass("on")){
			$(".foot_link_xun dd").animate({"height": "30px"},200);
			$(this).removeClass("on");
		}else{
			$('.foot_link_xun dd').css("height", "auto");
			$(this).addClass("on");
		};
	});
	
	//index_mess
	$('.index_mess').click(function() {
		$(".top_mess").slideDown(200);
	});
	
 
});


$(document).ready(function(){

//header
//--------------------------
	//nav
	$(".nav .cur .li").css({color:"#fff"});
	$(".curbg").stop(true,false).animate({left:$(".nav .cur").position().left,width:$(".nav .cur").width()},200);
	$('.nav>ul>li').each(function(index) {
		$(this).hover(function() {
			var leftjl=$(this).position().left;
			var widththis=$(this).width();
			$(this).find(".li").css({color:"#fff"});
			if(!$(this).hasClass("cur")){
				$(".nav .cur .li").css({color:"#2A2B2c"});
			};
			$(".curbg").stop(true,false).animate({left:leftjl,width:widththis},200);
			$(this).find(".nav_sub").show();
		},
		function(){
			$(".nav .li").css({color:"#2A2B2c"});
			$(".nav .cur .li").css({color:"#fff"});
			$(".curbg").stop(true,false).animate({left:$(".nav .cur").position().left,width:$(".nav .cur").width()},200);
			$(this).find(".nav_sub").hide();
		});
	});
	//search
	$('.searchbut').click(function() {
		$('#searchinp').val("");
		$('.search').toggle(200);
	});
	//topmess
	$('.messbut,.fdright_nav_xq').click(function() {
		$('.top_mess').slideDown(200);
	});
	$('.top_mess_close').click(function() {
		$('.top_mess').slideUp(200);
	});
	
//backtop
//--------------------------
	$('.foot_top,.fdright_nav_top').click(function() {$('html,body').animate({'scrollTop':0},500);});

//fdright_nav
	$('.fdright_nav').fadeOut();
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('.fdright_nav').fadeIn();
		} else {
			$('.fdright_nav').fadeOut();
		};
	});	
});


