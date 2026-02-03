// JavaScript Document
//前端显示方式(0:自适应 1:窄屏 2:宽屏)
$.fn.webDisplay=function(type){
	if(type==0){
		if($(window).width()>=1250){$('body').addClass('w_1200');}
		$(window).resize(function(){
			if($(window).width()>=1250){
				$('body').addClass('w_1200');
			}else{
				$('body').removeClass('w_1200');
			}
		});
	}else if(type==2){
		$('body').addClass('w_1200');
	}
}
function nav(father,son,bor,del){	//判断导航栏，如果太长自动隐藏  参数:父元素,子元素,border的大小,是否延迟
	var delay = del ? del : 0;
	var func = function(){
		var chd = $(son);
		var nav = $(father).width();
		var chd_width = 0;
		var border = bor ? bor : 0;
		chd.show();
		chd.each(function(){
			var w = $(this).width();
			var pl = $(this).css("padding-left");
			var	pr = $(this).css("padding-right");
			var ml = $(this).css("margin-left");
			var mr = $(this).css("margin-right");
			var width = parseInt(w) + parseInt(pl) + parseInt(pr) + parseInt(ml) + parseInt(mr) + border;
			chd_width +=width;
			if(chd_width>nav){
				$(this).hide();
			}else{
				$(this).show();
			}
		});
	}
	func();
	$(window).resize(function(){
		if(delay){
			setTimeout(func, 210);
		}else{
			func();
		}
	});
}
function showthis(o1,o2,i,c){
	$(o1).eq(i).addClass(c).siblings(o1).removeClass(c);
	$(o2).eq(i).show().siblings(o2).hide();
}
function SetEditorContents(ContentsId){
	var _this = $(ContentsId);
	var _img = _this.find("img");
	_img.each(function(){
		var _float = $(this).css("float");
		if(_float=='left'){
			$(this).css("margin-right","20px");
		}else if(_float=='right'){
			$(this).css("margin-left","20px");
		}
	});
	_this.find('td').css('word-break', 'normal');
}
$(function(){SetEditorContents("#ey_procon");})
function product_gallery(){
	if($('body').hasClass('mode_horizontal')){
		var node_name = 'horizontal',
			pic_num = 1;
	}else{
		var node_name = 'vertical',
			pic_num = 4;
	}
	if($('.ey_proxj .gallery .left_small_img .pic_box').length>pic_num){
		$('.left_small_img_inner').bxSlider({
			mode: node_name,
			auto: false,
			slideWidth: 90,
			minSlides: 4,
			maxSlides: 4,
			moveSlides: 1,
			slideMargin: 20
		});
	}

	$('.ey_proxj .products_img ul').bxSlider({ 
		slideWidth:$('.ey_proxj .products_img ul').width(),
		pager:false,
		auto: false,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideMargin: 0
	});

	$('#small_img .small_img_list .bd , .left_small_img').on('click', 'span', function(){
		$bigPic = $('.gallery .bigimg');
		if($(this).attr('pos')=='video'){ //视频
			$bigPic.find(".zoom_out").hide();
			$bigPic.find(".video_container").show();
			$(this).addClass('on').siblings('span').removeClass('on');
			$('#zoom').css('width', 'auto');
			//var_j(document).a('domready', MagicZoom.refresh);
			//var_j(document).a('mousemove', MagicZoom.z1);
		}else{
			$bigPic.find(".zoom_out").show();
			$bigPic.find(".video_container").hide().find('.ytp-chrome-bottom .ytp-play-button').click();
			var img=$(this).attr('pic');
			var big_img=$(this).attr('big');
			if($('#bigimg_src').length){
				$('#bigimg_src').attr('src', img).parent().attr('href', big_img);
			}else{
				$('#zoom').find('img').attr('src', img).parent().attr('href', big_img);
			}
			$(this).addClass('on').siblings('span').removeClass('on');
			$('#zoom').css('width', 'auto');
			//var_j(document).a('domready', MagicZoom.refresh);
			//var_j(document).a('mousemove', MagicZoom.z1);
		}
	});
	//var_j(document).a('domready', MagicZoom.refresh);
	//var_j(document).a('mousemove', MagicZoom.z1);
}

function case_gallery(){
	$('#small_img .small_img_list .bd').delegate('span', 'click', function(){
		var img=$(this).attr('pic');
		var big_img=$(this).attr('big');
		$('#bigimg_src').attr('src', img).parent().attr('href', big_img);
		$(this).addClass('on').siblings('span').removeClass('on');
	});
}

