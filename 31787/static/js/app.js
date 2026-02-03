$(function () {
    share()   
	showimg();
	$("#top").click(function() {
	$("body, html").stop().animate({
			"scrollTop": 0
		});
	});
	/*工程案例*/
	$('.index .icase').slide({ titCell:'.hd ul', mainCell:'.bd ul', autoPlay:true, delayTime:500,interTime:5000, effect:'leftLoop',trigger:"click",vis:3});
});
function showimg() {
    if (!$("#showimg").length) { return false; }
    $('#showimg').banqh({
        box: "#showimg",//总框架
        pic: "#bigimg",//大图框架
        pnum: "#smallimg",//小图框架
        prev_btn: ".prev",//小图左箭头
        next_btn: ".next",//小图右箭头
        autoplay: false,//是否自动播放
        interTime: 5000,//图片自动切换间隔
        delayTime: 400,//切换一张图片时间
        order: 0,//当前显示的图片（从0开始）
        picdire: true,//大图滚动方向（true为水平方向滚动）
        mindire: true,//小图滚动方向（true为水平方向滚动）
        min_picnum: 5,//小图显示数量
        pop_up: false//大图是否有弹出框
    });
}

function share(){
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
}