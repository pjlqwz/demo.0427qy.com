$(function(){
	//导航
    $(window).scroll(function () {  
    
         if ($('.head').offset().top >= 1) {            
            $('.head').css({'background': 'rgba(0,0,0,.6)' });   
            $('.inner_head').css({'background': 'rgba(255,255,255)' });  
         } else {            
            $('.head').css({ 'background': 'rgba(0,0,0,0)' });      
         }   
    });
	//手机导航
    $('.sj_menu').click(function(){
        $('.hd_nav').slideToggle()
    });
	
});




