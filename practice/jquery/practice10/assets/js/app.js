var MobileMenu = {
  handleLoad: function() {
    $('body').on('load', function() {
      $(this).removeClass('hold-transtion');
    });
  },

  handleClick: function() {
    $('.js-mobile-menu ').on('click', function() {
      var _parrent = $(this).parents('.header');
      if (_parrent.hasClass('show-menu')) {
        _parrent.removeClass('show-menu');
        $(this).parents('body').removeClass('remove-scroll');
      } else {
        _parrent.addClass('show-menu');
        $(this).parents('body').addClass('remove-scroll');
      }
    });
  },

  init: function() {
    MobileMenu.handleClick();
    MobileMenu.handleLoad();
  }
}

MobileMenu.init();