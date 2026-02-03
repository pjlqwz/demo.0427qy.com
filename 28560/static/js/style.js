window.onload = function() {

}
$(function(){
	var n1 = false; //记录按钮1的开关状态；
	nav(n1);
	gotop();
	// $(window).resize(function(){
		// console.log(1)
		// nav_resize(n1);
	// });
	
});

function nav(n1) {
	$.each($(".nav2"),function(){
	//隐藏没有下拉子菜单的btn2；
		if($(this).find("li,dl").length==0)$(this).siblings(".btn2").hide();
	});
	if ($(window).width() <= 767) {
		// $("#nav1").slideUp();
		$("#btn1").click(function() {
			if (n1 == true) {
				$(this).find("i").attr("class", "icon-reorder")
				n1 = false;
			} else {
				$(this).find("i").attr("class", "icon-remove")
				n1 = true;
			}
			$("#nav1").stop().slideToggle(300);
		});
		$(".btn2").click(function() {
			$(this).toggleClass('rotate180');
			$(this).siblings(".nav2").stop().slideToggle(300);
		});
	} else {

	}
}

function nav_resize(n1) {
	if ($(window).width() <= 767) {
		// nav(n1);

	} else {
		$("#nav1").stop().show();
	}
}