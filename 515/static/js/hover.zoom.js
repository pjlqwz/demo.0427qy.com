(function($){
    $.fn.extend({ 
        hoverZoom: function(settings) {
            var defaults = {
                overlay: true,
                overlayColor: '#2e9dbd',
                overlayOpacity: 0.5,
                zoom: 25,
                speed: 300
            };
            var settings = $.extend(defaults, settings);      
            return this.each(function() {
                var s = settings;
                var hz = $(this);
                var image = $('img', hz);
                //image.load(function(){ 
				$(function(){
                    if(s.overlay === true){
                        image.parent().append('<div class="zoomOverlay" />');
                        image.parent().find('.zoomOverlay').css({
                            opacity:0, 
                            display: 'block', 
                            //backgroundColor: s.overlayColor
                            "filter":"alpha(opacity=0) !important"
                        }); 
                    }
                    var width = image.width();
                    var height = image.height();
                    image.fadeIn(1000, function() {
                        image.parent().css('background-image', 'none');
                        hz.hover(function() {
                            $('img', this).stop().animate({
                                height: height + s.zoom,
                                width: width + s.zoom,
                                marginLeft: -(s.zoom),
                                marginTop: -(s.zoom)
                            }, s.speed);
                            if(s.overlay === true) {
                                image.parent().find('.zoomOverlay').stop().animate({
                                   // opacity: s.overlayOpacity
                                   opacity:1,
                                    "filter":"alpha(opacity=100) !important"      
                                }, s.speed,function(){
                                	$(this).hide();
                                	image.parent().append("<div class='rool'></div>");
                                });
                            }
                        },function(){
                            $('img', this).stop().animate({
                                height: height,
                                width:width,
                                marginLeft: 0,
                                marginTop: 0
                            }, s.speed);
                            if(s.overlay === true) {
                            	image.parent().find(".rool").remove();
                            	image.parent().find('.zoomOverlay').show();
                            	
                                image.parent().find('.zoomOverlay').stop().animate({
                                    opacity: 0,
                                    "filter":"alpha(opacity=0) !important"      
                                }, s.speed);
                            }
                        });
                    });				
				})	
                //});    
            });
        }
    });
})(jQuery);