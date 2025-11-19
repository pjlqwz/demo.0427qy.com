$('.ey_header .menu_btn').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$('.ey_header').find('.nav, .nav_bg, .son_nav').removeClass('on');
		$('body').attr('style', '');
	}else{
		$(this).addClass('on');
		$('.ey_header').find('.nav, .nav_bg').addClass('on');
		$('body').css({'overflow':'hidden'});
	}
});
$('.ey_header .language_btn').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$('.ey_header .language').removeClass('on');
		$('body').attr('style','');
	}else{
		$(this).addClass('on');
		$('.ey_header .language').addClass('on');
		$('.ey_header').find('.menu_btn, .nav_bg, .nav, .son_nav').removeClass('on');
		$('body').css({'overflow':'hidden'});
	}
});
$('.ey_header .search_btn').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$('.ey_header .resp_search_box').removeClass('on');
	}else{
		$(this).addClass('on');
		$('.ey_header .resp_search_box').addClass('on');
		$('.ey_header').find('.menu_btn, .nav_bg, .nav, .son_nav').removeClass('on');
		$('body').attr('style', '');
	}
});
$('.ey_header .nav_bg').on('click',function(){
	$(this).removeClass('on');
	$('.ey_header').find('.nav, .son_nav, .menu_btn').removeClass('on');
	$('body').attr('style', '');
});
$('.ey_header .resp_search_box .close_btn span').on('click',function(){
	$(this).parents('.resp_search_box').removeClass('on');
	$('.ey_header .search_btn').removeClass('on');
});
$('.ey_header .language .close_btn span').on('click',function(){
	$(this).parents('.language').removeClass('on');
	$('.ey_header .language_btn').removeClass('on');
})
$('.ey_header .nav .list .title').on('click', function (e){
	$('.ey_header .hasub .sub').removeClass('on');
	$('.ey_header .son_nav').html($(this).parents('.list').find('.sub').html()).addClass('on');
});
$('.ey_header .son_nav').on('click','.cate_close', function (e){
	$('.ey_header .son_nav').removeClass('on');
})
$('.ey_header .son_nav').on('click', '.son_nav_title',function(){
	$(this).parent('.item').find('.third_nav').toggle('on');
	$(this).toggleClass('on');
});
$('.small_nav_sec').parent().css({'position':'relative','overflow':'visible'});
    $('.default_nav_style .n_item').hover(function(){
        $this=$(this);
        $this.find('.nav_sec').show().animate({'opacity':'1','margin-top':0},200);
        if(!$this.find('.nav_sec').hasClass('small_nav_sec')){
            $this.find('.nav_list>.clear').remove();
            $eq=parseInt(($this.find('.nav_sec_box').width()-$this.find('.nav_img').outerWidth(true))/$this.find('.nav_sec_item').outerWidth(true));
            $this.find('.nav_sec_item').each(function(index){
                if(index%$eq==($eq-1)){
                    $(this).after('<div class="clear"></div>');
                }
            });
        }
    },function(){
        $this=$(this);
        $this.find('.nav_sec').animate({'opacity':'0','margin-top':'30px'},0).hide();
    });