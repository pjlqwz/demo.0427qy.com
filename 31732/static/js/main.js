/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * topslider  
  * testimonialCarousel
  * toggles
  * tabs
  * rollNewCarousel
  * rollPortfolioRelated
  * ajaxContactForm
  * blogSlider
  * blogIsotop
  * portfolioIsotope
  * gallery_single_slider
  * gmapSetup
  * swClick
  * responsiveVideo
  * retinaLogos
  * parallax
  * rollAnimation
  * alertBox
  * removePreloader
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').find('.header-inner').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed = function() {        

        if ( $('body').hasClass('header-sticky') ) {
            var hd_height = $('#header').height();           
            $(window).on('load scroll', function(){                
                if ( $(window).scrollTop() > hd_height + 30 ) {
                    $('#header').addClass('downscrolled');                      
                } else {                    
                    $('#header').removeClass('downscrolled');                   
                }
                if( $(window).scrollTop() > 300 ) {
                    $('#header').addClass('upscrolled');                    
                } else {
                    $('#header').removeClass('upscrolled');                    
                }
            })            
        }   
    }

    var topslider = function() {
        if ( $().flexslider ) {
            $('.top-slider .flexslider').flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: true,
                slideshow: true,
                prevText       :  '<span class="icon-chevron-thin-left"></span>',
                nextText       :  '<span class="icon-chevron-thin-right"></span>'
            });
        }
    }; 

    var testimonialCarousel = function() {
        $('.roll-row').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.Carousel.roll-testimonials').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false,                     
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        }
                    }
                });
            }
        });
    };

    var toggles = function() {
        var args = {duration: 600};
        $('.roll-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.roll-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.roll-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.roll-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.roll-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    };

    var tabs = function() {
        $('.roll-tabs').each(function() {
           var content = $('.content-tab .content-inner');
            content.hide();
            if ( (content).hasClass("active")) {
                $('.content-tab .content-inner.active').show();
            } else {
                content.first().show();
            }                     
            $(this).find(' > ul > li').on('click',function(e) {                
                var hid = $(this).index();
                e.preventDefault();
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                var contentActive = $(this).parents('.menu-tab').siblings('.content-tab').children('.content-inner').eq(hid);                
                content.not(':eq(hid)').hide();
                contentActive.fadeIn(300);                
            })
        });
    };
   
    var rollNewCarousel = function() {
        $('.roll-row').each(function() {
            if ( $().owlCarousel ) {
                $(this).find('.roll-news').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: false,
                    dots: true,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        420:{
                            items: 1
                        },
                        480:{
                            items: 2
                        },
						950:{
                            items: 3
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            }
        });
    };

    var rollPortfolioRelated = function() {
        $('.roll-portfolio-related').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-carousel').owlCarousel({
                    loop: true,                   
                    nav: true,
                    dots: false,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            }
        });
    };

    /*var ajaxContactForm = function() {
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.send-wrap').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;

                            if ( msg == 'Success' ) {
                                result = 'Your message has been sent. Thank you!';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'roll-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i> x</a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };*/

    var blogSlider = function() {        
        if ( $().flexslider ) {
            $('.blog-slider').each(function() {
                var $this = $(this),
                    easing = ( $this.data('effect') == 'fade' ) ? 'linear' : 'easeInOutExpo';

                $this.find('.flexslider').flexslider({
                    animation      :  $this.data('effect'),
                    direction      :  $this.data('direction'), // vertical
                    pauseOnHover   :  true,
                    useCSS         :  false,
                    easing         :  easing,
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  false,
                    directionNav   :  true,
                    slideshow      :  $this.data('auto'),
                    prevText       :  '<span class="icon-chevron-thin-left"></span>',
                    nextText       :  '<span class="icon-chevron-thin-right"></span>',
                    smoothHeight   :  true
                }); // flexslider
            }); // blog-sider
        }
    }; 

    var blogIsotop = function() {        
        if ( $().isotope ) {
            $('.main-content.blog-full-width .items .row .wrap-full-width').isotope({ filter: '*' });
        };
    };

	var portfolioIsotope = function() {
		if ( $().isotope ) {
			var $container = $('.portfolio-wrap');

			$container.imagesLoaded(function(){
				$container.isotope({
					itemSelector: '.item',
					transitionDuration: '1s'
				});
			});

			//$('.portfolio-filter li').on('click',function() {                
				//var selector = $(this).find("a").attr('data-filter');
				//$('.portfolio-filter li').removeClass('active');
				//$(this).addClass('active');
				//$container.isotope({ filter: selector });
				//return false;
			//});
		};
	};

    var gallery_single_slider = function() {
        if ( $().flexslider ) {
            $('.gallery-single-slider').each(function() {
                var $this = $(this),
                    easing = ( $this.data('effect') == 'fade' ) ? 'linear' : 'easeInOutExpo';

                $this.find('.flexslider').flexslider({
                    animation      :  $this.data('effect'),
                    direction      :  $this.data('direction'), // vertical
                    pauseOnHover   :  true,
                    useCSS         :  false,
                    easing         :  easing,
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  false,
                    directionNav   :  true,
                    slideshow      :  $this.data('auto'),
                    prevText       :  '<i class="icon-arrow-left"></i>',
                    nextText       :  '<i class="icon-arrow-right"></i>',
                    smoothHeight   :  true
                }); // flexslider
            }); // blog-sider
        }
    };

    /*var gmapSetup = function() {
        if ( $().goMap ) {            
            $("#map").goMap({ // load map
                markers: [{  
                    address: 'PO Box 97845 Baker st. 567, Los Angeles, California, United States', 
                    title: 'My company',
                }],
                scrollwheel: false, 
                disableDoubleClickZoom: false,
                zoom: 15,
                maptype: 'ROADMAP'
            });
        }
    };*/

    var swClick = function () {
        function activeLayout () {
            $(".switcher-container" ).on( "click", "a.un-activebox", function() {
                $(this).addClass('active');
                $('body').addClass('home-boxed');  
            }).on( "click", "a.active.box", function() {
                $(this).removeClass('active').addClass('un-activebox');
                $('body').removeClass('home-boxed');
                return false;
            }).on( "click", "a.un-activemargin", function() {
                $(this).addClass('active');
                $('body').addClass('body-margin');
                return false;
            }).on( "click", "a.active.vmargin", function() {
                $(this).removeClass('active').addClass('un-activemargin');
                $('body').removeClass('body-margin');
                return false;
            }).on( "click", "a.sw-arrow", function() {                
                $(this).addClass('active');
                $('.switcher-container .sw-form, .switcher-container .pattern').css('display', 'block');
                return false;
            }).on( "click", "a.sw-arrow.active", function() {
                $(this).removeClass('active');
                $('.switcher-container .sw-form, .switcher-container .pattern').css('display', 'none');
                return false;
            }).on( "click", "a.sw-light", function() {
                $(this).removeClass('active');
                $('body').removeClass('home-boxed');
                $('body').addClass('home-dark');  
                return false;
            }).on( "click", "a.sw-dark", function() {
                $(this).removeClass('active');
                $('body').removeClass('home-dark'); 
                $('body').addClass('home-boxed');  
                return false;
            })            
        }

         function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout();       
        activePattern(); 
    }  

    var responsiveVideo= function() {
        if ( $().fitVids ) {
            $('.container').fitVids();
        }
    };

    // Go Top
    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 
      
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };  

    /*var retinaLogos = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;

        if(retina) {
            $('.header .logo').find('img').attr({src:'./images/logo@2x.png',width:'478',height:'48'});
            $('.home-dark .header .logo').find('img').attr({src:'./images/logo_color2@2x.png',width:'478',height:'48'});
            $('.home-boxed .logo').find('img').attr({src:'./images/logo_color3@2x.png',width:'478',height:'48'});
            
        }
    };*/
    
    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax1').parallax("50%", 0.3);
            $('.parallax2').parallax("50%", 0.4);  
            $('.parallax3').parallax("50%", 0.4);         
            $('.parallax4').parallax("50%", 0.4);
            $('.parallax5').parallax("50%", 0.4);
        }
    };

    var rollAnimation = function() {
        if ( isMobile.any() == null ) {
            $('.roll-animation').each( function() {
                var rollElement = $(this),
                    rollAnimationClass = rollElement.data('animation'),
                    rollAnimationDelay = rollElement.data('animation-delay'),
                    rollAnimationOffset = rollElement.data('animation-offset');

                rollElement.css({
                    '-webkit-animation-delay':  rollAnimationDelay,
                    '-moz-animation-delay':     rollAnimationDelay,
                    'animation-delay':          rollAnimationDelay
                });

                rollElement.waypoint(function() {
                    rollElement.addClass('animated').addClass(rollAnimationClass);
                },{
                    triggerOnce: true,
                    offset: rollAnimationOffset
                });
            });
        }
    };


    var alertBox = function() {
        $(document).on('click', '.close', function(e) {
            $(this).closest('.roll-alert').remove();
            e.preventDefault();
        })     
    }

    var removePreloader = function() {        
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };

   	// Dom Ready
	$(function() {
        headerFixed();
        responsiveMenu();
        topslider();          
        testimonialCarousel();       
        toggles();
        tabs();
        rollNewCarousel();
        rollPortfolioRelated();  
        //ajaxContactForm(); 
        blogSlider();
        blogIsotop();
        portfolioIsotope();        
        swClick();
        goTop();
        removePreloader();
        responsiveVideo();
        //retinaLogos();  
        alertBox(); 
        //gmapSetup();
        parallax();    
        rollAnimation();
   	});

})(jQuery);

jQuery(document).ready(function($){
	if ($(window).width() >1024){
		$(".top-slider .flexslider .slides li").css("height",$(window).height());
	}
});