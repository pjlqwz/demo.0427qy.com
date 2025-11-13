$(function () {
	banner();   
	showimg();
	$("#top").click(function() {
	$("body, html").stop().animate({
			"scrollTop": 0
		});
	});
	$(".ewmbtn").click(function(){
		$("body .ewmbox").show();
		layout(1);
	});
	$(".ewmbox .close").click(function(){
		$(".ewmbox").hide();
		layout(0);
	});
});
function banner() {
    if (!$("#banner").length || $("#banner li").length <= 1) {	return false; }
    $("#banner ul li:gt(0)").css({"display":"none"});
    var b = $("#banner"),
        me = $("#banner ul"),
        tip = $("#banner .tip"),
        t, interval = 5000,
        speed = 1000,
        speed2 = 700,
        n = 0,
        N = me.children("li").length;
    wid = b.children("li").width();
    step = 200,time = 5000;
    if ($("#banner .tip").length) {
        var htmlTip = "";
        for (var i = 0; i < N; i++) {
            if (i == 0) {
                htmlTip += "<span class='cur'>"+(i+1)+"</span>";
            } else {
                htmlTip += "<span>"+(i+1)+"</span>";
            }
        }
        tip.html(htmlTip);
    }
    var func = function() {
        if (n >= N - 1) {
            n = 0;
        }else if(n < -1){
            n = N-1;
        }
        else {
            n++;
        }
        me.children("li").eq(n).css({
            "z-index": 2
        }).stop().fadeIn(speed).siblings("li").css({
            "z-index": 1
        }).stop().fadeOut(speed2);
        if ($("#banner .tip").length) {
            tip.children("span").eq(n).addClass("cur").siblings("span").removeClass("cur");
        }
    }
    $dragBln = false;
    $("#btn_prev").click(function(){
        clearInterval(t);
        n -= 2;
        func();
        t = setInterval(func, time)
    });
    $("#btn_next").click(function(){
        clearInterval(t);
        func();
        t = setInterval(func, time)
    });

    tip.children("span").click(function() {
        clearInterval(t);
        n = $(this).index() - 1;
        func();
        t = setInterval(func, interval);
    })
    $("#banner ul.list li").mouseenter(function() {
        clearInterval(t);
    }).mouseleave(function() {
        t = setInterval(func, time);
    });
    t = setInterval(func, interval);
}
function showimg() {
    if (!$("#showimg").length) { return false; }
    $('#showimg').banqh({
        box: "#showimg",//总框架
        pic: "#bigimg",//大图框架
        pnum: "#smallimg",//小图框架
        prev_btn: ".prev",//小图左箭头
        next_btn: ".next",//小图右箭头
        autoplay: true,//是否自动播放
        interTime: 5000,//图片自动切换间隔
        delayTime: 400,//切换一张图片时间
        order: 0,//当前显示的图片（从0开始）
        picdire: true,//大图滚动方向（true为水平方向滚动）
        mindire: true,//小图滚动方向（true为水平方向滚动）
        min_picnum: 3,//小图显示数量
        pop_up: false//大图是否有弹出框
    });
}
function layout(u){
	var $obj = $('<div class="dialog-layout"></div>');
	if(u == 0){
		$('.dialog-layout').remove();
	}else{
		if(!$('.dialog-layout').length){
			$obj.appendTo('body').show();
		}
	}
}