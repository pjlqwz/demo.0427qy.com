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
    $(".nav li").hover(function () {
        $(this).find('ul').stop(false,true).slideToggle();

    });
    
    
    

    //首页关于我们
    $(".aboutSlider").slick({
        dots:true,//指示点
        speed: 300,
        arrows:false,
        // autoplay:true,
        // autoplaySpeed:2000,//自动播放间隔
    });

    $(".about_cont .about_item:first-child").addClass('on');
    $(".about_tab li:first-child").addClass('current');
    $(".about_tab li").click(function () {
        var liIndex = $(this).index();
        $(".about_cont .about_item").removeClass('on');
        $(".about_cont .about_item").eq(liIndex).addClass('on').siblings().removeClass('on')
        $(this).addClass('current').siblings().removeClass('current');
    });

    //首页新闻
    $(".newsSlider").slick({
        dots:false,//指示点
        speed: 300,
        arrows:true,
        slidesToShow:3,//显示个数
        slidesToScroll:1,//轮播个数
        infinite:false,
        // autoplay:true,
        // autoplaySpeed:2000,//自动播放间隔
        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:1,
                }
            }]
    });



});



