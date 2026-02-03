function SearchGo() {
    if (document.getElementById("keys").value == "") {
        alert("请输入您要搜索内容");
        document.getElementById("keys").focus();
        return false;
    }
    else {
        var words = document.getElementById("keys").value;
        window.location.href = "/search.aspx?&keys=" + words;
    }
}
function SearchGo1() {
    if (document.getElementById("keys1").value == "") {
        alert("请输入您要搜索内容");
        document.getElementById("keys1").focus();
        return false;
    }
    else {
        var words = document.getElementById("keys1").value;
        window.location.href = "/search.aspx?&keys=" + words;
    }
}
$(function () {
    //点击显示隐藏搜索框
    $("body").on("click", ".search_icon",function (g) {
      if($("#search1").is(":visible")==false){
     $("#search1").show();
       }else{
          $("#search1").hide();
       }
        g.preventDefault();
    });
    
      $("body").on("click",".navbar-toggle",function (g) {
     $('.navbar-collapse.collapse').slideToggle();
        g.preventDefault();
    });
  //搜索职位
  $("#searchHrBtn").on("click",function (g) {
 window.location.href = "/hr"+$("#hrtype").val()+".html?ads=" + $("#ads").val()+"&keys="+$("#hrtitle").val();
    });


});