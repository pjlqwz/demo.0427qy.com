$(function() {
    // 视差插件
    // stellarGo();

    // 头部点击链接
    var $winW = $(window).width();

    if ($winW > 1200) {
        $('.header-r-nav > ul > li a').click(function(event) {
            var _this = $(this);
            var $subMenu = _this.siblings('.sub-menu');

            if ($subMenu.length) {
                var firstLink = $subMenu.find('a').eq(0).attr('href');

                _this.attr('href', firstLink);
            }
        });
    }

    // 头部搜索
    var searchTimer;

    $('.search').mouseenter(function(event) {
        clearTimeout(searchTimer);

        enterTimer = setTimeout(function() {
            $('.search').addClass('on');
        }, 200);
    }).on('mouseleave keyup', function(event) {
        var searchVal = $('.search').find('input').val();

        clearTimeout(enterTimer);

        if (!searchVal) {
            searchTimer = setTimeout(function() {
                $('.search').removeClass('on');
            }, 2000);
        }
    });

	// .to-top
	$('.to-top, .footer-to-top').click(function(event) {
        $('body, html').animate({scrollTop:0}, 650); 

        return false;  
	});

	// 链接按钮hover效果.btn-circle-hover
    $('.btn-circle').on('mouseenter mouseover mousemove', function (e) {
        var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
        var circleR = $(this).outerWidth(true);

        $(this).find('.btn-circle-hover').css({
            top: relY,
            left: relX,
            width: .5*circleR,
            height: .35*circleR,
            opacity: .35,
		    transition: '.0s'
        });
    }).on('mouseout', function (e) {
        var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;

        $(this).find('.btn-circle-hover').css({
            top: relY,
            left: relX,
            width: 0,
            height: 0,
            opacity: 0,
		    transition: 'left 0s, top 0s, width .3s, height .3s, opacity .3s'
        });
    });

    navClick();
});

$(window).load(function() {
    // 视差插件
    stellarGo();
}); 

function stellarGo() {
    var $winW = $(window).width();

    if ($winW > 768) {
        // 视差插件
        $.stellar({horizontalScrolling: false, verticalOffset: 40}); 
    }
}

$(window).resize(function(event) {
    navClick();
});

function navClick() {
    var $winW = $(window).width();

    if ($winW <= 1200) {
        $('header').click(function() {
            if ($('body').hasClass('on')) {
                $('body').removeClass('on');
                $('.header-r').stop(true, false).slideUp(800, 'easeInOutBack');
            } else {
                $('body').addClass('on');
                $('.header-r').stop(true, false).slideDown(800, 'easeOutBack');
            } 
        });

        $('.header-l, .lang-sel-m, .header-r').click(function(event) {
            event.stopPropagation();
        });

        $('a.a-sub').click(function() {
            if (!$(this).hasClass('on')) {
                $(this).siblings('.sub-menu').stop(true, false).slideDown(600, 'easeOutBack');
                $(this).addClass('on');
            } else {
                $(this).siblings('.sub-menu').stop(true, false).slideUp(500, 'easeInOutBack');
                $(this).removeClass('on');
            }
        });
    }
}

var $winW = $(window).width();
var $bannerB = $('.inside-banner-bg').offset().top + $('.inside-banner-bg').eq(0).height();
var $relLine = 0;

if ($winW > 1270) {
    $(window).scroll(function(event) {
        $relLine = $(window).scrollTop() + $(window).height()* (2/5);

        if ($relLine > $bannerB) {
            $('.nav-inside').fadeIn();
        } else {
            $('.nav-inside').fadeOut();
        }
    });
}

