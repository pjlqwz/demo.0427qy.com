$(function() {
    var winW = $(window).width(),
        winH = $(window).height(),
        lastSectionIndex = $('.section').length - 1;

    // 首屏加载体验优化
    $('#fullpage').css('opacity', '1');

    // 首屏最新资讯
    jQuery(".one-words-1-1").slide({mainCell:".topnews-list ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:1,delayTime:700, interTime: 3000});

    // 屏4
    // $('.about-video-play').click(function() {
    //     $('.about-video-fixed').css({
    //         'opacity': '1',
    //         'visibility': 'visible'
    //     });
    //     $('#video').get(0).play();
    // });
    // $('.video-fixed-close, .about-video-fixed-bg').click(function() {
    //     $('.about-video-fixed').css({
    //         'opacity': '0',
    //         'visibility': 'hidden'
    //     });
    //     $('#video').get(0).pause();
    // });

    // 屏5
    jQuery(".ind-r").slide({mainCell:".ind-list ul",autoPage:true,effect:"top",scroll:3,vis:3,easing:"easeOutCirc",pnLoop:false,trigger:"click", prevCell: '.ind-up', nextCell: '.ind-down'});

    // 控制图片宽高响应
    function respImgRatio(sel) {
        var imgRatioRule = $(window).width()/$(window).height(),
            imgRatio = $(sel).width()/$(sel).height();

        if (imgRatio < imgRatioRule) {
            $(sel).css({
                'width': '100%',
                'height': 'auto'
            });
        } else {
            $(sel).css({
                'width': 'auto',
                'height': '100%'
            });
        }
    }

    // 点击下一页按钮
    $('.fix-nextimg-all').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    // 点击页脚gotop
    $('.gotop').click(function() {
        $.fn.fullpage.moveTo(1);
    });

    $('#fullpage').fullpage({
        verticalCentered: true,
        scrollingSpeed: 1000,
        menu: '.fix-nav-all',
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        css3: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        // 'navigation': true,
        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);

            if (index !== 1) {
                $('.fixpage').addClass('no1st');
            } else {
                $('.fixpage').removeClass('no1st');
            }

            // 先加载一次响应图片
            respImgRatio('.index-bg');

            // 各屏的图片动效
            if (index == 1) {
                $('.section-1 .movetag').addClass('move');


                setTimeout(function() {
                    $('.section-1 .animetag').addClass('anime');

                    // 首屏第1行顶部距离首屏顶
                    var oneImg_1_1T = $('.one-img-1-1').offset().top;
                    // 首屏第2行底部距离首屏顶
                    var oneImg_1_2B = $('.one-img-1-2').offset().top + $('.one-img-1-2').height();

                    $('.one-img-1-4, .one-img-1-5').css({
                        top: oneImg_1_1T - 124 - 15 + 'px'
                    });
                    $('.one-img-1-6, .one-img-1-7').css({
                        top: oneImg_1_2B + 10 + 'px'
                    });
                }, 1500);

            } else {
                $('.section-1 .movetag').removeClass('move');
                $('.section-1 .animetag').removeClass('anime');
            }
            if (index == 2) {
            } else {
            }
            if (index == 3) {
            } else {
            }
            if (index == 4) {
            } else {
            }
            if (index == 5) {

            } else {
                if (index != lastSectionIndex + 1) {

                }
            }

            //using anchorLink
            if (anchorLink == 'secondSlide') {
                alert("Section 2 ended loading");
            }

        },
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);

            if (nextIndex !== 1) {
                $('.fixpage').addClass('no1st');
            } else {
                $('.fixpage').removeClass('no1st');
            }

            // 隐藏顶部页的导航点
            // if (index == 2 && direction == 'up') {
            //     $('#fp-nav').fadeOut(1100);
            //     $('.full-one-all:nth-child(2)').css('z-index', '10');
            //     $('.full-one-all:nth-child(2) .full-one-inside').css({
            //         'transform': 'rotateX(0deg)',
            //         'transition': 'all 0s',
            //         'opacity': '1',
            //         'visibility': 'visible'
            //     });
            //     $('.header').css({
            //         'opacity': '1',
            //         'display': 'table'
            //     });
            // } else {
            //     $('#fp-nav').fadeIn(1100);
            //     $('.full-one-all:nth-child(2)').removeAttr('style');
            //     $('.full-one-all:nth-child(2) .full-one-inside').removeAttr('style');
            // }

            // 隐藏脚部页的导航点
            if (index == lastSectionIndex && direction == 'down') {
                $('#fp-nav').fadeOut(1100);
                $('.full-one-all:nth-last-child(2)').css('z-index', '10');
                $('.full-one-all:nth-last-child(2) .full-one-inside').css({
                    'transform': 'rotateX(0deg)',
                    'transition': 'all 0s',
                    'opacity': '1',
                    'visibility': 'visible'
                });
                $('.footer-all').css({
                    'opacity': '1',
                    'display': 'table'
                });
                $('.fix-nextimg-all').fadeOut(500);
                $('.fix-lang-all, .fix-qq-all').fadeOut(300);
            } else if (nextIndex != lastSectionIndex) {
                $('#fp-nav').fadeIn(1100);
                $('.full-one-all:nth-last-child(2)').removeAttr('style');
                $('.full-one-all:nth-last-child(2) .full-one-inside').removeAttr('style');
            } 
            if (index != lastSectionIndex) {
                $('.fix-nextimg-all').fadeIn(500);
                $('.fix-lang-all, .fix-qq-all').fadeIn(500);
            }


            if (nextIndex == 6) {
                // $('.section-6 .movetag').addClass('move');
            } else {
                // $('.section-6 .movetag').removeClass('move');
            }

            if (nextIndex == 3) {

            }
        },
        afterResize: function() {
            var pluginContainer = $(this);
            winW = $(window).width();
            winH = $(window).height();

            // 改变宽高后图片响应一下
            respImgRatio('.index-bg');

        }
    });
});

$(window).load(function() {
// $(function() {
    // 响应式
    if (winW < 769) {
        // 获得工程图片高度
        var engImgH = $('.index-eng-list > ul > li').eq(0).find('img').height();
        // 获得我们的优势图片高度
        var advImgH = $('.index-adv-list > ul > li').eq(0).find('.adv-one').height();
        var advImgLh = $('.index-adv-list > ul > li').eq(0).find('.adv-one').outerHeight();

        // 控制工程图片高度
        $('.index-eng-list > ul > li.more a').css({
            'height': engImgH + 'px',
            'line-height': engImgH + 'px'
        });

        // 控制我们的优势图片高度
        $('.index-adv-list > ul > li.more .adv-one').css({
            'height': advImgH + 'px',
            'line-height': advImgLh + 'px'
        });
    }
});
