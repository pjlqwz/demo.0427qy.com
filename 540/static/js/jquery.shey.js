// JavaScript Document
$(function(){
	$(".ym_nva li ul").hide()
	$(".ym_nva li").hover(function(){
		$(this).children(".ym_nva li ul").stop().fadeToggle(300)
	})
	
	$(".sous").hide()
	$(".ym_ss span").click(function(){
		$(".sous").toggle()
	})
	
	
	//轮播	
    $(".banner").terseBanner();
	
	//返回顶部
	$(".zaix_box").hide()
	$(window).scroll(function(){
	if ($(window).scrollTop() > 100){
		$(".zaix_box").fadeIn(400)
	}else{
		$(".zaix_box").fadeOut(0)
	}
	})
	$("#top").click(function(){
	$("html,body").animate({
		scrollTop:"0px"
	},1000)
	})
})

function shuz(){
	try{
		var x=document.getElementById("sr").value;
		if(x=="")  throw"输入关键词";
	}
	catch(err){
		alert(err)
	}
}