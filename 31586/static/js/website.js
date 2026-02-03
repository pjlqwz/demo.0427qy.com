$(document).ready(function(){
	//website_box6
	jQuery(".website_box6_tab").slide({titCell:".bt li",mainCell:".nr",delayTime:0});
	jQuery(".website_box6_our").slide({titCell:".bt li",mainCell:".nr ul",effect:"leftLoop"});
	//website_nav
	$('.website_nav li').each(function(index) {
		$(this).click(function() {
			$("html,body").animate({scrollTop:$(".website_box"+(index+1)).offset().top-110}, 500);
		});
	});
	//website_cate
	$(window).scroll(function() { 
		var targetTop = $(this).scrollTop();
		var thisTop = $(".header").height()+$(".website_ban").height();
		if (targetTop >= thisTop){
			$('.website_cate').addClass("website_cate_on");
			$("#website_cate").show();
		}else{
			$('.website_cate').removeClass("website_cate_on");
			$("#website_cate").hide();
		};
	});
 
});