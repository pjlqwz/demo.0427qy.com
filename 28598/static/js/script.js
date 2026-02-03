jQuery(document).ready(function( $ ) {
	/* ============ LAYER SLIDER ================*/
	if(jQuery("#layerslider")) {
		jQuery("#layerslider").layerSlider({
			responsive: true,
			responsiveUnder: 1280,
			layersContainer: 1170,
			skin: 'css',
			hoverPrevNext: true,
			skinsPath: '/template/pc/skin/'
		});
	}

	/* ============ Welfare Projects Carousel ================*/
	if($('.welfare-projects-carousel')) {
		$('.welfare-projects-carousel').owlCarousel({
			autoplay:true,
			autoplayTimeout:5500,
			smartSpeed:2000,
			autoplayHoverPause:true,
			loop:true,
			dots:false,
			nav:false,
			margin:0,
			mouseDrag:true,
			items:4,
			autoHeight:true,
			responsive : {
				0 : {items : 1},
				500 : {items :2},
				840 : {items :3},
				980 : {items : 3},
				1440 : {items : 4},
				1600 : {items : 4},
				1920 : {items : 5},
			}	
		});	 
	}
	
	/* ============ Sponsors Carousel ================*/
	if($('.sponsors-carousel')) {
		$('.sponsors-carousel').owlCarousel({
			autoplay:true,
			autoplayTimeout:6500,
			smartSpeed:1000,
			loop:true,
			dots:false,
			nav:true,
			margin:10,
			mouseDrag:true,
			items:5,
			autoHeight:true,
			navText : ["", ""],
			responsive : {
				0 : {items : 1},
				480 : {items :2},
				768 : {items : 3},
				1200 : {items : 5},
				1920 : {items : 6},
			}	
		});	 
	}
	/* ============ Count Down Timer ================*/
	/*$(function () {
		var date = new Date();
		date = new Date(2017, 4 - 1, 12);
		$('.count-down').countdown({until: date});
	});
	$(function () {
		var date2 = new Date();
		date2 = new Date(2016, 4 - 1, 12);
		$('.count-down2').countdown({until: date2});
	});*/

});	 


jQuery(document).ready(function(){
"use strict";

/*=================== Cart Item Cross Button ===================*/  
$(".cart-item i.ti-close").on("click",function(){
    $(this).parent().parent().parent().remove();
})
$(".checkout-page .cart-heading").on("click",function(){
    $(".cart-detail , .cart-bottom").slideUp();
    $(this).parent().find(".cart-detail , .cart-bottom").slideToggle();
});



/*=================== Team Page ===================*/  
var l = $("#team-detail-img > ul li").length;
for (var i=0; i<=l; i++) {
    var team_list = $("#team-detail-img > ul li").eq(i);    
    var team_width = $(team_list).find("p").width();
    $(team_list).find("p").css({
        "margin-right":-team_width-21
    })
}


/*=================== Signup and Login Buttons ===================*/  
/*$(".registration-btn li a").on("click",function(){
    $("body").find(".popup").fadeIn();
    if ($(this).hasClass("signup-btn")){
        setTimeout(function(){
            $(".popup").find(".signup-form").addClass("active").fadeIn();
        });
    }
    else if ($(this).hasClass("login-btn")){
        setTimeout(function(){
            $(".popup").find(".login-form").addClass("active").fadeIn();
        });
    }
    return false;
});
$("html, .close-btn").on("click",function(){
    $(".popup-form").removeClass("active").slideUp();
    $("body").find(".popup").fadeOut();
});
$(".popup-form").on("click",function(e){
    e.stopPropagation();
});*/



/*=================== Responsive Menu ===================*/  
$("#responsive-menu > span.open-menu").on("click",function(){
    $(this).next(".menu-links").toggleClass("slide");
    $("body").toggleClass("move");
    $("#responsive-menu .menu-links > ul li.menu-item-has-children ul").slideUp();    
});
$("#responsive-menu .menu-links > ul li.menu-item-has-children > a").on("click",function(){
    $(this).next("ul").slideToggle();
    return false;
});
$("html").on("click",function(){
    $("#responsive-header .menu-links").removeClass("slide");
    $("body").removeClass("move");
});
$("#responsive-menu > span.open-menu,#responsive-menu .menu-links > ul li.menu-item-has-children a").on("click",function(e){
    e.stopPropagation();
});
$("#responsive-menu > span.show-topbar").on("click",function(){
    $(this).parent().parent().find(".topbar").slideToggle();
    $(this).toggleClass("slide");
});


/*=================== Ajax Contact Form ===================*/  
$('.submit').on('click',function(){
    var button_id = $(this).attr('id');
    var form = $(this).parent().parent().parent();
    var action = $(form).attr('action');
    var msg = $(form).prev();
    var _name = $(form).find('input[name="name"]').val();
    var _email = $(form).find('input[name="email"]').val();
    var _comments = $(form).find('textarea[name="comments"]').val();
    /*$(msg).empty();
        $(this)
        .after('<img src="images/ajax-loader.gif" class="loader" />')
        .attr('disabled','disabled');*/

    $.post(action, {
        name: _name,
        email: _email,
        comments: _comments,
    },
        function(data){
            $(msg).html(data);
            $(msg).slideDown('slow');
            //$(form + 'img.loader').fadeOut('slow',function(){$(this).remove()});
            $(this).removeAttr('disabled');
            if(data.match('success') != null) $(form).slideUp('slow');

        }
    );

    return false;
});

/*=================== STICKY HEADER ===================*/ 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".stick").addClass("sticky");
    }
    else{
        $(".stick").removeClass("sticky");
    }
}); 


