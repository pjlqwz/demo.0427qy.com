$(function() {
	$('#dowebok').easyFader();
});

//回到顶部
function goTop() {
	$('html,body').animate({
		'scrollTop': 0
	}, 600);
}
$('.side2 li').hover(function() {
			$(this).find('.weixin').stop().slideToggle();
		})

//手机头部
jQuery(document).ready(function($) {
	var m_menu = $('.m-nav');
	$('.m-trigger').click(function() {
		if(m_menu.is(':visible')) {
			m_menu.hide();
		} else {
			m_menu.show();
		}
		return false;
	});

});

$(document).ready(function(e) {
	$(".m-nav li ").click(function() {

		$(this).find("ol").slideToggle();
	});
});

(function() {
	window.scrollReveal = new scrollReveal({
		reset: true,
		move: '50px'
	});
})();

function setView2(id) {
	document.getElementById("ztab1").className = "";
	document.getElementById("ztab2").className = "";
	document.getElementById("ztab3").className = "";
	document.getElementById("ztab4").className = "";
	document.getElementById("ztab5").className = "";
	document.getElementById("ztab6").className = "";
	document.getElementById("ztab7").className = "";
	document.getElementById("ztab8").className = "";
	document.getElementById("ztab" + id).className = "ztab-on";
	document.getElementById("zmem1").style.display = "none";
	document.getElementById("zmem2").style.display = "none";
	document.getElementById("zmem3").style.display = "none";
	document.getElementById("zmem4").style.display = "none";
	document.getElementById("zmem5").style.display = "none";
	document.getElementById("zmem6").style.display = "none";
	document.getElementById("zmem7").style.display = "none";
	document.getElementById("zmem8").style.display = "none";
	document.getElementById("zmem" + id).style.display = "block";
}

function setView3(id) {
	document.getElementById("htab1").className = "";
	document.getElementById("htab2").className = "";
	document.getElementById("htab3").className = "";
	document.getElementById("htab4").className = "";
	document.getElementById("htab5").className = "";
	document.getElementById("htab6").className = "";
	document.getElementById("htab7").className = "";

	document.getElementById("htab" + id).className = "htab-on";
	document.getElementById("hmem1").style.display = "none";
	document.getElementById("hmem2").style.display = "none";
	document.getElementById("hmem3").style.display = "none";
	document.getElementById("hmem4").style.display = "none";
	document.getElementById("hmem5").style.display = "none";
	document.getElementById("hmem6").style.display = "none";
	document.getElementById("hmem7").style.display = "none";

	document.getElementById("hmem" + id).style.display = "block";
}



var form = $('#formgift');
				form.delegate('input', "change", function() {
					if($(this).val() !== "") {
						if(!$(this).hasClass("notempty")) $(this).addClass("notempty");
					} else {
						$(this).removeClass("notempty")
					}
				});
var form = $('#formgift');
				form.delegate('textarea', "change", function() {
					if($(this).val() !== "") {
						if(!$(this).hasClass("notempty")) $(this).addClass("notempty");
					} else {
						$(this).removeClass("notempty")
					}
				});