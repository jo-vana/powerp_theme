//Fix header on scroll-desktop
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
// Back to top button
var btn = jQuery('#bck-tt-button');

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, '300');
});