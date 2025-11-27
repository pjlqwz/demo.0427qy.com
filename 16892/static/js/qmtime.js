$(function(){
    var now = new Date();
    var month = now.getMonth();
    console.log(month);
    var date = now.getDate();
    console.log(date);
    if(month==3&&date==4){
        $("html").css(
            "filter","grayscale(100%)"
        );
    }
})