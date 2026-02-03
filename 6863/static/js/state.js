$(document).ready(function(){  
	$(".hpc_menu ul li").hover(function(){
		$(this).find(".listmenu").stop(true,true).slideDown("400");
	},function(){
		$(this).find(".listmenu").stop(true,true).slideUp("400");
	});
    // 手机端菜单和搜索
    var $menua = $(".phsearMenu .menua");
    var $seara = $(".phsearMenu .seara");  
    $menua.click(function(){   
        $(".menuliBox").animate({"left":"0"},500);
    });
    $seara.click(function(){
        $(".ph_searBox").stop(true,false).fadeToggle("300");
    })
    /*head*/
    var $heada =  $(".menuliBox ul li a");
    var $hfirstli = $(".menuliBox>ul>li>a");
    var $hsecondli = $(".menuliBox ul.secondul>li>a");
    var $hthirdli = $(".menuliBox ul.thirdul>li>a");
    var $backli = $(".menuliBox ul li.ultitle>a");
    $heada.hover(function(){
        $(this).find(".btnicon img").toggleClass("on");
    });    
    $backli.click(function(){       
        $(this).parent().parent().animate({"left":"-100%"},400);
    });
    function moveleft(ele){        
        var isTrue = ele && ele.find("li").length;
        if(isTrue){
            ele.animate({"left":"0"},400);
        } 
    }
    $hfirstli.click(function(){       
        var ele = $(this).siblings(".secondul")  
        moveleft(ele);       
    });
    $hsecondli.click(function(){
        var ele = $(this).siblings(".thirdul")  
        moveleft(ele);    
    });
    $hthirdli.click(function(){
        var ele = $(this).siblings(".fourthul")  
        moveleft(ele);
    });
    $("#wrap_index").click(function(){
        var isTrue = $(".menuliBox").position().left==0?1:0;      
        if(isTrue){
            $(".menuliBox").animate({"left":"-100%"},400);
        }        
    });
	$(".slick_banner").slick({
		dots:true,//指示点
        autoplay:true,
        arrows:true,
	});
	$(".slick_procen").slick({
		dots:false,
        autoplay:false,        
        infinite: false,
        arrows:false,
        slidesToShow:5,              
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay:false,                    
                    infinite: false,
        			arrows:true,
                    slidesToShow: 2,
                    slidesToScroll: 1,                
                }
            }
        ]       
	});
	$(".slick_newsin").slick({
		dots:false,
        autoplay:false,        
        infinite: false,
        arrows:false,
        slidesToShow:4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                	dots:true,
                    autoplay:true,
                    infinite: true,
        			arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,                   
                }
            }
        ] 
	});    
	$(".slick_soluph").slick({	
        autoplay:true,
        slidesToShow:1,
        arrows:true,
        fade:true,
        asNavFor:'.slick_soluimg',
	});
	$(".slick_soluimg").slick({        	
        infinite: true, 
        arrows:false,       
        slidesToShow:3,
        asNavFor:'.slick_soluph',
        focusOnSelect:true,    
	});   
	$(".proCenMenu .slick-initialized .slick-slide").hover(function(){        
        $(this).find("img").toggleClass("cur")		
	});
    $(".proCenMenu .slick-initialized .slick-slide").click(function(){        
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".proCenInfo .proCenImgs .cpzx").eq(index).addClass("current").siblings().removeClass("current");
    })
    $(".newsInfo .newsmenu a").click(function(){        
        var index = $(this).index();           
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".newsInfo .newsIntro>div").eq(index).addClass("cur").siblings().removeClass("cur");
    })    
    $(".soluIntro .soluimgs .slick-slide").click(function(){       
        var index = $(this).index();       
        $(".soluIntro .soluwds>div").eq(index).addClass("cur").siblings().removeClass("cur")
    });
    $(".slick-arrow").click(function(){        
        var index = $(this).siblings().find(".slick-slide.slick-active").index();
        $(".soluIntro .soluwds>div").eq(index).addClass("cur").siblings().removeClass("cur")
    })   

    /*page*/
    $('.slider-for').slick({
        autoplay:true,      
        fade:true,
        asNavFor:'.slider-nav',
    });
    $('.slider-nav').slick({
        autoplay:true,
        slidesToShow:4,
        arrows:true,        
        asNavFor:'.slider-for',
        focusOnSelect:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {                                      
                    autoplay:true,                   
                    arrows:true,
                    slidesToShow: 3,
                    asNavFor:'.slider-for',
                    focusOnSelect:true,
                }
            }
        ]     
    });
    $(".slick_pdmenu").slick({
        dots:false,
        autoplay:false,        
        infinite: false,
        arrows:false,
        slidesToShow:5,             
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay:false,                    
                    infinite: false,                   
                    arrows:true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]     
    });
    /*page_sidel*/
    function firstmenu(that){       
        var isTrue = that.siblings('.secondul') && that.siblings('.secondul').find('li').length;
        if(isTrue){
            that.find(".btnicon").find(".on").removeClass("on").siblings().addClass("on");
        }else{
            that.parent().siblings().find(".secondul").stop(true,false).slideUp("400"); 
            that.parent().siblings().find(".btnicon").find("img:eq(0)").addClass("on").siblings().removeClass("on");
        }
        if(isTrue){         
            that.siblings(".secondul").stop(true,false).slideToggle("400");     
            that.parent().siblings().find(".secondul").stop(true,false).slideUp("400"); 
            that.parent().siblings().find(".btnicon").find("img:eq(0)").addClass("on").siblings().removeClass("on");
        }   
    }
    function secondmenu(that){      
        var isTrue = that.siblings('.thirdul') && that.siblings('.thirdul').find('li').length;
        if(isTrue){
            that.siblings(".thirdul").stop(true,false).slideToggle("400");  
            that.parent().siblings().find(".thirdul").stop(true,false).slideUp("400");      
        }
    }
    $(".pageph_Nav .title").click(function(){
        $(this).find("img").toggleClass("on");
        $(this).siblings(".pageph_menu").stop(true,false).slideToggle("400");
    });
    var $pfirstli = $(".pagemenu>ul>li>a");
    var $psecondli = $(".pagemenu ul.secondul>li>a");    
    $pfirstli.click(function(){
        var that = $(this);  
        that.parent().addClass("current").siblings().removeClass("current");         
        firstmenu(that);    
    });
    $psecondli.click(function(){
        var that = $(this);     
        secondmenu(that);   
    });    
    $(".prodmenu .slick-slide").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var index = $(this).index();
        $(".productdetail .editBox .cp").eq(index).addClass("cur").siblings().removeClass("cur")
    });
    $(".videoItem>a").click(function() {
        $(this).siblings(".videoshow").fadeIn("400");
        var url = $(this).siblings(".videoshow").find("iframe").attr("data-url");
        $(this).siblings(".videoshow").find("iframe").attr("src", url);
    });
    $(".videoshow .videobtn").click(function() {
        $(this).parents(".videoshow").fadeOut("400");
        $(this).parents(".videoshow").find("iframe").attr("src", null);
    });
})



