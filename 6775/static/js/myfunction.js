$(document).ready(function(){
	
	$(function(){
		
		 $('#dowebok').fullpage({
//      sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		css3:true,
		'navigationPosition': 'left',
        resize: true,
        navigation: true,
		anchors: ['s1', 's2', 's3', 's4', 'lastScreen','footerl'],
		onLeave: function(index, nextIndex, direction){

				$('.section2 .about-block').toggleClass('zoomOut', (index == 2 && direction == 'down' ) || (index == 2 && direction == 'up'));
				$('.section3 .product-block').toggleClass('zoomOut', (index == 3 && direction == 'down' ) || (index == 3 && direction == 'up'));
				$('.section4 .news-block').toggleClass('zoomOut', (index == 4 && direction == 'down' ) || (index == 4 && direction == 'up'));
				
				$('.section2 .about-block').toggleClass('zoomIn', (index == 1 && direction == 'down' ) || (index == 3 && direction == 'up'));
				$('.section3 .product-block').toggleClass('zoomIn', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
				$('.section4 .news-block').toggleClass('zoomIn', (index == 3 && direction == 'down' ) || (index == 5 && direction == 'up'));
				
				
				
				if(index == '1'){  
                // 向ID为P1的元素移除class
//	                $('#p1').removeClass('animated zoomIn');
				}
	 
				if(index == '2'){  
	                $('.about-pic').removeClass(' fadeInRight').addClass("fadeOutRight");
	                $('.about-nav .a-sub1').addClass(' rotateOutDownLeft').removeClass("rotateInDownRight");
	                $('.about-nav .a-sub2').addClass(' rotateOutDownLeft').removeClass("rotateInDownRight");
	                $('.about-nav .a-sub3').addClass(' rotateOutDownLeft').removeClass("rotateInUpLeft");
	                $('.about-nav .a-sub4').addClass(' rotateOutDownLeft').removeClass("rotateInUpLeft");
				}
	 
				if(index == '3'){  
					 $(".club").addClass("fadeOutLeft").removeClass("fadeInLeft");
					 $(".more-product").addClass("bounceOutUp").removeClass("fadeInDownBig");
					 $(".product-item  .pro-nav  li:nth-of-type(2n+2)").addClass("fadeOutDown").removeClass("fadeInDown");
					 $(".product-item  .pro-nav  li:nth-of-type(2n+1)").addClass("fadeOutUp").removeClass("fadeInUp");
				}
	 
				if(index == '4'){  
					$(".news-block .news-pic1").removeClass(' fadeInRight').addClass("fadeOutRight");
				}
					
					
	 		},
 		
 		afterLoad: function(anchorLink, index){
			if(index == 1){  
                // 向ID为P1的元素添加class，animated是animate.css激活动画必须加的class,后面跟的是动画class
//              $('#p1').addClass('animated zoomIn');
			}
			if(index == 2){  
                $('.about-pic').addClass(' fadeInRight').removeClass("fadeOutRight");
                $('.about-nav .a-sub1').addClass(' rotateInDownRight').removeClass("rotateOutDownLeft");
                $('.about-nav .a-sub2').addClass(' rotateInDownRight').removeClass("rotateOutDownLeft");
                $('.about-nav .a-sub3').addClass(' rotateInUpLeft').removeClass("rotateOutDownLeft");
                 $('.about-nav .a-sub4').addClass(' rotateInUpLeft').removeClass("rotateOutDownLeft");
			}
 
			if(index == 3){  
				$(".club").addClass("fadeInLeft").removeClass("fadeOutLeft");
				$(".more-product").addClass("fadeInDownBig").removeClass("bounceOutUp");
				$(".product-item  .pro-nav  li:nth-of-type(2n+2)").addClass("fadeInDown").removeClass("fadeOutDown");
				$(".product-item  .pro-nav  li:nth-of-type(2n+1)").addClass("fadeInUp").removeClass("fadeOutUp");
			}
 
			if(index == 4){  
				$(".news-block .news-pic1").addClass(' fadeInRight').removeClass("fadeOutRight");
			}
 
		}
 		
		
		
    });

    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
    if($(window).width()<992){
		
		$("#dowebok").addClass("fade-In").removeAttr("id");
		$.fn.fullpage.destroy('all');
		
		};
		
		
		
	})
	
	
	if ($(window).width()<=992) {
		$(".news-block").css("background","url(/template/pc/skin/img/wap-section4bg.jpg) no-repeat");
		$(".news-block").css("background-size","cover");
		
		$(".contact-block").css("background", "url(/template/pc/skin/img/wap-contactbg.jpg) no-repeat").css("background-size", "cover");
	
		$(".about-nav .a-sub4,.about-nav .a-sub3").addClass("rotateInUpLeft wow");
		$(".about-nav .a-sub1,.about-nav .a-sub2").addClass("rotateInDownRight wow");
		$(".more-product").addClass("fadeInDownBig wow");
	} else{
	    $(".section4").css("background", "url(/template/pc/skin/img/section4-bg.jpg) no-repeat");
		
	    $(".section5").css("background", "url(/template/pc/skin/img/contact-bg.jpg) no-repeat");
	
		$(".about-nav .a-sub4,.about-nav .a-sub3").removeClass("rotateInUpLeft wow");
		$(".about-nav .a-sub1,.about-nav .a-sub2").removeClass("rotateInDownRight wow");
		$(".more-product").removeClass("fadeInDownBig wow");
	}
	
	$(".head-icon a").hover(function(){
		$(".head-icon .head-erwei").show();
	},function(){
		$(".head-icon .head-erwei").hide();
	})


	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})