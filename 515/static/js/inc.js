$("document").ready(function(){
	$(".searchPic").hover(function(){
		$(".search").stop(true,true).slideDown();
	},function(){
		$(".search").stop(true,true).slideUp();
	})
	
	
	dingwei();
   
	$(".nav > li").hover(function(){
		$(this).addClass("on");
	    $(this).children("div").stop(true,true).slideDown();
	},function(){
	    $(this).removeClass("on");
		$(this).children("div").stop(true,true).slideUp();
	})
	$(".nav li:nth-child(8) ").css({"border-right":"none","border-right":"none"});
	$(".nav li:first-child ").css({"width":"90px"}) 
	$(".nav li:first-child a").css({"padding-left":"10px"}) 
	$(".nav li:nth-child(8) ").css({"width":"90px"})
	$(".nav li:nth-child(8) a").css({"width":"65px"}) 
	$(".nav li:nth-child(4)").css({"margin-right":"184px","border-right":"none"}) 
    $("#navChild a:last-child ").css("border-bottom","none") 
   
	var pgname = document.location.href; 	
		  pgname=pgname.replace(/\?.*$/,'')
		  pgname=pgname.replace(/^.*\//,'')
	if(pgname=="index.php"||pgname=="index.php#"||pgname==null||pgname==""){
		$(".banner").css("height","450px");
		$(".bann").css("height","450px");
		$("#focus").css("height","450px");
		$("#focus ul").css("height","450px");
		$("#focus ul li").css("height","450px");
	}
	
	$(".listQq li:first-child").css("padding-top","8px");
	
    $(".inProcla li:last-child ").css("padding-right","0px");
   
     var len;
	len=$(".zoom").length?$(".zoom").length:0;
	if(len!=0){
    for(var i=1;i<=len;i++){
	   $('#proZoom'+i).hoverZoom({
	        overlayColor: '#e11b50',
	        zoom: 50,
			overlay:true
	    });
    }
	}
    $(".proListPic dl:nth-child(4n)").css("margin-right","0px"); 
 
    $(".guestPic li:nth-child(4n)").css("margin-right","0px"); 
 
	$(".guestPic li").hover(function(){
	    	$(this).find(".guestZoomTitle").stop(true,true).slideDown();
	    	//$(this).find(".guestZoomTitle").css("display","block")
	},function(){
	    	$(this).find(".guestZoomTitle").stop(true,true).slideUp();
	    	//$(this).find(".guestZoomTitle").css("display","none")
	})
 
	$(".serList dl:nth-child(1)").css({"padding-top":"0px","border-top":"none"}); 
	$(".serList dl:nth-child(2)").css({"padding-top":"0px","border-top":"none"}); 
	 
	$(".btnavlist a:nth-child(5n)").css("margin-right","0px");

	$('.backTop').click(function(){
		$('body,html').animate({scrollTop:0},500)
	});
	//$(".backTop").hide();
	//$(function() {
	//	$(window).scroll(function(){
	//		if ($(window).scrollTop()>500){
	//			$(".backTop").fadeIn(1000);
	//		}else{
	//			$(".backTop").fadeOut(1000);
	//		}
	//	});
	//});
	
	
	// end index js  
	
	$(".proClaList ul li:nth-child(5n)").css("padding-right","0px");

	$(".pic1:nth-child(4n)").css("margin-right","0");
	
	$(".pglist ul li").not(".on").hover(function(){ $(this).addClass("on");},function(){$(this).removeClass("on");})
	
	if($(".mainContect").find("img").width() > 1000) {
		$(".mainContect").find("img").css({"height":"auto","width":"100%"});
	}
	
});



//$("document").ready(function(){
//	//case
//	var page=1;
//	var i=1;
//	var box=$('.honorPic ul');
//	var n=$('.honorPic li').length;
//	var h=$('.honorPic li').width();
//	var pagetotal=Math.ceil(n/i);
//	$('.picleft').bind('click',upwardsfn);
//	$('.picright').bind('click',downfn);	
//	function upwardsfn(){
//		if(page>1){
//			box.animate({ marginLeft : '+='+h }, "slow");
//			page--;
//			$(".picright").find("img").attr('src','images/picrightB.jpg');	
//			if(page<=1){
//				$('.picleft').find("img").attr('src','images/picleftW.jpg');
//			}else{
//				$('.picleft').find("img").attr('display','images/picleftB.jpg');	
//			}
//		}
//	}
//	function downfn(){
//		if(pagetotal>page){
//			box.animate({ marginLeft : '-='+h }, "slow");
//			page++;
//			$(".picleft").find("img").attr('src','images/picleftB.jpg');	
//			if(page>=pagetotal){
//				$('.picright').find("img").attr('src','images/picrightW.jpg');
//			}else{
//				$('.picright').find("img").attr('src','images/picrightB.jpg');	
//			}
//		}
//	}

//});

function addColor(id){
	document.getElementById("addColorPic"+id).style.cssText="border:2px solid #57b015";
	document.getElementById("addColorTitle"+id).style.background="#57b015";
}
function removeColor(id){
	document.getElementById("addColorPic"+id).style.cssText="border:2px solid #bae39b";
	document.getElementById("addColorTitle"+id).style.background="#348502";
}
//导航定位
function dingwei(){
	var nav = document.getElementById("nav"); 
	var links = nav.getElementsByTagName("li"); 
	var lilen =$("#nav").find("li");
	
	var st2=new Array();
	var str1=new Array();
	var urrenturl = document.location.href; 	
	  urrenturl = urrenturl.replace("http://","");
	  urrenturlArr = urrenturl.split("/");
	  name = urrenturlArr[urrenturlArr.length-1];
	  st2 = name.split("_");
	  //alert( st2[0]);
	var last = 0; 
	for (var i=0;i<links.length;i++) 
	{ 
	    linkurl =  lilen[i].getAttribute("rel"); 
		str1 = linkurl.split("/");
		var length2 = str1.length-1;
		str11 = str1[length2].split(".");
		 if(st2[0].indexOf(str11[0])!=-1) 
			{ 
			 last = i; 
			}
	} 
	
	if(last==0){
	  	if(st2[0].indexOf("ask")!=-1) {  last = 8; }
	  	if(st2[0].indexOf("hr")!=-1) {  last = 9; }
	    //links[last].className = "menu";
	}
	if(last>7){
		if(last == 8){document.getElementById("navUl").getElementsByTagName("li")[0].className = "menu";}
		if(last == 9){document.getElementById("navUl").getElementsByTagName("li")[1].className = "menu";}
	}else{	
		
	}
}
function scrolling(a,b,c){
	var speedp=30;
	var tabp=document.getElementById(a);
	var tab1p=document.getElementById(b);
	var tab2p=document.getElementById(c);
	tab2p.innerHTML=tab1p.innerHTML;
	function Marqueep(){
	if(tab2p.offsetWidth-tabp.scrollLeft<=0)
	tabp.scrollLeft-=tab1p.offsetWidth
	else{
	tabp.scrollLeft++;
	}
	}
	var MyMarp=setInterval(Marqueep,speedp);
	tabp.onmouseover=function() {clearInterval(MyMarp)};
	tabp.onmouseout=function() {MyMarp=setInterval(Marqueep,speedp)};
}

function upscrolling(){
	var speed=40;
	sdemo2.innerHTML = sdemo1.innerHTML;
	function Marquee(){
		if(sdemo2.offsetHeight - sdemo.scrollTop <= 0) {
			sdemo.scrollTop -= sdemo1.offsetHeight;
		} else{
			sdemo.scrollTop++;
		}
	}
	var MyMar = setInterval(Marquee,speed);
	sdemo.onmouseover = function(){ clearInterval(MyMar); }
	sdemo.onmouseout = function(){ MyMar=setInterval(Marquee,speed) }
}

