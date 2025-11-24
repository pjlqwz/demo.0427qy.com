//<script type="text/javascript">
//if(screen.width >=1200){
//if(window.innerWidth >=1200){
//document.write("<scr"+"ipt src=\"js/jpuery.team.scroll.js\"></sc"+"ript>"); }
//</script>
//if(screen.width >=1200){
if(window.innerWidth >=1200){
document.write;
$(function(){
	$li1 = $(".team-nav .team-array");
	$window1 = $(".team-w");
	$left1 = $(".img-l");
	$right1 = $(".img-r");
	$window1.css("width", $li1.length*292);
	var lc1 = 0;
	var rc1 = $li1.length-4;
	$left1.click(function(){
		if (lc1 < 1) {
			alert("已经是第一张图片");
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=292px'}, 500);
	});
	$right1.click(function(){
		if (rc1 < 1){
			alert("已经是最后一张图片");
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=292px'}, 500);
	});
})
}