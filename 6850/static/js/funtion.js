$(document).ready(function() {
	//banner
	$('.swiper-container-banner').swiper({pagination: '.swiper-pagination-banner li',slidesPerView: 1,paginationClickable: true,spaceBetween: 0,autoplay:5500,speed: 300, autoplayDisableOnInteraction:false,nextButton: '.swiper-button-next-banner',prevButton: '.swiper-button-prev-banner'});

	//首页banner设置高度
    function zhuziheight(){
        var navHeight=$(".header" ).height();
        var bannerHeight=$(".banner" ).height();
        var height = navHeight + bannerHeight;
        $(".top").css("height",height+"px");
    }
    setTimeout(zhuziheight,10);
    $(window).resize(function () {
        zhuziheight();
    })

	//计算navbar宽度
	function menuwidth(){
		var width=$(".nav" ).width();
		var size=$(".nav > ul > li").size();
		$(".nav > ul > li").css("width",Math.floor(width/size)+"px");
	}
	setTimeout(menuwidth,100);
	$(window).resize(function(){
		menuwidth();
	});

	//nav横向下拉菜单栏
	$("ul.one li").hover(function(){
		$(this).addClass("cu").siblings().removeClass('cu')
		$(this).find(".two_box").stop(false,true).slideDown("200")
	},function(){
		$(this).removeClass("cu")
		$(this).find(".two_box").stop(false,true).slideUp("200")
	});

	//头部搜索
	$(".search_icon").click(function(event) {
    	$(this).toggleClass('search_h');
        $(this).siblings('.search_box').slideToggle(400);
    });

	//底部友情链接
	$(".linker ul li a").click(function(event) {
    	$(this).find('em').toggleClass('close_em');
    	$(this).siblings('.linker_list').slideToggle(300)
    });

    //隐藏导航跟wrap的切换
    $(".nav_button").click(function(){
        $(".class").removeClass("page-prev").addClass("page-in");
        $(".wrap").removeClass("page-active").addClass("page-next page-in")
        $(".opacity").show()
        pageSlideOver();
    })
    $(".class_close,.opacity").on('click touchstart',function(){
        $(".class").addClass("page-prev page-out")
        $(".wrap").removeClass("page-next").addClass(" page-out")
        $(".opacity").fadeOut();
        pageSlideOver();
    })
    function pageSlideOver(){
        $('.page-out').on('transitionend', function(){
            $(this).removeClass('page-out');
        });
        $('.page-in').on('transitionend', function(){
            $(this).removeClass('page-in');
        });
    }

    $(".m_two").siblings('a').append('<span></span>');
    $(".m_three").siblings('a').append('<span></span>');
    $(".m_list .m_one>li>a").click(function() {
        $(this).toggleClass('cu1')
        $(this).parent().siblings().find('a').removeClass('cu1')
        $(this).parent().siblings().find('.m_two a').removeClass('cu2')
        $(this).find('span').toggleClass('close_one').parent().parent().siblings().find('span').removeClass('close_one');
        $(this).parent().siblings().find('.m_two,.m_three').slideUp();
        $(this).siblings('.m_two').slideToggle();
    });
    $(".m_list .m_two>li>a").click(function() {
        $(this).addClass('cu2')
        $(this).parent().siblings().find('a').removeClass('cu2')
        $(this).parent().siblings().find('.m_three').slideUp();
        $(this).siblings('.m_three').slideToggle();
    });
    $(".m_list .m_three>li>a").click(function() {
        $(this).addClass('cu3')
        $(this).parent().siblings().find('a').removeClass('cu3')
        // $(this).find('span').toggleClass('close_one')
        // $(this).parent().siblings().find('span').removeClass('close_one');
        $(this).parent().siblings().find('.m_four').slideUp();
        $(this).siblings('.m_four').slideToggle();
    });

    //内页pc分类
    $(".classify").click(function() {
        $('.left_list').slideToggle(400);
        $(this).toggleClass('close_c');
    });
    $(".second,.third").siblings('a').append('<span></span>');
    //内页pc分类一级点击展开
    $(".left_type_two .first>li>a").click(function() {
        $(this).toggleClass('cu1');
        $(this).parent().siblings().find('a').removeClass('cu1')
        $(this).parent().siblings().find('.second a').removeClass('cu2')
        $(this).find('span').toggleClass('close_c')
        $(this).parent().siblings().find('span').removeClass('close_c');
        $(this).parent().siblings().find('.second,.third').slideUp();
        $(this).siblings('.second').slideToggle();
    });
    $(".left_type_two .second>li>a").click(function() {
        $(this).addClass('cu2')
        $(this).parent().siblings().find('a').removeClass('cu2')
        $(this).find('span').toggleClass('close_c')
        $(this).parent().siblings().find('span').removeClass('close_c');
        $(this).parent().siblings().find('.third').slideUp();
        $(this).siblings('.third').slideToggle();
    });

    //pro 选项卡
    //首页产品展示点击切换==选项卡
    jQuery(".pro_slide")//.slide({titCell:".hd_pro li", effect:"fade", mainCell:".bd_pro",trigger:"click"});
    $('.swiper-container-pro0').swiper({pagination: '.swiper-pagination-pro li',slidesPerView: 1,effect : 'left',loop:true, paginationClickable: true,spaceBetween: 0,autoplay:5500,speed: 300, autoplayDisableOnInteraction:false,nextButton: '.swiper-button-next-pro',prevButton: '.swiper-button-prev-pro'});
    $(".pro_slide .hd_pro ul li").click(function(event) {
        // $(this).addClass("on").siblings().removeClass("on");
        // var index=$(this).index(); 
        // $(".pro_slide .bd_pro > .pro_data").eq(index).show().siblings().hide();
        var swiperNum = $('.swiper-container-pro' + index)
        $(swiperNum).swiper({pagination: '.swiper-pagination-pro li',slidesPerView: 1,effect : 'left',loop:true, paginationClickable: true,spaceBetween: 0,autoplay:5500,speed: 300, autoplayDisableOnInteraction:false,nextButton: '.swiper-button-next-pro',prevButton: '.swiper-button-prev-pro'});
    });

    //首页新闻资讯
    $('.swiper-container-show').swiper({pagination: '.swiper-pagination-show li',slidesPerView: 1,effect : 'fade',loop:true,paginationClickable: true,spaceBetween: 0,autoplay:5000,speed: 300, autoplayDisableOnInteraction:false,nextButton: '.swiper-button-next-show',prevButton: '.swiper-button-prev-show'});

    //产品详情页 多图轮播 pc   
    //大图切换
    jQuery(".pc_image").slide({ titCell:".smallimg li", mainCell:".bigimg", effect:"fold", delayTime:200,trigger:"mouseover",pnLoop:false});
    //小图左滚动切换
    jQuery(".pc_image .smallscroll").slide({ mainCell:"ul",delayTime:100,vis:3,effect:"top",autoPage:true,prevCell:".prev_det_pc",nextCell:".next_det_pc",pnLoop:false });

    //产品详情页 多图轮播 手机
    var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            // loop:true,
            // loopedSlides: 4, //looped slides should be the same
            initialSlide :0,  //设定初始化时slide的索引。
        });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        // loop:true,
        // loopedSlides: 4, //looped slides should be the same
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        initialSlide :0,  //设定初始化时slide的索引。
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    
    // $(".vv").addClass('slideInRight wow')
    // $(".vv").addClass('bounceInLeft wow')
    // $(".vv").addClass('fadeInUp wow')
    // $(".vv").addClass('slideInDown wow')

    $(".head_bt").addClass('fadeInDown wow')
    $(".hd_pro ul,.header,.about_imore,.copyright").addClass('fadeInUp wow')
    $(".pro_left,.news_data,.head_tit").addClass('fadeInLeft wow wower')
    $(".pro_right,.news_show,.here_i").addClass('fadeInRight wow wower')
    $(".about .container,.classify").addClass('slideInRight wow')
    // 鼠标滚动渐入
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    
});