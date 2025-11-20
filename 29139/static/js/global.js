var at = window.location.hash.match(/#_alert=(.+?),(red|green|blue|yellow|gold)/);
if(at){
	_alert(decodeURI(at[1]),at[2]);
	window.location.hash = window.location.hash.replace(at[0],'');
}
function _alert(str, type){
	var date = new Date();
	now = date.getTime();
	$('body').append('<h6 class="alert '+type+'" time="'+now+'" style="z-index:'+now+';"><b>'+str+'</b></h6>');
	tha = $('h6.alert[time="'+now+'"]');
	tha.animate({top:78,opacity:1},288);
	(function(tha){
		window.setTimeout(function(){
			tha.remove();
		},
		tha.hasClass('green')?3000:2000);
	})(tha);
}


    function reveal() {
    	var reveals = document.querySelectorAll(".reveal");

    	for (var i = 0; i < reveals.length; i++) {
    		var windowHeight = window.innerHeight;
    		var elementTop = reveals[i].getBoundingClientRect().top;
    		var elementVisible = 150;

    		if (elementTop < windowHeight - elementVisible) {
    			reveals[i].classList.add("active");
    		} else {
    			reveals[i].classList.remove("active");
    		}
    	}
    }
    window.addEventListener("scroll", reveal);

    $(document).ready(function(){
    $('.eyoucms_gallery').magnificPopup({
    	delegate:'a',
    	type:'image',
    	gallery:{
    		enabled:true
    	}
    });
    $('.blog-modal-img').magnificPopup({
    	delegate:'a',
    	type:'image',
    	gallery:{
    		enabled:true
    	}
    });
    $(document).ready(function(){
    	$("#staticBackdropproduct .product_blog").on('show.bs.modal', function() {
    		setTimeout(function() {
    			$(function () {
    				function isScrolledIntoView($elem) {
    					var docViewTop = $(window).scrollTop();
    					var docViewBottom = docViewTop + $(window).height();
    					var elemTop = $elem.offset().top;
    					var elemBottom = elemTop + $elem.height();
    					return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    				}

    				function count($this) {
    					var current = parseInt($this.html(), 10);
    					if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
    						$this.html(++current);
    						$this.data("isCounting", true);
    						setTimeout(function () {
    							$this.data("isCounting", false);
    							count($this);
    						}, 20);
    					}
    				}

    				$(".num-counter").each(function () {
    					$(this).data('count', parseInt($(this).html(), 10));
    					$(this).html('0');
    					$(this).data("isCounting", false);
    				});

    				function startCount() {
    					$(".num-counter").each(function () {
    						count($(this));
    					});
    				};

    				$(window).scroll(function () {
    					startCount();
    				});

    				startCount();
    			});

    		}, 500);
    	});
    });

    $(function () {
    	function isScrolledIntoView($elem) {
    		var docViewTop = $(window).scrollTop();
    		var docViewBottom = docViewTop + $(window).height();
    		var elemTop = $elem.offset().top;
    		var elemBottom = elemTop + $elem.height();
    		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    	}

    	function count($this) {
    		var current = parseInt($this.html(), 10);
    		if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
    			$this.html(++current);
    			$this.data("isCounting", true);
    			setTimeout(function () {
    				$this.data("isCounting", false);
    				count($this);
    			}, 170);
    		}
    	}

    	$(".fast-counter").each(function () {
    		$(this).data('count', parseInt($(this).html(), 10));
    		$(this).html('0');
    		$(this).data("isCounting", false);
    	});

    	function startCount() {
    		$(".fast-counter").each(function () {
    			count($(this));
    		});
    	};

    	$(window).scroll(function () {
    		startCount();
    	});

    	startCount();
    });

    $(document).on("click", function(event){
    	if($(event.target).closest(".eyou_menubar").length){
    		$(".eyou_fixed-sidebar").toggleClass("open-menu");
    		$('.eyou_menubar').toggleClass("menu-open");

    	} else if(!$(event.target).closest(".eyou_menubar").length){
    		$(".eyou_fixed-sidebar").removeClass("open-menu");
    		$(".eyou_menubar").removeClass("menu-open");
    	}
    });
	
	if($('.wow').length){	
		new WOW().init();
	}

	$('.subnav ul').each(function(index, element) {
		li = $(this).children('li.on');
		if(li.length>0){
			$(this).scrollLeft( li.last().position().left );
		}
	});
	
	$('.subnav ul li.has>a').click(function(){
		if($(window).width()<992){
			li = $(this).parent('li');
			if(li.hasClass('active')){
				li.removeClass('active');
			}else{
				li.siblings().removeClass('active');
				li.addClass('active');
			}
			return false;
		}
	});

    $(document).ready(function () {
    	$(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
    	e.preventDefault();
    	$(document).off("scroll");

    	var target = this.hash,
    	menu = target;
    	$target = $(target);
    	$('html, body').stop().animate({
    		'scrollTop': $target.offset().top+1
    	}, 300, 'swing', function () {
    		window.location.hash = target;
    		$(document).on("scroll", onScroll);
    	});
    });
});

    function onScroll(event){
    	var currentScrollPos = $(document).scrollTop();
    	$('#top-nav ul li a').each(function () {
    		var currLink = $(this);
    		var refElement = $(currLink.attr("href"));
    		if (refElement.position().top <= currentScrollPos+1 && refElement.position().top + refElement.height() > currentScrollPos+1) {
    			$('#top-nav ul li a').removeClass("active");
    			currLink.addClass("active");
    		}
    		else{
    			currLink.removeClass("active");
    		}
    	});
    }

    $(window).scroll(function() {
    	if ($(this).scrollTop() > 100) {
    		$('.scroll-top').fadeIn();
    	} else {
    		$('.scroll-top').fadeOut();
    	}
    });
    $('.scroll-top').click(function() {
    	$("html, body").animate({
    		scrollTop: 0
    	}, 100);
    	return false;
    });

    $(window).scroll(function() {
    	var sticky = $('.mobile_header'),
    	scroll = $(window).scrollTop();

    	if (scroll >= 40) { 
    		sticky.addClass('sticky'); 
    	}
    	else { 
    		sticky.removeClass('sticky');
    	}
    });


});
	if($('.blog-slider').length){
		var swiper = new Swiper(".blog-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			effect: 'scroll',
			speed: 900,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				clickable: true,
			},

		});
	}

	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		effect: 'scroll',
		speed: 900,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			clickable: true,
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});

	var menu = [];
	jQuery('.swiper-slide').each( function(index){
		menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
	});
	var interleaveOffset = 0.5;
	var swiperOptions = {
		loop: false,
		centeredSlides: true,
		speed: 1500,
		simulateTouch: true,
		clickable: true,
		parallax: true,
		effect: "slide",

		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		watchSlidesProgress: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		on: {
			progress: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * interleaveOffset;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".slide-inner").style.transform =
					"translate3d(" + innerTranslate + "px, 0, 0)";
				}      
			},

			touchStart: function() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},

			setTransition: function(speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-inner").style.transition =
					speed + "ms";
				}
			}
		}
	};

	var swiper = new Swiper(".swiper-container", swiperOptions);

var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function(indx){
	if ($(this).attr("data-background")){
		$(this).css("background-image", "url(" + $(this).data("background") + ")");
	}
});