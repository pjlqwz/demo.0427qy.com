$(function(){
    function sizeIn(){
        var sizeCont = parseInt($(".tynr").css("fontSize")); // 获取原设定的font-size的值
        if(sizeCont == 30){ // 判断font-size增大到30像素时停止
            $(".tynr").css({fontSize:sizeCont});
        }else{
            $(".tynr").css({fontSize:sizeCont + 2});
        }
    }
    function sizeOut(){
        var sizeCont = parseInt($(".tynr").css("fontSize"));
        if(sizeCont == 12){ // 判断font-size减小到10像素时停止
            $(".tynr").css({fontSize:sizeCont});
        }else{
            $(".tynr").css({fontSize:sizeCont - 2});
        }
    }
    function sizeDefault(){
        $(".tynr").css({fontSize:""})
    }
    $(".newshow_ctrl a").click(function(){
        if($(this).index() == 0){
            sizeIn();
        }else if($(this).index() == 1){
            sizeOut();
        }else{
            sizeDefault();
        }

    })
});