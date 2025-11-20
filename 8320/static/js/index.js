$(function(){
    //ie兼容filter，indexOf
    if (!Array.prototype.filter)
    {
        Array.prototype.filter = function(fun /*, thisp */)
        {
            "use strict";

            if (this === void 0 || this === null)
                throw new TypeError();

            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== "function")
                throw new TypeError();

            var res = [];
            var thisp = arguments[1];
            for (var i = 0; i < len; i++)
            {
                if (i in t)
                {
                    var val = t[i]; // in case fun mutates this
                    if (fun.call(thisp, val, i, t))
                        res.push(val);
                }
            }

            return res;
        };
    }
    if (!Array.prototype.indexOf){
        Array.prototype.indexOf = function(elt /*, from*/){
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++){
                if (from in this && this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    //在ie6,7,8,9没有页面滚动动画
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };



//公用
    // 手机端
    // 内页分类下拉
    $(".model-classify-btn").click("touchstart", function() {
        $(this).toggleClass("down");
        $(".model-classify-nav").slideToggle();
    });
    // 内页分类二级
    $(".model-classify-nav .one_a").click("touchstart", function() {
        $(this)
            .toggleClass("ez")
            .parents()
            .siblings()
            .find("a")
            .removeClass("ez");
        $(this)
            .parents()
            .siblings()
            .find(".second")
            .hide(300);
        $(this)
            .siblings(".second")
            .slideToggle(300);
    });
    $(".model-classify-nav .er_a").click("touchstart", function() {
        $(this)
            .toggleClass("sen_x")
            .parents()
            .siblings()
            .find("a")
            .removeClass("sen_x");
        $(this)
            .parents()
            .siblings()
            .find(".third")
            .hide(300);
        $(this)
            .siblings(".third")
            .slideToggle(300);
    });

    // pc上下内页分类一级
    $(".nav_item").slick({
        dots: false, //指示点
        slidesToShow: 5, //显示个数
        slidesToScroll: 5, //轮播个数
        infinite: false
    });

    // pc上下内页分类二级
    $(".cont_nav .one_a").click(function() {
        $(this)
            .toggleClass("ez")
            .parents()
            .siblings()
            .find("a")
            .removeClass("ez");
        $(this)
            .parents()
            .siblings()
            .find(".second")
            .hide(300);
        $(this)
            .siblings(".second")
            .slideToggle(300);
    });
    $(".cont_nav .second a").click(function() {
        $(this)
            .toggleClass("sen_x")
            .parents()
            .siblings()
            .find("a")
            .removeClass("sen_x");
        $(this)
            .parents()
            .siblings()
            .find(".third")
            .hide(300);
        $(this)
            .siblings(".third")
            .slideToggle(300);
    });
//公用end

    //导航栏目
    $(".pc_Menu .firstli").hover(function() {
        $(this).find(".secdulBox").stop(true, false).slideToggle(400);
    });
    //首页新闻轮播
    $(".newlist").slick({
        dots:false,
        speed: 300,
        arrows:true,
        slidesToShow:5,
        slidesToScroll:5,
        infinite:false,
        autoplay:true,
        autoplaySpeed:3000,
        responsive:[//断点触发设置
            {
             breakpoint:1200,
             settings:{
                slidesToShow:4,
                slidesToScroll:4,
             }
            },
            {
             breakpoint:992,
             settings:{
                slidesToShow:3,
                slidesToScroll:3,
             }
            },
            {
             breakpoint:768,
             settings:{
                slidesToShow:2.3,
                slidesToScroll:2,
             }
            }
        ]
    });
    // 首页产品焦点图
    $('.slider-profor').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        fade:true,
        infinite:false,
        asNavFor:'.slider-pronav',
        responsive:[//断点触发设置
            {
             breakpoint:768,
             settings:{
               fade:false,
             }
            }
        ]
    });
    $('.slider-pronav').slick({
        slidesToShow:3,
        slideToScroll:3,
        // vertical:true,垂直方向轮播
        asNavFor:'.slider-profor',
        dots:false,
        infinite:false,
        focusOnSelect:true
    });



});



