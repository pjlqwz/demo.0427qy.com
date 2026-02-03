/*
* jquery.accordion 0.0.1
* Copyright (c) 2015 lengziyu http://lengziyu.com/
* Date: 2015-10-10
*/
(function($){
	$.fn.accordion = function(opts){
		//默认值
		var defaults = {
				max: "460px",
				min: "180px",
				speed: "300"
		}

		var opts = $.extend(defaults, opts);

		this.each(function(){
			var t = $(this),
					m = t.children(),
					c = m.children();

			//触发事件
			m.find(".active a").show();
			m.on("mouseenter","li",function(){
				$(this).addClass('active')
							.animate({width:opts.max},opts.speed)
							.find("a").show()
							.parent().siblings().removeClass('active')
							.animate({width:opts.min},opts.speed)
							.find("a").show();
			})
		})
	}

})(jQuery);