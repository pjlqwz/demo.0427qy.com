/*IE浏览器跳转*/
if (/*@cc_on!@*/false || (!!window.MSInputMethodContext && !!document.documentMode)) window.location.href="https://support.dmeng.net/upgrade-your-browser.html?referrer="+encodeURIComponent(window.location.href);
$(function(){
	/*左侧分类*/
	$(".lefta .comt li i").click(function(){
	const $li = $(this).parent();
	$(".lefta .comt li").not($li).removeClass("hover").children(".boxlist").slideUp();
	$li.find(".boxlist").slideToggle();
	$li.toggleClass("hover");
	});
	/*返回顶部*/
	$("#top").click(function () {
        $("body, html").stop().animate({ "scrollTop": 0 });
    });	
});
function index() {
// 首页banner
var banner = new Swiper("#banner", {
	//effect: 'fade',//渐变切换
	speed: 1000,//切换速度
	loop: true,//无限循环
	autoHeight: true,//高度随内容变化
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
});
}
/*产品中心*/
$(".p2c1 ul a").each(function(i){jQuery(".p2c1 ul a").slice(i*2,i*2+2).wrapAll("<li class='fl'></li>")});
$(".p2c").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3});
/*常见问题*/
$(".p8b .news .bd").slide({mainCell:"ul",autoPlay:true,effect:"topMarquee",vis:4,interTime:50,trigger:"click"});
function hotpro() {
	/*相关产品*/
	var service = new Swiper('.relate-pro .swiper-container', {
		slidesPerView: 4,
		slidesPerGroup: 1,
		spaceBetween: 15,
		grabCursor: true,
		scrollbar: {
			  el: ".swiper-scrollbar",
	
			},
	});
	}