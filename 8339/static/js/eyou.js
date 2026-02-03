/* 
 * @Author: anchen
 * @Date:   2019-03-30 16:14:10
 * @Last Modified by:   anchen
 * @Last Modified time: 2019-04-01 17:49:36
 */

$(document).ready(function() {
    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if ($(this).hasClass('open')) {
            $('body').addClass('open');
            if (_winw <= 1183) {
                $('.eyou-nav').stop().slideDown();
            }
        } else {
            $('body').removeClass('open');
            if (_winw <= 1183) {
                $('.eyou-nav').stop().slideUp();
            }
        }
    });

    
    // 导航

    if ($(".eyou-nav li").find('.nav-sub').length) {
        // $(".nav li").find(".nav-sub").siblings("a").attr("href","javascript:;")
    };

    function myNav() {
        var _winw = $(window).width();
        if (_winw >= 1183) {
            $('.eyou-nav').show().addClass('nav-pc').removeClass('nav-m');
            $('body,.menuBtn').removeClass('open');
             $('.eyou-nav').attr('style', ''); 
            $('.eyou-nav').find('.nav-sub').attr('style', ''); 
            $('.eyou-nav').find('.v1').removeClass('on').attr('style', '');
        } else {
            $('.eyou-nav').hide().addClass('nav-m').removeClass('nav-pc');
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
        $('.menuBtn').removeClass('open');
    });
    $('.nav-pc li').bind('mouseenter', function() {
        if ($(window).width() <= 1183) return;
        $(this).find('.nav-sub').stop().slideDown("fast");
        if ($(this).find('.nav-sub').length) {
            $(this).addClass('ok');
        }
    });
    $('.nav-pc li').bind('mouseleave', function() {
        if ($(window).width() <= 1183) return;
        $(this).removeClass('ok');
        $(this).find('.nav-sub').stop().slideUp("fast");
    });

    $('body').on('click', '.nav-m .v1', function () {
        var sub = $(this).next('.nav-sub');
        var li = $(this).parent('li');
        if (sub.length) {
            li.siblings('li').find('.nav-sub').slideUp("fast");
            li.siblings('li').find('.v1').removeClass('ok');
            $(this).toggleClass('ok');
            sub.stop().slideToggle("fast");
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
    $(".TAB_CLICK1 li").hover(function() {
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
    $('.so input').focus(function () {
        $(this).val('');
    });
    $('.so input').blur(function () {
        var inputL = $(this).val().length;
        if (inputL == 0) {
            $(this).val('请输入关键字');
        }
    });

    var timer = null;
    $('.so form').submit(function () {
        var inpLength = $('.so input').val().length;
        var inpVal = $('.so input').val();
        if (inpLength == 0) {
            $('.tips').show();
            $('.so input').val('').focus();
            return false;
        } else if (inpVal == "请输入关键字") {
            // $('.tips').addClass('on');
            $('.tips').show();
            $('.so input').val('').focus();
            return false;
        }
    });
    $('body').click(function () {
        $('.tips').hide();
    });


        // 点击消失
         $(document).ready(function () {
            $('.inp').focus(function () {
                $(this).attr("value", "");
            });
        });
         // 侧导航
         $('.snv-index li .v1').click(function () {
             var count = $(this).next('.snv-index-sub1').length;
             var li = $(this).parent('li');
             if (count) {
                 $(this).next('.snv-index-sub1').stop().slideToggle();
                 li.siblings('li').find('.snv-index-sub1').stop().slideUp();
                 return false;
             }
         });
         $('.snv-index-sub1 > dd').click(function (event) {
             /* Act on the event */
             event.stopPropagation();
         });
         // 侧导航
         $('.snv-index-sub1 > dd .v2').click(function () {
             var count = $(this).next('.snv-index-sub2').length;
             var dd = $(this).parent('dd');
             if (count) {
                 $(this).next('.snv-index-sub2').stop().slideToggle();
                 dd.siblings('dd').find('.snv-index-sub2').stop().slideUp();
                 return false;
             }
         });
         $('.snv-index-sub2 > dd').click(function (event) {
             /* Act on the event */
             event.stopPropagation();
         });

          $('.snv-index-sub1 > dd.ok').parent('.snv-index-sub1').css('display','block');

});