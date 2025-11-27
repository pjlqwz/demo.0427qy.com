/* 
 * @Author: anchen
 * @Date:   2019-03-30 16:14:10
 * @Last Modified by:   anchen
 * @Last Modified time: 2019-04-01 17:49:36
 */

$(document).ready(function() {

    // 手机导航
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if ($(this).hasClass('open')) {
            $('body').addClass('open');
            if (_winw <= 943) {
                $('.web-nav').stop().slideDown();
            }
        } else {
            $('body').removeClass('open');
            if (_winw <= 943) {
                $('.web-nav').stop().slideUp();
            }
        }
        //手机导航下拉菜单加箭头
          var subNav = $('.nav-m>ul>li>.subNav');
          var l = subNav.length;
          if (l >= 0) {
              $('.nav-m>ul>li>dl').siblings('a').addClass('v1');
          }
    });
    $(window).on('resize', function(e) {
        if ($(window).width() > 943) {
            $('.menuBtn').removeClass('open');
            $('.hdr').css('display', '');
        }else{
             //手机导航下拉菜单加箭头
            var subNav = $('.nav-m>ul>li>.subNav');
            var l = subNav.length;
            if (l >= 0) {
                $('.nav-m>ul>li>dl').siblings('a').addClass('v1');
            }
        }
    });

    // 导航
    function myNav() {
        var _winw = $(window).width();
        if (_winw >= 943) {
            $('.web-nav').show().addClass('nav-pc').removeClass('nav-m');
            $('body,.menuBtn').removeClass('open');
             $('.web-nav').attr('style', ''); 
            $('.web-nav').find('dl').attr('style', ''); 
            $('.web-nav').find('.v1').removeClass('on').attr('style', ''); 
        } else {
            $('.web-nav').hide().addClass('nav-m').removeClass('nav-pc');
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
        $('.menuBtn').removeClass('open');
    });

    $('.nav-pc li').bind('mouseenter', function() {
        if ($(window).width() <= 769) return;
        $(this).find('dl').stop().slideDown("fast");
        if ($(this).find('dl').length) {
            $(this).addClass('ok');
        }
    });

    $('.nav-pc li').bind('mouseleave', function() {
        if ($(window).width() <= 769) return;
        $(this).removeClass('ok');
        $(this).find('dl').stop().slideUp("fast");
    });



    $('body').on('click', '.nav-m .v1', function () {
        $(this).parents('li').siblings('li').find("dl").stop().slideUp("fast");
        // $(this).parents(".nav").find("dl").stop().slideUp("fast");
        if ($(this).siblings('dl').length) {
            $(this).siblings('dl').stop().slideToggle("fast");
            $(this).toggleClass('on');
            return false;
        };
    });

    // 滚动导航悬浮
    $(document).on('scroll', function() {
        var scrollH = $(this).scrollTop();
        if (scrollH > $('.header').height()) {
            $('.web-header .bottom').addClass('fixed');
        } else {
            $('.web-header .bottom').removeClass('fixed');
        }
    })

    // 选项卡 鼠标点击
    $(".TAB_CLICK li").hover(function() {
        /* Stuff to do when the mouse enters the element */
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).addClass('show').siblings(con).removeClass('show');
    });
    $('.TAB_CLICK').each(function(index, el) {
        $(this).children('li').filter(':first').trigger('click');
    });
   
    // 自定义单选
    $('[role=radio]').each(function() {
        var input = $(this).find('input[type="radio"]'),
            label = $(this).find('label');

        input.each(function() {
            if ($(this).attr('checked')) {
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })

        input.change(function() {
            label.removeClass('checked');
            $(this).parents('label').addClass('checked');
            input.removeAttr('checked');
            $(this).prop("checked", true)
        })
    })


    // 客服
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

    //返回顶部
    $('.kf .backTop').click(function() {
        $("html,body").stop().animate({ scrollTop: '0' }, 500);
    });


    $('.web-Mobile-nav .mobSo').click(function(event) {
        /* Act on the event */

        $(".top-2 .so").stop().slideToggle(200);
    });
    //内页左侧二级分类
        $('.snv-sub').eq(0).show();
        $('.snv-sub').eq(0).parent().addClass('on');
        $('.snv > li').click(function () {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            var count = $('.snv-sub', $(this)).size();
            if (count) {
                $(this).find('.snv-sub').slideToggle();
                $('.snv-sub').not($(this).find('.snv-sub')).slideUp();
                return false;
            }
        });
        $('.snv-sub dd').click(function (event) {
            /* Act on the event */
            event.stopPropagation();
        });
        //二级分类点击高亮效果
        $('.snv-sub a').click(function(){
            $(this).parent('dd').addClass('on')
            $('.snv-sub dd').not($(this).parent()).removeClass('on');
            
        });
        //内容过少时footer自动到底部
            function initFooter() {
                if ($(window).width() > 960) {
                    $(".web-footer").css("position", "static");
                    return;
                }
                var height = $(".web-head").outerHeight() + $(".ban").outerHeight() + $(".main").outerHeight() + $(".web-footer").outerHeight();
                // var tabbar = $('.web-link').outerHeight();
                heightRsize();
                function heightRsize() {
                    if ($(window).height() > height) {
                        $(".web-footer").css({
                            "position": "absolute",
                            "width": "100%",
                            "bottom": "50px"
                        });
                    } else {
                        $(".web-footer").css("position", "static");
                    }
                }
            }
            initFooter();
            $(window).resize(function () {
                initFooter();
            });
});