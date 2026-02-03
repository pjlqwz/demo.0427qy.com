//导航按钮
$(".header .nav_handle").click(function(){
	$(".inmuen").slideToggle();
	$(this).toggleClass("on");
});

var mySwiper = new Swiper('.banner',{
	pagination: '.pagination',
	loop:true,
	paginationClickable: true,
    autoplay: 5000,
    /*onInit: function(swiper){ 
    	swiperAnimateCache(swiper); 
    	swiperAnimate(swiper);
    }, 
    onSlideChangeEnd: function(swiper){ 
    	swiperAnimate(swiper);
    } */
});
$('.banner-left').on('click', function(e){
	e.preventDefault()
	mySwiper.swipePrev()
});
$('.banner-right').on('click', function(e){
	e.preventDefault()
	mySwiper.swipeNext()
});

if ($(window).width() <=850) { var nynavgs= 2 }else{ var nynavgs= 4 }
var mySwiper2 = new Swiper('#page-about-honor',{
	loop:true,
	grabCursor: true,
	paginationClickable: true,
    autoplay: 3000,
    slidesPerView: nynavgs
});
$('.about-honor-button-next').on('click', function(e){
	e.preventDefault()
	mySwiper2.swipePrev()
});
$('.about-honor-button-prev').on('click', function(e){
	e.preventDefault()
	mySwiper2.swipeNext()
});

//返回顶部
$(window).scroll(function () {
	if ($(window).scrollTop()>=300) {
		$(".page-down").fadeIn();
		$(".xuanfu").fadeIn();
	}else{
		$(".page-down").fadeOut();
		$(".xuanfu").fadeOut();
	}
});
(function Page(){
	var oDown = $(".page-down"),
	oBody = $("html,body");
	oDown.bind("click",function(){
		oBody.animate({ scrollTop : 0 },500);
	});        
})();

function Kongzhi() {
	$(".banner").css("height",$(".banner img").height()+"px");
	$(".tupian").each(function(){
		var loadwidth = $(this).attr("loadwidth");
		var loadheight = $(this).attr("loadheight");
		var zzheight = ($(this).width()/loadwidth)*loadheight;
		$(this).css("height",zzheight);
	});
}
self.setInterval("Kongzhi()",1);
