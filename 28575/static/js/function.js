(function ($) {
        $(function () { 
			var hisCount=0;
			var getHisSize=$(".dev_index_l_box li").size();
		
            try {
                $(".infor_detail_part1").height($(".infor_detail_part1").width() * 0.28);
                $(".infor_detail_part_bottom").height($(".infor_detail_part_bottom").width() * 0.13);
                $("#scroll_news").mCustomScrollbar({});
            } catch (e) { }




            $(".dev_index_r ul").each(function (i) {
                toggleMasonry(i);
				
            })

            


            $(window).resize(function () { 
                if ($(".phone_menu").is(":visible")) {
                    //phone init start
                    $(".dev_index").addClass("phone_dev");
                    $(".infor_detail_part_img").height($(".infor_detail_part_bottom ").width()*0.25);
                    
                    try{
                        var mySwiper2 = new Swiper('#swiper-container2', {
                            watchSlidesProgress: true,
                            watchSlidesVisibility: true,
                            slidesPerView: 5,
                            onTap: function () {
                                mySwiper3.slideTo(mySwiper2.clickedIndex);
                            }
                        })

                        var mySwiper3 = new Swiper('#swiper-container3', {
                            onSlideChangeStart: function () {
                                updateNavPosition()
                            }
                        })

                        function updateNavPosition() {
                            $('#swiper-container2 .active-nav').removeClass('active-nav')
                            var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


                            if (!activeNav.hasClass('swiper-slide-visible')) {
                                if (activeNav.index() > mySwiper2.activeIndex) {
                                    var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
                                    mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
                                }
                                else {
                                    mySwiper2.slideTo(activeNav.index())
                                }
                            }
                        }
                    } catch (e) { }


                    

                    //phone init end
                } else {
                    //pc init start
                    $(".dev_index").removeClass("phone_dev");
                    //alert($(".dev_index_r").offset().top);
                    
                    try{
                        if ($(window).scrollTop() > $(".dev_index_r").offset().top) {
                            var getLeftPosition2 = $(window).scrollTop() - $(".dev_index_r").offset().top + 20;
                            var getComparePosition2 = $(".dev_index_r").height() - $(".dev_index_l").height();

                            if (getLeftPosition2 >= getComparePosition2) {
                                //$(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": $(".dev_index_r").offset().top });
                                $(".dev_index_l").css({ "top": getComparePosition2 - 40, "position": "absolute", "left": 0 });
                                //$(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": $(".dev_index_l").height()*-1 });
                            } else {
                                //$(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": $(".dev_index_r").offset().top });
                                //$(".dev_index_l").stop().animate({ "top": getLeftPosition }, "fast");
                                $(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": 138, "position": "fixed" });
                            }
                        } else {
                            $(".dev_index_l").css({ "opacity": 1, "top": 0, "position": "absolute", "left": 0 });
                        }
                    } catch (e) { }
                    //pc init end
                }

                //产业格局
                $(".infor_detail_part1").height($(".infor_detail_part1").width() * 0.28);
                $(".infor_detail_part_bottom").height($(".infor_detail_part_bottom").width() * 0.13);
                try{
                    $("#scroll_news").mCustomScrollbar("update");
                } catch (e) { }



            })
            $(window).resize();
			
			
			$(".dev_index_l_top").click(function(){
				if(hisCount<=1){
						$(".dev_index_l_top").css("opacity",0);
				}else{
					$(".dev_index_l_top").css("opacity",1);
					$(".dev_index_l_bottom").css("opacity",1);	
				}
				if(hisCount<=0){
						
				}else{
					hisCount--;
					if ($(".phone_menu").is(":visible")) {   //phone
					} else {
						$("body,html").stop().animate({ scrollTop: $(".dev_index_r_box > .dev_index_r_part:eq(" + hisCount + ")").offset().top-108 }, 600);
						devGetPosition(hisCount);
					}
				}
			})
			
			$(".dev_index_l_bottom").click(function(){
				if(hisCount>=getHisSize-2){
					$(".dev_index_l_bottom").css("opacity",0);
				}else{
					$(".dev_index_l_top").css("opacity",1);
					$(".dev_index_l_bottom").css("opacity",1);	
				}
				if(hisCount>=getHisSize-1){
						
				}else{
					hisCount++;
					if ($(".phone_menu").is(":visible")) {   //phone
					} else {
						$("body,html").stop().animate({ scrollTop: $(".dev_index_r_box > .dev_index_r_part:eq(" + hisCount + ")").offset().top-108 }, 600);
						devGetPosition(hisCount);
					}
				}
			})
			
			function devGetPosition(nIndex) {
                        var getLeftLiHeight = $(".dev_index_l_wrap li:eq(0)").height();
                        var getSize = $(".dev_index_l_wrap li span").size();
                        if (nIndex > 2 && nIndex < getSize - 4) {
                            $(".dev_index_l_box ul").stop().animate({ "top": nIndex * getLeftLiHeight * -1 + getLeftLiHeight * 3 });
                        } else if (nIndex >= getSize - 4) {
                            $(".dev_index_l_box ul").stop().animate({ "top": getLeftLiHeight * getSize * -1 + getLeftLiHeight * 8 });
                        } else if (nIndex <= 2) {
                            $(".dev_index_l_box ul").stop().animate({ "top": 0 });
                        }
                    }
            

            function devFunction() {
                    $(".dev_index_l_wrap li span").click(function () {
                        var nIndex = $(".dev_index_l_wrap li span").index(this);
                        
                        if ($(".phone_menu").is(":visible")) {   //phone
                            //$(".dev_index_l_box li:eq(" + nIndex + ")").addClass("active").siblings().removeClass("active");
                            //$("body,html").stop().animate({ scrollTop: $(".dev_index_r > .dev_index_r_part:eq(" + nIndex + ")").offset().top - 120 }, 600);
                            //mySwiper.slideTo(nIndex, 1000, false);
                        } else {
                            $("body,html").stop().animate({ scrollTop: $(".dev_index_r_box > .dev_index_r_part:eq(" + nIndex + ")").offset().top-108 }, 600);
                            devGetPosition(nIndex);
							hisCount=nIndex;
                        }
						
						if(nIndex>=getHisSize-2){
							$(".dev_index_l_bottom").css("opacity",0);
						}else if(nIndex<=1){
							$(".dev_index_l_top").css("opacity",0);
						}else{
							$(".dev_index_l_top").css("opacity",1);
							$(".dev_index_l_bottom").css("opacity",1);	
						}
                        
                    })
					
					

                    $(window).scroll(function () {

                        if ($(".phone_menu").is(":visible")) {
                            //phone scroll start
                            if ($(window).scrollTop() > $(".dev_index").offset().top) {
                                //$(".phone_dev").addClass("dev_fixed");
                            } else {
                                //$(".phone_dev").removeClass("dev_fixed");
                            }
                            //phone scroll end
                        } else {
                            //pc scroll  start
                            if ($(window).scrollTop() > $(".dev_index_r").offset().top) {
                                var getLeftPosition = $(window).scrollTop() - $(".dev_index_r").offset().top + 20;
                                var getComparePosition = $(".dev_index_r").height() - $(".dev_index_l").height();
                                
                                if (getLeftPosition >= getComparePosition) {
                                    //$(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": $(".dev_index_r").offset().top });
                                    $(".dev_index_l").css({ "top": getComparePosition - 40, "position": "absolute","left":0 });
                                    //$(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": $(".dev_index_l").height()*-1 });
                                } else {
                                    //$(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": $(".dev_index_r").offset().top });
                                    //$(".dev_index_l").stop().animate({ "top": getLeftPosition }, "fast");
                                    $(".dev_index_l").css({ "opacity": 1, "left": $(".dev_index").offset().left, "top": 138,"position":"fixed" });
                                }
                            } else {
                                $(".dev_index_l").css({ "opacity": 1, "top": 0, "position": "absolute", "left": 0 });
                            }
                            //pc scroll end
                        }
                        try {
                            $(".dev_index_r h4").each(function (i) {
                                if ($(".phone_menu").is(":visible")) {
                                    if ($(window).scrollTop() >= $(".dev_index_r_box > .dev_index_r_part:eq(" + i + ")").offset().top - 120) {
                                        //$(".dev_index_l_box li:eq(" + i + ")").addClass("active").siblings().removeClass("active");
                                        
                                        
                                    } else {
                                        //$(".dev_index_l_box li:eq(" + i + ")").addClass("active").siblings().removeClass("active");

                                    }
                                } else {
                                    if ($(window).scrollTop() >= $(".dev_index_r_box > .dev_index_r_part:eq(" + i + ")").offset().top-20-108) {            //pc
                                            $(".dev_index_l_box li:eq(" + i + ")").addClass("active").siblings().removeClass("active");
                                            devGetPosition(i);
											hisCount=i;
                                    } else {

                                    }
                                }
                            })
                        } catch (e) { }



                    })


                    
            }


            function toggleMasonry(i) {
                    $('#U1' + i).imagesLoaded(function () {

                        $('#U1' + i).masonry({

                            itemSelector: 'li'

                        });

                        $(".dev_index_r li").each(function () {
                            try {
                                if ($(this).position().left != 0) {
                                    $(this).addClass("odd");
                                }
                            } catch (e) { }
                        })

                        devFunction();
                        $(window).scroll();
                    })
            }

            


            
            

        })
})(jQuery);