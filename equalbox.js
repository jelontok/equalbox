/**
 * Plugin: equalbox
 * 
 * Version: 1.0
 * (c) Copyright 2011, Jose Erlino Lontok and Myhedspace.com
 * 
 * Description: A simple jQuery solution that will make sure that related and adjacent columns are of the same height. 
 *
 **/

(function( $ ){
    $.fn.equalbox = function() {
    
        var bigHeight =0;
        
        $(this).each(function () {
            $this = $(this);
            if ( $this.outerHeight() > bigHeight ) {
                bigHeight=$this.outerHeight();
            }
        });        
        
        return $(this).css("height", bigHeight);
    
    };
})( jQuery );