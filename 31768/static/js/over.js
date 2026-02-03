/*nav*/
$('.nav_mask').click(function(){
		$('.nav_list').removeClass('open')
	})
	$('.nav_menu,.nav_list').click(function(e){
		e.stopPropagation()
	})
	$('.web_nav').find('.nav_menu').click(function(e){
		$('.nav_list').toggleClass('open')
	})
	$(function () {
		$(".nav_list ul li i").click(function(){
			var b=false;
			if($(this).attr("class")=="cur"){
			   b=true;
			}
			$(".nav_list ul li ul").prev("i").removeClass("cur");
			$(".nav_list>ul>li").children("ul").slideUp("fast");
			if(!b){
				$(this).addClass("cur");
				$(this).siblings("ul").slideDown("fast");
			}
		})
	});
//banner 切换	
    var swiper1 = new Swiper('#swiper1', {      
        autoplay: 6000,//自动播放时间
        loop: true,//开启循环true or false
        slidesPerView: 1, //列数
        spaceBetween: 0, //slides之间间隔
        breakpointsInverse: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
	 paginationClickable: true,
       observer:true,
       observeParents:true,
       autoplayDisableOnInteraction:false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1080: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
/* 首页推荐产品 start */
var wbeympro_swiper = new Swiper('.wbeympro_swiper .swiper-container', {
  loop: true,
  autoplay: 6000,//自动播放时间
  slidesPerView: 5,
  spaceBetween: 35,
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

/* 首页推荐产品 end */
/*返回顶部*/
$('.eyoufoot_back').click(function(){
      $('html,body').animate({scrollTop:0},500);
      return false
   })

	
