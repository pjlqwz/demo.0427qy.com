var yrjf = {
	init: function() {
		switch(jsFun) {
			case 'home':
				yrjf.homePage();
				break;
				//修改
			case 'money':
				yrjf.moneyPage();
				break;
			case 'project':
				yrjf.projectPage();
				break;
			case 'school':
				yrjf.schoolPage();
				break;
			case 'contactUs':
				yrjf.contactUsPage();
				break;
			case 'recruit':
				yrjf.recruitPage();
				break;
			case 'guide':
				yrjf.guidePage();
				break;
			case 'recommend':
				yrjf.recommendPage();
				break;
			case 'investmentDel':
				yrjf.investmentDelPage();
				break;
				//
		}
	},
	homePage: function() {
		if ((navigator.userAgent.indexOf('MSIE') >= 0)&& (navigator.userAgent.indexOf('Opera') < 0)){
			ProductDisplay_IE()
		} else {
			ProductDisplay_elseIE();
		}
		function ProductDisplay_IE(){
			
			var hot_size=$(".hot-content .swiper-wrapper .swiper-slide").size();
			for(var i=0;i<hot_size;i++){
				$("#hot-news .box-btns .swiper-pagination-hot").append("<span></span>")
			}
			$(".hot-img .swiper-wrapper .swiper-slide").eq(0).addClass("active");
			$(".hot-content .swiper-wrapper .swiper-slide").eq(0).addClass("active");
			
			$("#hot-news .box-btns .swiper-pagination-hot span").eq(0).addClass("active");
			$("#hot-news .box-btns .swiper-pagination-hot span").click(function(){
				var i = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$(".hot-content .swiper-wrapper .swiper-slide").eq(i).fadeIn().siblings().fadeOut()
				$(".hot-img .swiper-wrapper .swiper-slide").eq(i).fadeIn().siblings().fadeOut()
			})
			
			var one_seiz=parseInt($(".home-body .box2 .one .right .box-over ul li").size()/3);
			
			for(var i=0;i<=one_seiz;i++){
				$(".home-body .box2 .one .right .box-swperBtn .swiper-pagination-one").append("<span></span>")
			}
			var one_num=0;
			$(".home-body .box2 .one .right .box-swperBtn .swiper-pagination-one span").eq(0).addClass("active");			
			$(".home-body .box2 .one .right .box-swperBtn .swiper-pagination-one span").click(function(){
				one_num= $(this).index();
				$(".home-body .box2 .right .box-over ul").animate({left:-870*one_num},600)
				$(this).addClass("active").siblings().removeClass("active");
			})
			
			$(".swiper-button-prev-one").click(function(){
				one_num<=0?one_num=0:one_num--;
				$(".home-body .box2 .one .right .box-over ul").animate({left:-870*one_num},600)
				$(".home-body .box2 .one .right .box-swperBtn .swiper-pagination-one span").eq(one_num).addClass("active").siblings().removeClass("active");
			})
			$(".swiper-button-next-one").click(function(){
				console.log("2+next-one")
				one_num>=one_seiz?one_num=one_seiz:one_num++;
				$(".home-body .box2 .one .right .box-over ul").animate({left:-870*one_num},600)
				$(".home-body .box2 .one .right .box-swperBtn .swiper-pagination-one span").eq(one_num).addClass("active").siblings().removeClass("active");
			})
			
			var tow_seiz=parseInt($(".home-body .box2 .tow .right .box-over ul li").size()/3);
			
			for(var i=0;i<=tow_seiz;i++){
				$(".home-body .box2 .tow .right .box-swperBtn .swiper-pagination-tow").append("<span></span>")
			}
			var tow_num=0;
			$(".home-body .box2 .tow .right .box-swperBtn .swiper-pagination-tow span").eq(0).addClass("active");			
			$(".home-body .box2 .tow .right .box-swperBtn .swiper-pagination-tow span").click(function(){
				tow_num= $(this).index();
				$(".home-body .box2 .right .box-over ul").animate({left:-870*tow_num},600)
				$(this).addClass("active").siblings().removeClass("active");
			})
			
			$(".swiper-button-prev-tow").click(function(){
				
				tow_num<=0?tow_num=0:tow_num--;
				$(".home-body .box2 .tow .right .box-over ul").animate({left:-870*tow_num},600)
				$(".home-body .box2 .tow .right .box-swperBtn .swiper-pagination-tow span").eq(tow_num).addClass("active").siblings().removeClass("active");
			})
			$(".swiper-button-next-tow").click(function(){
				console.log("2+next-tow")
				
				tow_num>=tow_seiz?tow_num=tow_seiz:tow_num++;
				$(".home-body .box2 .tow .right .box-over ul").animate({left:-870*tow_num},600)
				$(".home-body .box2 .tow .right .box-swperBtn .swiper-pagination-tow span").eq(tow_num).addClass("active").siblings().removeClass("active");
			})
		}
		function ProductDisplay_elseIE() {
			//banner
			var banner = new Swiper('.swiper-container-banner', {
				speed: 400,
				pagination: '.swiper-pagination-banner',
				paginationClickable: true,
				nextButton: '.swiper-button-prev-banner',
				prevButton: '.swiper-button-next-banner',
				autoplayDisableOnInteraction: true,
				autoplay: 3000
			});
			
			
			//项目与资金 1
			var mySwiper = new Swiper('.swiper-container-one', {
				speed: 400,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30,
				pagination: '.swiper-pagination-one',
				paginationClickable: true,
				nextButton: '.swiper-button-next-one',
				prevButton: '.swiper-button-prev-one',
				breakpoints: {
					767: {
						slidesPerView: 1,
						slidesPerGroup: 1,
						spaceBetween: 0
					}
				}
			});
			var mySwiper2 = new Swiper('.swiper-container-tow', {
				speed: 400,
				spaceBetween: 100,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30,
				pagination: '.swiper-pagination-tow',
				paginationClickable: true,
				nextButton: '.swiper-button-next-tow',
				prevButton: '.swiper-button-prev-tow',
				breakpoints: {
					767: {
						slidesPerView: 1,
						slidesPerGroup: 1,
						spaceBetween: 0
					}
				}
			});

			//修改
			var Swiper_img = new Swiper('.hot-img', {

			});
			var Swiper_content = new Swiper('.hot-content', {
				pagination: '.swiper-pagination-hot',
				prevButton: '.swiper-button-prev-hot',
				nextButton: '.swiper-button-next-hot',
				paginationClickable: true, //可以点击
				spaceBetween: 40, //每个滑块的间隙
				effect: 'slide',
				shortSwipes: true,
			});
			
			Swiper_content.params.control = Swiper_img;
			Swiper_img.params.control = Swiper_content;

			//box4
			var mySwiper3 = new Swiper('.swiper-container-partner', {
				slidesPerView: 3,
				slidesPerColumn: 2,
				autoplay: 3000,
				virtualTranslate: false,
				autoplayDisableOnInteraction: true
			})
		}
		
		

	},
	//修改
	moneyPage: function() {

	},
	projectPage: function() {

	},
	schoolPage: function() {
		if ((navigator.userAgent.indexOf('MSIE') >= 0)&& (navigator.userAgent.indexOf('Opera') < 0)){
			ProductDisplay_IE()
		} else {
			ProductDisplay_elseIE();
		}
		function ProductDisplay_elseIE(){
			var Swiper_img = new Swiper('.hot-img', {
				slidesPerView: 1, //显示滑块
				//	        centeredSlides: false,		//居中显示
				//	        spaceBetween: 0,			//每个滑块的间隙
				//	        slideToClickedSlide:true,	//点击事件
				//	        loop: false,				//循环
				//	        initialSlide : 0,			//初始化
			});
			var Swiper_content = new Swiper('.hot-content', {
				pagination: '.swiper-pagination-hot',
				prevButton: '.swiper-button-prev-hot',
				nextButton: '.swiper-button-next-hot',
				paginationClickable: true, //可以点击
				spaceBetween: 40, //每个滑块的间隙
				effect: 'slide',
				shortSwipes: true,
			});
			Swiper_content.params.control = Swiper_img; //需要在Swiper2初始化后，Swiper1控制Swiper2
			Swiper_img.params.control = Swiper_content; //需要在Swiper1初始化后，Swiper2控制Swiper1
		}
		function ProductDisplay_IE(){
			var hot_size=$(".hot-content .swiper-wrapper .swiper-slide").size();
			for(var i=0;i<hot_size;i++){
				$("#hot-news .box-btns .swiper-pagination-hot").append("<span></span>")
			}
			$(".hot-img .swiper-wrapper .swiper-slide").eq(0).addClass("active");
			$(".hot-content .swiper-wrapper .swiper-slide").eq(0).addClass("active");
			
			$("#hot-news .box-btns .swiper-pagination-hot span").eq(0).addClass("active");
			$("#hot-news .box-btns .swiper-pagination-hot span").click(function(){
				var i = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$(".hot-content .swiper-wrapper .swiper-slide").eq(i).fadeIn().siblings().fadeOut()
				$(".hot-img .swiper-wrapper .swiper-slide").eq(i).fadeIn().siblings().fadeOut()
			})
		}
	},
	contactUsPage: function() {
		verifyFormLy();
	},
	recruitPage: function() {
		$(".recruit-body .boxs").click(function() {
			$(".modal-join").addClass("active");
			$(".recruit-body").addClass("blur");
			$(".header,.nav,footer").addClass("blur");
		});
		$(".modal-join .back").click(function() {
			$(".modal-join").removeClass("active");
			$(".recruit-body").removeClass("blur");
			$(".header,.nav,footer").removeClass("blur");
		});
		$(".modal-join .join").click(function() {
			$(".upload-m").addClass("active");
		});
		$(".upload-m .back img").click(function() {
			$(".upload-m").removeClass("active");
		});
		verifyFormJoin();

	},
	guidePage: function() {
		if ((navigator.userAgent.indexOf('MSIE') >= 0)&& (navigator.userAgent.indexOf('Opera') < 0)){
			ProductDisplay_IE()
		} else {
			ProductDisplay_elseIE();
		}
		function ProductDisplay_elseIE(){
			var Swiper_guide = new Swiper('.guide-list', {
				pagination: '.swiper-pagination-guide',
				prevButton: '.swiper-button-prev-guide',
				nextButton: '.swiper-button-next-guide',
				paginationClickable: true, //可以点击
				effect: 'slide',
				speed: 500,
				shortSwipes: true, //拖动距离短
				onSlideChangeEnd: function(swiper) { //发生改变后触发
					$(".guide-list .sm-name li").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active");
				}
			});
			var Swiper_guide2 = new Swiper('.swiper-container-min', {
				paginationClickable: true, //可以点击
				slidesPerView: 6,
				spaceBetween: 2,
				speed: 500,
				breakpoints: {
					//当宽度小于等于768
					1024: {
						shortSwipes: true, //拖动距离短
					},
					767: {
						shortSwipes: true, //拖动距离短
						slidesPerView: 2
					}
				}
	
			});
			Swiper_guide.params.control = Swiper_guide2;
			Swiper_guide2.params.control = Swiper_guide;
			$(".guide-list .sm-name li").click(function() {
				var i = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$(".guide-list .swiper-pagination-bullet").eq(i).trigger("click");
			});
		}
		
		
		function ProductDisplay_IE(){
			$(".guide-body .guide-list .swiper-wrapper .swiper-slide").width(_w)	
			$(".guide-body .guide-list .sm-name li").eq(0).addClass("active");
			var guide_size=$(".guide-body .guide-list .sm-name li").size()-1;
			
			$(".guide-body .guide-list .sm-name li").click(function(){
				i = $(this).index();
				$(".guide-list>.swiper-wrapper>.swiper-slide").animate({left:-_w*i},600)
				$(this).addClass("active").siblings().removeClass("active");
			})
			var guide_size_61=parseInt(guide_size/2);
			console.log(guide_size_61+"guide_size_61")
			
			var guide_num=0;
			$(".guide-body .in-banner .swiper-button-prev-guide").click(function(){
				guide_num<=0?guide_num=0:guide_num--;
				$(".guide-body .guide-list .sm-name").animate({left:-486*guide_num},600)
				$(".guide-body .guide-list>.sm-name li").eq(guide_num).addClass("active").siblings().removeClass("active");
				console.log(guide_num)
			})
			$(".guide-body .in-banner .swiper-button-next-guide").click(function(){
				guide_num>=guide_size_61-1?guide_num=guide_size_61-1:guide_num++;
				$(".guide-body .guide-list .sm-name").animate({left:-486*guide_num},600)
				$(".guide-body .guide-list>.sm-name li").eq(guide_num).addClass("active").siblings().removeClass("active");
				console.log(guide_num)
			})
			
		}
	},
	recommendPage: function() {
		//被圈入了ajaxrecommend.html
		$(".recommend-body .boxs").click(function() {
			$(".recommend-m").addClass("active");
			$(".recommend-body").addClass("blur");
			$(".header,.nav,footer").addClass("blur");
		});
		var img_W = $(".recommend-body .boxs .box img").width();
		$(".recommend-body .boxs .box img").css("height",img_W/2);
		$(window).resize(function(){
		 img_W = $(".recommend-body .boxs .box img").width();
		$(".recommend-body .boxs .box img").css("height",img_W/2);
		})

	},
	investmentDelPage: function() {
		investmentDel();
	}

}
$(function() {
	jsFun = $("#JS").attr('page');
	Starting_F();
	yrjf.init();
	//	$(window).resize(function() {
	//		Starting_F();
	//	})
})

