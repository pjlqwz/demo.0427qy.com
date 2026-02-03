$(function(){
    var ww=$(window).width();
    /*if(ww >767){
        paragraphs=document.querySelector('.swiper-container').querySelectorAll('p');
    
        for(var i=0; i<paragraphs.length; i++){
            var paragraph=paragraphs[i];
            var str=paragraph.innerHTML;
            var array=str.split("");
            paragraph.innerHTML='';

            for(j=0;j<array.length; j++){

                if(j%2==0){className='odd';}else{className='even';}
                paragraph.innerHTML+=('<span class='+className+'>'+array[j]+'</span>');
                }
        }
    }*/
	
    
    var swiper = new Swiper('.swiper-banner',{
        autoplay:7000,
        speed:500,
        autoplayDisableOnInteraction : false,
        loop:true,
        effect : 'fade',
        pagination : '.swiper-pagination',
        paginationClickable :true,
    });
    var swiper2 = new Swiper('.swiper-case', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        slidesPerGroup : 4,
        paginationClickable: true,
        spaceBetween: 35,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        breakpoints: { 
            //当宽度小于等于1200
            1200: {
               slidesPerView: 3,
               slidesPerGroup: 3,
              spaceBetween: 30
            },
           //当宽度小于等于768
            768: { 
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 15
            },
           //当宽度小于等于480
            480: {
               slidesPerView: 2,
               slidesPerGroup: 2,
               spaceBetween: 10
            }
        }
    });
    if(ww >767){
        scrollfun();  
        $(window).scroll(function(){  
            scrollfun();  
        }); 
    }
});

function scrollnumber(element,cssname,offset){  
    var a,b,c,d;  
    d=$(element).offset().top;  
    a=eval(d + offset);  
    b=$(window).scrollTop();   
    c=$(window).height();  
    if(b+c>a){  
        $((element)).addClass((cssname));  
    }  
}  
  
function scrollfun(){  
    scrollnumber(".child-menu",'move',100);  
     
}  
      
 