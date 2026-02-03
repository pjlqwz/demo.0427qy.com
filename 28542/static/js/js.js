$(document).ready(function() {

    // share
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "1",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "2",
            "bdSize": "16"
        },
        "share": {}
    };
    with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];


    // nav
    $(function() {

        $("nav ul li").hover(function() {
            $(this).find(".nav_down").stop(true, true).show('500');
        }, function() {
            $(this).find(".nav_down").hide();
        }
		)
    })

    $(function() {
        $(".weixin02").css({ "display": "none" })

        $(".weixin01").hover(function() {
            $(".weixin02").show('500');
        }, function() {
            $(".weixin02").hide('500');
        })
    })

	$(function() {
		$("nav ul li:eq(5) .nav_down").css({"right":"0","left":"auto"})
		$("nav ul li:eq(6) .nav_down").css({"right":"0","left":"auto"})
		$("nav ul li:eq(7) .nav_down").css({"right":"0","left":"auto"})
	})
	$(".nav_down a:nth-child(even)").css({"float":"right"})



    //banner
    $(function() {
        var aEles = $('.banner ul > li');
        var oPrev = $('.left');
        var oNext = $('.right');
        var i = 0;

        function show() {
            if (i < 0) {
                i = aEles.length - 1;
            }
            else if (i > aEles.length - 1) {
                i = 0;
            }
            aEles.eq(i).fadeIn().siblings().fadeOut();
        }
        show();

        function next() {
            i++;
            show();
        }

        var timer = setInterval(next, 3300);

        oPrev.click(function() {
            clearInterval(timer);
            i--;
            show();
            timer = setInterval(next, 3300);
            return false;
        });
        oNext.click(function() {
            clearInterval(timer);
            next();
            timer = setInterval(next, 3300);
            return false;
        });
    });

    //search
    $(".search-type").click(function(e) {
        e.stopPropagation();
        $("#search-type-chose").stop().slideToggle({
        /*duration: 800,
        easing: "easeOutElastic"*/
    })
})
$("#search-type-chose li").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    $("#search-type-this").text($(this).html());
    $(this).parent().stop().slideUp({
    /*duration: 500,
    easing: "swing"*/
});
$("#search-text").focus();
})

//阻止冒泡
$(document).on("click", function() {
    $("#search-type-chose,#search-main").stop().slideUp({
        duration: 300,
        easing: "swing"
    })
    $("#search-btn").removeClass("active");
})

//sy about
$(".sy_about_img li:eq(0) a.jzimg").css({ "background": "url(../images/sy_about_01.png) no-repeat" });
$(".sy_about_img li:eq(0)").hover(function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_01.png) no-repeat center -124px" });
}, function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_01.png) no-repeat" });
})
$(".sy_about_img li:eq(1) a.jzimg").css({ "background": "url(../images/sy_about_02.png) no-repeat" });
$(".sy_about_img li:eq(1)").hover(function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_02.png) no-repeat center -124px" });
}, function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_02.png) no-repeat" });
})
$(".sy_about_img li:eq(2) a.jzimg").css({ "background": "url(../images/sy_about_03.png) no-repeat" });
$(".sy_about_img li:eq(2)").hover(function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_03.png) no-repeat center -124px" });
}, function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_03.png) no-repeat" });
})
$(".sy_about_img li:eq(3) a.jzimg").css({ "background": "url(../images/sy_about_04.png) no-repeat" });
$(".sy_about_img li:eq(3)").hover(function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_04.png) no-repeat center -124px" });
}, function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_04.png) no-repeat" });
})
$(".sy_about_img li:eq(4) a.jzimg").css({ "background": "url(../images/sy_about_05.png) no-repeat" });
$(".sy_about_img li:eq(4)").hover(function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_05.png) no-repeat center -124px" });
}, function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_05.png) no-repeat" });
})
$(".sy_about_img li:eq(5) a.jzimg").css({ "background": "url(../images/sy_about_06.png) no-repeat" });
$(".sy_about_img li:eq(5)").hover(function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_06.png) no-repeat center -124px" });
}, function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_06.png) no-repeat" });
})
$(".sy_about_img li:eq(6) a.jzimg").css({ "background": "url(../images/sy_about_07.png) no-repeat" });
$(".sy_about_img li:eq(6)").hover(function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_07.png) no-repeat center -124px" });
}, function() {
    $(this).find(".jzimg").css({ "background": "url(../images/sy_about_07.png) no-repeat" });
})

//honor
window.onload = function() {
    $(".casebox").height($(document).height());
    $(".honor ul li").click(function() {
        var h = $(document).scrollTop();
        k = $(this).index();
        $(".caselight").css("top", h + 80);
        $(".casebox").addClass("bg");
        $(".casebox").fadeIn().find("li").eq(k).fadeIn().siblings().fadeOut(1);
    });

    $(".casebox").click(function() {
        $(".casebox").fadeOut();
    });

    $(".caselight").click(function(event) {
        event.stopPropagation();
    });

    $(".guanbi>a").click(function() {
        $(".casebox").fadeOut();
    });
}

//product show
$(function() {
    $('.tab_top ul li').click(function() {
        //地图切换
        var index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.tab_content > div').hide().eq(index).show();
        $('.tab_content > div').addClass('cur').eq(index).show().addClass('on').siblings().removeClass('on');
    });
})

/*$(function() {
    $("img").each(function() {
        if ($(this).attr("src").length == 0 || $(this).attr("src").toLowerCase().indexOf("nopic") != -1) {
            $(this).attr("src", "/UpLoadFile/zanwu.png").removeAttr("height").removeAttr("width").removeAttr("style");
            return true;
        }
    })
});
*/

$("#topNav > ul > li a").each(function(){
	if($(this).eq(0).text()==$(".bread_nav .w1260 p *").eq(1).text())
	{
		$(this).eq(0).parent().addClass("cur");
		$(this).eq(0).parent().siblings().removeClass("cur");
	}
})

//online
$(function() {
	// 悬浮窗口
	$(".yb_conct").hover(function() {
		$(".yb_conct").css("right", "5px");
		$(".yb_bar .yb_ercode").css('height', '200px');
	}, function() {
		$(".yb_conct").css("right", "-90px");
		$(".yb_bar .yb_ercode").css('height', '53px');
	});
	// 返回顶部
	$(".yb_top").click(function() {
		$("html,body").animate({
			'scrollTop': '0px'
		}, 300)
	});
});

//wapMenu
$(function(){
	$(".wapMenu").click(function(){
		$("#topNav").height($(document).height()-70);
		$("#topNav").fadeToggle(600);
	})
})


})