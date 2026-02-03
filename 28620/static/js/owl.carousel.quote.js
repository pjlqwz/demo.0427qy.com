// banner
$(document).ready(function() {
$("#owl-banner").owlCarousel({
autoPlay : 3000,
stopOnHover : true,
navigation : true,
pagination : true,
paginationNumbers : true,
singleItem:true,
autoHeight : true,
transitionStyle : "goDown",
touchDrag : true
});});
//kehu
$(document).ready(function() {
$("#owl-kehu").owlCarousel({
autoPlay: 2000, 
items : 6,
itemsDesktop : [1200,6],
itemsDesktopSmall : [1024,5],
itemsTablet : [768,4],
itemsTabletSmall : [414,2],
itemsMobile : [319,1],
});});
// news
$(document).ready(function() {
$("#owl-news").owlCarousel({
autoPlay : 2000,
stopOnHover : true,
pagination : true,
paginationNumbers : true,
singleItem:true,
autoHeight : true,
transitionStyle : "fade",
touchDrag : true
});});
