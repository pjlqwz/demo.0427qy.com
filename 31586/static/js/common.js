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


