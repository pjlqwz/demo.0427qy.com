$(document).ready(function(){

	$(".nav_btn").click(function(){
		$(this).toggleClass("close");
		$(".nav").slideToggle(200);
	});	


	$('.tabimg_nav li').mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".tabimg_main .hide").hide().eq($('.tabimg_nav li').index(this)).show();
	});

	$(".search_btn").click(function(){
		$(".searchbj").fadeIn();
		$(".search_main").fadeIn();
	});

	$(".searchbj").click(function(){
		$(".searchbj").fadeOut();
		$(".search_main").fadeOut();
	});


	function DoTop(){

		$(".go-top").click(function(){
			$("body,html").animate({
				"scrollTop":"0px"
			},300)
		});
		
	}

	DoTop();

	var isScroll = {
		init: function (_el) {
			this.start(_el);
			$(window).on('scroll', function () {
				isScroll.start(_el)
			});
		},
	
		start: function (_el) {
			var self = this;
			$(_el).each(function () {
				var _self = $(this);
				var isScrollTop = $(window).scrollTop();
				var isWindowHeiget = $(window).height() * 0.75;
				var _class = $(this).data('animation');
				if (isScrollTop + isWindowHeiget > $(this).offset().top) {
					_self.addClass(_class);
				}
			});
		}
	}
	
	isScroll.init('.animated');
	

});
