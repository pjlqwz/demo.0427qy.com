//wapMenu
$(function(){
	$(".wapMenu").click(function(){
		$("#navWrap").height($(document).height()-70);
		$("#navWrap").fadeToggle(600);
	})
})
//Banner
var mySwiper = new Swiper('.swiper-container',{
	loop: true,
	autoplay: 3000,
	pagination : '.swiper-pagination',
});
//product Left
var dgpro = new ScrollPicleft();
dgpro.scrollContId = "ScollName11"; // 内容容器ID""
dgpro.arrLeftId = "LeftID11"; //左箭头ID
dgpro.arrRightId = "RightID11"; //右箭头ID

dgpro.frameWidth = 960; //显示框宽度
dgpro.pageWidth = 960; //翻页宽度
dgpro.speed = 10; //移动速度(单位毫秒，越小越快)
dgpro.space = 10; //每次移动像素(单位px，越大越快)
dgpro.autoPlay = true; //自动播放
dgpro.autoPlayTime = 3; //自动播放间隔时间(秒)

dgpro.initialize(); //初始化
//recommend pro
$(function(){
	$(".recommendPro a:last").css("margin-right","0");
})
//news list
$(function(){
	$(".infoLeftNav li").each(function(){
		$(".infoLeftCon dl").eq(0).css("display","block");
		$(".infoLeftNav li").eq(0).addClass("curr");
		var index=$(this).index();
		$(this).hover(function(){
			$(this).addClass("curr").siblings().removeClass("curr");
			$(".infoLeftCon dl").eq(index).stop(true).show().siblings().stop(true).hide();
		})
	})
 })
//up
function AutoScroll(obj) {
	$(obj).find("ul:first").animate({
		marginTop: "-80px"
	}, 500, function () {
		$(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
	});
}
$(document).ready(function () {
	setInterval('AutoScroll(".infoRightCon")', 3000);
});
