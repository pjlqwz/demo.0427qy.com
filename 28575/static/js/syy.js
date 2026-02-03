$(function () {

    

    var ww = $(window).width()
    // 搜索结果页面搜索框激活
    $(".aid_search .keyword input").focus(function(){
        $(".aid_search .keyword>div>div").addClass('active')
    })
    $(".aid_search .keyword input").blur(function(){
        $(".aid_search .keyword>div>div").removeClass('active')
    })

    // 核心价值观滚动条
    $(function () {
            try{
                $(".cult_business .edit_con_original").mCustomScrollbar({});     
            } catch (e) { }
        })
    // 新闻视频栏目切换
    $(".news_video .videolist li").click(function () {
        var $index = $(this).index()
        $(this).addClass('on').siblings().removeClass('on')
        $(".news_video .videodet ul").eq($index).addClass('on').siblings().removeClass('on')
    })


    //新闻投资者栏目上市公司划过蒙版
    $(".news_investor .company li").hover(function () {
        $(this).addClass('on')
    }, function () {
        $(this).removeClass('on')
    })


    //王选专栏介绍部分滚动条

        $(function () {
            try{
                $("#scroll_wx").mCustomScrollbar({});     
            } catch (e) { }
        })



    //王选专栏重要荣誉相册
    try{

    if (ww>768) {
        $('.cult_wx .part_4 .bxslider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: false,
            minSlides: 1,
            maxSlides: 3,
            slideWidth: ($(".cult_wx .part_4 .album").width())/3,
            slideMargin: 0,
            auto: false,
            pager:false,
            moveSlides:1,
        });
    }
    
    else {
        $('.cult_wx .part_4 .bxslider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: false,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: ($(".cult_wx .part_4 .album").width()),
            slideMargin: 0,
            auto: false,
            pager: false,
            moveSlides: 1,
        });
    }

    } catch (e) { }


    




    //手机端背景图切换
    var about_mission_bd = $('.about_intro .bottom .mission > div').attr('rel')
    var about_roundnum_bd = $(' .about_intro .top .roundnum').attr('rel')
    var about_party_bd = $(".about_party .bottom").attr('rel')
    var cult_index_bd = $('.cult_index .part_4').attr('rel')
    $(window).resize(function () {
        $('.about_intro .bottom .mission > div').attr("style", "")
        $('.about_intro .top .roundnum').attr("style", "")
        $(".about_party .bottom").attr("style", "")
        if (ww < 768) {
            $('.about_intro .bottom .mission > div').css({ "background": "url( " + about_mission_bd + " )", "background-size": "cover", "background-position": "center" })//公司简介
        }

        if (ww < 1024) {
            $('.about_intro .top .roundnum').css({ "background": "url( " + about_roundnum_bd + " )", "background-size": "cover", "background-position": "center bottom" })//公司简介
            $(".about_party .bottom").css({ "background": "url( " + about_party_bd + " )", "background-size": "cover", "background-position": "center" })//党群工作
        }
        $('.cult_index .part_4').css({ "background": "url( " + cult_index_bd + " )", "background-size": "cover", "background-position": "center",'background-repeat':'no-repeat' })//企业文化底部相册
    })

    //党群工作高度比较
    $(window).resize(function () {
        $(".about_party .party_job li dd.edit_con_original").attr("style","")
        if (ww > 767) {
                $(".about_party .party_job li").each(function (i) {
                    if ((i+1) % 2 == 0) {
                        var rightheight = $(this).find('dd.edit_con_original').height()
                        var leftheight = $(this).prev().find('dd.edit_con_original').height()
                        if (rightheight > leftheight) {
                            $(this).prev().find('dd.edit_con_original').height(rightheight)
                        }
                        if (leftheight > rightheight) {
                            $(this).find('dd.edit_con_original').height(leftheight)
                        }
                    }

                })
        }
    })

    $(window).resize();


    
    // 领导团队底部边距
    $(".about_leader li:last-child").prev().css('padding-bottom',"0")
    $(".about_leader li:last-child").css('padding-bottom',"0")
    if (ww<1024) {
        $(".about_leader li:last-child").prev().attr('style',"")
        $(".about_leader li:last-child").attr('style',"")
    }



    //企业文化底部相册
    try{
    if (ww>1000) {
        $('.cult_index .part_4 .bxslider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: false,
            minSlides: 1,
            maxSlides: 2,
            slideWidth: ($(".cult_index .part_4 .album").width())/2,
            slideMargin: 0,
            auto: false,
            pager:false,
            moveSlides:1
        });
    }
    
    else {
        $('.cult_index .part_4 .bxslider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: false,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: $(".cult_index .part_4 .album").width(),
            slideMargin: 0,
            auto: false,
            pager:false,
            moveSlides:1,
        });
    }
    }
    catch (e) { }


    
    







    //企业文化管理2.0部分滚动条
    $(function () {
        try{
            $("#scroll_manage").mCustomScrollbar({});     
        } catch (e) { }
    })
    //企业文化商业准则部分滚动条
    $(function () {
        try{
            $("#scroll_business").mCustomScrollbar({});    
        } catch (e) { }
    })
    //企业文化王选专栏部分滚动条
    $(function () {
        try{
            $("#scroll_indexwx").mCustomScrollbar({});     
        } catch (e) { }
    })



    //王选视频切换
    $(function () {
        if (ww > 768) {
            var getSrc = $(".video_det > ul li").eq(0).find("a").data("video");
            var getimg = $(".video_det > ul li").eq(0).find("a").data("img");
                
            $(".video_det").height($(".video_det").width() * 0.5625);

            $(".video_det > ul li").eq(0).find("a").append('<video src="' + getSrc + '" type="video/mp4" id="video_wx" poster="' + getimg + '" preload="none" style="width:100%; height:100%; position:absolute; left:0; top:0;"></video>');

            var bookNum = 0;
            var bookSize = $(".video_det > ul li").size();


            $(".albumbox ul li").width((624) / 4);

            $(".video_det > ul li").width($(".part_3").width());

            var nBook = $(".albumbox li").width();
            var nWrap = $(".video_det ul li").width();

            $(".prev").hide();

            $(".next").click(function () {
                if (bookNum >= bookSize - 1) {

                } else {
                    bookNum++;
                    bookFunc(bookNum);
                }
            })

            $(".prev").click(function () {
                if (bookNum <= 0) {

                } else {
                    bookNum--;
                    bookFunc(bookNum);
                }
            })

            $(".albumbox li").click(function () {
                var nIndex = $(".albumbox li").index(this);
                bookFunc(nIndex);
                bookNum = nIndex;
            })

            $(".video_det span").click(function () {
                $(this).css("opacity",1);
                // document.getElementById("video_wx").play();
            })


            function bookFunc(nIndex) {

                var getSrc1 = $(".video_det > ul li").eq(nIndex).find("a").data("video");
                var getimg1 = $(".video_det > ul li").eq(nIndex).find("a").data("img");

                if (nIndex > 1 && nIndex < bookSize - 2) {
                    $(".aBx > ul").stop().animate({ "left": (nBook * nIndex * -1) + nBook * 2 });
                } else if (nIndex <= 1) {
                    $(".aBx > ul").stop().animate({ "left": 0 });
                } else if (nIndex >= bookSize - 2) {
                    $(".aBx > ul").stop().animate({ "left": nBook * bookSize * -1 + nBook * 4 });
                }

                $(".video_det > ul li").eq(nIndex).find("a").append('<video src="' + getSrc1 + '" type="video/mp4" id="video_wx" poster="' + getimg1 + '" preload="none" style="width:100%; height:100%; position:absolute; left:0; top:0;"></video>');
                $(".video_det > ul li").find("span").css("opacity",1);

                $(".video_det > ul").stop().animate({ "left": nWrap * nIndex * -1 }, function () {
                    // $(".video_det > ul li").eq(nIndex).siblings().find("a video").remove();
                });
                $(".albumbox li:eq(" + nIndex + ")").removeClass().addClass("active");
                $(".albumbox li:eq(" + nIndex + ")").siblings().removeClass();

                if (nIndex == 0) {
                    $(".prev").hide();
                } else if (nIndex == bookSize - 1) {
                    $(".next").hide();
                } else {
                    $(".prev").show();
                    $(".next").show();
                }

            }
        }
        else {
            $(".video_det").height($(".video_det").width() * 0.5625);
			$(".video_det li").each(function(){
				//$(this).find("a").append('<video src="'+$(this).find("a").data("video")+'" poster="'+$(this).find("a").data("img")+'" id="video" x-webkit-airplay="true" webkit-playsinline="true" controls = "false"></video>');
				$(this).find("a").append('<img src="'+$(this).find("a").data("img")+'" />');
			})
            $("#albumbox").css('display', 'none')
            try{
                $('.cult_wx .part_3 .bxslider').bxSlider({
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                    minSlides: 1,
                    maxSlides: 1,
                    slideMargin: 0,
                    auto: false,
                    moveSlides: 1
                });
            } catch (e) { }
        }
        
    })













})
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}