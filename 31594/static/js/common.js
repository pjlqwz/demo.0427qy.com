$(document).ready(function() {

    // 手机导航
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if ($(this).hasClass('open')) {
            $('body').addClass('open');
            if (_winw <= 943) {
                $('.eyou-nav').stop().slideDown();
            }
        } else {
            $('body').removeClass('open');
            if (_winw <= 943) {
                $('.eyou-nav').stop().slideUp();
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
            $('.eyou-nav').css('display', '');
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

    if ($(".eyou-nav li").find('dl').length) {
        // $(".nav li").find("dl").siblings("a").attr("href","javascript:;")
    };

    function myNav() {
        var _winw = $(window).width();
        if (_winw >= 943) {
            $('.eyou-nav').show().addClass('nav-pc').removeClass('nav-m');
            $('body,.menuBtn').removeClass('open');
             $('.eyou-nav').attr('style', ''); 
            $('.eyou-nav').find('dl').attr('style', ''); 
            $('.eyou-nav').find('.v1').removeClass('on').attr('style', '');
        } else {
            $('.eyou-nav').hide().addClass('nav-m').removeClass('nav-pc');
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
        $('.menuBtn').removeClass('open');
        //手机导航下拉菜单加箭头
        var subNav = $('.nav-m>ul>li>.subNav');
        var l = subNav.length;
        if (l >= 0) {
            $('.nav-m>ul>li>.subNav').siblings('a').addClass('v1');
        }
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
            $('.eyou-header').addClass('fixed');
        } else {
            $('.eyou-header').removeClass('fixed');
        }
    })
    // 选项卡 鼠标点击
    $(".TAB_CLICK1 li").click(function() {
        /* Stuff to do when the mouse enters the element */
        var tab = $(this).parent(".TAB_CLICK1");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).addClass('show').siblings(con).removeClass('show');
    });
    $('.TAB_CLICK1').each(function(index, el) {
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

    // 手机底部菜单返回顶部
    $('.eyou-link li:last').click(function() {
        $("html,body").stop().animate({ scrollTop: '0' }, 500);
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
        // IE显示placeholder值
        (function($) {
            $.fn.placeholder = function(options) {
                var opts = $.extend({}, $.fn.placeholder.defaults, options);
                var isIE = document.all ? true : false;
                return this.each(function() {
                    var _this = this,
                        placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
                    if (isIE) {
                        _this.setAttribute("value", placeholderValue);
                        _this.onfocus = function() {
                            $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                        };
                        _this.onblur = function() {
                            $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                        };
                    }
                });
            };
        })(jQuery);

        $("input[type=text],textarea").placeholder();
        //内容过少时footer自动到底部
           function initFooter() {
              $('.main').css('min-height','auto');
              var dbH = $(document.body).height();
              var wH = $(window).height();
              var mH = $('.main').outerHeight();
              var ylH = $('.eyou-link').css('display')=='none'?0:$('.eyou-link').outerHeight();
              if(dbH < wH){
                mH += wH - dbH - ylH;
                $('.main').css("min-height", mH);
              }
           }
           initFooter();
           $(window).resize(function () {
               initFooter();
           });
        //搜索框提交验证
        $('.m-so01 .inp').focus(function () {
            $(this).val('');
        });
        $('.m-so01 .inp').blur(function () {
            var inputL = $(this).val().length;
            if (inputL == 0) {
                $(this).val('请输入关键词');
            }
        });
        var timer = null;
        $('.m-so01 form').submit(function () {
            var inpLength = $('.m-so01 .inp').val().length;
            var inpVal = $('.m-so01 .inp').val();
            if (inpLength == 0) {
                $('.m-so01 .tips').show();
                $('.m-so01 .inp').val('').focus();
                return false;
            } else if (inpVal == "请输入关键词") {
                // $('.m-so01 .tips').addClass('on');
                $('.m-so01 .tips').show();
                $('.m-so01 .inp').val('').focus();
                return false;
            }
        });
        $('body').click(function () {
            $('.m-so01 .tips').hide();
        });

});