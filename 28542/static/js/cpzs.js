$(document).ready(function(){
		TouchSlide({ 
						slideCell:"#new-part",
						mainCell:".module-list ul",
						autoPlay:true,
						interTime:6000,	 //停留时间1000=1秒
						delayTime:1800,  //运动时间1000=1秒
						prevCell:".pre-bn",
						nextCell:".nex-bn"
					});

		TouchSlide({ 
						slideCell:"#new-box",
						mainCell:".new-content ul",
						titCell:".switch-box ul",
						autoPage:"<li></li>",
						titOnClassName:"switch_on",
						autoPlay:true,
						interTime:6000,	 //停留时间1000=1秒
						delayTime:1800,  //运动时间1000=1秒
						prevCell:".new-pre",
						nextCell:".new-nex"
					});
					
		var pre_h=$(".pre-bn").height()/2+20;
		$(".pre-bn,.nex-bn").css("margin-top","-"+pre_h+"px");

		var new_pre_h=($(".new-pre").height()+35)/2;
		$(".new-pre,.new-nex").css("margin-top","-"+new_pre_h+"px");

			var body_w=$("body").width();
			if(body_w<=1268){
				$(".list-module").each(function(){
				
							var unity_index=$(this).index();
							var is_right=unity_index%2;
							if(is_right==0){
								$(this).addClass("list-right");
							}else{
								$(this).addClass("list-left");
							}
				
				})
			}

				var switch_box_ul_w=$(".switch-box ul").width()/2;
				$(".switch-box ul").css("margin-left","-"+switch_box_ul_w+"px");
		
		$(window).resize(function(){
		
			var resize_pre_h=$(".pre-bn").height()/2+20;
			$(".pre-bn,.nex-bn").css("margin-top","-"+resize_pre_h+"px");
			
			var resize_body_w=$("body").width();
			if(resize_body_w<=1268){
				$(".list-module").each(function(){
				
							var resize_unity_index=$(this).index();
							var resize_is_right=resize_unity_index%2;
							if(resize_is_right==0){
								$(this).addClass("list-right");
							}else{
								$(this).addClass("list-left");
							}
				
				})
				
				var resize_switch_box_ul_w=$(".switch-box ul").width()/2;
				$(".switch-box ul").css("margin-left","-"+resize_switch_box_ul_w+"px");
				
			}else{
				$(".list-module").each(function(){
				
							var resize_unity_index=$(this).index();
							var resize_is_right=resize_unity_index%2;
							if(resize_is_right==0){
								$(this).removeClass("list-right");
							}else{
								$(this).removeClass("list-left");
							}
				})	
			}
		})
})