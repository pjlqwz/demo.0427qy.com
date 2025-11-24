// 主要我是本人封装的常用函数库，转载请注明来自酹江月

// 获取ID
function $id(id) {return document.getElementById(id);}


// reSize(); // 页面一加载先调用函数 一次
// window.onresize = reSize; // 不带括号，只要屏幕触发，就调用 reSzie 函数
// function reSize() {
//     var clientWidth = client().width;
//     if (clientWidth > 960) {

//     } else if (clientWidth > 640) {

//     } else {

//     }
// }

 

//返回顶部
function gotop() {
    var goTop = $id("gotop");
    goTop.style.cursor = 'pointer';
    goTop.style.position='fixed';
    goTop.style.right='10px';
    goTop.style.bottom='50px';
    goTop.style.width='48px';
    goTop.style.height='48px';
    goTop.style.opacity='0.6';
    goTop.style.display = 'none';
    goTop.style.zIndex='999';

    goTop.onmouseover=function(){
        goTop.style.opacity='1';
    }
    goTop.onmouseout=function(){
        goTop.style.opacity='0.6';
    }

    window.onscroll = function() {
        scroll().top > 0 ? open1(goTop) : close1(goTop); // 如果大于0 就显示 否则隐藏
        leader = scroll().top; // 把 卷去的头部 给  起始位置
        // console.log(scroll().top);
    }
    var leader = 0,
        target = 0,
        timer = null;
    // leader 起始位置  target  目标位置
    goTop.onclick = function() {
        target = 0; //  点击完毕之后 奔向0 去的  不写也可以
        timer = setInterval(function() {
            leader = leader + (target - leader) / 10;
            window.scrollTo(0, leader); // 去往页面中的某个位置
            if (leader == target) {
                clearInterval(timer);
            }
        }, 20);
    }
}


//获取屏幕可视宽度高度，
function client() {
    if (window.innerWidth != null) // ie9 +  最新浏览器
    {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") // 标准浏览器
    {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return { // 怪异浏览器
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}



//距离顶部的距离 距离左侧的距离
function scroll() {
    if (window.pageYOffset != null) //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode == "CSS1Compat") // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

// 三级联动，slt_1 表示第一个，s1_val1表示第一个名称
function sanji_slt() {
    // console.log(slt_data);
    var slt_1 = $id("slt_1");
    var slt_2 = $id("slt_2");
    var slt_3 = $id("slt_3");
    var s1_val = "请选择类目";
    var s2_val = "请选择科目";
    var s3_val = "请选择课程";
    slt_1.options[0] = new Option(s1_val, "-1");
    slt_2.options[0] = new Option(s2_val, "-1");
    slt_3.options[0] = new Option(s3_val, "-1");
    //创建完毕
    //循环第一步
    for (var i = 0; i < slt_data.length; i++) {
        slt_1.options[slt_1.length] = new Option(slt_data[i].slt_11, i);
        slt_1.onchange = function() {
            slt_2.options.length = 0;
            slt_2.options[slt_2.length] = new Option(s2_val, "-1");
            slt_3.options.length = 0;
            slt_3.options[slt_3.length] = new Option(s3_val, "-1");
            for (var j = 0; j < slt_data[slt_1.selectedIndex - 1].slt_12.length; j++) {
                slt_2.options[slt_2.length] = new Option(slt_data[slt_1.selectedIndex - 1].slt_12[j].slt_21, j);
                slt_2.onchange = function() {
                    slt_3.options.length = 0;
                    slt_3.options[slt_3.length] = new Option(s3_val, "-1");
                    for (var k = 0; k < slt_data[slt_1.selectedIndex - 1].slt_12[slt_2.selectedIndex - 1].slt_31.length; k++) {
                        slt_3.options[slt_3.length] = new Option(slt_data[slt_1.selectedIndex - 1].slt_12[slt_2.selectedIndex - 1].slt_31[k], k);

                    }
                }
            }
        }
    }
}

//关闭 obj:对象
//1为通过直接控制display  2为添加类（block）  3为添加类（flex）  
function close1(obj) {obj.style.display = "none";}
function close2(obj) {repC(obj, "open_b");repC(obj, "close");addC(obj, "close");}
function close3(obj) {repC(obj, "open_f");repC(obj, "close");addC(obj, "close");}
//显示 obj：对象
function open1(obj) {obj.style.display = "block";}
function open4(obj) {obj.style.display = "flex";}
function open2(obj) {repC(obj, "close");repC(obj, "open_b");addC(obj, "open_b");}
function open3(obj) {repC(obj, "close");repC(obj, "open_f");addC(obj, "open_f");}

//旋转 obj:对象  angle：角度
function rotating(obj, angle) {obj.style.transform = "rotate(" + angle + "deg)";}

//添加类  obj：对象  Class：类名
function addC(obj, Class) {obj.setAttribute("class", obj.getAttribute("class") + " " + Class);}
//替换类 obj：对象  Class1：原类名   Class2：新类名，为空时则删除类
function repC(obj, Class1, Class2) {obj.setAttribute("class", obj.getAttribute("class").replace(Class1, Class2||''));}
//左右滑动动画  ,target：距离   time:时间
function animate1(obj,target,time){
     if(typeof time != "number"){var time = time || 1000;}
    console.log(time);
    time = time*5/target;
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 5 : -5;  // 用来判断 应该 +  还是 -
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
        obj.style.marginLeft = obj.offsetLeft + speed + "px";
        if(Math.abs(result)<=10)  // 如果差值不小于 5 说明到位置了
        {
            clearInterval(obj.timer);
            obj.style.marginLeft = target + "px";  // 有5像素差距   我们直接跳转目标位置
        }
        // console.log(obj.offsetLeft);
    },time)
}