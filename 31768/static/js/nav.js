/*产品目录根据当前栏目自动展开相关分类*/
$(function(){ 
    // 展开已标记为on的项目
    $(".cp_type .bd ul li.on").children('div').show();
    
    // 如果没有当前激活的栏目，则检查第一个栏目是否有下级，有的话就展开
    if ($(".cp_type .bd ul li.on").length === 0) {
        var $firstItem = $(".cp_type .bd ul li").first();
        
        // 只有当第一个栏目有子栏目时才展开
        if ($firstItem.length > 0 && $firstItem.find("div").length > 0) {
            $firstItem.addClass("on").attr("data-default-expanded", "true").find("div").show();
        }
    }
});
$(".cp_type .bd ul li p span").click(function () {
	var $clickedLi = $(this).parents('li');
    
	if($clickedLi.hasClass('on')){
		$clickedLi.removeClass('on').find('div').stop().slideUp();
	}else{
        // 收起所有已展开的项目（包括默认展开的）
        $(".cp_type .bd ul li.on").removeClass('on').find('div').stop().slideUp();
        
        // 移除所有默认展开标记
        $(".cp_type .bd ul li[data-default-expanded]").removeAttr('data-default-expanded');
        
		$clickedLi.find('div').removeAttr("style");
		$clickedLi.addClass('on').find('div').stop().slideDown();
	}
});
if(document.body.clientWidth <= 1080){  
	$(".cp_type .hd").click(function () {
		if($(this).hasClass('on')){
			$(this).next('div').removeAttr("style");
			$(this).removeClass('on').next('div').stop().slideUp();
		}else{
			$(this).next('div').removeAttr("style");
			$(this).addClass('on').next('div').stop().slideDown();
		}
	});
}
/*产品目录 end*/
