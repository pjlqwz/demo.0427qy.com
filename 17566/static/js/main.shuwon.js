if(location.origin === undefined){
	location.origin = location.protocol + '//' + location.hostname 
}

var shuwon = {
	percent: 0,
	timers: "",
	init: function (e) {

		// // 输入框提示
		// $("body").append('<div class="toast"><span></span></div>'); 
		// // 返回到顶部
		// $("body").append('<div class="backTop animate"></div>');
		// // 加载动画
		$("body").append('<div id="loading"><div id="loading-center"><div id="loading-center-absolute"><div class="object" id="object_one"></div><div class="object" id="object_two"></div><div class="object" id="object_three"></div><div class="object" id="object_four"></div></div></div></div>');
		this.common()
	},

	/**
	 * 页面加载完毕
	 */
	loaded: function () {
		$('#loading').addClass('active');
		setTimeout(function () {
			shuwon.navigation()
		}, 1000)
	},
	index: function () {

	},
	common: function () {
		// $('.header').load('header.html')
		// $('.footer').load('footer.html')
		$('.backup').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500)
		})
		$('.box.btn').click(function () {
			$(this).toggleClass('active')
		})


		$('.box.seo .list .item').eq(0).addClass('active');

		$('.box.seo .type .item').click(function(){
			$(this).addClass('active').siblings().removeClass('active')
			$('.box.seo .list .item').eq($(this).index()).addClass('active').siblings().removeClass('active')
		})


		$('.menu-btn').click(function(){
			$('body').toggleClass('open')
		})

		$('.slider .qq').click(function(){
			var this_qq = $(this).attr('data-qq');
			location.href = "tencent://message/?uin="+ this_qq +"&Menu=yes"
		})

		$('.slider .phone_').click(function(){
			var n = $(this).attr('data-num');
			location.href = 'tel:+86' + n;
		})
	},

	getOffset: function () {
		if ($(window).width() > 1200) {
			return ($(window).width() - 1200) / 2
		} else {
			return 0;
		}
	},
	/**
	 * 视频弹出层
	 */
	video: function () {
		$(".video_list ul li").click(function () {
			$(".lightBox").addClass("active");
			$(".lightBox video").attr("src", $(this).attr("data-url"));
		})
		$(".close_video").click(function () {
			$(".lightBox").removeClass("active");
			$(".lightBox video").attr("src", "");
		})
	},
	/**
	 * 加入我们弹出层
	 */
	join: function () {
		$(".join_list ul li").click(function () {
			$(".lightBox").addClass("active");
		})
		$(".joinTipBoxTitle .close").click(function () {
			$(".lightBox").removeClass("active");
		})
	},
	/*sj:function(){
		$('input[name="phone"]').on('input',function(){
			if($(this).val().length > 11){
				$(this).val($(this).val().substr(0,11))
			}else{
				$(this).val($(this).val().replace(/[^0-9]/g,''))
			}
		})
	
   $('.form.common .text .btn').click(function() {
        var btn = $(this);
        var form = $('.form.common .text .btn').eq(0).prev(),
        name = form.find('input[name="name"]').val(),
        phone = form.find('input[name="phone"]').val();
        if(name == ''){
            SW._toast('请填写姓名！','error');
            return;
        }

        if(phone == ""){
            SW._toast('请填写手机号码','error');
            return;
        }

        if(!shuwon.regPhone(phone)){
            SW._toast('手机号码格式不正确!','error');
            return;
        }
        $.ajax({
            url:"/plus/diy.php",
            data:{name:name,phone:phone,action:'post',diyid:'2',do:'2',dede_fields:'name,text;phone,text',dede_fieldshash:'fde07a4de034c5c0ad2f6ca6af5d7bca'},
            dataType: 'json',
            type:'post',
			dataType: 'json',
            async: false,
            success:function(res) {
                if(res.code == 1) {
                    SW._toast('提交成功','success')
                    btn.attr('disabled','')
                } else {
                    SW._toast('提交失败','error')
                }
            }
        })
    })
	},*/
	/**
	 * 返回顶部
	 */
	backTop: function () {
		var offset = 300,
			offset_opacity = 1200,
			scroll_top_duration = 500,
			$back_to_top = $('.backTop');
		$(window).scroll(function () {
			($(this).scrollTop() > offset) ? $back_to_top.addClass('active'): $back_to_top.removeClass('active');
			if ($(this).scrollTop() > offset_opacity) {
				$back_to_top.addClass('active')
			}
		});
		$back_to_top.on('click', function (event) {
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0
			}, scroll_top_duration)
		})
	},
	/**
	 * 随机返回区间值
	 * min:最小值
	 * max:最大值
	 */
	rand: function (min, max) {
		return Math.random() * (max - min) + min;
	},
	/**
	 * 验证手机号码
	 * @param {obj}     传入的手机号码
	 * @return          正确返回true 错误返回false
	 */
	/*regPhone: function (obj) {
		reg = /^(13|15|17|18|14|19)[0-9]{9}$/;
		return reg.test(obj);
	},*/

	/**
	 * 判断验证码是否符合要求
	 */
	regCode: function (obj) {
		if (obj.length == 0 || obj.length != 6) {
			return true;
		}
		return false;
	},

	/**
	 * 只能输入中英文和数字
	 */
	regName: function (obj) {
		var reg = /^[\u4e00-\u9fa5]{2,20}$/;
		return reg.test(obj);
	},

	/**
	 * 姓名 || 只能输入中英文
	 * @param {obj}     传入的字符
	 * @return          正确返回true 错误返回false
	 */
	regName: function (obj) {
		reg = /^[\u4E00-\u9FA5A-Za-z]+$/;;
		return reg.test(obj);
	},

	/**
	 * 判断身份证号码是否符合要求
	 */
	regID: function (obj) {
		reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return reg.test(obj);
	},
	/**
	 * 提示信息
	 * @msg      	       提示的信息
	 * @success         true 成功 | false 失败
	 */
	toast: function (msg, sucess) {
		$(".toast").addClass("active").find("span").html(msg);
		if (!sucess) {
			$(".toast").addClass("warn");
		} else {
			$(".toast").removeClass("warn");
		}
		setTimeout(function () {
			$(".toast").removeClass("active")
		}, 1500)
	},
	/**
	 * 获取地址栏 
	 * @name         获取传入的参数
	 */
	getUrlParam: function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		return r ? decodeURIComponent(r[2]) : null;
	},
	/**
	 * 倒计时
	 */
	countDownTime: function () {
		isClick = false;
		$('.yzmBtn').addClass("enable");
		$('.yzmBtn').addClass("active").html('60秒后重新获取')
		var waitTime, currTime = 59;
		var interval = setInterval(function () {
			shuwon.timeChange(currTime);
			currTime--;
			if (currTime < 0) {
				clearInterval(interval);
				currTime = waitTime;
			}
		}, 1000);
	},
	/**
	 * 时间戳转时间
	 * 
	 * @param {any} timer 
	 */
	Timer: function (timer) {
		var timeBpx = {
			Month: 0, //开始-月份
			Date: 0, //开始-号数
			Hours: 0, //开始-小时
			Minutes: 0, //开始-分钟
			day: 0, //剩余-天数
			hour: 0, //剩余-小时
			minute: 0, //剩余-分钟
			second: 0 //剩余-秒
		}
		var current = Math.floor(new Date().getTime() / 1000),
			TimeD = 0,
			time = new Date(timer * 1000);
		var dd_ = 0,
			hh_ = 0,
			mm_ = 0,
			ss_ = 0;
		TimeD = timer - current;
		dd_ = Math.floor(TimeD / (60 * 60 * 24)); //计算剩余的天数
		hh_ = Math.floor(TimeD / (60 * 60)) - (dd_ * 24) //计算剩余的小时数
		mm_ = Math.floor(TimeD / 60) - (dd_ * 24 * 60) - (hh_ * 60) //计算剩余的分钟数
		ss_ = Math.floor(TimeD) - (dd_ * 24 * 60 * 60) - (hh_ * 60 * 60) - (mm_ * 60) //计算剩余的秒数
		if (hh_ <= 9) hh_ = '0' + hh_;
		if (mm_ <= 9) mm_ = '0' + mm_;
		if (ss_ <= 9) ss_ = '0' + ss_;
		timeBpx.day = dd_ //天
		timeBpx.hour = hh_ //时
		timeBpx.minute = mm_ //分
		timeBpx.second = ss_ //秒
		timeBpx.Month = time.getMonth() + 1
		timeBpx.Date = time.getDate()
		timeBpx.Date = time.getHours()
		timeBpx.Date = time.getMinutes()

		return timeBpx
	},
	/**
	 * 获取数据
	 * @url      	       传入的数据接口
	 * @para      	       传入的参数
	 */
	getDataForApi: function (url, para, callback) {
		$.ajax({
			type: "post",
			data: para,
			url: location.origin + url,
			dataType: 'json',
			success: function (data) {
				if (data.result) {
					callback(data)
				} else {
					shuwon.toast(data.msg);
				}
			},
			error: function (e) {
				shuwon.toast("数据加载错误", false)
			}
		})
	},
	fixedNav: function () {
		document.addEventListener('scroll', function () {
			var scroll_top = $(window).scrollTop();
			if (scroll_top > 150) {
				$('.header').addClass('active')
			} else {
				$('.header').removeClass('active')
			}
		}, false)
	},
	about: function () {
		$('.about-page .box3 .silck').slick({
			infinite: true,
			speed: 500,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			draggable: false,
			
		})
		$('.about-page .box3 .silck').on('afterChange', function (e, slick) {
			console.log(slick.$slides.eq(slick.currentSlide).attr('data-text'))
			slick.$slides.eq(slick.currentSlide).addClass('active').siblings().removeClass('active')
			// slick.refresh()
			$('.p-title').text(slick.$slides.eq(slick.currentSlide).attr('data-text'))
		})

		// $('.about-page .box3 .silck').on('init',function(e,slick){
		// 	$('.p-title').text(slick.slides.eq(slick.currentSlide).attr('data-text'))
		// })

		$('.about-page .box4 .silck').slick({
			infinite: false,
			speed: 500,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			draggable: false,
			responsive:[{
				breakpoint:769,
				settings:{
					slidesToShow: 3,
				}
			},
			{
				breakpoint:414,
				settings:{
					slidesToShow: 2,
				}
			}]
		})

		$('.about-page .box4 .item').click(function () {
			$('.about-page .box4 .large_ .img-box').get(0).style.backgroundImage = $(this).find('.img-box').get(0).style.backgroundImage
		})
	}
}
shuwon.init()
shuwon.fixedNav()



