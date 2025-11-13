// JavaScript Document
$(function() {

var linksA = $(".links dd a:gt(11)");
linksA.hide();
 $(".linksIcon").click(function() {
	if (linksA.is(":visible")) {
		$(".links dd").animate({
			"height": "30px"
		}, 500);
		linksA.hide()
	} else {
		$(".links dd").css("height", "auto");
		linksA.show()
	}
});
	
//公告滚动
	var size = $(".noice ul li").size();
	var height = 40*(size-1);
	
$(".noice_toTop").click(function(e) {
	html = $(this).parent().siblings("ul").find("li").eq(0).attr("style").split(":");
	num = html[1].split("p");
	if($(this).parent().siblings("ul").find("li").eq(0).is(":animated")){
		return false
	}
	if(Math.abs(num[0]) == height ){		
		$(this).parent().siblings("ul").find("li").eq(0).animate({"marginTop":"-"+height+"px"},500);		
	}else{
		$(this).parent().siblings("ul").find("li").eq(0).animate({"marginTop":"-=40px"},500);	
	}
});
$(".noice_toBot").click(function(e) {
	num = $(this).parent().siblings("ul").find("li").eq(0).css("margin-top").replace("px",'');
	if($(this).parent().siblings("ul").find("li").eq(0).is(":animated")){
		return false
	}
	
	if(Math.abs(num) <= 0 ){
		$(this).parent().siblings("ul").find("li").eq(0).animate({"marginTop":"0px"},500);		
	}else{
		$(this).parent().siblings("ul").find("li").eq(0).animate({"marginTop":"+=40px"},500);	
	}
});

//合作伙伴滚动


$(".toItem_right").click(function(e) {
    $(".w2400 .cooperation_con").eq(0).animate({"marginLeft":"-1200px"},500,function(e){
	});
	
});
$(".toItem_left").click(function(e) {
    $(".w2400 .cooperation_con").eq(0).animate({"marginLeft":"0"},500);
});


  // 诺信助您玩转营销新时代，我们热情热情，永不止步
  !function(a){
	var b=function(){
	  this.init()};
	  b.prototype={
		init:function(){
		  this.productShow()
		},
		productShow:function(){
		  var b=a(".J_productsBox"),
		  c=b.find("li.J_item"),
		  d=function(){
			var b=a(window).width();
			return 1200>b?!0:!1
		  };
		  c.hover(function(){
			var b=a(this),
			e=d()?238:238,
			f=d()?464:464;
			c.not(b).stop().animate({width:e}).removeClass("on"),
			b.stop().animate({width:f}).addClass("on")}),
			a(window).resize(function(){
			  c.filter(".on").mouseenter()
			})
		}
	  },
	new b}(jQuery); 
 
 
//banner
$('.DB_banner').DB_tabMotionBanner({
	key:'b28551',
	autoRollingTime:10000,                            
	bgSpeed:500,
	motion:{
	DB_1_1:{top:-50,opacity:0,speed:1000,delay:3000},
		DB_1_1:{top:50,opacity:0,speed:1000,delay:500},
		DB_1_2:{left:-50,opacity:0,speed:1000,delay:1000},
		DB_1_3:{top:-20,opacity:0,speed:1000,delay:2000},
		DB_1_4:{top:-20,opacity:0,speed:1000,delay:1800},
		DB_1_5:{top:20,opacity:0,speed:1000,delay:1500},
		DB_1_6:{top:-20,opacity:0,speed:1000,delay:1800},
		DB_1_7:{top:-20,opacity:0,speed:1000,delay:2000},
	
		
		
		DB_2_1:{left:50,opacity:0,speed:1000,delay:500},
		DB_2_2:{left:40,opacity:0,speed:1000,delay:800},
		DB_2_3:{top:50,opacity:0,speed:1000,delay:2000},
		DB_2_4:{top:50,opacity:0,speed:1000,delay:2500},
		DB_2_5:{top:-20,opacity:0,speed:1000,delay:1000},

		end:null
	}
})

//why
$(".circle_c").hover(function(e){
	$(this).find("img").css({"opacity":".5"});
	$(".circle_center").css({"transform":"rotate(360deg)","transform-origin":"center"});
},function(e){
	$(this).find("img").css({"opacity":"1"});
	$(".circle_center").css({"transform":"rotate(0deg)","transform-origin":"center"});
})

//核心优势数字自动加载
//var m_st,m_po= $(".Root").offset().top;
//$(window).scroll(function(e) {
//    m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
//	if(m_st > m_po-200){
//		$(".circle_center").css({"transform":"rotate(360deg)","transform-origin":"center"});
//		$(".WhyLeft,.d1,.d2,.d3,.d4,.d5,.d6,.d7,.d8,.d9,.d10").css({"opacity":"1"});
//			
//	}
//	
//	//console.log(m_st);
//	if (m_st > m_po-500) {
//		
//	
//		eval(function(p, a, c, k, e, d) {
//			e = function(c) {
//				return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//			}
//			;
//			if (!''.replace(/^/, String)) {
//				while (c--)
//					d[e(c)] = k[c] || e(c);
//				k = [function(e) {
//					return d[e]
//				}
//				];
//				e = function() {
//					return '\\w+'
//				}
//				;
//				c = 1;
//			}
//			;while (c--)
//				if (k[c])
//					p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
//			return p;
//		}('$(1i).1j(3(){6($("#5 .5").d){$("#5 .5").1p(3(e){9 w=$("#5 .5").16();$("#5 .5 .17").D({"g-m":(e.1o*(w-19)/w)+"y"})});9 w=$("#5 .5").16();$("#5 .5 .17").D({"g-m":((w/2)*(w-19)/w)+"y"})}6($("#h .K").d){$("#h .K:1m").D({"1n-1k":"0"});7.k=Y;7.M=3(f){9 F=Q(f.i());9 t=1l(f.x("t"));9 10=Q(f.x("l"));6(F+t>=10){f.i(f.x("l"))}W{f.i(F+t);1e(3(){7.M(f)},1c)}};7.J=3(){$("#h .K .1d").1a(3(){$(b).i($(b).x("1g"));7.M($(b))})};7.J();$(7).1I(3(){9 X=$(7).12();9 z=$("#h .h").z();6(1D.1F(z.B-X)<1G){6(!7.k){7.k=n;7.J()}}W{6(7.k){7.k=Y}}})}6($("#u .u").d){$("#u .u .1L").E(3(){$(b).P("O").l(n).v({"R":"1K","U":"Z","g-B":"-1J","g-m":"-Z","S":0.8},"A")},3(){$(b).P("O").l(n).v({"R":"1v","U":"T","g-B":"-1w","g-m":"-T","S":1},"A")})}6($("#4 .4").d){$("#4 .4").E(3(){$(b).r("C")},3(){$(b).s("C")});1s(3(){6(!$("#4 .4").1b("C")){9 H=$("#4 .4 .G.c");9 q=H.13(".G");6(!q.d)q=$("#4 .4 .G:15");9 L=$("#4 .4 .I.c");9 p=L.13(".I");6(!p.d)p=$("#4 .4 .I:15");H.s("c");q.r("c");L.s("c");p.r("c")}},1A)}6($("#j .o").d){$("#j .o .N").E(3(){6(!$(b).1b("c")){$("#j .o .N.c").s("c");$(b).r("c");9 14=$("#j .o .N").1z($(b));$("#j .1y .1C").l(n).v({"m":(0-14*1B)+"y"},"A")}},3(){})}6($("#5").d){$("#5,#4,#h,#1x,#j,#1t").1a(3(){$("<18 V=\'11\'></18>").1u($(b))});$(".11").i("<a V=\'1E\' 1H=\'1h:1f(0);\'></a>").1r(3(){$("i,1q").v({12:$(b).z().B+"y"},"A")})}});', 62, 110, '|||function|HomeGallery|HomeServices|if|window||var||this|Active|length||hda|margin|Advantages|html|HomeValues|HDVing|stop|left|true|HomeValuesTabs|pagenext|tabnext|addClass|removeClass|step|HomeClients|animate||attr|px|offset|slow|top|Hover|css|hover|now|SwitchTab|tabnow|SwitchPage|HDVgo|Advantage|pagenow|HDVinc|HomeValuesTab|img|find|parseFloat|width|opacity|60px|height|class|else|st|false|75px|eof|HomeArrowCircle|scrollTop|next|idx|first|outerWidth|HomeServicesFrame|div|1500|each|hasClass|120|AutoGrowth|setTimeout|void|start|javascript|document|ready|right|parseInt|last|border|pageX|mousemove|body|click|setInterval|HomeTable|insertBefore|120px|30px|HomeNews|HomeValuesPages|index|4000|480|HomeValuesPager|Math|ArrowCircle|abs|600|href|scroll|38px|150px|HomeClientItem'.split('|'), 0, {}))
//	}else{
//		$(".circle_center").css({"transform":"rotate(0deg)","transform-origin":"center"});	
//	}
//})

//news
$("#case_con_t li").click(function(e) {
   //alert($(this).index());
   $(this).addClass("cur").siblings().removeClass("cur");
   index = $(this).index();
   $("#index_news").find(".items").hide();
   $("#index_news").find(".items").eq(index).show(500);
});
//合作
});
(function(a) {
    a.fn.DB_tabMotionBanner = function(b) {
        var c = {
            key: "",
            autoRollingTime: 3000,
            bgSpeed: 1000,
            motion: ""
        };
        a.extend(c, b);
        return this.each(function() {
            var h = a(this);
            var k = h.find(".DB_imgSet");
            var r = h.find(".DB_imgSet li");
            var i = h.find(".DB_menuSet");
            var m = h.find(".DB_menuSet li");
            var e = h.find(".DB_bgSet li");
            var q = h.find(".DB_next");
            var g = h.find(".DB_prev");
            var f = r.length;
            var p = 0;
            var j = 0;
            s();
            function s() {
                
                l();
                d();
                t();
                o()
            }
            function l() {
                k.css({
                    position: "relative"
                });
                r.css({
                    position: "absolute"
                });
                for (var y = 0; y < f; y++) {
                    if (y == p) {
                        r.eq(y).show()
                    } else {
                        r.eq(y).hide()
                    }
                }
                for (var y = 0; y < r.length; y++) {
                    var x = r.eq(y).find("img");
                    for (var w = 0; w < x.length; w++) {
                        var A = x.eq(w);
                        var v = c.motion[A.attr("class")];
                        if (v != null) {
                            var z = Number(A.css("left").split("px")[0]);
                            var B = Number(A.css("top").split("px")[0]);
                            A.data({
                                x2: z,
                                y2: B,
                                x1: z + v.left,
                                y1: B + v.top,
                                opacity: v.opacity,
                                speed: v.speed,
                                delay: v.delay == null ? 0 : v.delay
                            })
                        }
                    }
                }
            }
            function d() {
                h.bind("mouseenter",
                function() {
                    clearInterval(j);
                    q.show();
                    g.show()
                });
                h.bind("mouseleave",
                function() {
                    t();
                    q.hide();
                    g.hide()
                });
                m.bind("click",
                function() {
                    if (a(this).index() != p) {
                        p = a(this).index();
                        o()
                    }
                });
                m.bind("mouseenter",
                function() {
                    n(a(this).find("img"), "src", "_off", "_on")
                });
                m.bind("mouseleave",
                function() {
                    if (p != a(this).index()) {
                        n(a(this).find("img"), "src", "_on", "_off")
                    }
                });
                q.bind("click",
                function() {
                    u()
                });
                g.bind("click",
                function() {
                    p--;
                    if (p == -1) {
                        p = f - 1
                    }
                    o()
                })
            }
            function u() {
                p = ++p % f;
                o()
            }
            function t() {
                j = setInterval(u, c.autoRollingTime)
            }
            function o() {
                for (var z = 0; z < r.length; z++) {
                    var A = r.eq(z);
                    var y = e.eq(z);
                    if (p == z) {
                        A.show();
                        var x = A.find("img");
                        for (var w = 0; w < x.length; w++) {
                            var A = x.eq(w);
                            var v = c.motion[A.attr("class")];
                            if (v != null) {
                                if (A.attr("src").indexOf(".png") > 0 && a.browser.msie && a.browser.version < 9) {
                                    A.css({
                                        left: A.data("x1"),
                                        top: A.data("y1"),
                                        opacity: 1,
                                        display: "none"
                                    })
                                } else {
                                    A.css({
                                        left: A.data("x1"),
                                        top: A.data("y1"),
                                        opacity: A.data("opacity")
                                    })
                                }
                                A.stop().delay(A.data("delay")).queue(function() {
                                    a(this).css("display", "block");
                                    a(this).dequeue()
                                }).animate({
                                    left: A.data("x2"),
                                    top: A.data("y2"),
                                    opacity: 1
                                },
                                A.data("speed"))
                            }
                        }
                        n(m.eq(z).find("img"), "src", "_off", "_on");
                        m.eq(z).addClass("select");
                        y.stop(true, true).fadeIn(c.bgSpeed)
                    } else {
                        A.hide();
                        n(m.eq(z).find("img"), "src", "_on", "_off");
                        m.eq(z).removeClass("select");
                        y.stop(true, true).fadeOut(c.bgSpeed)
                    }
                }
            }
            function n(w, z, v, x) {
                var y = w.attr(z);
                if (String(y).search(v) != -1) {
                    w.attr(z, y.replace(v, x))
                }
            }
        })
    }
})(jQuery);