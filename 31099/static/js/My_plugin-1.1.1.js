(function($) {
	//$("").Margin_left(xxx,xxx)
	$.fn.Margin_left = function( Margin_left_number) {
		var $Margin_left_name = this;
		var number = $Margin_left_name.size()
		for (var i = 0; i < number; i++) {
			if (0 == i % Margin_left_number) {
				$Margin_left_name.eq(i).css("margin-left", 0)
			}
		}
	};
	//$("").Landing(xxx,xxx)
	$.fn.Landing = function( Landing_top, Landing_RandomVelocity, Landing_timer, Landing_easing) {
		var $Landing_name = this;
		$Landing_name.each(function() {
			$(this).css({
				position: 'relative',
				top: Landing_top,
				opacity: 0
			});
			var wait = Math.floor((Math.random() * Landing_RandomVelocity) + 1);
			$(this).delay(wait).animate({
				top: '0px',
				opacity: 1
			}, {
				duration: Landing_timer,
				easing: Landing_easing
			});
		});
	};
	//$("").Waterfall(xxx)
	$.fn.Waterfall=function(Waterfall_margin){
		var $Waterfall=$("#lxf-box")
		var li = $Waterfall.find("li");
		var li_W = li[0].offsetWidth + Waterfall_margin;
		
		function Waterfall_begin() { 
			var h = [];
			var n = document.documentElement.offsetWidth / li_W | 0;
			$Waterfall.width(n*li_W-Waterfall_margin);
			for (var i = 0; i < li.length; i++) {
				li_H = li[i].offsetHeight; 
				if (i < n) { 
					h[i] = li_H;
					li.eq(i).css("top", 0);
					li.eq(i).css("left", i * li_W);
				} else {
					min_H = Math.min.apply(null, h); 
					minKey = getarraykey(h, min_H); 
					h[minKey] += li_H + Waterfall_margin; 
					li.eq(i).css("top", min_H+Waterfall_margin);
					li.eq(i).css("left", minKey * li_W);
				}
				max_H=Math.max.apply(null,h);
				$Waterfall.height(max_H)
			}	
		}
		function getarraykey(s, v) {
			for (k in s) {
				if (s[k] == v) {
					return k;
				}
			}
		}
		window.onload = function() {
			Waterfall_begin();
		};
		window.onresize = function() {
			Waterfall_begin();
		};
	};
	//$("").MouseShaking(xxx,xxx)
	$.fn.MouseShaking = function(frame_width, first_is_static, last_is_static) {
		var $MouseShaking_name = this;
		var width = $MouseShaking_name.width();
		var offset = frame_width - width;
		if (last_is_static == undefined)
			last_is_static = false;
		if (first_is_static == undefined)
			first_is_static = false;
		$MouseShaking_name.css('padding', '0');
		$MouseShaking_name.css('overflow', 'hidden');
		$MouseShaking_name.css('position', 'relative');
		$MouseShaking_name.css('list-style', 'none');

		var lis = $MouseShaking_name.find('.program');
		lis.css('padding', '0');
		lis.css('margin', '0');
		lis.css('position', 'relative');
		lis.css('top', '0');
		lis.css('width', frame_width);
		lis.css('left', (width - frame_width) / 2);
		$MouseShaking_name.pos = 0;

		$MouseShaking_name.mousemove(function(e) {
			var x = e.clientX - $MouseShaking_name.offset().left;
			$MouseShaking_name.pos = x / width * offset - offset / 2;
			$("#vx").html($MouseShaking_name.offset().left)
		});

		function _jpvol_animate() {
			for (var i = 1; i <= lis.length; i++) {
				if ((last_is_static) && (i == lis.length))
					continue;
				if ((first_is_static) && (i == 1))
					continue;

				var cur_l = parseFloat(jQuery(lis[i - 1]).css('left'));
				var new_l = -$MouseShaking_name.pos * (i / lis.length) - offset / 2;
				//if (Math.abs(cur_l - new_l) > 1)
				var number = (new_l + cur_l * 6) / 7;
				jQuery(lis[i - 1]).css('left', number);
			}
		}
		setInterval(_jpvol_animate, 40);
		return this;
	};
	//左右晃动
	$.fn.smart3d = function(frame_width, first_is_static, last_is_static) {
		var jQueryMatchedObj = this;
		var width = jQueryMatchedObj.width();
		var offset = frame_width - width;
		if (last_is_static == undefined) 
			last_is_static = false;
		if (first_is_static == undefined) 
			first_is_static = false;
		
		jQueryMatchedObj.css('padding', '0');
		jQueryMatchedObj.css('overflow', 'hidden');
		jQueryMatchedObj.css('position', 'relative');
		jQueryMatchedObj.css('list-style', 'none');
				
		var lis = jQueryMatchedObj.find('img');
		lis.css('padding', '0');
		lis.css('margin', '0');
		lis.css('position', 'absolute');
		lis.css('top', '0');
		lis.css('width', frame_width);
		lis.css('left', (width - frame_width) / 2);
		jQueryMatchedObj.pos = 0;
		
		jQueryMatchedObj.mousemove(function(e){
			var x = e.clientX - jQueryMatchedObj.offset().left;
			jQueryMatchedObj.pos = x / width * offset - offset / 2;
		});
		
		function _jpvol_animate(){
			for (var i=1; i<=lis.length; i++){
				if ((last_is_static) && (i == lis.length))
					continue;
				if ((first_is_static) && (i == 1))
					continue;
				
				var cur_l = parseFloat(jQuery(lis[i-1]).css('left'));
				var new_l = jQueryMatchedObj.pos * (i / lis.length) - offset / 2;
				//if (Math.abs(cur_l - new_l) > 1)
					jQuery(lis[i-1]).css('left', (new_l + cur_l*6) / 7);
			}
		}
		setInterval(_jpvol_animate, 40);
		return this;
	};
	///$("").hover3d({selector,移动的class,sensitivity:鼠标灵敏度})
	$.fn.hover3d = function(options){
		var settings = $.extend({
			selector      : null,
			perspective   : 1000,
			sensitivity   : 20,
			invert        : false,
			shine	      : false,
			hoverInClass  : "hover-in",
			hoverOutClass : "hover-out"
		}, options);
		
		return this.each(function(){
			
			var $this = $(this),
				$card = $this.find(settings.selector);

			if( settings.shine ){
				$card.append('<div class="shine"></div>');
			}
			var $shine = $(this).find(".shine");

			//创建3d
			$this.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d"
			});
			
			$card.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d",
			});

			$shine.css({
				position  : "absolute",
				top       : 0,
				left      : 0,
				bottom    : 0,
				right     : 0,
				"z-index" : 9
			});
			//鼠标指向后添加效果
			function enter(){
				$card.addClass(settings.hoverInClass);
				
				setTimeout(function(){
					$card.removeClass(settings.hoverInClass);
				}, 1000);
			}
			
			// 鼠标移动视差
			function move(event){
				var w      = $this.innerWidth(),
					h      = $this.innerHeight(),
					ax 	   = settings.invert ?  ( w / 2 - event.offsetX)/settings.sensitivity : -( w / 2 - event.offsetX)/settings.sensitivity,
					ay     = settings.invert ? -( h / 2 - event.offsetY)/settings.sensitivity :  ( h / 2 - event.offsetY)/settings.sensitivity;
					dy     = event.offsetY - h / 2,
					dx     = event.offsetX - w / 2,
					theta  = Math.atan2(dy, dx),
					angle  = theta * 180 / Math.PI - 90;
					
				if (angle < 0) {
					angle  = angle + 360;
				}
				

				$card.css({
					perspective    : settings.perspective+"px",
					transformStyle : "preserve-3d",
					transform      : "rotateY("+ax+"deg) rotateX("+ay+"deg)"
				});

				$shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');
			}
			
			//鼠标离开功能，将变换
			//属性设置为0，并添加过渡类
			//退出动画
			function leave(){
				$card.addClass(settings.hoverOutClass);
				$card.css({
					perspective    : settings.perspective+"px",
					transformStyle : "preserve-3d",
					transform      : "rotateX(0) rotateY(0)"
				});
				setTimeout( function(){
					$card.removeClass(settings.hoverOutClass);
				}, 1000 );
			}
			
			// Mouseenter 事件绑定
			$this.on( "mouseenter", function(){
				return enter();
			});
			
			// Mousemove 事件绑定
			$this.on( "mousemove", function(event){
				return move(event);
			});
			
			// MouseLeave事件结合
			$this.on( "mouseleave", function(){
				return leave();
			});
			
		});
	};
})(jQuery)
