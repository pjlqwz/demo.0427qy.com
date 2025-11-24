//手机头部
jQuery(document).ready(function($) {
  var m_menu = $('.m-nav');
    $('.m-trigger').click(function(){
        if( m_menu.is(':visible') ){
            m_menu.hide();
        }else{
            m_menu.show();
        }
        return false;
    });

 });
 
 
 //右侧边栏
$(document).ready(function(){

    $(".side ul li").hover(function(){
        $(this).find(".sidebox").stop().animate({"width":"175px"},200).css({"background":"#f7941e","padding-left":"17px"})    
    },function(){
        $(this).find(".sidebox").stop().animate({"width":"50px"},200).css({"background":"#000022","padding-left":"0"})   
    });
    
});

//回到顶部
function goTop(){
    $('html,body').animate({'scrollTop':0},600);
}

$('.side2 li').hover(function(){
    $(this).find('.weixin').stop().slideToggle();
})

 
function setView(id)
{
	document.getElementById("tab1").className="";
	document.getElementById("tab2").className="";
	document.getElementById("tab3").className="";
	document.getElementById("tab4").className="";
	document.getElementById("tab"+id).className="tab-on";
	document.getElementById("mem1").style.display="none";
	document.getElementById("mem2").style.display="none";
	document.getElementById("mem3").style.display="none";
	document.getElementById("mem4").style.display="none";
	document.getElementById("mem"+id).style.display="block";
	}

function setView1(id)
{
	document.getElementById("htab1").className="";
	document.getElementById("htab2").className="";
	document.getElementById("htab3").className="";
	document.getElementById("htab4").className="";
	document.getElementById("htab"+id).className="htab-on";
	document.getElementById("hmem1").style.display="none";
	document.getElementById("hmem2").style.display="none";
	document.getElementById("hmem3").style.display="none";
	document.getElementById("hmem4").style.display="none";
	document.getElementById("hmem"+id).style.display="block";
	}
	function setView2(id)
{
	document.getElementById("ztab1").className="";
	document.getElementById("ztab2").className="";
	document.getElementById("ztab"+id).className="ztab-on";
	document.getElementById("zmem1").style.display="none";
	document.getElementById("zmem2").style.display="none";
	document.getElementById("zmem"+id).style.display="block";
	}


