window.onload=function()
{
	/* !!!！本js已被修改!!!！*/
	
	//使用说明。一级ul相对定位，二级ul绝对定位。二级ul的calss,block和none一定要。
	var oNav=document.getElementById("nav");
	var oUl=oNav.getElementsByTagName("ul")[0];
	var cont=parseInt((oNav.offsetWidth-oUl.children[0].offsetWidth)/2);//求导航的一半位置
	//var cont=parseInt((oUl.offsetWidth)/2);//求导航的一半位置
	// console.log(oNav.offsetWidth);
	// console.log(oUl.children[0].offsetWidth);
	// console.log(cont);
	var oErji=null;//二级ul
	//var sum=0;//存放二级ul的宽

	//循环一级li
	for(var i=0;i<oUl.children.length;i++)
	{
		//设置一级li等比宽度
		//oUl.children[i].style.width=oNav.offsetWidth/oUl.children.length+"px";
		//添加li鼠标滑入事件
		oUl.children[i].onmouseover=function()
		{
			//判断li底下是否有二级
		  	var sum=0;
		  	if (this.getElementsByTagName("ul")[0])
		  	{	
		  		// $(this).parents().find('.sub_white').stop(true,false).slideDown("fast");
		  		//$(this).parents().find('.nav_bg').stop(true,false).fadeIn("fast");

		  		//取出二级ul
				oErji=this.getElementsByTagName("ul")[0]; 
				oTwobox=this.getElementsByTagName("div")[0]; /* ==改下拉对象为.two_box==*/
				//给ul添加class
				//oErji.className="erji block";
				//获取每个二级li的宽度，计算出父级ul的宽度。
				var erli=oErji.children;
				//console.log(oErji.children[0].offsetWidth);
				for(var j=0; j<erli.length;j++)
				{
					sum+=erli[j].offsetWidth+1;
				};
				oErji.style.width =sum+"px";
				var twobox =sum+20; /* ==改下拉对象为.two_box 考虑背景倾斜将宽度增加20==*/
				oTwobox.style.width = twobox+"px"; /* ==改下拉对象为.two_box==*/
				// console.log(sum);
				// console.log(twobox); /* ==改下拉对象为.two_box==*/
				var liLeft=this.offsetLeft; //一级li的位置
				//console.log(liLeft);
				//判断一级li的位置，大于一半,在右侧
				if (liLeft>cont)
				{
					if ((twobox/2) >= (oNav.offsetWidth-liLeft-this.offsetWidth/2))
					{
						//二级位置的一半，比一级li到右侧的距离大
						oTwobox.style.right=0;
						//oErji.style.left=oNav.offsetWidth-sum/2+"px";
						console.log("a在右侧 二级位置的一半，比一级li到右侧的距离大 right=0");
					}else{
						oTwobox.style.left=liLeft-twobox/2+this.offsetWidth/2+"px";
						console.log("b在右侧 二级位置的一半，比一级li到右侧的距离小 在li下居中展示");
					};
				}else {
					//判断一级li的位置，大于一半,在左侧
					//二级ul的一半大于一级li的位置
					if ((twobox/2) >= (liLeft+this.offsetWidth/2))
					{
						oTwobox.style.left=0;
						console.log("c在左侧 二级位置的一半，比一级li到右侧的距离大 left=0");
					}else {
						oTwobox.style.left=liLeft-twobox/2+this.offsetWidth/2+"px";
						console.log("d在左侧 二级位置的一半，比一级li到右侧的距离小 在li下居中展示");
					};
				};
				//console.log(oErji.style.left);
				//console.log(oErji.style.right);
			};
		};
		oUl.children[i].onmouseout=function()
		{	
			// $(this).parents().find('.sub_white').stop(true,false).slideUp("fast");
			//$(this).parents().find('.nav_bg').stop(true,false).fadeOut("fast");
			//sum=0;
			// if (this.getElementsByTagName("ul")[0]) {
			// 	var oErji=this.getElementsByTagName("ul")[0];
			// 	oErji.className ="erji none";
			// };
		};
	};
};
