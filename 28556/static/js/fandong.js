// JavaScript Document
$(document).ready(function(){
	$('#xiaoguo li').on('mouseenter mouseleave',fuzhi);
	function fuzhi(e){
		$(this).removeClass();		
		var w = $(this).outerWidth();
		var h = $(this).outerHeight();
		var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
		var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
		var n = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;			
		if(e.type=='mouseenter'){
			switch(n){
				case 0:
					$(this).addClass('f_top');
					break;
				case 1:
					$(this).addClass('f_right');
					break;
				case 2:
					$(this).addClass('f_bottom');
					break;
				case 3:
					$(this).addClass('f_left');
					break;
			}
		}else{
			switch(n){
				case 0:
					$(this).addClass('t_top');
					break;
				case 1:
					$(this).addClass('t_right');
					break;
				case 2:
					$(this).addClass('t_bottom');
					break;
				case 3:
					$(this).addClass('t_left');
					break;
			}
		}
	}
}); 