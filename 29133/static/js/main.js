$(function(){
 
	resize();
	$(window).resize(function(event) {
		resize();
	});
	
	$(".news_list li").addClass("animated fast").attr("data-animation", "fadeInUp")
	$(".banner_page2 img").addClass("scaleBigToSmall")
	$(".gotop").click(function () {
	    $("html,body").stop().animate({ scrollTop: 0 }, 800)
	})
	
	$(".menu li").hover(function () { if ($(window).width() > 1100) { $(this).find(".drop").stop().slideToggle(); } })
	$(".menu li").click(function () { if ($(window).width()< 1100) { $(this).find(".drop").stop().slideToggle(); } })

	//$(".banner").each(function () {
	//    if ($(this).find(".item").length > 1) {
	//        var owl = $(this).owlCarousel({ items: 1, loop: true, video: true, autoplay: false });
	     
	//        owl.on('changed.owl.carousel', function (event) {
	//            owl.find(".animated").each(function () { $(this).removeClass($(this).attr("data-animation")); })
	//            owl.find(".owl-item").eq(event.item.index).find(".animated").each(function () { $(this).addClass($(this).attr("data-animation")); });
	//        })
	//    }
	//})  
	if ($(".link_list .item").length > 1) { $(".link_list").owlCarousel({ items: 1 }) };
	$(".banner .owl-item").eq(2).find(".animated").each(function () {
	    $(this).addClass($(this).attr("data-animation"));
	})
	$(window).scroll(function () {
	    $(".animated").each(function () {
	        if ($(this).offset().top - $(window).scrollTop() > $(window).height() - 20)
	            $(this).removeClass($(this).attr("data-animation"));
	        else
	            $(this).addClass($(this).attr("data-animation"));
	    })
	})
	$(".animated").each(function () {
	    if ($(this).offset().top - $(window).scrollTop() > $(window).height() - 20)
	        $(this).removeClass($(this).attr("data-animation"));
	    else
	        $(this).addClass($(this).attr("data-animation"));
	})

	$(".menu_wrap").click(function () { $(".header").toggleClass("h_menu") });

	$(".page_news ul li").hover(function () {
	    $(".page_news ul li .drop").stop().slideUp();
	    $(this).find(".drop").stop().slideDown();
	}, function () { })

	$(".ui_list .list:odd").addClass("odd");
	$(".ui-homepage .ui-page:even .list").addClass("odd")

	$(".header_animate .h_a1").each(function (e) {
	    $(this).addClass("animated").addClass("fadeInUp").addClass("slow" + e);
	})
	$(".banner_page2 .item").addClass("on");
	var t = 0;
	var time = setInterval(function () {
	    $(".page_list4 ul li").removeClass("on").eq(t).addClass("on");
	    if (t >= $(".page_list4 ul li").length-1) t = 0; else t++;
	}, 1500);
	
});

/*main*/
//

function font() {


}
$.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
        // set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from: $(this).data('from'),
            to: $(this).data('to'),
            speed: $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals: $(this).data('decimals')
        }, options);

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

        // references & variables that will change with each update
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};

        $self.data('countTo', data);

        // if an existing interval can be found, clear it first
        if (data.interval) {
            clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        // initialize the element with the starting value
        render(value);

        function updateTimer() {
            value += increment;
            loopCount++;

            render(value);

            if (typeof (settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
                // remove the interval
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;

                if (typeof (settings.onComplete) == 'function') {
                    settings.onComplete.call(self, value);
                }
            }
        }

        function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
};
function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
}
function formatter(value, settings) {
    return value.toFixed(settings.decimals);
}

/*call*/
//
function resize(){
	var ht=$(window).height();
	 
} 