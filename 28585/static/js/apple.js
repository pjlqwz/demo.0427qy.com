$(window).scroll(function() {
    imgStay();
});

function imgStay() {

    var winW = $(window).width(),
        winH = $(window).height(),//可视窗口高度
        scrollT = $(window).scrollTop(),//鼠标滚动的距离
        pu = $(window).width()/1920;

    var bannerT = $('.apple-banner').offset().top - winH;

    if (scrollT < 850 && winW > 544) {
        // $('.swiper-container').stop(false, true).animate({
        $('.swiper-container').css({
            // 'margin-top': -182 + (scrollT - bannerT)/6 + 'px'
            // 'margin-top': -300 + (scrollT - bannerT)/3 + 'px'
            // 'transform': 'translateY(' + -530 + (scrollT - playT)/3.5 + 'px)'
            'transform': 'translate3d(0, ' + Math.ceil(-320 + (scrollT - bannerT)/3.5) + 'px, 0)'
        // }, 200);
        });
    }

}

// banner宽高比
var winW = $(window).width();

if (winW <= 768) {
    $('.slide-img img, .swiper-container, .swiper-wrapper, .apple-banner').css('height', 476/750 * winW + 'px')
} 

// 初始化
$('.pagination li').eq(0).addClass('current');
$('.apple-banner').css('opacity', '1');

// JavaScript Document
autoplay=true;
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,
	progress: true,
	speed: 1500,
	paginationClickable: true,
	loop: true,
	onProgressChange: function(swiper) {
		for (var i = 0; i < swiper.slides.length; i++) {
			var slide = swiper.slides[i];
			var progress = slide.progress;
			var translate;
			if (progress > 0) {
				translate = progress * 0.9 * swiper.width;
				scale = 1 - progress * 0.1
				if (progress > 1) {
					scale = 0.9
				}
				txtPositionX = 0
				// txtPositionY = progress * 30 + 'px'
				txtPositionY = '-55%'

			} else {
				translate = 0;
				scale = 1
				txtPositionX = -progress * 1000 + 'px'
				// txtPositionY = 0
				txtPositionY = '-55%'
			}

			var txts = slide.querySelectorAll('.txt');
			for (var j = 0; j < txts.length; j++) {
				swiper.setTransform(txts[j], 'translate3d(' + txtPositionX + ',' + txtPositionY + ',0)');
			}
			swiper.setTransform(slide, 'translate3d(' + (translate) + 'px,0,0) scale(' + scale + ')');

		}
	},
	onTouchStart: function(swiper) {
		for (var i = 0; i < swiper.slides.length; i++) {
			swiper.setTransition(swiper.slides[i], 0);
			var txts = swiper.slides[i].querySelectorAll('.txt');
			for (var j = 0; j < txts.length; j++) {
				swiper.setTransition(txts[j], 0);
			}
		}
	},
	onSetWrapperTransition: function(swiper, speed) {
		for (var i = 0; i < swiper.slides.length; i++) {
			swiper.setTransition(swiper.slides[i], speed);
			var txts = swiper.slides[i].querySelectorAll('.txt');
			for (var j = 0; j < txts.length; j++) {
				swiper.setTransition(txts[j], speed);
			}
		}
	},
	onSlideChangeStart: function(swiper) {
		if (autoplay) {
			if (swiper.activeLoopIndex == 0) {
				$('.pagination li').removeClass('current');
				$('.pagination li').eq(0).removeClass('replace');
			}
			if (swiper.activeLoopIndex == 1) {
				$('.pagination li').eq(0).removeClass('firstCurrent current').addClass('replace')
			}
			$('.pagination li').removeClass('current');
			$('.pagination li').eq(swiper.activeLoopIndex).addClass('current');
		} else {
			$('.pagination li').removeClass('current firstCurrent click');
			$('.pagination li').eq(swiper.activeLoopIndex).addClass('current');
		}

	},
	onFirstInit: function(swiper) {
		$('.pagination li').eq(0).addClass('firstCurrent');
	},

	onAutoplayStop: function() {
		autoplay=false;
		$('.autoplay').removeClass('autoplay');
	},
})

// Set Z-Indexes
for (var i = 0; i < mySwiper.slides.length; i++) {
	mySwiper.slides[i].style.zIndex = i;
}

$('.arrow-left').on('click', function(e) {
	e.preventDefault()
	mySwiper.swipePrev()
})
$('.arrow-right').on('click', function(e) {
	e.preventDefault()
	mySwiper.swipeNext()
})
$(".pagination li").on('touchstart mousedown', function(e) {
	e.preventDefault()
	if (autoplay) {
		autoplay=false;
		mySwiper.stopAutoplay();
		$(this).addClass('click');
	}

	mySwiper.swipeTo($(this).index())
})
window.onresize = function() {
	mySwiper.reInit();
}