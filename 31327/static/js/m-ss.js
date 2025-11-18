$('.ey_sive_header .menu_btn').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$('.ey_sive_header').find('.nav, .nav_bg, .son_nav').removeClass('on');
		$('body').attr('style', '');
	}else{
		$(this).addClass('on');
		$('.ey_sive_header').find('.nav, .nav_bg').addClass('on');
		$('body').css({'overflow':'hidden'});
	}
});
$('.ey_sive_header .search_btn').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$('.ey_sive_header .resp_search_box').removeClass('on');
	}else{
		$(this).addClass('on');
		$('.ey_sive_header .resp_search_box').addClass('on');
		$('.ey_sive_header').find('.menu_btn, .nav_bg, .nav, .son_nav').removeClass('on');
		$('body').attr('style', '');
	}
});
$('.ey_sive_header .nav_bg').on('click',function(){
	$(this).removeClass('on');
	$('.ey_sive_header').find('.nav, .son_nav, .menu_btn').removeClass('on');
	$('body').attr('style', '');
});
$('.ey_sive_header .resp_search_box .close_btn span').on('click',function(){
	$(this).parents('.resp_search_box').removeClass('on');
	$('.ey_sive_header .search_btn').removeClass('on');
});
$('.ey_sive_header .nav .list .title').on('click', function (e){
	$('.ey_sive_header .hasub .sub').removeClass('on');
	$('.ey_sive_header .son_nav').html($(this).parents('.list').find('.sub').html()).addClass('on');
});
$('.ey_sive_header .son_nav').on('click','.cate_close', function (e){
	$('.ey_sive_header .son_nav').removeClass('on');
})
$('.ey_sive_header .son_nav').on('click', '.son_nav_title',function(){
	$(this).parent('.item').find('.third_nav').toggle('on');
	$(this).toggleClass('on');
});
$(document).ready(function(){$('.bxslider_1').bxSlider({slideWidth:1920, adaptiveHeight:true, mode:'fade', pause:4000,autoHover:true});});