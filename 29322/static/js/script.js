$(function () {
//侧栏列表
    (function () {
      $(".aside-list-link").click(function(){
            var $this = $(this);
            $this.parent().find(".aside-sublist").slideToggle(300);
            $this.parent().siblings().find(".aside-sublist").slideUp();
            
            $this.parent().find(".aside-list-link").toggleClass("act");
            $this.parent().siblings().find(".aside-list-link").removeClass("act");
        })

    })();
    
    //小屏产品中心折叠按钮
    var data = $(document.body).width();
    if (data < 992) {
        (function () {
            $(".s-drop-btn").click(function () {
                $(this).toggleClass("act");
                $(".s-drop-list").slideToggle(400);
            });
        })();
    }
    else {
    }

    //pc导航
    $(".nav-ul li").hover(function () {
        $(this).has("ul").children("ul").stop(true, true).slideToggle(500);
    },
    function () {
        $(this).has("ul").children("ul").stop(true).slideUp(500);
    });
    // 导航高亮
    function hrefA(){
		var href = location.href;
        $(".nav_a").each(function(index, el) {
            var $this = $(this);
            if ( href.indexOf( $this.attr("href").split(".")[0] ) >= 0 ){
                //$this.parent().addClass('active');
            }
        })
        $(".sjnav ul a").each(function(index, el) {
            var $this = $(this);

            if ( href.indexOf( $this.attr("href").split(".")[0] ) >= 0 ){
                //$this.parents('li').addClass('active');
            }
        })
        if( href.indexOf("index") < 1  &&  href.indexOf("asp") < 1 &&  href.indexOf("php") < 1 &&  href.indexOf("html") < 1 ){
        	$(".nav_a").addClass('active');
        	$(".sjnav ul li:nth-child(1)").addClass('active');
        }
	}
    hrefA();

    //手机导航
    $(".icon-menu").click(function () {
        if($(".icon-menu").hasClass("click")){
            $('html,body').removeClass('active');
            $('.mask').removeClass('active');
        }else{
            $('html,body').addClass('active');
            $('.mask').addClass('active');
        }
        $(this).toggleClass("click");
        // $(".sjnav").slideToggle();
        $(".sjnav").toggleClass("click");
        $(".header-mask").toggleClass("active");
    })
    $(".header-mask").click(function () {
        $(this).removeClass("active");
        $('html,body').removeClass('active')
        $(".sjnav, .icon-menu").removeClass("click")

    })

    var _h = $(document).height();
    console.log(_h);
    $(".sjnav ul").height(_h)
    

    $(window).scroll(function () {
       if ($(window).scrollTop() > 1) {
           $('header').addClass('act');
       } else {
           $('header').removeClass('act');
       }
    })

    if($(window).width() <= 750){
        var num = $(".yhd-ul li").length;
        console.log(num);
        if(num % 2 == 0){
            $(".yhd-ul li:last-child").show()
        }else{
            $(".yhd-ul li:last-child").hide()
        }
    }

});