function _page(opts){
	function page(opts){
		this.opts = opts || {};
		this.active = parseInt(SW.getSearch('page')) || 1;
		this.pageSize = this.opts.pageSize || 6;
		this.total = parseInt(this.opts.total) || 0;
		this.pages =  Math.ceil(this.total / this.pageSize);
		this.virtual_page = this.active;
		this.init()
	}
	
	page.prototype.init = function(){
		this.render(this.count())
		this.Events()
	}
	
	page.prototype.count = function(active){
		var pages = this.pages,p = [],active = active || this.active;
		if(pages <= 5){
			for(var i = 1;i <= pages;i++){
				p.push({
					text:i,
					page:i,
					isActive:this.active == i
				})
			}
		}else{
			if(active >= 3){
				if(this.pages - active > 2){
					p.push({
						text:'...',
						page:'prev',
						isActive:false
					})
					for(var i = active - 2;i <= active + 2;i++){
						p.push({
							text:i,
							page:i,
							isActive:this.active == i
						})
					}
					p.push({
						text:'...',
						page:'next',
						isActive:false
					})
				}else{
					p.push({
						text:'...',
						page:'prev',
						isActive:false
					})
					for(var i = this.pages - 4;i <= this.pages;i++){
						p.push({
							text:i,
							page:i,
							isActive:this.active == i
						})
					}
				}
			}else{
				for(var i = 1;i <= 5;i++){
					p.push({
						text:i,
						page:i,
						isActive:this.active == i
					})
				}
				p.push({
					text:'...',
					page:'next',
					isActive:false
				})
			}
		}
		return p;
	}
	
	page.prototype.render = function(arr){
		var this_ = this
		document.getElementsByClassName('pages')[0].appendChild(this.creatTag(1,'首页',false))
		_.each(arr,function(v,i){
			var tag = this_.creatTag(v.page,v.text,v.isActive)
			document.getElementsByClassName('pages')[0].appendChild(tag)
		})
		
		document.getElementsByClassName('pages')[0].appendChild(this.creatTag(this.pages,'尾页',false))
		document.getElementsByClassName('pages')[0].appendChild(this.creatTag('total','总'+this.total+'条',false))
	}
	
	page.prototype.Events = function(){
		var self = this
		document.querySelector('.pages').addEventListener('click',function(event){
			// self.remove()
			var evtTarget = event.target || event.srcElement;
			if(evtTarget.tagName !== 'A'){
				evtTarget = evtTarget.parentElement
			}
		
			if(/next/.test(evtTarget.className)){
	
				if(self.virtual_page + 5 <= self.pages ){
					self.virtual_page+=5
				}else{
					self.virtual_page = self.pages
					
				}
				self.remove()
				self.render(self.count(self.virtual_page))
			}
	
			if(/prev/.test(evtTarget.className)){
				if(self.virtual_page - 5 > 0 ){
					self.virtual_page-=5
				}else{
					self.virtual_page = 1
				}
				self.remove()
				self.render(self.count(self.virtual_page))
			}
		},false)
		
	}
	
	page.prototype.remove = function(){
		var c = document.getElementsByClassName('pages')[0],childs = c.childNodes;
		for(var i = childs.length - 1; i >= 0; i--) { 
			c.removeChild(childs[i]); 
		  }
	}
	
	page.prototype.creatTag = function(page,text,isActive){
		var a = document.createElement('A'), p =document.createElement('P');
		if(!isNaN(parseInt(page))){
			a.className = 'page_item';
			a.href = location.origin + location.pathname + '?' + this.setSeach(page);
		}else{
			a.href = "javascript:void(0);"
			a.className = page;
		}
		if(isActive){
			$(a).addClass('active')

		}
		p.innerText = text;
		a.appendChild(p);
		return a;
	}

	page.prototype.setSeach = function(page){
		var search = location.search;
		if(search != ''){
			var arr = search.substr(1).split('&');
			if(!/(^|&|\?)page=([^&]*)(&|$)/.test(search)){
				arr.push('page=1');
			}
			_.each(arr,function(v,i){
				if(/(^|&)page=([^&]*)(&|$)/.test(v)){
					arr[i] = 'page=' + page
				}
			})
			return arr.join('&')
		}else{
			return 'page='+ page
		}
	}
	return new page(opts)
}