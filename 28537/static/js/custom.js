(function($) {
"use strict";

/* ==============================================
FIXED MENU -->
=============================================== */

$(".header-section").affix({
offset: {
top: 100, 
bottom: function () {
return (this.bottom = $('.copyrights').outerHeight(true))
}
}
})

/* ==============================================
MENU HOVER -->
=============================================== */

    $('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });

/* ==============================================
ANIMATION -->
=============================================== */

    new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }).init();

/* ==============================================
PARALLAX
=============================================== */

    $.stellar({
    horizontalScrolling: false,
    verticalOffset: 100
    });

/* ==============================================
MODAL -->
=============================================== */

    $(window).load(function() {
    $('.modalexample').modal('handleUpdate')
    })

/* ==============================================
BACK TOP -->
=============================================== */

    jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 1) {
    jQuery('.backtotop').css({bottom:"25px"});
    } else {
    jQuery('.backtotop').css({bottom:"-100px"});
    }
    });
    jQuery('.backtotop').click(function(){
    jQuery('html, body').animate({scrollTop: '0px'}, 800);
    return false;
    });

/* ==============================================
BACK TOP -->
=============================================== */

    /*$('#basic-timepicker-1').datetimepicker({
    prevText: '<i class="icon-arrow-left8"></i>',
    nextText: '<i class="icon-arrow-right8"></i>'
    });*/
    
/* ==============================================
    Progress Bar (Skills Bar)
=============================================== */

    //$('.progress .progress-bar').progressbar({transition_delay: 800});

/* ==============================================
LOADER
=============================================== */

    jQuery(window).load( function() {
    setTimeout( function() {
    jQuery("#loader").delay(300).fadeOut(600);
    jQuery(".loader-back-text").fadeOut(1000);
    }, 1200 );//3200
    });

/* ==============================================
TOOLTIP -->
=============================================== */

    $('body').tooltip({
    selector: "[data-tooltip=tooltip]",
    container: "body"
    });

})(jQuery);

jQuery(document).ready(function() {
	if(jQuery('.tp-banner')){
		jQuery('.tp-banner').show().revolution(
		{
			dottedOverlay:"none",
			delay:9000,
			startwidth:1170,
			startheight:820,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"preview4",
			touchenabled:"on",
			onHoverStop:"on",
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation:"on",
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
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			forceFullWidth:"on",
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0
		});
	}
});