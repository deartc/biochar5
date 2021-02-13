
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww  600) {
      $('.test').removeClass('active');
    } else if (ww = 601) {
      $('.test').addClass('active');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
   when the page first loads
  alterClass();
});