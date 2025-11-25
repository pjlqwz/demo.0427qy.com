//灯箱
function DY_scroll(wraper,prev,next,img,speed,or)
 { 
  var wraper = $(wraper);
  var prev = $(prev);
  var next = $(next);
  var img = $(img).find('ul');
  var w = img.find('li').outerWidth(true);
  var s = speed;
  next.click(function()
       {
        img.animate({'margin-left':-w},function()
        {
		   img.find('li').eq(0).appendTo(img);
		   img.css({'margin-left':0});
        });
        });
  prev.click(function()
       {
			img.find('li:last').prependTo(img);
			img.css({'margin-left':-w});
			img.animate({'margin-left':0});
        });
  if (or == true)
  {
   ad = setInterval(function() { next.click();},s*1000);
   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
 
  }
 }
//Nav导航
$(function(){
	var cname="";
	$("#nav li").hover(function(){
		cname=$(this).attr("class");
		if(!cname){$(this).addClass("hover");}
		$("ul",this).show();
	},function(){
		$("ul",this).hide();
		if(!cname){$(this).removeClass("hover");}
	});
	//
	DY_scroll('.prolist','.arrow_left','.arrow_right','.prolist',5,true);

})

//关键词验证
function checksearch(the)
{  
	if ($.trim(the.key.value)=='')
	{   alert('请输入关键字');
		the.key.focus();
		the.key.value='';
		return false
	}
	if ($.trim(the.key.value)=='请输入关键字')
	{   alert('请输入关键字');
		the.key.focus();
		the.key.value='';
		return false
	}
}

//回顶部
window.onload = function () {
    var topbtn = document.getElementById("top");
    var timer = null;
    var pagelookheight = document.documentElement.clientHeight;
	
    topbtn.onclick = function () {

        timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedtop = backtop/4;
            document.body.scrollTop = backtop -speedtop;
            if(backtop ==0){
                clearInterval(timer);
            }
        }, 20);
    }
}