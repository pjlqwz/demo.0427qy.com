$(function() {
	newsSwiper();

	// 展示用的虚拟加载更多功能
	// $('.co-news-more a.a-1').click(function() {
	// 	$(this).hide();
	// 	$('.co-news-list').find('.hide').fadeIn();
	// });
});

$(window).resize(function() {
	newsSwiper();
});

function newsSwiper() {
	var $winW = $(window).width();

	// 业绩新闻轮播图
	var slidesPerView = 3;
	var spaceBetween = 80;

	if ($winW <= 1450) {
		spaceBetween = 32;
	}
	if ($winW <= 1000) {
		slidesPerView = 2;
		spaceBetween = 15;
	}
	if ($winW <= 768) {
		slidesPerView = 1;
		spaceBetween = 15;
	}
	if ($winW <= 544) {
		spaceBetween = 0;
	}

	var medialist = new Swiper('.media-list', {
		autoplay: false,//可选选项，自动滑动
		slidesPerView: slidesPerView,
		spaceBetween: spaceBetween,
		pagination: '.solution-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}
	});

	$('.media-prev, .solution-prev').click(function() {
		medialist.slidePrev();
	});
	$('.media-next, .solution-next').click(function() {
		medialist.slideNext();
	});
}