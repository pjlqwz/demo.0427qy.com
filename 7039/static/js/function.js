$(function () {
    // 右边边栏脚本
   $(".aside li").hover(function () {
        $(this).find(".img1").hide();
        $(this).find(".img2").show()
        $(this).children(".ewm").show();
        $(this).children(".kuzx").css({"display":"block","opacity":1});
        $(this).children("div").animate({ "right": "60px" });
    }, function () {
        $(this).find(".img2").hide();
        $(this).find(".img1").show();
        $(this).children(".phone_meassage").animate({ "right": "-240px" });
        $(this).children(".kuzx").animate({ "right": "-127px", "display": "none","opacity":0 });
        $(this).children(".fx").animate({ "right": "-127px" });
        $(this).children(".ewm").hide();
        $(this).children(".ss").animate({ "right": "-205px" });
    })
    $(".fx div").hover(function () {
        var index = $(this).index() + 1;
        $(this).find("img").attr("src", "images/sshare" + index + ".png");
    }, function () {
        var index = $(this).index() + 1;
        $(this).find("img").attr("src", "images/share" + index + ".png");
    })
    $("#goTopBtn").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })
     $(".top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })
    // pc菜单hover事件
    $(".menu li").hover(function () {
        $(this).find(".menu_2").slideDown(200);
    }, function () {
        $(this).find(".menu_2").slideUp(200);
    })
    // 手机左边弹出菜单
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
    // 手机左边弹出菜单下拉
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
    //点击导航弹出左边菜单
    $(".navigation").click(function () {
        $(".black_cloth").show();
        $(".small_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_foot").animate({ "left": "250px" }, 200);
    })
    //点击叉叉关闭左边弹出菜单
    $(".menu_close").click(function(){
         $(".black_cloth").hide();
        $(".small_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_foot").animate({ "left": "0" }, 200);
    })
    //手机底部
    //手机底部点击分享
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
    //手机底部点击搜索
    $(".w_searchButton").click(function () {
        var width = $(".wrap_foot").width();
        if ($(".wrap_search_input").css("left") == width + "px") {
            $(".wrap_search_input").animate({ "left": 0 }, 300);
        } else {
            $(".wrap_search_input").animate({ "left": "100%" }, 300);
        }
    })
    //计算navbar宽度
    function menuwidth(){
        var width=$(".menu").width();
        var size=$(".menu li").size();
       // $(".menu li").css("width",width/size+"px");
		 $(".menu li").css("width", Math.floor(width / size) - 1 + "px");//xx9.19修改
    }
     setTimeout(menuwidth,100);
      $(window).resize(function () {
        menuwidth();
    })
    //手机菜单下拉
    var n = 0;
    $(".phone-menuicon").click(function () {
        $(".phone-menulist").slideToggle(200);
        n++;
        $(this).find("img").css("transform", "rotate(" + 180 * n + "deg)");
    })
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
    //模拟placeholder
    function inputplaceholder() {
        $('.feedback_list_box input').bind('input propertychange', function () {
            $(this).next().html("");
        });
        $(".feedback_list_box input").each(function (i) {
                var self = $(".feedback_list_box input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
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
        $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
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
        $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
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
    $(window).scroll(function () {
        if ($(window).width() < 768) {
        var height = $(".wrap_foot").height() + 20;
        $(".pad").css("height", height + "px");
    }
        var scrollHeight = $(window).scrollTop();
        var height=$(".banner").height()+$("#navbar>p").height();
        if(scrollHeight>=height){
            $(".menu_box").addClass("fixed");
        }else{
            $(".menu_box").removeClass("fixed");
        }
    })


     $(".left_list_1>li>p").click(function(){
         $(this).parent().addClass("current").siblings().removeClass("current");
         $(this).parent().find(".left_list_2").slideToggle(200);
         $(this).parent().siblings().find(".left_list_2").slideUp(200);
         console.log($(this).find(".icon1>i").css("left"));
         if($(this).find(".icon1>i").css("left")=="0px"){
         }else{
             $(this).parent().removeClass("current");
         }
     }) 
     $(".left_list_1>li").hover(function(){
        $(this).parent().siblings().find(".icon1>i").animate({"left":"0"},100);
        $(this).find(".icon1>i").animate({"left":"12px"},100);
     },function(){
         $(this).parent().find(".icon1>i").animate({"left":"0"},100);
         $(this).parent().siblings().find(".icon1>i").animate({"left":"0"},100);
     })
     $(".left_list_2>li>p").click(function(){
         $(this).parent().find(".left_list_3").slideToggle(200);
     }) 
      $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop();
        if(scrollHeight>300){
           $(".company_introduce").addClass("rubberBand animated");
        }
        if(scrollHeight>1100){
            $(".index_news .row .index_news_list:eq(0)").addClass("slideInLeft animated");
            $(".index_news .row .index_news_list:eq(1)").addClass("slideInRight animated");
        }
    })  
   $('#owl-demo').owlCarousel({
		singleItem:true,
		lazyLoad: true,
		navigation: false,
		addClassActive:true,
		autoPlay: 10000,
		loop:true
	});
})