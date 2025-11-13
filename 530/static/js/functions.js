//缩放图片
function resizeImage( source_image , max_width , max_height){ 
	var MAX_WIDTH  = 100; 
	var MAX_HEIGHT  = 100; 
    var image = new Image(); 
    image.src = source_image.src; 
    if (!max_width || parseInt(max_width) <= 0){ 
        max_width = MAX_WIDTH; 
    } 
    if (!max_height || parseInt(max_height) <= 0){ 
        max_height = MAX_HEIGHT; 
    } 
    if(image.width > 0 && image.height > 0 ){ 
        var image_rate = 1; 
        if( (max_width / image.width) < (max_height / image.height)){ 
            image_rate = max_width / image.width ; 
        }else{ 
            image_rate = max_height / image.height ; 
        } 
        if ( image_rate <= 1){ 
            source_image.width  = image.width * image_rate; 
            source_image.height = image.height * image_rate; 
        } 
    } 
}


$( function() {
	$(".PicAuto").each( function() {
		var BoxWidth = $(this).attr("width"),BoxHeight = $(this).attr("height");
		var img = new Image(),_this = $(this);
		img.src = $(this).attr("src");
		if ( img.complete ) {
			var RealWidth = img.width,RealHeight = img.height,Padding = 0;
			if( RealWidth<BoxWidth && RealHeight<BoxHeight){
					PaddingLeft = parseInt( ( BoxWidth - RealWidth ) / 2 );
					PaddingTop = parseInt( ( BoxHeight - RealHeight ) / 2 );
					_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",PaddingTop + "px " + PaddingLeft + "px");			
			
			}else{
				if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
					RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
					RealWidth = parseInt( BoxWidth );
					Padding = parseInt( ( BoxHeight - RealHeight ) / 2 );
					_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",Padding + "px 0");
				}
				else {
					RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
					RealHeight = parseInt( BoxHeight );
					Padding = parseInt( ( BoxWidth - RealWidth ) / 2 );
					_this.attr("width",RealWidth).attr("height",RealHeight).css("padding","0 " + Padding + "px");
				}
			}
		}
		img.onload = function() {
			var RealWidth = img.width,RealHeight = img.height,Padding = 0;

			if( RealWidth<BoxWidth && RealHeight<BoxHeight){
					PaddingLeft = parseInt( ( BoxWidth - RealWidth ) / 2 );
					PaddingTop = parseInt( ( BoxHeight - RealHeight ) / 2 );
					_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",PaddingTop + "px " + PaddingLeft + "px");			
			
			}else{

				if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
					RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
					RealWidth = parseInt( BoxWidth );
					Padding = parseInt( ( BoxHeight - RealHeight ) / 2 );
					_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",Padding + "px 0");
				}
				else {
					RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
					RealHeight = parseInt( BoxHeight );
					Padding = parseInt( ( BoxWidth - RealWidth ) / 2 );
					_this.attr("width",RealWidth).attr("height",RealHeight).css("padding","0 " + Padding + "px");
				}
			}
			return;
		};
	} );
});