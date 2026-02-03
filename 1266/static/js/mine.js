$(function() {
	$('#dowebok').easyFader();
});

//手机头部
jQuery(document).ready(function($) {
	var m_menu = $('.m-nav');
	$('.m-trigger').click(function() {
		if(m_menu.is(':visible')) {
			m_menu.hide();
		} else {
			m_menu.show();
		}
		return false;
	});

});



		$(document).ready(function(e) {
			$(".m-nav li ").click(function() {

				$(this).find("ol").slideToggle();
			});
		});




(function() {
	window.scrollReveal = new scrollReveal({
		enter: 'bottom',
		move: '30px',
		over: '0.8s',
		reset: false,
	});
})();


//回到顶部
function goTop(){
    $('html,body').animate({'scrollTop':0},600);
}

$('.side2 li').hover(function(){
    $(this).find('.weixin').stop().slideToggle();
})