function Starting_F() {
	_h = $(window).height();
	_w = $(window).width();
	$(".allScreen").css("height", _h);

	//IEtips
	//if IE
	$(".IEtips .brn_off").click(function() {
			$(".IEtips").slideUp();
		})
		///手机nav
	$(".recruit_open .btn_off").click(function() {
		$(".recruit_open").slideUp();
		$("#navToggle").fadeIn();
	})
	$("#navToggle").click(function() {
		$(this).toggleClass("expanded")
		$("#mobileNav").toggleClass("cur")

	})
	$("#mobileNav ul li>a").click(function() {
		$(this).siblings(".nav2").toggleClass("active").parent().siblings().find(".nav2").removeClass("active")
	})

	//置顶
	$(window).scroll(function() {
		var scrollTop_num = $(window).scrollTop();
		if(scrollTop_num >= 36) {
			$("#nav").addClass("cur")
			$('.asdie4').addClass("cur")
		} else {
			$("#nav").removeClass("cur")
			$('.asdie4').removeClass("cur")
		}
	})
	$(".asdie4").click(function() {
		var scroll_offset = $(".zhidingUP").offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 600);
	})
}

function investmentDel() {
	//姓名
	$("#xm").blur(function() {
		var names = /^[\u4E00-\u9FA5]{2,5}$/; //验证规则
		var str = $("#xm").val();
		var r = str.match(names);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-user").html("姓名不能为空")
		} else {
			if(r != null) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-user").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-user").html("姓名输入错误");
			}
		}
	});
	//电话
	$("#phone").blur(function() {
		var phone = /^(13|15|18|14|17)[0-9]{9}$/; //验证规则
		var FixedPhones = "^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$"
		var str = $("#phone").val();
		var r = str.match(phone);
		var rf = str.match(FixedPhones);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-phone").html("号码不能为空")
		} else {
			if((r != null) || (rf != null)) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-phone").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-phone").html("请输入正确的手机号码/座机号码");
			}
		}
	});
	//ly
	$("#lynr").blur(function() {
		var str = $("#lynr").val();
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err");
			$(".txt").html("留言内容不能为空")
		} else {
			$(this).siblings(".btn_Prompt").removeClass("error empty");
			$(this).siblings(".btn_Prompt").addClass("Correct");
			$(this).parent().removeClass("err");
			$(".txt").html("");
		}
	});
}