$(function(){
	
	$('.description .global_mtitle').click(function(){
		var _this = $(this),
			obj = _this.siblings('.editor_cnt'),
			content = obj.find('#ey_procon'),
			height = content.outerHeight(true),
			cur = _this.hasClass('cur');
		if(cur){
			_this.removeClass('cur');
			height = 0;
		}else{
			_this.addClass('cur');
		}
		obj.height(height);
		var sib = _this.parents('.contents').siblings('.contents');
		sib.find('.global_mtitle').removeClass('cur');
		sib.find('.editor_cnt').height(0);
	})

	if($(window).width()<768){
		$('.description .global_mtitle').eq(0).click();
	}

	/*社交媒体*/
	$("#chat_window .chat_box.is_respon .chat_box_menu .more").click(function(){
		$("#chat_window .chat_box .box").toggleClass("show");
	});
	$("#chat_window .chat_box .box .chat_close").click(function(){
		$("#chat_window .box_area .chat_item .item .relimg").slideUp();
		$("#chat_window .chat_box .box").removeClass("show");
	});

	$("#chat_window .box_area .chat_item .item").click(function(){
		$(this).find('.relimg').stop().slideToggle();
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('#go_top').addClass("show");
		}else{
			$('#go_top').removeClass("show");
		}
	});
	$('#go_top').click(function(){$("html, body").animate({"scrollTop":0}, 700);});
	
	//添加包裹class；处理响应式时table宽度超出内容区的问题
	$("#ey_procon table").wrap("<div class='editor_table_wrap'></div>");
	
	$('.dark').css({opacity:"0.5"});//透明公共样式
	
		$(this).find('input[type=submit]').removeAttr('disabled');
		return false;
	});
	$('.review_form .review_star span').hover(function(){
		var ind=parseInt($(this).index());
		$('.review_form .review_star span:gt('+ind+')').removeClass('star_1').addClass('star_0');
		$('.review_form .review_star span:lt('+(ind+1)+')').removeClass('star_0').addClass('star_1');
	},function(){
		var star=parseInt($('[name=Rating]').val());
		if(isNaN(star)) star=0;
		$('.review_form .review_star span').removeClass('star_1').addClass('star_0');
		$('.review_form .review_star span:lt('+star+')').removeClass('star_0').addClass('star_1');
	}).click(function(){
		var ind=parseInt($(this).index());
		$('[name=Rating]').val((ind+1));
	});


	$('#lib_review_form form[name=review], .ey_proxj_review form[name=review]').submit(function(){//评论
		if(global_obj.check_form($(this).find('*[notnull]'), $(this).find('*[format]'))){return false;}
		$(this).find('input:submit').removeAttr('disabled');
		$.post('?do_action=action.submit_review', $(this).serialize(), function(data){
			if(data.status==1){
				global_obj.win_alert(data.msg, function(){window.location.href=window.location.href;});
			}else{
				global_obj.win_alert(data.msg,'','sorry');
			}
		},'json');
		return false;
	});

	$('.ey_proxj_review .review_list,#pdetail .review_list').on('click','.page_item',function(){//产品详情评论分页
		$.post('?do_action=action.turn_page_ajax', {page:$(this).attr('page'),ProId:$('input[name="ProId"]').val()}, function(data){
			if(data.ret==1){
				$('.review_list').html(data.msg);
			}else{
				
			}
		},'json');
		return false;
	});

	$(".email_copy").bind('copy', function(){
		$.post('?do_action=action.email_copy_log', {email:$(this).text(),url:location.href});
		return false;
	});


	//  打开搜索框
	$('body').on('click','.default_search',function(){
		$('body').append($search_html);
		$('#default_search_box').fadeIn();

	});
	//关闭搜索框
	$('body').on('click','#default_search_box i',function(){
		//判断 是否在关闭过程中
		if($('#default_search_box').is(":animated")){return false;}
		$('#default_search_box').fadeOut("slow", function() {
			$('#default_search_box').remove();
		});
	});	
function ShippingCartHeight() {
	$('.eyou_box .cart_list').height($(window).height() - $('.eyou_box .cart_title').outerHeight(true) - $('.eyou_box .cart_foot').outerHeight(true));
}
function load_bom_box(type){
	load_cart_list(1);
	if (!type) {
		if(!$('.eyou_box_bg').length) $('body').append('<div class="eyou_box_bg"></div><div class="eyou_bom_box"></div>');
		var $note = $('.eyou_bom_box'),
			$scroll_w = window.innerWidth-$(window).width();
		($scroll_w > 100 || $scroll_w < 0) && ($scroll_w = 0); //兼容IE
		$('.eyou_box_bg').show();
		$note.css('right', '0');
		$('body').css({'overflow':'hidden', 'padding-right':$scroll_w+'px'});
		
		return false;
	}else if(type==1){
		$('.eyou_box_bg').hide();
		$('.eyou_bom_box').css('right', '-400px');
		$('body').removeAttr('style');
		window.removeEventListener("resize", BomBoxHeight);
	}
}
$(function(){
	nav('.head-nav','.head-nav .n_item');
	$('.products .pro_cate .first_cate .icon').on('click',function(){
		$(this).parents('.list').find('.son_cate').toggleClass('on');
		$(this).parents('.list').toggleClass('on');
	})
    $(window).scroll(function(){
        var height = $(".headerTop").outerHeight();
        var w_top = $(this).scrollTop();
        if(w_top > height){
            $('.ey_pc_header .header_in').addClass('fixed');
        }else{
            $('.ey_pc_header .header_in').removeClass('fixed');
        }
    });
});