(function ($) {  

  $(document).ready(function() {  
      $('body').niceScroll();
  });

  $('.nav-menu-btn').click(function() {
    $(this).toggleClass('active');
    $('.nav-menu-list').toggleClass('active');
  });

})(jQuery);