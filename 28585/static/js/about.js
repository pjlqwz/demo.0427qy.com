$(function() {
	$('.history-one').each(function(index, el) {
		var $historyOneT = $(this).position().top,
			$iPoint = $('.history-point-list > i'),
			$lineBg = $('.history-line-bg'),
			disH = 8;

		// 初始化
		if (index == 0) {
			$iPoint.eq(0).addClass('on');
			$lineBg.css('height', $historyOneT + disH + 'px');
		}

		$iPoint.eq(index).css('top', $historyOneT + disH);

		$(this).hover(function() {
			$('.history-one').removeClass('on');
			$(this).addClass('on');

			$iPoint.removeClass('on');
			$iPoint.eq(index).addClass('on');

			$lineBg.css('height', $historyOneT + disH + 'px');
		});
	});

	// 编辑框查看更多
	$('.about-more a.a-1').click(function(event) {
		$('.about-more').hide();

		$('.about-edit').css('height', 'auto');
	});

	// 出场效果
    var winW = $(window).width(),
        winH = $(window).height(),//可视窗口高度
        scrollT = $(window).scrollTop(),//鼠标滚动的距离
        pu = $(window).width()/1920;

    $(window).scroll(function(){
        winW = $(window).width(),
        winH = $(window).height(),//可视窗口高度
        scrollT = $(window).scrollTop(),//鼠标滚动的距离
        pu = $(window).width()/1920;

        divMove('.history');

        function divMove(sel) {
            if (winH + scrollT - $(sel).offset().top > winH*(1/4) && scrollT < $(sel).height() + $(sel).offset().top) {
                $(sel).addClass('move');
                $(sel).find('.letmove').addClass('move');
            }
        }
    });

    //平航锚点导航
	var aArr = ['profile', 'history', 'honor'];
	var winW = $(window).width();
	var initT = 124;
	var navMoveFlag = false;
	var navMoveTime;

	$('.nav-inside > ul > li').click(function() {
		var _index = $(this).index();

	    $('.nav-inside > ul > li').eq(_index).addClass('on').siblings().removeClass('on');
	    $('html,body').stop().animate({scrollTop: $('#'+ aArr[$(this).index()] +'').offset().top - initT + 'px'}, 1000);
	    // if (winW < 769) {
	    //     $(".header-menu").stop().slideUp(350, 'easeInQuad');
	    //     $('.m-close').removeClass('m-close-on');
	    // }

	    $('.nav-inside-arrow').stop().animate({top: 44*_index + 19 + 'px'}, 500);

		navMoveFlag = true;
		clearTimeout(navMoveTime);
	    navMoveTime = setTimeout(navMoveFalse, 1000);
	});

	function navMoveFalse() {
	    navMoveFlag = false;
	}

	$(window).scroll(function(){
	     var winH = $(window).height();//可视窗口高度
	     var iTop = $(window).scrollTop();//鼠标滚动的距离
	     
	     //鼠标滑动式改变  
	    if (winH+iTop - $('#profile').offset().top > winH/4 && !navMoveFlag) {
	        $('.nav-inside > ul > li').eq(0).addClass('on').siblings().removeClass('on');
		    $('.nav-inside-arrow').stop().animate({top: 44*0 + 19 + 'px'}, 500);
	    }
	    if (winH+iTop - $('#history').offset().top > winH/4 && !navMoveFlag) {
	        $('.nav-inside > ul > li').eq(1).addClass('on').siblings().removeClass('on');
		    $('.nav-inside-arrow').stop().animate({top: 44*1 + 19 + 'px'}, 500);
	    }
	    if (winH+iTop - $('#honor').offset().top > winH/4 && !navMoveFlag) {
	        $('.nav-inside > ul > li').eq(2).addClass('on').siblings().removeClass('on');
		    $('.nav-inside-arrow').stop().animate({top: 44*2 + 19 + 'px'}, 500);
	    }
	});
});