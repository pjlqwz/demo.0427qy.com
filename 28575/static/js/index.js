


var isSupportTouch = $(window).width() <= 1024;




$(function () {

    try {
        if ($(".phone_menu").is(":visible")) {
            $(".pro_banner li").each(function (i) {
                $(".pro_banner li:eq(" + i + ") > a > img").attr("src", $(".pro_banner li:eq(" + i + ") > a > img").data("img"));
            })
        }

        $('.phone_bxslider1').bxSlider({

        });
    } catch (e) { }
    
		
    if ($(".phone_menu").is(":visible")) {

        $(".main_nav a").each(function (i) {
            if (i != 0) {
               // $(this).attr("href","javascript:void(0)");
            }
        })

        
			

            $(".detailBanner").each(function (i) {
                $(".detailBanner:eq(" + i + ") > img").attr("src", $(".detailBanner:eq(" + i + ") > img").data("img"));
            })

            


            $(".in_service li").each(function (i) {
                $(".in_service li:eq(" + i + ") > a img").attr("src", $(".in_service li:eq(" + i + ") > a img").data("img"));
            })

            $(".infor_index_r_b").attr("style", "background:url(" + $(".infor_index_r_b").data("img") + ")");
			
            try{
                $('.phone_in_service_main .in_service_main_wrap ul').bxSlider({
            
                });
            } catch (e) { }
			
			$(".proHover").each(function(i){
				$(".proHover:eq("+i+") > img").attr("src",$(".proHover:eq("+i+") > img").data("img"));	
			})
        }else{

            var serWrap=$(".pc_in_service_main .in_service_main_wrap");
            var serLi=$(".pc_in_service_main .in_service_main_wrap li");
            var serUl=$(".pc_in_service_main .in_service_main_wrap ul");
	
            if(serLi.size()==5){
	
            }
	

            var indexCount=3;
            var smallWidth=serWrap.width()*0.09;
            var bigWidth=serWrap.width()*0.64;
            serLi.width(smallWidth);	
            serLi.eq(2).addClass("on");
            $(".pc_in_service_main .in_service_main_wrap li.on,.pc_in_service_main .in_service_main_wrap li > a").width(bigWidth);



            $(window).resize(function(){
                indexCount=3;
                smallWidth=serWrap.width()*0.09;
                bigWidth=serWrap.width()*0.64;
                serLi.width(smallWidth);	
                serLi.eq(2).addClass("on");
                $(".pc_in_service_main .in_service_main_wrap li.on,.pc_in_service_main .in_service_main_wrap li > a").width(bigWidth);
            })
            

            $(".in_service_r").click(function(){
                if(!serUl.is(":animated")){
                    if(indexCount>serLi.size()-2){
			
                    }else{
                        serUl.stop().animate({"left":"-="+smallWidth},function(){
                            $(".pc_in_service_main .in_service_main_wrap li:eq(0)").appendTo(serUl);
                            serUl.css("left",0);
                        });
                        serLi.stop().animate({"width":smallWidth});
                        $(".pc_in_service_main .in_service_main_wrap li > a,.pc_in_service_main .in_service_main_wrap li > a img").stop().animate({"width":bigWidth});
                        $(".pc_in_service_main .in_service_main_wrap li:eq(3)").stop().animate({"width":bigWidth});
                        $(".pc_in_service_main .in_service_main_wrap li:eq(3) .serText").css({"opacity":1});
                        $(".pc_in_service_main .in_service_main_wrap li:eq(3)").siblings().find(".serText").css({"opacity":0});
                        $(".pc_in_service_main .in_service_main_wrap li:eq(3) > a,.pc_in_service_main .in_service_main_wrap li:eq(2) > a img").css({"width":"100%"});
                    }
                }
            })

            $(".in_service_l").click(function(){
                if(!serUl.is(":animated")){
                    $(".pc_in_service_main .in_service_main_wrap li:last").prependTo(serUl);
                    serUl.css("left",smallWidth*-1);
                    serUl.stop().animate({"left":"+="+smallWidth},function(){
					
                    });
                    serLi.stop().animate({"width":smallWidth});
                    $(".pc_in_service_main .in_service_main_wrap li > a,.pc_in_service_main .in_service_main_wrap li > a img").stop().animate({"width":bigWidth});
                    $(".pc_in_service_main .in_service_main_wrap li:eq(2)").stop().animate({"width":bigWidth});
                    $(".pc_in_service_main .in_service_main_wrap li:eq(2) .serText").css({"opacity":1});
                    $(".pc_in_service_main .in_service_main_wrap li:eq(2)").siblings().find(".serText").css({"opacity":0});
                    $(".pc_in_service_main .in_service_main_wrap li:eq(2) > a,.pc_in_service_main .in_service_main_wrap li:eq(2) > a img").css({"width":"100%"});
                }
            })
        }
		
        var getnavBpxCount = 0;
		var bannerTimer=null;       
		if (!$(".phone_menu").is(":visible")) {
        $(".nav_box li").hover(function(){
			clearTimeout(bannerTimer);
            var nIndex=$(".nav_box li").index(this);
            if(nIndex!=0){
                var nIn=nIndex-1;
                $(".nav_list").show();
                $(".navul"+nIn).show().siblings().hide();
                $(".navul"+nIn).find(".nav_p").html($(".navul"+nIn).find(".nav_hidden .nav_box").html());
                getnavBpxCount=nIn;
            }
            $(this).find("a").css("color","#000");
            $(this).siblings().find("a").css("color","#000");
            $(".blueBox").stop().animate({"left":$(".nav_box li:eq(0)").width()*nIndex});
        },function(){
            $(".nav_list").hide();
			bannerTimer=setTimeout(function(){
				$(".nav_box li.on").find("a").css("color","#000");
				$(".nav_box li.on").siblings().find("a").css("color","#000");
				var getNindex=$(".nav_box li.on").index();
				$(".blueBox").stop().animate({"left":$(".nav_box li:eq(0)").width()*getNindex});
			},500)
        })

        $(".nav_list > div").each(function(){
            var $h=$(this);
            $(this).find("li").hover(function(){
                var nIndex=$h.find("li").index(this);
                $(".navul"+getnavBpxCount).find(".nav_p").html($(this).parent().siblings(".nav_hidden").find(".nav_box"+nIndex).html());
            },function(){
                $(".navul"+getnavBpxCount).find(".nav_p").html($(".navul"+getnavBpxCount).find(".nav_hidden .nav_box").html());
            })
        })
		}

		if (!$(".phone_menu").is(":visible")) {
			$(".nav_list").hover(function(){
				clearTimeout(bannerTimer);
				$(".nav_list").show();
			},function(){
				$(".nav_list").hide();
				bannerTimer=setTimeout(function(){
					$(".nav_box li.on").find("a").css("color","#000");
					$(".nav_box li.on").siblings().find("a").css("color","#000");
					var getNindex=$(".nav_box li.on").index();
					$(".blueBox").stop().animate({"left":$(".nav_box li:eq(0)").width()*getNindex});
				},500)
			})
		}
        //var nIndex=$(".navul"+getnavBpxCount+" li").index(this);
        //$(".navul"+getnavBpxCount).find(".nav_p").html($(this).parent().siblings(".nav_hidden").find(".nav_box"+nIndex).html());

        $(".phone_menu").click(function(){
            if($(".nav_box").hasClass("on")){
                $(".nav_box").removeClass("on");
            }else{
                $(".nav_box").addClass("on");
                $(".search_inp,.phone_search").removeClass("on");
            }
        })

        $(".phone_search").click(function(){
            if(!$(".search_inp").hasClass("on")){
                $(".search_inp,.phone_search").addClass("on");
                $(".header,.nav_box,.phone_menu ").removeClass("on");
            }else{
                $(".search_inp,.phone_search").removeClass("on");
            }
        })



        $(".main_nav li").click(function(){
            var nIndex=$(".main_nav li").index(this);
            $(".nav_box ul:eq("+nIndex+")").addClass("on");
        })

        $(".other_nav").each(function(){
            $(this).find("li").click(function(){
                var nIndex=$(this).index();
                if(nIndex==0){
                    $(".other_nav").removeClass("on");
                }
            })
        })


        



	
        if ($(".phone_menu").is(":visible")) {
            $(".aid_contact .adress dd").each(function () {
                $(this).find("a").attr("href", $(this).find("a").attr("rel"));
            })
        }
	
	
	
        $(".phone_menu").click(function(){
            if ($("header").hasClass("on")) {
                $(this).removeClass("on")
                $("header,.main,footer").removeClass("on");
            } else {
                $(this).addClass("on")
                $("header,.main,footer").addClass("on");
            }
        })


        $(window).resize(function () {
            if ($(".phone_menu").is(":visible")) {
                $(".detailBanner").height($(window).width() * 0.5625);
                //console.log(1);
            } else {
                $(".detailBanner").height($(window).width() * 0.28);
                //console.log(2);
            }
        })

        $(window).resize();

})


