//All your JS code goes here
jQuery(function() {
    var header = $(".header");
  
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 130) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});