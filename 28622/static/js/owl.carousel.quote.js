// banner
$(document).ready(function() {
$("#owl-banner").owlCarousel({
autoPlay : 3000,
stopOnHover : true,
navigation : true,
pagination : true,
paginationNumbers : true,
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true,
autoHeight : true,
transitionStyle : "fadeUp",
//Mouse Events
dragBeforeAnimFinish : false,
mouseDrag : false,
touchDrag : true
});
});
//youshi
$(document).ready(function() {
$("#owl-youshi").owlCarousel({
items : 3,
itemsDesktop : [1200,3],
itemsDesktopSmall : [1024,2],
itemsTablet : [768,2],
itemsTabletSmall : [414,1],
itemsMobile : [319,1],
navigation : true,
pagination : true,
paginationNumbers : true,
mouseDrag : false,
touchDrag : true
});
});
//team
$(document).ready(function() {
$("#owl-team").owlCarousel({
items : 6,
itemsDesktop : [1200,6],
itemsDesktopSmall : [1024,5],
itemsTablet : [768,4],
itemsTabletSmall : [414,2],
itemsMobile : [319,1],
navigation : true,
pagination : false,
//paginationNumbers : true,
mouseDrag : false,
touchDrag : true
});
});
//home hover
$(function(){$("#nav li:first-child").addClass("hover");})