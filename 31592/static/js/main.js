(function(){
   var oDiv=document.getElementById("float");
   var H=0,iE6;
   var Y=oDiv;
   while(Y){H+=Y.offsetTop;Y=Y.offsetParent};
   iE6=window.ActiveXObject&&!window.XMLHttpRequest;
   if(!iE6){
       window.onscroll=function()
       {
           var s=document.body.scrollTop||document.documentElement.scrollTop;
           if(s>H){oDiv.className="div1 div2";if(iE6){oDiv.style.top=(s-H)+"px";}}
           else{oDiv.className="div1";}
       };
   }
})();
//则栏开启
$(".footlogin-on").on('click',function(){
	$(".y-nav").fadeIn("slow");
	$(".footlogin-on").fadeOut("fast");
})
$("#y-nav-close").on('click',function(){
	$(".y-nav").fadeOut("fast");
	$(".footlogin-on").fadeIn("slow");
})
$("#y-nav-login").on('click',function(){
	$("body").append("<div id='t-bei'></div>");
	$("#dengdiv").fadeIn("slow");
})
$("#tcaguan").on('click',function(){
	$("#dengdiv").fadeOut("fast");
	$("#t-bei").remove();
})
$(window).scroll(function(){
	var scrolly = $(document).scrollTop();
    if (scrolly > 50){ 
    	$('#y-nav-top').fadeIn("slow");;
    }else{
    	$('#y-nav-top').fadeOut("fast");
    }
}) ;
$("#y-nav-top").click(function(){
	$('body,html').animate({scrollTop:0},1000);
});
$("#ynavadmin").on({  
	mouseover : function(){  
		$(".y-nav-admin").css("display","block");
	} ,  
	mouseout : function(){  
		$(".y-nav-admin").css("display","none") ;  
	}   
}) ;  
$("#ynavweixin").on({  
	mouseover : function(){  
		$(".y-nav-weixin").css("display","block");
	} ,  
	mouseout : function(){  
		$(".y-nav-weixin").css("display","none") ;  
	}   
}) ; 
//文章页阅读模式
$("#reding").click(function(){
	$(".container").toggleClass("reads");
})
//图片自适应大小不变形
var $ssimg = $("#ssimg").width();
var $simg = $ssimg/1.6;
$(".simg").css("height",$simg);
//移动导航  
$("#xiala").on("click", function(){$("#yd-nav").slideToggle(100);$(".waphead-lf i").toggleClass("fa-times onhover");});
$("#guanbi").on("click", function(){$("#yd-nav").slideToggle(100);});
//搜索
$("#sousuo").on("click", function(){$(".sousuo").slideToggle(500);$("#sousuo i").toggleClass("fa-times onhover");});
$("#sguanbi").on("click", function(){$(".sousuo").slideToggle(500);$(".waphead-lr i").toggleClass("fa-times onhover");$("#sousuo i").toggleClass("fa-times onhover");}); 
//美化弹出
function mochu_alert(cents,timg){
	var mochuhtml = '<div style="z-index:9999; padding:10px;top:40%;left:50%;margin-left:-30px;color:#fff;background-color:#666;position:fixed;border-radius:5px;" class="mochu-zan-js"><span id="g_msg" style="font-size:16px;">' + cents + '</span></div>';
	$('body').append(mochuhtml);
	var mochu_g_msg = $(".mochu-zan-js").width() / 2 * -1;
	$(".mochu-zan-js").css("marginLeft", mochu_g_msg);
	setTimeout(function () {
		$(".mochu-zan-js").remove();
	},timg)
}
jQuery(document).ready(function() {
    jQuery('.sidebar').theiaStickySidebar({
      // Settings
      additionalMarginTop: 0
    });
  });