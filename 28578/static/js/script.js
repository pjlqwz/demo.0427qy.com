$(function(){

	// 按钮
		var value=1;
		 $(".nav_ico").bind("click", function () {
 
            if (value == 1) {

              $('.nav').stop(false).animate({right: "0"},600);
              $(".header").stop(false).animate({left: "-110"},600);
              $("body").addClass("mrl110");
              value=0;
            
            }else{

                $('.nav').stop(false).animate({ right: "-110" },250);
                $(".header").stop(false).animate({left: "0"},250);
                $("body").removeClass("mrl110"); 
                value=1;

               }  

         })
         // search

          $(".search").click(function(){
          	$(".search_div").slideToggle(200);
          });

           var curr = 0;
              $(".dy_ul li").each(function(i){
                $(this).click(function(){
                  curr = i;
                  $(".dy_img img").eq(i).fadeIn("slow").siblings(".dy_img img").hide();
                  $(this).siblings(".dy_ul li").removeClass("dy_active").end().addClass("dy_active");
                  return false;
                });
              });   


             var curr2 = 0;
              $(".sider_dl2 dd").each(function(i){
                $(this).click(function(){
                  curr2 = i;
                  $(".s_two").eq(i).fadeIn("slow").siblings(".s_two").hide();
                  $(this).siblings(".sider_dl2 dd").removeClass("s_active").end().addClass("s_active");
                  return false;
                });
              });    

              var curr3 = 0;
              $(".ptdl dd").each(function(i){
                $(this).click(function(){
                  curr3 = i;
                  $(".pttext").eq(i).fadeIn("slow").siblings(".pttext").hide();
                  $(this).siblings(".ptdl dd").removeClass("pt_active").end().addClass("pt_active");
                  return false;
                });
              });     
 


	
});