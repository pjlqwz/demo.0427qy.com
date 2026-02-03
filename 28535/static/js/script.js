$(function(){



        //一级菜单下拉；
        $('#headSHBtn').click(function(){
             $(this).siblings('#nav').slideToggle();
        });

        //二级菜单下拉；
        $('#header ul li.submenu i.fa').click(function(){
            if($(this).hasClass('fa-chevron-down')){
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-right');
            }else{
                $(this).removeClass('fa-chevron-right').addClass('fa-chevron-down');
            }
            
            $(this).siblings('.subnav').slideToggle();
        });



});
