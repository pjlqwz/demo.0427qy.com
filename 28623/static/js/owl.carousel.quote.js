// banner
$(document).ready(function() {
$('#owl-banner').owlCarousel({
items: 1,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause: true,
autoHeight: true,
loop: true,
nav: true,
animateOut: 'fadeInDown',
animateIn: 'fadeOutDown',
});
});
// kehu
$(document).ready(function() {
$('#owl-kehu').owlCarousel({
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
dots:false,
responsive:{
319:{ items:2},
375:{items:3},
768:{items:4},
1024:{ items:5},
1200:{items:6}
}
});
});
// koubei
$(document).ready(function() {
$('#owl-koubei').owlCarousel({
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
dots:false,
responsive:{
319:{ items:1},
375:{items:1},
768:{items:2},
1024:{ items:3},
1200:{items:3}
}
});
});