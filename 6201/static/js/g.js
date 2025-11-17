
$(function () {
	$('.g_menu').click(function () {
		var m = $(this), h = $('html'); n = $('.g_header');
		if (h.hasClass('navon')) { h.removeClass('navon'); n.off('click'); } else { h.addClass('navon'); n.on('click', function () { m.click(); }); }
		return false;
	});
	$('.g_header .nav > li > a').click(function () {
		if (!$('html').hasClass('um') || $(this).next('.sub').length <= 0) return;
		var p = $(this).parent();
		if (!p.hasClass('on')) {
			$('.g_header .nav > li.on').removeClass('on');
			p.addClass('on');
			return false;
		}
	});
});