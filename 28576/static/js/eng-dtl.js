$(function() {
	// .eng-list-one图片宽高
	// var engListImgW = $('.eng-list-one').width();

	// $('.eng-list-one').height(410/590 * engListImgW);
	
	// 下单
	$('.fix-engform-all').click(function(event) {
		$('.eng-form-all').addClass('show');
	});
	$('.eng-form-close, .eng-form-all').click(function(event) {
		$('.eng-form-all').removeClass('show');
	});
	$('.eng-form').click(function(event) {
		return false;
	});
});