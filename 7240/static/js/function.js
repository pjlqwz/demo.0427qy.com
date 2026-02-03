/**
 * Created by 殇雪 on 2017/11/1.
 */
$(function(){
//右侧
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

//  menu
    $(".nav .menu li:last-child a").css({"borderRight":"none"})

//top
    $("#goTopBtn").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })

// nav
    $(".menu").slide({
        type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
        titCell:".nLi", //鼠标触发对象
        targetCell:".menu_2", //titCell里面包含的要显示/消失的对象
        effect:"slideDown", //targetCell下拉效果
        delayTime:300 , //效果时间
        triggerTime:0, //鼠标延迟触发时间（默认150）
        returnDefault:true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
    });

//banner
    $('#owl-demo').owlCarousel({
       singleItem:true,
       lazyLoad: true,
        navigation: false,
        addClassActive:true,
      autoPlay: 3000,
       loop:true
    });

 $('#owl-demo1').owlCarousel({
        singleItem:true,
       lazyLoad: true,
        navigation: false,
        addClassActive:true,
        autoPlay: 3000,
        loop:true
   });


//  classification
    $(".classification ul li").hover(function(){
            var src = "/res/images/"+"classification"+$(this).index()+".png";
            $(this).find("img").attr("src",src)
    },function(){
        var src = "/res/images/"+"classifications"+$(this).index()+".png";
        $(this).find("img").attr("src",src)
    })
   function num(data,num){
    var ht = data.html();
    var oBoxHtml = ht.replace(/\s/g, "");
    var demoHtml = oBoxHtml.slice(0,num) + '...';
    data.html(demoHtml)
  }
$(".aside1").stop().hide()
 
    window.onload=function(){
        var width1 = $(window).width();
        if(width1<=768){
            $(".content .sidebai h4").on("click",function(){
                $(".aside1").stop().slideToggle("slow")
            })
			if($(".culture p").length>0){
 			num($(".culture p"),100)
}
			
        }else if(width1>768){
            $(".content .sidebai h4").unbind( "click" )
            $(".aside1").show()
if($(".culture p").length>0){
	num($(".culture p"),150)
}
 		
        }
    }

    window.onresize = function(){
        var width = $(window).width();
        if(width<=768){
            $(".content .sidebai h4").on("click",function(){
                $(".aside1").stop().slideToggle("slow")
if($(".culture p").length>0){
 			num($(".culture p"),100)
}
            })
        }else if(width>768){
            $(".content .sidebai h4").unbind( "click" )
            $(".aside1").show()
if($(".culture p").length>0){
 			num($(".culture p"),150)
}
        }
    }
  if($(".content .sidebai").length>0){
        var side = $(".content .sidebai").height();
        var con = $(".content .con").height();
        if(side>con){
            $(".content .sidebai").css({"borderRight":"1px solid #cdcdcd"})
        }else if(side<con){
            $(".content .con").css({"borderLeft":"1px solid #cdcdcd"})
        }
    }

})