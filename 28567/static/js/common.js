//jquery特效开始
$(document).ready(function(){
//手机版菜单
$('.mobile_nav a').click(function(){     
if( $(this).next().is('ul') ){
if( $(this).next('ul').css('display') == 'none' ){
$(this).next('ul').slideDown();
$(this).find('i').attr("class","touch-arrow-up");     
}else{
$(this).next('ul').slideUp();
$(this).next('ul').find('ul').slideUp();
$(this).find('i').attr("class","touch-arrow-down");
}   
}
});
//bar
$(".toolbar_item").hover(function(){
	$(this).find(".tool_qq").show();			  
	$(this).find(".tool_tel").animate({left:"-150px"},"fast",function(){});							  
	$(this).find(".tool_weixin").show();
	$(this).find(".t_item").addClass("cur")
},function(){
	$(this).find(".tool_qq").hide();
	$(this).find(".tool_tel").animate({left:"0px"},"fast",function(){});	
	$(this).find(".tool_weixin").hide();
	$(this).find(".t_item").removeClass("cur")
});
//返回顶部
$("#gotop").click(function(){
$("html,body").animate({scrollTop:0});
});
//end
$(".span3").hover(function(){
	$(".sitemap").slideToggle();

});
$(".help_top span").click(function(){
	$(this).parents('.help_list').find('ul').slideToggle();
});

$(".link_btn").click(function(){
	var l_height=$(".link_con").height();
	//alert(l_height);
	if(l_height==24){	
		$(".link_con").height("auto");
	}else{
		$(".link_con").height("24px");
		
	}	
});						
});
//jquery 结束
//切换
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++){
  if (i==Num){
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}
//加入收藏 
function AddFavorite() {
sURL = encodeURI(window.location);
try{  
window.external.addFavorite(window.location,document.title);  
}catch(e) {  
try{  
window.sidebar.addPanel(document.title,window.location,"");  
}catch (e) {  
alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
}  
}
}
//设为首页
function SetHome(){
if (document.all) {
document.body.style.behavior='url(#default#homepage)';
document.body.setHomePage(window.location);
}else{
alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
}
}