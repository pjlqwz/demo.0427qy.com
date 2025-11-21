$(function() {
	// 资质证书
	if (winW > 1200) {
		jQuery(".qua-all").slide({titCell:".qua-list-ctrl li" ,prevCell: '.qua-list-prev' ,nextCell: '.qua-list-next' ,mainCell:".qua-list",effect:"fold",trigger:"click",easing:"easeOutCirc",delayTime:500});
	} else {
		var $queOne = $('.qua-one');
		$('.qua-list').html($queOne);

	    // 资质证书移动端
	    $('.qua-list').owlCarousel({
	        loop: true,
	        dots: true,
	        mouseDrag: false,
	        margin: 0,
	        nav: true,
	        autoplay: 3000,
	        stagePadding: false,
	        merge: false,
	        navText: ['',''],
	        slideSpeed: 2000,
			rewindSpeed: 1200,
	        responsive: {
	            0: {
	                items: 1
	            },
	            992: {
	                items: 2
	            },
	            1500: {
	                items: 2
	            }
	        }
	    });

		var owlQuaList = $('.qua-list').data('owlCarousel');
		
		$('.qua-list-prev').click(function() {
			owlQuaList.prev();
		});
		$('.qua-list-next').click(function() {
			owlQuaList.next();
		});
	}

	$('.qua-all').css('opacity', '1');

	jQuery(".careers-dtl").slide({titCell:"ul", targetCell:".careers-req",defaultIndex:0,effect:"slideDown",delayTime: 600,trigger:"click",defaultPlay:false});

	// 点击弹出上传简历
	$('.careers-btn').click(function() {
		$('.careers-form-all').addClass('show');
	});

	$('.careers-form-shadow, .careers-form-close').click(function() {
		$('.careers-form-all').removeClass('show');
	});

});

//平航锚点导航
var aArr = ['about', 'year', 'cocul', 'qua', 'contact', 'careers', 'videoList'];
var winW = $(window).width();
var initT = 270;
var navMoveFlag = false;
var navMoveTime;

$('.nav-inside > ul > li').click(function() {
	var _index = $(this).index();

    $('.nav-inside > ul > li').eq(_index).addClass('on').siblings().removeClass('on');
    $('html,body').stop().animate({scrollTop: $('#'+ aArr[$(this).index()] +'').offset().top - initT + 'px'}, 1000);
    // if (winW < 769) {
    //     $(".header-menu").stop().slideUp(350, 'easeInQuad');
    //     $('.m-close').removeClass('m-close-on');
    // }

    $('.nav-inside-arrow').stop().animate({top: 44*_index + 'px'}, 500);

	navMoveFlag = true;
	clearTimeout(navMoveTime);
    navMoveTime = setTimeout(navMoveFalse, 900);
});

function navMoveFalse() {
    navMoveFlag = false;
}

$(window).scroll(function(){
     var winH = $(window).height();//可视窗口高度
     var iTop = $(window).scrollTop();//鼠标滚动的距离
     
     //鼠标滑动式改变  
    if (winH+iTop - $('#about').offset().top > winH/4 && !navMoveFlag) {
    	$('.nav-inside-arrow').removeClass('img-white');
		$('.nav-inside > ul > li').eq(3).removeClass('font-white');
        $('.nav-inside > ul > li').eq(0).addClass('on').siblings().removeClass('on');
	    $('.nav-inside-arrow').stop().animate({top: 44*0 + 'px'}, 500);
    }
    if (winH+iTop - $('#year').offset().top > winH/4 && !navMoveFlag) {
    	$('.nav-inside-arrow').removeClass('img-white');
		$('.nav-inside > ul > li').eq(3).removeClass('font-white');
        $('.nav-inside > ul > li').eq(1).addClass('on').siblings().removeClass('on');
	    $('.nav-inside-arrow').stop().animate({top: 44*1 + 'px'}, 500);
    }
    if (winH+iTop - $('#cocul').offset().top > winH/4 && !navMoveFlag) {
    	$('.nav-inside-arrow').removeClass('img-white');
		$('.nav-inside > ul > li').eq(3).removeClass('font-white');
        $('.nav-inside > ul > li').eq(2).addClass('on').siblings().removeClass('on');
	    $('.nav-inside-arrow').stop().animate({top: 44*2 + 'px'}, 500);
    }
    if (winH+iTop - $('#qua').offset().top > winH/4 && !navMoveFlag) {
    	$('.nav-inside-arrow').addClass('img-white');
    	$('.nav-inside > ul > li').eq(3).addClass('font-white');
        $('.nav-inside > ul > li').eq(3).addClass('on').siblings().removeClass('on');
	    $('.nav-inside-arrow').stop().animate({top: 44*3 + 'px'}, 500);
    }
    if (winH+iTop - $('#contact').offset().top > winH/4 && !navMoveFlag) {
    	$('.nav-inside-arrow').removeClass('img-white');
		$('.nav-inside > ul > li').eq(3).removeClass('font-white');
        $('.nav-inside > ul > li').eq(4).addClass('on').siblings().removeClass('on');
	    $('.nav-inside-arrow').stop().animate({top: 44*4 + 'px'}, 500);
    }
    if (winH+iTop - $('#careers').offset().top > winH/4 && !navMoveFlag) {
    	$('.nav-inside-arrow').removeClass('img-white');
		$('.nav-inside > ul > li').eq(3).removeClass('font-white');
        $('.nav-inside > ul > li').eq(5).addClass('on').siblings().removeClass('on');
	    $('.nav-inside-arrow').stop().animate({top: 44*5 + 'px'}, 500);
    }
    if (winH+iTop - $('#videoList').offset().top > winH/2 && !navMoveFlag) {
    	$('.nav-inside-arrow').removeClass('img-white');
		$('.nav-inside > ul > li').eq(3).removeClass('font-white');
        $('.nav-inside > ul > li').eq(6).addClass('on').siblings().removeClass('on');
	    $('.nav-inside-arrow').stop().animate({top: 44*6 + 'px'}, 500);
    }
});