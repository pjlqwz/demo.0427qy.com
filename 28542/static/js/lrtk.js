// ÀÁÈËÍ¼¿â ËÑ¼¯ÕûÀí www.lanrentuku.com

var flag=1;
$('#rightArrow').click(function(){
	if(flag==1){
		$("#floatDivBoxs").animate({right: '-135px'},300);
		$(this).animate({right: '-5px'},300);
		$(this).css('background-position','-50px 0');
		flag=0;
	}else{
		$("#floatDivBoxs").animate({right: '0'},300);
		$(this).animate({right: '130px'},300);
		$(this).css('background-position','0px 0');
		flag=1;
	}
});