$(document).ready(function(){
	//news_list
	$('.news_list img').each(function(index) {
		if($(this).attr("src")==$(".news_list").attr("data-pic")){
			$(this).parent().hide();
		};
	});


	//news_fd
	$(window).scroll(function() { 
		var newsleft = $(".news_left").height();
		var newsright = $(".news_right").height();
		var footheight = $(".footer").height()+35;
		var newsfd = $("#news_fd").height()
		var targetTop = $(this).scrollTop();
		var thisTop = $("#news_fdjs").offset().top;
		var gund=$("body").height()-newsfd-footheight-targetTop;
		if (newsleft>newsright && targetTop >= thisTop){
			$('#news_fd').attr("class","news_fd_on").removeAttr("style");
			if(gund<=0){
				$('#news_fd').attr("class","news_fd_off").css("bottom","20px");
			}
		}else{
			$('#news_fd').removeClass().removeAttr("style");
		};
	});
	
	
 
});