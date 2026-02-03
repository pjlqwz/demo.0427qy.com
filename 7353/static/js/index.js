$(function(){

    jQuery(".aboutPc").slide({mainCell:".bd ul",autoPlay:true,delayTime:0});

    //产品详情多图
    //大图切换
    jQuery(".slidePro").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold",  delayTime:200,
        startFun:function(i,p){
            //控制小图自动翻页
            if(i==0){ jQuery(".slidePro .sPrev").click() } else if( i%6==0 ){ jQuery(".slidePro .sNext").click()}
        }
    });

    //小图左滚动切换
    jQuery(".slidePro .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:6,scroll:2,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext",pnLoop:false });

    jQuery(".tabBar").slide({ mainCell:".conWrap", effect:"left", trigger:"click", pnLoop:false });


    //首页nav

    jQuery(".banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:1,trigger:"click"});


    /*左侧nav*/
    $("ul.leftNav a").click(function (event) {
        if ($(this).siblings("ul").length > 0) {
            var a = $(this);
            var thisname = a.attr('class');
            if (thisname == null || thisname == 0) {
                a.siblings("ul").slideDown(300);
                a.parent().siblings().find('ul').slideUp(500).siblings("a").removeClass();
                a.siblings("i").removeClass('in');
                var parent = a.parent().parents("ul").attr('class');
                switch (parent) {
                    case "leftNav":
                        a.addClass("box-on");
                        a.siblings('i').addClass('in');
                        a.siblings('i').text('-').parent().siblings().find('a').siblings('i').text('+');
                        break;
                    case "leftNav-child":
                        a.addClass("box-on");
                        a.siblings('i').addClass('in');
                        a.siblings('i').text('-').parent().siblings().find('a').siblings('i').text('+');
                        break;
                    case "three":
                        a.addClass("box-on");
                        break;
                }
            } else {
                a.removeClass().siblings('ul').slideUp(300);
                a.siblings('ul').find('a').removeClass().siblings('ul').slideUp(300);
                a.siblings("i").removeClass('in');
                a.siblings('i').text('+');
            };
            return false;
        };
    });

    //menu
    $(".menu").click(function () {
        $(".leftNavBox").addClass("current");
    });
    $(".leftNavBg").click(function () {
        $(this).parent().removeClass("current");
    });

    /*内页左侧nav*/
    $("ul.ltNav a").click(function (event) {
        if ($(this).siblings("ul").length > 0) {
            var a = $(this);
            var thisname = a.attr('class');
            if (thisname == null || thisname == 0) {
                a.siblings("ul").slideDown(300);
                a.parent().siblings().find('ul').slideUp(500).siblings("a").removeClass();
                var parent = a.parent().parents("ul").attr('class');
                switch (parent) {
                    case "ltNav":
                        a.addClass("current");
                        break;
                    case "ltTwo":
                        a.addClass("current");
                        break;

                }
            } else {
                a.removeClass().siblings('ul').slideUp(300);
                a.siblings('ul').find('a').removeClass().siblings('ul').slideUp(300);
            };
            return false;
        };
    });

    /*手机内页左侧nav*/
    $("ul.ltNavMob a").click(function (event) {
        if ($(this).siblings("ul").length > 0) {
            var a = $(this);
            var thisname = a.attr('class');
            if (thisname == null || thisname == 0) {
                a.siblings("ul").slideDown(300);
                a.parent().siblings().find('ul').slideUp(500).siblings("a").removeClass();
                var parent = a.parent().parents("ul").attr('class');
                switch (parent) {
                    case "ltNavMob":
                        a.addClass("current");
                        break;
                    case "ltTwoMob":
                        a.addClass("current");
                        break;

                }
            } else {
                a.removeClass().siblings('ul').slideUp(300);
                a.siblings('ul').find('a').removeClass().siblings('ul').slideUp(300);
            };
            return false;
        };
    });
    $(".classify").click(function () {
        $("ul.ltNavMob").slideToggle();
    });



    function  proW() {
        var slideW = $(".slidePro").width();
        $(".slidePro .bigImg").width(slideW);
        $(".slidePro .bigImg li").width(slideW);
        var slideLiH = $(".slidePro .bigImg li").height();
        $(".slidePro .bigImg").height(slideLiH);

        var BannerW = $(".Banner").width();
        var BannerH = $(".Banner").height();
        $(".Banner .bd .tempWrap").width(BannerW);
        $(".Banner .bd .tempWrap .picList li").width(BannerW);

        var proImg = $(".proImg ul li").height();
        $(".proImg ul.bigImg").height(proImg);
        console.log(proImg);
    }
    proW();
    window.onresize=function () {proW();
        jQuery(".banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:1,trigger:"click"});}


    //首页nav
    var mySwiperNavMob = new Swiper ('.bannerMob', {
        paginationClickable :true,
        pagination:'.swiper-paginationNavMob'
    });
    //搜索
    $(".mob-ser form").click(function () {
        $(this).addClass("current");
    });

    //about
    var mySwiperAbout = new Swiper ('.aboutImg', {
        paginationClickable :true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination:'.swiper-paginationAbout'
    });


    //proMob
    var mySwiperPro = new Swiper ('.slideProMob', {
        paginationClickable :true,
        pagination:'.swiper-paginationProMob'
    });
});