//表单验证验证form-join
function verifyFormJoin() {
	//姓名
	$(".user").blur(function() {
		var names = /^[\u4E00-\u9FA5]{2,5}$/; //验证规则
		var str = $(".user").val();
		var r = str.match(names);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-user").html("姓名不能为空")
		} else {
			if(r != null) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-user").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-user").html("姓名输入错误");
			}
		}
	});

	//电话
	$(".phone").blur(function() {
		var phone = /^(13|15|18|14|17)[0-9]{9}$/; //验证规则
		var str = $(".phone").val();
		var r = str.match(phone);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-phone").html("手机号码不能为空")
		} else {
			if(r != null) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-phone").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-phone").html("请输入正确的手机号码");
			}
		}
	});

	//邮件
	$(".Email").blur(function() {
		var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //验证规则
		var str = $(".Email").val();
		var r = str.match(email);
		//			console.log(str,r)
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-email").html("邮件地址不能为空")
		} else {
			if(r != null) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-email").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-email").html("请输入正确的邮件地址");
			}
		}
	});

	//文件
	function fileChange() {
		var str = $(".file").val();
		if(str == "") {
			$(".file").parent().addClass("err")
			$(".text-file").html("未选择任何文件")
		} else {
			$(".file").parent().removeClass("err");
			$(".text-file").html("");
		}
	}
	$(".file").change(fileChange);
	//提交
	$(".submit").click(fileChange);
}

