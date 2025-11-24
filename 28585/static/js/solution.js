$(function() {
	solutionSwiper();

	// 展示用的虚拟加载更多功能
	// $('.co-solution-more a.a-1').click(function() {
	// 	$(this).hide();
	// 	$('.co-solution-list').find('.hide').fadeIn();
	// });
});

$(window).resize(function() {
	solutionSwiper();
});

function solutionSwiper() {
	var $winW = $(window).width();

	// 业绩新闻轮播图
	var slidesPerView = 3;
	var spaceBetween = 32;

	if ($winW <= 1450) {
		spaceBetween = 25;
	}
	if ($winW <= 1000) {
		slidesPerView = 2;
		spaceBetween = 15;
	}
	if ($winW <= 768) {
		spaceBetween = 15;
	}
	if ($winW <= 620) {
		slidesPerView = 1;
		spaceBetween = 0;
	}

	var solutionlist = new Swiper('.solution-list', {
		autoplay: false,//可选选项，自动滑动
		slidesPerView: slidesPerView,
		spaceBetween: spaceBetween,
        pagination: '.solution-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}
	});

	$('.solution-prev').click(function() {
		solutionlist.slidePrev();
	});
	$('.solution-next').click(function() {
		solutionlist.slideNext();
	});
}