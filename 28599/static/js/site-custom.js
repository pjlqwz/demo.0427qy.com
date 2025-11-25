
$(window).load(function() {
	'use strict';
	$("#pageloader").delay(1200).fadeOut("slow");
	$(".loader-item").delay(700).fadeOut()
});
wow = new WOW({
	animateClass: 'animated',
	offset: 100
});
wow.init();
$(document).ready(function() {
	'use strict';
	jQuery("#main-menu").menuzord({
		align: "right",
		animation: "drop-up",
		effect: "fade",
		indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
		indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
	});
	$('.team-social ul li a, .demo-button a, .portfolio-buttons a, .social-icons ul li a').tooltip({
		placement: 'top',
		animation: true,
		delay: {
			show: 200,
			hide: 100
		}
	});
	$.stellar({
		responsive: true,
		horizontalScrolling: false,
		verticalOffset: 40
	});
	
	/*$('.counter').counterUp({
		delay: 10,
		time: 1000
	});*/
	
	$('.skillbar').appear();
	$('.skillbar').on('appear',
	function() {
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		},
		3000)
	});
	
	/*$(".tweet-stream").tweet({
		username: "envato",
		modpath: "twitter/",
		count: 1,
		template: "{text}{time}",
		loading_text: "loading twitter feed..."
	});*/
	
	/*$('#basicuse').jflickrfeed({
		limit: 9,
		qstrings: {
			id: '52617155@N08'
		},
		itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});*/
	
	$(".media.video").fitVids();
	
	$("#back-top").hide();
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn()
			} else {
				$('#back-top').fadeOut()
			}
		});
		$('#back-top a').click(function() {
			$('body,html').animate({
				scrollTop: 0
			},
			800);
			return false
		})
	});
	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false,
				title: {
					type: 'outside'
				},
				thumbs: {
					width: 50,
					height: 50
				}
			}
		}
	});
	$("#portfolio-single").owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: true,
		slideBy: 1,
		dots: false,
		center: false,
		autoplay: false,
		autoheight: true,
		navText: ['&#xf104;', '&#xf105'],
		responsive: {
			320 : {
				items: 1,
			},
			480 : {
				items: 1,
			},
			600 : {
				items: 1,
			},
			1000 : {
				items: 1,
				loop: true,
			},
			1200 : {
				items: 1,
				loop: true,
			}
		}
	});
	$("#home-portfolio").owlCarousel({
		items: 5,
		margin: 0,
		loop: true,
		nav: false,
		slideBy: 1,
		dots: true,
		center: false,
		autoplay: false,
		autoheight: true,
		navText: ['&#xf104;', '&#xf105'],
		responsive: {
			320 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			680 : {
				items: 3,
			},
			1000 : {
				items: 4,
				loop: true,
			},
			1200 : {
				items: 5,
				loop: true,
			}
		}
	});
	$("#home-portfolio-2").owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
		nav: true,
		slideBy: 1,
		dots: false,
		center: false,
		autoplay: true,
		autoheight: true,
		navText: ['&#xf104;', '&#xf105'],
		responsive: {
			320 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			600 : {
				items: 2,
			},
			1000 : {
				items: 3,
				loop: true,
			},
			1200 : {
				items: 3,
				loop: true,
			}
		}
	});
	$("#home-testimonial, #shop-detail").owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		slideBy: 1,
		dots: true,
		center: false,
		autoplay: false,
		autoheight: true,
		navText: ['&#xf104;', '&#xf105'],
		responsive: {
			320 : {
				items: 1,
				nav: false,
			},
			480 : {
				items: 1,
				nav: false,
			},
			600 : {
				items: 1,
				nav: false,
			},
			1000 : {
				items: 1,
				loop: true,
				nav: false,
			},
			1200 : {
				items: 1,
				loop: true,
				nav: false,
			}
		}
	});
	$("#home-blog").owlCarousel({
		items: 1,
		margin: 30,
		loop: true,
		nav: true,
		slideBy: 1,
		dots: false,
		center: false,
		autoplay: false,
		autoheight: true,
		navText: ['&#xf104;', '&#xf105'],
		responsive: {
			320 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			600 : {
				items: 2,
			},
			1000 : {
				items: 3,
				loop: true,
			},
			1200 : {
				items: 3,
				loop: true,
			}
		}
	});
	$("#home-clients").owlCarousel({
		items: 6,
		margin: 30,
		loop: true,
		nav: false,
		slideBy: 1,
		dots: false,
		center: false,
		autoplay: true,
		autoheight: true,
		navText: ['&#xf104;', '&#xf105'],
		responsive: {
			320 : {
				items: 2,
			},
			480 : {
				items: 2,
			},
			600 : {
				items: 4,
			},
			1000 : {
				items: 5,
				loop: true,
			},
			1200 : {
				items: 6,
				loop: true,
			}
		}
	});
	
	/*jQuery('.play-video').on('click',
	function(e) {
		var a = jQuery('.video-box');
		a.prepend('<iframe src="http://player.vimeo.com/video/7449107" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		a.fadeIn(300);
		e.preventDefault()
	});
	jQuery('.close-video').on('click',
	function(e) {
		jQuery('.video-box').fadeOut(400,
		function() {
			jQuery("iframe", this).remove().fadeOut(300)
		})
	});*/
	
	/*$("#map_extended").gMap({
		markers: [{
			address: "",
			html: '<h4>Office</h4>' + '<address>' + '<div>' + '<div><b>Address:</b></div>' + '<div>Envato Pty Ltd, 13/2<br> Elizabeth St Melbourne VIC 3000,<br> Australia</div>' + '</div>' + '<div>' + '<div><b>Phone:</b></div>' + '<div>+1 (408) 786 - 5117</div>' + '</div>' + '<div>' + '<div><b>Fax:</b></div>' + '<div>+1 (408) 786 - 5227</div>' + '</div>' + '<div>' + '<div><b>Email:</b></div>' + '<div><a href="mailto:info@mithiliya.com">info@info@mithiliya.com</a></div>' + '</div>' + '</address>',
			latitude: -33.87695388579145,
			longitude: 151.22183918952942,
			icon: {
				image: "images/pin.png",
				iconsize: [35, 48],
				iconanchor: [17, 48]
			}
		},
		],
		icon: {
			image: "images/pin.png",
			iconsize: [35, 48],
			iconanchor: [17, 48]
		},
		latitude: -33.87695388579145,
		longitude: 151.22183918952942,
		zoom: 16
	});*/
	/*jQuery("#contact_form").validate({
		meta: "validate",
		submitHandler: function(b) {
			var c = $("#name").val();
			var d = $("#email").val();
			var e = $("#subject").val();
			var f = $("#comment").val();
			$.post("contact.php", {
				name: c,
				email: d,
				subject: e,
				comment: f
			},
			function(a) {
				$('#sucessmessage').append(a)
			});
			$('#contact_form').hide();
			return false
		},
		rules: {
			name: "required",
			lastname: "required",
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
			},
			comment: {
				required: true
			},
			subject: {
				required: true
			}
		},
		messages: {
			name: "Please enter your name.",
			lastname: "Please enter your last name.",
			email: {
				required: "Please enter email.",
				email: "Please enter valid email"
			},
			phone: "Please enter a phone.",
			subject: "Please enter a subject.",
			comment: "Please enter a comment."
		},
	})*/
});
$(document).ready(function() {
	$(".switch-button").click(function() {
		if ($(this).is(".open")) {
			$(this).addClass("closed");
			$(this).removeClass("open");
			$(".styleswitcher").animate({
				"left": "-202px"
			})
		} else {
			$(this).addClass("open");
			$(this).removeClass("closed");
			$(".styleswitcher").animate({
				"left": "0px"
			})
		}
	})
});

/*
$(document).ready(function() {
	if ($.cookie("css")) {
		$("link.alt").attr("href", $.cookie("css"))
	}
	$(".color-scheme a").click(function() {
		$("link.alt").attr("href", $(this).attr("rel"));
		$.cookie("css", $(this).attr('rel'), {
			expires: 365,
			path: '/'
		});
		return false
	})
});*/

jQuery(document).ready(function() {
	if(jQuery('.tp-banner')) {
		jQuery('.tp-banner').show().revolution(
		{
			dottedOverlay:"none",
			delay:10000,
			startwidth:1170,
			startheight:550,
			hideThumbs:200,
			
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview4",
			
			touchenabled:"on",
			onHoverStop:"on",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
									
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
									
			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,

			shadow:0,
			fullWidth:"on",
			fullScreen:"off",

			spinner:"spinner4",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			
			shuffle:"off",
			autoHeight:"off",
			forceFullWidth:"off",									

			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,

			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"rs-plugin/videojs/",
			fullScreenOffsetContainer: ""	
		});
	}
});
