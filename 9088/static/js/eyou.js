$(function () {


    $('.menu-btn').on('click', function () {
        $('.header').find('.nav').toggle();
    });

    $('.sc-btn').on('click', function () {
        $('.header').find('.sc-form').toggle();
    });

    if ($(window).width() > 991) {
        $('.dropdown').hover(function () {
            $(this).addClass('open');
        }, function () {
            $(this).removeClass('open');
        });
    } else {
        $('.dropdown').find('.arr').on('click', function () {
            $(this).parent().toggleClass('open');
        });
    }

    $('.lanmu').find('.arr').on('click', function () {
        $(this).parent().toggleClass('open');
    });

    $('.eyou-sou').find('form').submit(function () {
        var val = $(this).find('input').val();
        if (!val) {
            alert('请输入关键词');
            return false
        }
    });

    // 右侧滑动返回顶部
    var time;
    var $kefu = $('.kefu');
    var $c = $kefu.find('#kefu');
    $kefu.css({
        'marginTop': -($kefu.height() / 2)
    });
    $c.find('li').on({
        'mouseenter': function () {
            var scope = this;
            time = setTimeout(function () {
                var divDom = $(scope).children('div');
                var maxWidth = divDom.width();
                $(scope).stop().animate({
                    left: 77 - maxWidth
                }, 'normal', function () {
                    var pic = $(scope).find('.kefu-weixin-pic');
                    if (pic.length > 0) {
                        pic.show();
                    }
                });
            }, 100);
        },
        'mouseleave': function () {
            var pic = $(this).find('.kefu-weixin-pic');
            if (pic.length > 0) {
                pic.hide();
            }
            clearTimeout(time);
            $(this).stop().animate({
                left: 0
            }, 'normal', function () {
            });
        }
    });
    $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var eltop = $c.find('.kefu-ftop');
        if (scrollTop > 0) {
            eltop.show();
        } else {
            eltop.hide();
        }
    });
    $c.find('.kefu-ftop').click(function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > 0) {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
        }
    });


});
