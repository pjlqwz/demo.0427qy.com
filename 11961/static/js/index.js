$(function () {
    new WOW({
        mobile: false
    }).init();

    $('.hform').find('form').submit(function () {
        var val = $(this).find('input').val();
        if (!val) {
            alert('请输入关键字');
            return false
        }
    });

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

    $('.footer').find('dt').on('click', function () {
        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
            $(this).next().slideUp();
        } else {
            $(this).parent().addClass('open');
            $(this).next().slideDown();
        }
    });

    // 右侧滑动返回顶部
    $('.kf .kf-side').click(function(){
        //$('.kf').animate({ right: '-208' }, "slow");
        var rt = $('.kf').css("right");
        //alert(rt);
        var num = parseInt(rt);
        //alert(num);
        if(num < 0){
            $('.kf').animate({ right: '20px' }, "slow");
            $('.kf .kf-side span.arrow').addClass('on');
        }else{
            $('.kf').animate({ right: '-208px' }, "slow");
            $('.kf .kf-side span.arrow').removeClass('on');
        }
    });
    $('.kt-top span.close').click(function(){
        $('.kf').animate({ right: '-208px' }, "slow");
    });

    $('.kf .backTop').click(function() {
        $("html,body").stop().animate({ scrollTop: '0' }, 500);
    });
});

function tabsSwiper(menu, con) {
    var swiper = new Swiper(con, {
        speed: 500,
        spaceBetween: 10,
        on: {
            slideChangeTransitionStart: function () {
                $(menu).find('li').eq(this.activeIndex).addClass('active').siblings().removeClass('active');
            }
        }
    });
    $(menu).on('click', 'li', function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        swiper.slideTo($(this).index());
    });
}