/*=================== Set The Header Margin ===================*/  
var menu_height = $(".menu").height();
if ($(".menu").hasClass("transparent")){
    $("header#header-sec").css({"margin-bottom":"0"})
}
else if ($(".menu").hasClass("black-transparent")){
    $("header#header-sec").css({"margin-bottom":"0"})
}
else {
    $("header#header-sec").css({"margin-bottom":menu_height})
}



$(".donate-btn").on("click",function(){
    $(this).next(".enter-amount").toggleClass("proceed");
});


$(".frequency li a").on("click",function(){
    $(".frequency li a").removeClass("active");
    $(this).addClass("active");
});


var wpdonation_button = $(".donation-figures li a"); 
$(".donation-figures li a").on("click",function(){
    $(wpdonation_button).removeClass("active");
    $(this).addClass("active");
    var amount_val = $(this).html();
    $(".donation-amount .textfield textarea").html(amount_val);    
    return false;
});

$(".call-popup").on("click",function(){
    $(".donation-popup").fadeIn();
    $("body,html").addClass("stop");
    return false;
    
});
$(".proceed-to-donate").on("click",function(){
    $(this).parent().parent().parent().find(".select-payment, .personal-detail").slideDown();
    return false;
});
$(".popup-centralize span.close").on("click",function(){
    $(this).parent().parent().parent().fadeOut();
    $("body,html").removeClass("stop");
});




/*=================== Video Active Class ===================*/  
$(".video > a").on("click",function(){
    $(this).parent().toggleClass("active");
    return false;
});




/*=================== Events Toggle ===================*/  
var event_desc = $(".event-desc");
$(".event-toggle:first").addClass("active").find(".event-desc").slideDown();

$(".event-toggle").on("click",function(){
    $(event_desc).slideUp();
    $(this).find(".event-desc").slideDown();
    $(".event-toggle").removeClass("active");
    $(this).addClass("active");
});



/*=================== Accordion ===================*/   
$(function() {
$('.toggle .content').hide();
$('.toggle h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
$('.toggle h2').on("click",function() {
    if($(this).next().is(':hidden')) {
        $('.toggle h2').removeClass('active').next().slideUp(500).removeClass('animated zoomIn').parent().removeClass("activate");
        $(this).toggleClass('active').next().slideDown(500).addClass('animated zoomIn').parent().toggleClass("activate");
    }
});
});


/*=================== En Scroll ===================*/  
$('.menu-links > ul, .sideheader-menu').enscroll({
    showOnHover: false,
    verticalTrackClass: 'track3',
    verticalHandleClass: 'handle3'
}); 






/*=================== LightBox ===================*/  
$(function() {
    var foo = $('.lightbox , .gallery-img');
    foo.poptrox({
        usePopupCaption: true
    });
});


/*=================== SideHeader ===================*/  
$(".sideheader .c-hamburger").on("click",function(){
    $(this).parent().toggleClass("show");
    $(this).parent().find(".side-megamenu").removeClass("active");
    $(".sideheader-menu > ul li.menu-item-has-children > ul").slideUp();
    $(".sideheader-menu > ul li.menu-item-has-children > a").removeClass("active");
});
$(".sideheader-menu > ul li.menu-item-has-children > a").on("click",function(){
    $(this).next("ul").slideToggle(); 
    $(this).toggleClass("active");
    $(this).parent().find(".side-megamenu").toggleClass("active");
    return false;
});

//$(".select").select2();

});/*=== Document.Ready Ends Here ===*/ 		

jQuery(window).load(function(){
"use strict";

function delay(){
    $(".banner-popup").fadeIn();
};
window.setTimeout( delay, 3000 );

$(".banner-popup .close").on("click", function(){
    $(this).parent().parent().parent().fadeOut();
});


$('.parallax').scrolly({bgParallax: true});

});/*=== Window.Load Ends Here ===*/ 		