//表单验证验证form-ly
function verifyFormLy() {
	
	//姓名
	$("#xm").blur(function() {
		var names = /^[\u4E00-\u9FA5]{2,5}$/; //验证规则
		var str = $("#xm").val();
		var r = str.match(names);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-user").html("姓名不能为空")
		} else {
			if(r != null) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-user").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-user").html("姓名输入错误");
			}
		}
	});

	//电话
	$("#phone").blur(function() {
		var phone = /^(13|15|18|14|17)[0-9]{9}$/; //验证规则
		var FixedPhones = "^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$"
		var str = $("#phone").val();
		var r = str.match(phone);
		var rf = str.match(FixedPhones);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-phone").html("号码不能为空")
		} else {
			if((r != null) || (rf != null)) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-phone").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-phone").html("请输入正确的手机号码/座机号码");
			}
		}
	});

	//ly
	$("#lynr").blur(function() {
		var str = $("#lynr").val();
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err");
			$(".txt").html("留言内容不能为空")
		} else {
			$(this).siblings(".btn_Prompt").removeClass("error empty");
			$(this).siblings(".btn_Prompt").addClass("Correct");
			$(this).parent().removeClass("err");
			$(".txt").html("");
		}
	});
}
//鼠标滚动
$(window).scroll(function(){
		var B_H = $(".header").height();
		var N_H = $(".nav").height();
		var scroll_height =  $(window).scrollTop();
		var W_view = $(window).width();
		if(W_view > 1024){
			if(scroll_height >= B_H){
				$(".nav").addClass("active");
				
				$(".nav .nav-l img").stop().animate({"height":"40px"},500)
			}
			if(scroll_height < B_H){
				$(".nav").removeClass("active");
				
				$(".nav .nav-l img").stop().animate({"height":"60px"},500)
			}
		}
})