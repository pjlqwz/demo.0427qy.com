$(function() {
	// var roomImgW = $('.room-list > ul > li').eq(0).find('img').width();
	var roomImgW = $('.room-one').width();

	$('.room-one-img').css({
		'height': 398/514 * roomImgW + 'px'
	});
	$('.room-list > ul').css('opacity', '1');

	// 下单
	$('.room-down').click(function(event) {
		$('.eng-form-all').addClass('show');
	});
	$('.eng-form-close, .eng-form-all').click(function(event) {
		$('.eng-form-all').removeClass('show');
	});
	$('.eng-form').click(function(event) {
		   event.stopPropagation();
	});
});

$(window).load(function() {
});