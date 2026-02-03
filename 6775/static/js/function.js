$(document).ready(function(){

    // pc右边边栏脚本
    $(".aside li").hover(function () {
        $(this).children(".ewm").stop().show();
        $(this).children("div").stop().css({"display":"block","opacity":1});
        $(this).children("div").stop().animate({ "right": "0"});
        $(this).children("div.ewm").stop().animate({ "right": "60px"});
    }, function () {
        $(this).children(".phone_meassage").animate({ "display": "none", "opacity":0,"right": "-240px" });
        $(this).children(".qq_online").animate({ "right": "-127px", "display": "none","opacity":0 });
        $(this).children(".ewm").hide();
        $(this).children(".search_box").animate({ "right": "-205px", "display": "none","opacity":0  });
    })
    $("#goTopBtn").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
        $.fn.fullpage.moveTo(1);//fullpage的函数，表示回到第一屏
    })
    $(".top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })

    //pc导航
    $(".menu li.nLi").hover(function () {
        $(this).find(".menu_2").stop().slideDown(200);
    }, function () {
        $(this).find(".menu_2").stop().slideUp(200);
    })

    //pc+wap大图js
    $('#owl-demo').owlCarousel({
        items: 1,
        loop:true,
        autoPlay: 100,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
		nav:true,
		navText:[" "," "]
    });
//	$("#banner .owl-theme .owl-controls .owl-nav .owl-next").html("<img src=images/global/right_btn.png>")
//  $("#banner .owl-theme .owl-controls .owl-nav .owl-prev").html("<img src=images/global/left_btn.png>")


	
    //wap手机搜索
    $(".w_searchButton").click(function () {
        var width = $(".wap_footer").width();
        if ($(".wap_search_input").css("left") == width + "px") {
            $(".wap_search_input").animate({ "left": 0 }, 300);
        } else {
            $(".wap_search_input").animate({ "left": "100%" }, 300);
        }
    })

    // 手机左边弹出导航
    $(".menu_icon,.navigation").click(function () {
        $(".black_cloth").show();
        $(".wap_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_footer").animate({ "left": "250px" }, 200);
    })

    //手机点击打叉和黑色空白地方，关闭左边弹出菜单
    $(".menu_tit span,.black_cloth").click(function(){
        $(".wap_menu>li.menu_lists>.wap_menu1>p.right a").html("+");
        $(".wap_menu2").slideUp();

        $(".black_cloth").hide();
        $(".wap_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_footer").animate({ "left": "0" }, 200);
    })

    //手机点击回到顶部
    $(".top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })

    // 手机左边弹出导航，点击一级分类展开二级分类
    $(".wap_menu>li.menu_lists>.wap_menu1>p.right").click(function () {
        if ($(this).parent().siblings(".wap_menu2").css("display") == "block") {
            $(this).parents(".menu_lists").find(".wap_menu2").slideUp();
            $(this).html("+");
            return;
        }
        $(".wap_menu li.menu_lists .wap_menu1 p.right").html("+");
        $(".wap_menu2").slideUp();
        $(this).html("-");
        $(this).parent().siblings(".wap_menu2").slideDown();
    })

    //pc和手机内页侧边栏分类，点击展开下一级
    //展开下一级
    $("._aside .sidemenu li a").click(function () {
        $(this).parent().siblings().find("ul").slideUp()//如果要点击其他缩上去则增加这句
        $(this).next("ul").slideToggle(300);
		$(this).parent().siblings().removeClass("current")
		$(this).parent().addClass("current")

    })
//    当前选中项的所有父节点都显示出来，程序会将点击的li项默认添加.current
    $("ul.sidemenu li.current").parents().show();

     //点击分类图标点击翻转
    var n = 0;
    $(".phone-menuicon").click(function () {
        $(".sidemenu").slideToggle(200);
        n++;
        $(this).find("img").css("transform", "rotate(" + 180 * n + "deg)");
    })
	
    //手机底部
    if ($(window).width() < 768) {
        var height = $(".wap_footer").height() + 15;
        $(".pad").css("height", height + "px");
    }
	
	//图片列表 自动补白
	$(".list-img ul li .img_area").height($(".list-img ul li").width()-2).width($(".list-img ul li").width()-2)

    //图文列表没有图片默认读取统一新闻图片
	$(".list_img_text>ul li").each(function(){
		  if(!$(this).find(".img_area a img").attr("src")){
			  $(this).find(".img_area a img").attr("src","images/global/news_img1.jpg")
			  }
		})
		
		
		//大图高度太高，要加这句
if (jQuery("body div").hasClass("article")) {
            jQuery('html,body').animate({ scrollTop: jQuery('.article').offset().top-400 }, 600);
        }
		

	//产品详情图片轮播
    $(".product_detail_images .product_detail_img").addClass("owl-carousel").attr('id',"owl-demo1");
        $('#owl-demo1').owlCarousel({
            items: 1,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });


     //产品详情页放大效果
        var openPhotoSwipe = function(item,index) {
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items =item;
            var options = {
                barsSize: {
                    top: 100,
                    bottom: 100
                },
				index:index,
				loop:false,
				tapToClose: true,
                fullscreenEl : true, // 是否支持全屏按钮
                shareButtons: [
//                    {id:'wechat', label:'分享微信', url:'#'},
//                    {id:'weibo', label:'新浪微博', url:'#'},
                    {id:'download', label:'保存图片', url:'{{raw_image_url}}', download:true}
                ], // 分享按钮

            };

            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
		
        var item = [];
		
        $(".product_detail .product_detail_images  .owl-stage div.owl-item").on("click",function(){
	
            item = [];
             var index=$(this).index()
            $(".product_detail .product_detail_images .owl-stage div.owl-item").each(function(){
				var image = new Image()
				 image.src =  $(this).find("img").attr("src")
				  var naturalWidth = image.width
				  var naturalHeight = image.height
                item.push(
                        { 
                            src: $(this).find("img").attr("src"),
                            w: naturalWidth,
                            h: naturalHeight
                        }
                )
            })
			
            openPhotoSwipe(item,index)
        })
		
		
   
   
   		
		//图片加载完才运行		
   window.onload=function(){
	   
	 //产品详情图片垂直居中
	 $(".product_detail_images .owl-item").each(function(){
            var img_mar=Math.floor(($(".product_detail_images .owl-stage-outer").height()-$(this).find("img").height())*0.5)
            $(this).find("img").css("margin-top",img_mar)
        })
		
		
	//图片加载完执行---请开始写你私人的jquery	



	}


    //文档载入完毕执行--请开始写你私人的jquery		
          
         //网页往下滑动效出现
	  		new WOW().init(); 

		


});
 




