(function($){
    $.photolist=function(a){        
        var w_li = a.find("li").width();
        var h_li = a.find("li").height();
        var margin_li=parseInt(a.find("li").css("marginLeft"));
        var now = 0;
        var num = 0;
        var addli = 0;
        var lisize = a.find("ul li").size();
        var htmlall = a.find("ul").html();
    
        var num=7;
        
        //判断需要添加的li节点数量
        var reminder=lisize%num;
        if(lisize%num!=0){addli = num-reminder;}
        else{addli = 0;}
        addlist();
        //点击滚动事件
        photoscroll();
    
        function addlist(){
            for(i=0;i<addli;i++){
                var html = a.find("ul li").eq(i).html();
                a.find("ul").append("<li>"+html+"</li>");    
            }
            a.find("ul").css({"width":(w_li+margin_li*2)*(lisize+addli)});

        }
        function photoscroll(){
            a.find(".ps_pre").on("click",function(){//console.log(num);    
                now--;
                if(now >= 0){                  
                    a.find("ul").animate({"margin-left":-now*num*(w_li+margin_li*2)});
                    btnshow(now,parseInt((lisize+addli)/num),lisize,num);
                }
            });

            a.find(".ps_next").on("click",function(){//console.log(num);    
                now++;
                if(now < (lisize+addli)/num){    
                    a.find("ul").animate({"margin-left":-now*num*(w_li+margin_li*2)});

                    btnshow(now,parseInt((lisize+addli)/num),lisize,num);
                }    
            });    
            btnshow(now,parseInt((lisize+addli)/num),lisize,num);        
        }
        /***
        参数说明：
        now:当前是第几组，默认是0
        c:总共有几组
        d:初始化时li的个数
        e:每组显示li个数
        ***/
        function btnshow(now,c,d,e){
            if(d<=e){//如果初始化时li的个数小于一组要显示的数，则不显示pre和next按钮
                a.find(".ps_next").hide();
                a.find(".ps_pre").hide();
            }else if(now==0){//初始化now=0，显示第一组，只显示next
                a.find(".ps_next").show();
                a.find(".ps_pre").hide();    
            }else if(now==c-1){//显示到最后一组，只显示pre
                a.find(".ps_next").hide();
                a.find(".ps_pre").show();    
            }else{//显示中间组，pre和next都需要显示
                a.find(".ps_next").show();
                a.find(".ps_pre").show();
            }
        }
        
    }
})(jQuery); 

(function () {
    $.fn.infiniteCarousel = function () {
        function repeat(str, n) {
            return new Array( n + 1 ).join(str);
        }
        return this.each(function () {
            // magic!
            var $wrapper = $('> div', this).css('overflow', 'hidden'),
                $slider = $wrapper.find('> ul').width(9999),
                $items = $slider.find('> li'),
                $single = $items.filter(':first')
                
                singleWidth = $single.outerWidth(),
                visible = Math.ceil($wrapper.innerWidth() / singleWidth),
                currentPage = 1,
                pages = Math.ceil($items.length / visible);
                
            /* TASKS */
            
            // 1. pad the pages with empty element if required
            if ($items.length % visible != 0) {
                // pad
                $slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
                $items = $slider.find('> li');
            }
            
            // 2. create the carousel padding on left and right (cloned)
            $items.filter(':first').before($items.slice(-visible).clone().addClass('cloned'));
            $items.filter(':last').after($items.slice(0, visible).clone().addClass('cloned'));
            $items = $slider.find('> li');
            
            // 3. reset scroll
            $wrapper.scrollLeft(singleWidth * visible);
            
            // 4. paging function
            function gotoPage(page) {
                var dir = page < currentPage ? -1 : 1,
                    n = Math.abs(currentPage - page),
                    left = singleWidth * dir * visible * n;
                
                $wrapper.filter(':not(:animated)').animate({
                    scrollLeft : '+=' + left
                }, 500, function () {
                    // if page == last page - then reset position
                    if (page > pages) {
                        $wrapper.scrollLeft(singleWidth * visible);
                        page = 1;
                    } else if (page == 0) {
                        page = pages;
                        $wrapper.scrollLeft(singleWidth * visible * pages);
                    }
                    
                    currentPage = page;
                });
            }
            
            // 5. insert the back and forward link
            $wrapper.after('<a href="#" class="arrow back"><</a><a href="#" class="arrow forward">></a>');
            
            // 6. bind the back and forward links
            $('a.back', this).click(function () {
                gotoPage(currentPage - 1);
                return false;
            });
            
            $('a.forward', this).click(function () {
                gotoPage(currentPage + 1);
                return false;
            });
            
            $(this).bind('goto', function (event, page) {
                gotoPage(page);
            });
            
            // THIS IS NEW CODE FOR THE AUTOMATIC INFINITE CAROUSEL
            $(this).bind('next', function () {
                gotoPage(currentPage + 1);
            });
        });
    };
})(jQuery);










