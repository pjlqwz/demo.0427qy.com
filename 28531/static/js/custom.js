(function($) {
"use strict";
/* ==============================================
FIXED MENU -->
=============================================== */

$("#transparent-header").affix({
offset: {
top: 100, 
bottom: function () {
return (this.bottom = $('.footer').outerHeight(true))
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
TOOLTIP -->
=============================================== */

$('body').tooltip({
selector: "[data-tooltip=tooltip]",
container: "body"
});

/* ==============================================
LOADER -->
=============================================== */

$(window).load(function() {
$('#loader').delay(300).fadeOut('slow');
$('#loader-container').delay(200).fadeOut('slow');
$('body').delay(300).css({'overflow':'visible'});
})

/* ==============================================
LIGHTBOX -->
=============================================== */

jQuery('a[data-gal]').each(function() {
jQuery(this).attr('rel', jQuery(this).data('gal')); });     
jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:true,overlay_gallery: true,social_tools:false,deeplinking:false});

/* ==============================================
PARALLAX -->
=============================================== */

$.stellar({
horizontalScrolling: false,
verticalOffset: 100
});

/* ==============================================
CAROUSEL -->
=============================================== */

$(document).ready(function(){

$('#owl-blog').owlCarousel({
loop:true,
margin:25,
nav:true,
dots:false,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
})
$('#owl-testimonial').owlCarousel({
loop:true,
margin:25,
nav:false,
dots:true,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
})
$('#shop-carousel').owlCarousel({
loop:true,
margin:25,
nav:false,
dots:true,
responsive:{
0:{
items:1
},
600:{
items:2
},
1000:{
items:3
},
1300:{
items:5
}
}
}) 
$('#opengallery').owlCarousel({
loop:true,
margin:25,
nav:false,
dots:true,
responsive:{
0:{
items:1
},
600:{
items:2
},
1000:{
items:3
},
1300:{
items:3
}
}
}) 

/* ==============================================
SLIDER -->
=============================================== */   
                
jQuery('.tp-banner').show().revolution(
{
dottedOverlay:"none",
delay:16000,
startwidth:1170,
startheight:700,
hideThumbs:200,     
thumbWidth:100,
thumbHeight:50,
thumbAmount:5,  
navigationType:"none",
navigationArrows:"solo",
navigationStyle:"preview3",  
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
fullScreen:"on",
spinner:"spinner4",  
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
jQuery('.tp-banner-boxed').show().revolution(
{
dottedOverlay:"none",
delay:16000,
startwidth:1170,
startheight:700,
hideThumbs:200,     
thumbWidth:100,
thumbHeight:50,
thumbAmount:5,  
navigationType:"none",
navigationArrows:"solo",
navigationStyle:"preview3",  
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
fullScreen:"on",
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
startWithSlide:0
});   

/* ==============================================
VIDEO BG -->
=============================================== */ 

/*var Video_back = new video_background($("#youtubevideo"), { 
"position": "absolute",    //Follow page scroll
"z-index": "-1",        //Behind everything
"loop": true,           //Loop when it reaches the end
"autoplay": true,       //Autoplay at start
"muted": true,         //Muted at start
"youtube": "x069t3yfR-8",   //Youtube video id
"start": 4,                 //Start with 6 seconds offset (to pass black introduction in this case for example)
"video_ratio": 1.7778,      // width/height -> If none provided sizing of the video is set to adjust
"fallback_image": "images/dummy.png",    //Fallback image path
});
//Toggle play status
$("#playvideo").click(function(){
Video_back.toggle_play();
});
//Toggle mute
$("#opensound").click(function(){
Video_back.toggle_mute();
});*/
}); //ready


/* ==============================================
SELECT PICKER -->
=============================================== */

//$('.selectpicker').selectpicker();

/* ==============================================
FUN -->
=============================================== */

function count($this){
var current = parseInt($this.html(), 10);
current = current + 10;
$this.html(++current);
if(current > $this.data('count')){
$this.html($this.data('count'));
} 
else {    
setTimeout(function(){count($this)}, 10);
}
}        
$(".stat-count").each(function() {
$(this).data('count', parseInt($(this).html(), 10));
$(this).html('0');
count($(this));
});

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
WINDOWS HEIGHT JS -->
=============================================== */

$(".js-height-full").height($(window).height());
$(".js-height-parent").each(function(){
$(this).height($(this).parent().first().height());
});

})(jQuery);