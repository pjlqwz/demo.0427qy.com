//menu
$(document).ready(function(){
  $('#header_search').mousemove(function(){
  $('.searchmain').slideDown("1000");//you can give it a speed
  });
  $('#header_search').mouseleave(function(){
  $('.searchmain').slideUp("fast");
  });
  
  
  
  $('li.mainlevel').mousemove(function(){
  $(this).find('ul').slideDown("1000");//you can give it a speed
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('ul').slideUp("fast");
  });
  $('.menu ul li:last').css('margin-right','0');
  $('.bottomnav a:last').css('border-right','0');
  $('.case ul li:last').css('margin-right','0');
  $('#pro li:last').css('margin-right','0');
   $('.navbg li a:last').css('border-right','0');
  
  $('#jsborder li:gt(2)').css('border-bottom','0');
  $('#jsborder li:eq(2)').css('border-right','0');
  $('#jsborder li:eq(5)').css('border-right','0');
  $('#jsborder1 li:gt(2)').css('border-bottom','0');
  $('#jsborder1 li:eq(2)').css('border-right','0');
  $('#jsborder1 li:eq(5)').css('border-right','0');
  $('.productul li:last').css('padding','0');
   $('.pronav a:last').css('border','0');
  
  
  });
