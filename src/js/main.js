//Fix header on scroll-desktop
jQuery(function() {
    var header = $(".header");
  
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 50) {
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
// Partners section-slider
jQuery('.owl-carousel').owlCarousel({
  margin:30,
  nav:false,
  items: 3,
  loop:true,
  autoPlay:true,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1200:{
          items:2
      }
  }
})