$(document).ready(function(){
    $(window).on('load resize', function(event) {
		if($(window).width()<=1200){
			$(".banner").css("height",$(window).width()*0.4514);
			// $('.banner .DB_imgSet .DB_1_1 .img_1_1').css("width",$(window).width()*0.24);
			$('.showCase,.showCase .img').css('height',$('.showCase').width()*0.57);
			$('.videoList ul li a .vmask').css('height',$('.videoList ul li a img').height());
			// $('.header .logo img').css('padding-top',(100-$('.header .logo img').height())*0.5);
		}else{
			$(".banner").css("height",$(window).height()-100);
            $('.showCase,.showCase .img').css('height',600);
		}

        if($(window).width()>1001){
            $(".phone-mobile_box").hide();
        }else{
            return false;
        }

    });
    if($(window).width()<=1200){
		$(".banner").css("height",$(window).width()*0.4514);
		// $('.banner .DB_imgSet .DB_1_1 .img_1_1').css("width",$(window).width()*0.24);
		$('.showCase,.showCase .img').css('height',$('.showCase').width()*0.57);
		$('.videoList ul li a .vmask').css('height',$('.videoList ul li a img').height());
		// $('.header .logo img').css('padding-top',(100-$('.header .logo img').height())*0.5);
	}else{
		$(".banner").css("height",$(window).height()-100);
        $('.showCase,.showCase .img').css('height',600);
	}

	
	
   // 电脑导航开始
	$('.mobile_box .menu .item').bind("mouseenter", function(event) {
		$(this).addClass('active');
		if ($(this).children('.subitem').length) {
			$(".subitemWrap").show();
			$(this).children('.mobile_box .subitem').fadeIn(400);
		}
	}).bind("mouseleave", function(event) {
		$(this).removeClass('active');
		if ($(this).children('.mobile_box .subitem').length) {
			$(".subitemWrap").hide();
			$(this).children('.mobile_box .subitem').stop().fadeOut("fast");
		}
	})
    // 电脑导航end
    // 手机导航
    $(".phone-mobile_box .main-a").on('click', function(event) {
        var a = $(this).parent("li").siblings('li')
        $(this).toggleClass('active');
        $(this).siblings('.subitem').stop().slideToggle("fast");
        a.children('.main-a').removeClass('active');
        a.children('.subitem').stop().slideUp("fast");
        
    });


    $(".phone-mobile_box .menu-close").on('click', function(event) {
        $(".phone-mobile_box").stop().slideUp("fast");
        
    });

    $(".header .menu-btn").on('click', function(event) {
        $(".phone-mobile_box").stop().slideDown("fast");
        
    });



	$('.item-ul li').bind("mouseenter", function(event) {
		$(this).children('.tit').stop().fadeOut(400);
		$(this).children('.txt').stop().fadeIn(400);
	}).bind("mouseleave", function(event) {
		$(this).children('.tit').fadeIn(400);
		$(this).children('.txt').fadeOut(400);
	})

	$('.proList ul li').bind("mouseenter", function(event) {
        $(this).children('a').children('.pmask').stop().fadeIn(400);
		$(this).siblings('li').children('a').children('.pmask').stop().fadeOut(400);
        $(this).children('a').children('.tit').fadeOut();
        $(this).siblings('li').children('a').children('.tit').fadeIn();
	}).bind("mouseleave", function(event) {
		$(this).children('a').children('.pmask').stop().fadeOut(400);
        $(this).children('a').children('.tit').fadeIn();
	})
	
	
	$('.proList_xl ul li').bind("mouseenter", function(event) {
        $(this).children('a').children('.pmask_xl').stop().fadeIn(400);
		$(this).siblings('li').children('a').children('.pmask_xl').stop().fadeOut(400);
        $(this).children('a').children('.tit').fadeOut();
        $(this).siblings('li').children('a').children('.tit').fadeIn();
	}).bind("mouseleave", function(event) {
		$(this).children('a').children('.pmask_xl').stop().fadeOut(400);
        $(this).children('a').children('.tit').fadeIn();
	})
	

	$('.pList2 ul li').bind("mouseenter", function(event) {
		$(this).children('a').children('.mp').fadeIn(400);
	}).bind("mouseleave", function(event) {
		$(this).children('a').children('.mp').fadeOut(400);
	})
    

    // 返回顶部
    $(window).scroll(function(event) {
        if($(window).scrollTop()>$(window).height()){
            $(".goTop").show();
        }else{
            $(".goTop").hide();
        }
    });

	$(".goTop").click(function(event) {
		$("html,body").animate({
			scrollTop: 0
		}, 600);
	});


	
	
	
	
    // 微信二维码
    $('.weixin').hover(function() {
        $('.ewm').show();
    }, function() {
        $('.ewm').hide();
    });
    
    $('.sina').hover(function() {
        $('.shouji').show();
    }, function() {
        $('.shouji').hide();
    });


    // 登录账号
    $(".click_login").on('click', function(event) {
        $(".layout-bg").fadeIn("fast", function() {
            $("#layout_login").fadeIn("fast");
        });
        
    });
    $(".layout-bg").on('click', function(event) {
        $(this).fadeOut("fast");
        $("#layout_login").fadeOut("fast");
        $("#layout_regist").fadeOut("fast");
        $("#layout_change").fadeOut("fast");
        
    });
    $(".click_regist").on('click', function(event) {
        $("#layout_login").fadeOut("fast");
        $("#layout_regist").fadeIn("fast");
        
        
    });


    // 修改密码
   $(".xiugai").on('click', function(event) {
        $(".layout-bg").fadeIn("fast", function() {
            $("#layout_change").fadeIn("fast");
        });
        
    });

    $(".user-box").hover(function() {
        // $(".user-box .user-drop").stop().slideDown("fast");
        $(".subitemWrap").show();
        $('.user-drop').fadeIn(400);
    }, function() {
        $(".subitemWrap").hide();
        $('.user-drop').stop().fadeOut("fast");
    });
})

function resetVerifyCode(){
    // alert(1);
    var timenow = new Date().getTime();
    document.getElementById('verifyImage').src= '/index.php/Members/verify';
}














