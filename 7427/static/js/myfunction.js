$(function(){
    if($(window).width()>992){
        $('#fullPage').fullpage({
		"navigation":true,
        "navigationPosition":'left',
        "navigationColor":"#fff",
        "scrollingSpeed":1000,
        "easing":"easeInQuart",
        afterLoad: function(anchorLink, index){
			if(index == 1){
                $("#header .logo").delay(1000).addClass("animated rollIn");
                $("#header").addClass("animated lightSpeedIn");
			}
            if(index==2){
                $("#fullPage .section2 .index-about .index-aboutImage").addClass("animated fadeInUp");
                $(".index-about .index-aboutText .p1,.index-about .index-aboutText .p2,.index-about .index-aboutText .text").addClass("animated fadeInRight");
            }
            if(index==3){
                $("#fullPage .section3 ul li").addClass("animated fadeIn");
            }
            if(index==4){
                $("#fullPage .section4 .index-newsRight ul li:eq(0) .index-newsImage").addClass("animated1");
                $("#fullPage .section4 .index-newsRight ul li:eq(1) .index-newsText").addClass("animated2");
                $("#fullPage .section4 .index-newsRight ul li:eq(0) .index-newsText").addClass("animated3");
                $("#fullPage .section4 .index-newsRight ul li:eq(1) .index-newsImage").addClass("animated4");
                $("#fullPage .section4 .index-newsLeft").addClass("animated fadeIn");
            }
            if(index==5){
                $("#fullPage .section5 .index-contactLeft").addClass("animated rotateInUpLeft");
                $("#fullPage .section5 .index-contactRight").addClass("animated rotateInUpRight");
            }
		},
        onLeave: function(index, direction){
			if(index == '1'){
				$("#header .logo").delay().removeClass("animated rollIn");
                $("#header").removeClass("animated lightSpeedIn");
			}
            if(index==2){
                $("#fullPage .section2 .index-about .index-aboutImage").removeClass("animated fadeInUp");
                $(".index-about .index-aboutText .p1,.index-about .index-aboutText .p2,.index-about .index-aboutText .text").removeClass("animated fadeInRight");
            }
            if(index==3){
                $("#fullPage .section3 ul li").removeClass("animated fadeIn");
            }
            if(index==4){
                $("#fullPage .section4 .index-newsRight ul li:eq(0) .index-newsImage").removeClass("animated1");
                $("#fullPage .section4 .index-newsRight ul li:eq(1) .index-newsText").removeClass("animated2");
                $("#fullPage .section4 .index-newsRight ul li:eq(0) .index-newsText").removeClass("animated3");
                $("#fullPage .section4 .index-newsRight ul li:eq(1) .index-newsImage").removeClass("animated4");
                $("#fullPage .section4 .index-newsLeft").removeClass("animated fadeIn");
            }
            // if(index==5){
            //     $("#fullPage .section5 .index-contactLeft").removeClass("animated rotateInUpLeft");
            //     $("#fullPage .section5 .index-contactRight").removeClass("animated rotateInUpRight");
            // }
		}
    });
    $("#fullPage .section3 ul li").each(function(i){
        $(this).css("animation-delay",i*0.5+"s");
    })
    }
});