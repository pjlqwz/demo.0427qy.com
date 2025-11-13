/*第一个栏目默认展开，点击其他栏目时收起第一个*/
// 页面加载完成后，第一个栏目默认展开
$(function(){
	// 如果没有任何栏目被标记为当前活跃状态，则展开第一个栏目
	if($(".cp_type .bd ul li.on").length === 0){
		$(".cp_type .bd ul li").first().addClass('on').find('div').show();
	}
	
	// 确保只有标记为on的菜单项展开，其他隐藏
	$(".cp_type .bd ul li").each(function(){
		if(!$(this).hasClass('on')){
			$(this).find('div').hide();
		}
	});
});
$(".cp_type .bd ul li p span").click(function () {
	if($(this).parents('li').hasClass('on')){
		$(this).parents('li').removeClass('on').find('div').stop().slideUp(10);
	}else{
		// 先收起所有其他展开的菜单（包括第一个默认展开的）
		$(".cp_type .bd ul li").removeClass('on').find('div').stop().slideUp(10);
		// 然后展开当前点击的菜单
		$(this).parents('li').addClass('on').find('div').stop().slideDown(10);
	}
});
if(document.body.clientWidth <= 1079){  
	$(".cp_type .hd").click(function () {
		if($(this).hasClass('on')){
			$(this).removeClass('on').next('div').stop().slideUp(10);
		}else{
			$(this).addClass('on').next('div').stop().slideDown(10);
		}
	});
}
/*产品目录 end*/
