var MobileMenu = {
  handleLoad: function() {
    $(window).on('load', function() {
      $('body').removeClass('hold-transition');
    })
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

  handleKeyup: function() {
    $('body').on('keyup', function(e) {
      if (e.which === 27 && $('.header').hasClass('show-menu')) {
        $('.header').removeClass('show-menu');
        $('body').removeClass('rm-scroll');
      }
    });
  },

  init: function() {
    MobileMenu.handleLoad();
    MobileMenu.handleClick();
    MobileMenu.handleKeyup();
  }
}

MobileMenu.init();