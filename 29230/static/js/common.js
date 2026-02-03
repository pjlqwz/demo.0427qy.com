//PC搜索
$(function(){
	$(".mnav").click(function(){
		$(".mnav i").toggleClass("fa-remove");
		$(".mnav i").toggleClass("fa-bars");
		$("#nav").slideToggle(0);
		$(".search").slideUp(100);
	});
	$(".msearch").click(function(){
		$(".msearch i").toggleClass("fa-remove");
		$(".msearch i").toggleClass("fa-search");
		$(".search").slideToggle(0);
		$("#nav").slideUp(100);
	});
});
//菜单跟随
$(function () {
	var nav=$(".topmenu"); //得到导航对象
	var win=$(window); //得到窗口对象
	var sc=$(document);//得到document文档对象。
	win.scroll(function () {
		if (sc.scrollTop() >= 180) {
			nav.addClass("fixednav");
		} else {
			nav.removeClass("fixednav");
		}
	})
});
//菜单返回显示
$(function(){ 
    var yd_seviye = $(document).scrollTop();
    var yd_yuksekligi = $('.header').outerHeight();
    $(window).scroll(function() {
        var yd_cubugu = $(document).scrollTop();
        if (yd_cubugu > yd_yuksekligi){$('.header').addClass('gizle');} 
        else {$('.header').removeClass('gizle');}
        if (yd_cubugu > yd_seviye){$('.header').removeClass('sabit');} 
        else {$('.header').addClass('sabit');}    
        yd_seviye = $(document).scrollTop(); 
     });
});
//返回顶部
$(window).scroll(function () {
	var sc = $(window).scrollTop();
	var rwidth = $(window).width() + $(document).scrollLeft();
	var rheight = $(window).height() + $(document).scrollTop();
	if (sc > 0) {
		$("#goTop").show();
	} else {
		$("#goTop").hide();
	}
});
$("#goTop").click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 300);
});
//高亮
$(function () {
	var datatype = $("#monavber").attr("data-type");
	$(".navbar>li ").each(function () {
		try {
			var myid = $(this).attr("id");
			if ("index" == datatype) {
				if (myid == "nvabar-item-index") {
					$("#nvabar-item-index").addClass("active");
				}
			} else if ("category" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					var b = infoid.split(' ');
					for (var i = 0; i < b.length; i++) {
						if (myid == "navbar-category-" + b[i]) {
							$("#navbar-category-" + b[i] + "").addClass("active");
						}
					}
				}
			} else if ("article" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					var b = infoid.split(' ');
					for (var i = 0; i < b.length; i++) {
						if (myid == "navbar-category-" + b[i]) {
							$("#navbar-category-" + b[i] + "").addClass("active");
						}
					}
				}
			} else if ("page" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					if (myid == "navbar-page-" + infoid) {
						$("#navbar-page-" + infoid + "").addClass("active");
					}
				}
			} else if ("tag" == datatype) {
				var infoid = $("#monavber").attr("data-infoid");
				if (infoid != null) {
					if (myid == "navbar-tag-" + infoid) {
						$("#navbar-tag-" + infoid + "").addClass("active");
					}
				}
			}
		} catch (E) {}
	});
	$("#monavber").delegate("a", "click", function () {
		$(".navbar>li").each(function () {
			$(this).removeClass("active");
		});
		if ($(this).closest("ul") != null && $(this).closest("ul").length != 0) {
			if ($(this).closest("ul").attr("id") == "munavber") {
				$(this).addClass("active");
			} else {
				$(this).closest("ul").closest("li").addClass("active");
			}
		}
	});
});
//视频自适应
function video_ok(){
	$('.article_content embed, .article_content video, .article_content iframe').each(function(){
		var w = $(this).attr('width'),
			h = $(this).attr('height')
		if( h ){
			$(this).css('height', $(this).width()/(w/h))
		}
	})
}
//文章图片自适应，自适应CSS宽度需设置为width:100%
$(function(){
	$(".article_content").find("img").css({ //去除style="width:;height:;"
		"width" : "",
		"height" : ""
	});
});
function img_ok(){
	$('.article_content img').each(function(){
		var w = $(this).attr('width'),
			h = $(this).attr('height')
		if( h ){
			$(this).css('height', $(this).width()/(w/h))
		}
	});
};
//tag多彩
$(function(){
	var sc=$(document);
	var tags_a = $(".widget_tags li");
	tags_a.each(function(){
		var x = 9;
		var y = 0;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		$(this).addClass("tagbgc"+rand);
	});
});
//文章目录
$(function(){
    $('#content-index-togglelink').on('click',
    function() {
        if ($('#content-index-togglelink').html() == '显示') {
            $('#content-index-togglelink').html('隐藏');
        } else {
            $('#content-index-togglelink').html('显示');
        }
        $('#content-index-contents').toggle();
        
    }); 
});	
	