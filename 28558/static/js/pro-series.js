// JavaScript Document
/*首页*/
/*移动端 图片无缝滚动*/
var scroll_a,scroll_b,scroll_c,t1;
scroll_a=document.getElementById("slide-cont");
scroll_b=document.getElementById("slide_group1");
scroll_c=document.getElementById("slide_group2");
function scrollPic1(){
   if(scroll_b.offsetWidth-scroll_a.scrollLeft<=0){
		 scroll_a.scrollLeft=scroll_a.scrollLeft-scroll_b.offsetWidth;
		}else{
			scroll_a.scrollLeft++
		}
	t1=window.setTimeout("scrollPic1()",9);
	return;
}
scroll_a.onmouseover=function(){window.clearTimeout(t1)}
scroll_a.onmouseout=function(){t1=window.setTimeout("scrollPic1()",9);}
window.onload=function(){scrollPic1();}
/*新品推荐*/
$(document).ready(function(e) {
	var $pro_width=$(document.body).width();
	if($pro_width<=1024){
		$(".inthree .indexProductBox ul").removeClass("productTab")
	}
	if($pro_width>1024){
		$(".inthree .indexProductBox ul").removeClass("new_pro_left");
		$(".new_pro_left li").css("border","1px solid #f00;")
	}
	$(".new_pro_left li:first").addClass("on");
	$(".new_pro_Recommend a:first-child").css("display","block")
    $(".new_pro_left li").hover(function(){
		var $new_left_li=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(this).parents(".new_pro_left").siblings(".new_pro_Recommend").children("a").eq($new_left_li).css("display","block").siblings().css("display","none")
	})
});

/*新闻*/