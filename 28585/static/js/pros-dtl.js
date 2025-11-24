$(function() {
	// 产品图片
	$('.psimg-mini-one').each(function(index, el) {
		$(this).hover(function() {
			var $hoverUrl = $(this).data('hoverurl'),
				$bigUrl = $('.psimg-big img');

			$('.psimg-mini-one').removeClass('on');
			$(this).addClass('on');
			$bigUrl.attr('src', $hoverUrl);
		});
	});
});