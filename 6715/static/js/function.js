$(function () {
    /*二次修改*/
    $(".phone_jia").append('<i class="jia">+</i><i class="jian">-</i>')
    $(".menu_list_body li a.sub1_a,.phone-menulist li a.sub1_a").click(function () {

        $(this).parent().siblings().find("i.jia").show()
        $(this).parent().siblings().find("i.jian").hide()
        $(this).parent().siblings().find(".sub2").slideUp()
        $(this).parent().siblings().find("a.sub1_a").removeClass("cur")
        $(this).siblings(".sub2").slideToggle()
        $(this).toggleClass("cur")
        $(this).find("i.jia").toggle()
        $(this).find("i.jian").toggle()
    })
    $(".sub2 li a.sub2_a").click(function () {
        $(this).parent().siblings().find(".sub3").slideUp()
        $(this).siblings(".sub3").slideToggle()

    })
    /*二次修改*/
    $(".menu_icon").click(function () {
        $(".black_cloth").show();
        $(".small_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_foot").animate({ "left": "250px" }, 200);
    })
    $(".black_cloth").click(function () {
        $(".black_cloth").hide();
        $(".small_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_foot").animate({ "left": "0" }, 200);
    })
    $(".menu li").hover(function () {
        $(this).find(".menu_2").slideDown(200);
    }, function () {
        $(this).find(".menu_2").slideUp(200);
    })
    $(".product_content>div").hover(function () {
        $(this).addClass("animate");
        $(this).find(".product_title_bg").show();
    }, function () {
        $(this).removeClass("animate");
        $(this).find(".product_title_bg").hide();
    })
    $("#product_center>div").addClass("bounceInLeft animated");
    $(".product_content").addClass("bounceInUp animated");
    var n = 0;
    $(".phone-menuicon").click(function () {
        $(".phone-menulist").slideToggle(200);
        n++;
        $(this).find("img").css("transform", "rotate(" + 180 * n + "deg)");
    })
    $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop();
        if (scrollHeight > 200) {
            $("#about_us>div").addClass("bounceInLeft animated");
        }
        if (scrollHeight > 600) {
            $(".company_introduction_meassage").addClass("bounceIn animated");
            $(".coffee_img img").addClass("rotateIn animated");
        }
        if (scrollHeight > 1000) {
            $(".map").addClass("rotateInDownLeft animated");
        }
        if (scrollHeight > 1200) {
            $(".news_center .row").addClass("rotateInDownRight animated");
        }
    })
    $(".fx div").hover(function () {
        var index = $(this).index() + 1;
        $(this).find("img").attr("src", "/res/images/sshare" + index + ".png");
    }, function () {
        var index = $(this).index() + 1;
        $(this).find("img").attr("src", "/res/images/share" + index + ".png");
    })
    $(".aside li").hover(function () {
        $(this).find(".img1").hide();
        $(this).find(".img2").show()
        $(this).children(".ewm").show();
        $(this).children(".kuzx").css({ "display": "block", "opacity": 1 });
        $(this).children("div").animate({ "right": "60px" });
    }, function () {
        $(this).find(".img2").hide();
        $(this).find(".img1").show();
        $(this).children(".phone_meassage").animate({ "right": "-240px" });
        $(this).children(".kuzx").animate({ "right": "-127px", "display": "none", "opacity": 0 });
        $(this).children(".fx").animate({ "right": "-127px" });
        $(this).children(".ewm").hide();
        $(this).children(".ss").animate({ "right": "-205px" });
    })
    $(".cancel").click(function () {
        $(".share_box").slideUp(400);
    })
    $(".shares").click(function () {
        $(".share_box").slideDown(400);
    })
    function share() {
        var width = $(".share_box").width();
        var iconWidth = width * 0.2;
        var marginWidth = width * 0.04;
        var size = $(".share_box_children>a").size();
        var parentWidth = (iconWidth * size) + marginWidth * (size + 1);
        $(".share_box_children>a").css({ "width": iconWidth + "px", "marginLeft": marginWidth + "px" });
        $(".share_box_children").css("width", parentWidth + "px");
    }
    share();
    $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop();
        if (scrollHeight > 100) {
            $(".menu_box").addClass("go");
        } else {
            $(".menu_box").removeClass("go");
        }
    })
    if ($(window).width() < 768) {
        var height = $(".wrap_foot").height() + 20;
        $(".pad").css("height", height + "px");
    }
    $("#goTopBtn").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })
    $(".top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })
    $(".w_searchButton").click(function () {
        var width = $(".wrap_foot").width();
        if ($(".wrap_search_input").css("left") == width + "px") {
            $(".wrap_search_input").animate({ "left": 0 }, 300);
        } else {
            $(".wrap_search_input").animate({ "left": "100%" }, 300);
        }
    })
    $(".small_menu>li.menu_lists>a").click(function () {
        if ($(this).parent().find(".small_menu_2").css("display") == "block") {
            $(this).parent().find(".small_menu_2").slideUp();
            $(this).parent().find("p").html("+");
            return;
        }
        $(".small_menu_2").slideUp();
        $(".small_menu li p").html("+");
        $(this).parent().find("p").html("-");
        $(this).parent().find(".small_menu_2").slideDown();
    })
    $(".navigation").click(function () {
        $(".black_cloth").show();
        $(".small_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_foot").animate({ "left": "250px" }, 200);
    })
    $(".menu_close").click(function () {
        $(".black_cloth").hide();
        $(".small_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_foot").animate({ "left": "0" }, 200);
    })
    function menuwidth() {
        var width = $(".menu").width();
        var size = $(".menu li").size();
        // xx9.19修改
        $(".menu li").css("width", Math.floor(width / size) - 1 + "px");
    }
    setTimeout(menuwidth, 100);
    function dtWidth() {
        var width = $(".product_meassage dl dt").width() + 2;
        $(".product_meassage dl dt").css("height", width + "px");
        var divWidth = $(".product_content a").width() + 2;
        $(".product_content a").css("height", divWidth + "px");
    }
    setTimeout(dtWidth, 100);
    //窗口伸缩监听
    $(window).resize(function () {
        menuwidth();
        dtWidth();
    })
    function inputplaceholder() {
        $('.feedback_list_box input').bind('input propertychange', function () {
            $(this).next().html("");
        });
        $(".feedback_list_box input").focus(function () {
            $(".feedback_list_box input").each(function (i) {
                var self = $(".feedback_list_box input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".feedback_list_box input").blur(function () {
            $(".feedback_list_box input").each(function (i) {
                var self = $(".feedback_list_box input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    inputplaceholder();
    function textareaplaceholder() {
        $('.feedback_list_box textarea').bind('input propertychange', "textarea", function () {
            $(this).next().html("");
        });
        $(".feedback_list_box textarea").focus(function () {
            $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".feedback_list_box textarea").blur(function () {
            $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    textareaplaceholder();
    function inputplaceholder1() {
        $('.ss input').bind('input propertychange', function () {
            $(this).next().html("");
        });
        $(".ss input").focus(function () {
            $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".ss input").blur(function () {
            $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    inputplaceholder1();
    $('#owl-demo').owlCarousel({
	    items: 1,
        loop:true,
        autoPlay: 5000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
		});
})