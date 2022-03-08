var MobileMenu = {
  handleLoad: function() {
    // $(window).on('load', function() {
    //   $('body').removeClass('hold-transition');
    // })
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

var BannerCarousel = {
  runCarousel: function() {
    // Slider for banner
    if ($('.banner__item').length > 1) {
      $('.js-banner-slider').owlCarousel({
        items: 1,
        loop: false,
        rewind: true,
        autoplay: true,
        nav: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 5000,
      });
    } else {
      $('.js-banner-slider').addClass('single-item');
    }
  },

  init: function() {
    BannerCarousel.runCarousel();
  }
}

BannerCarousel.init();

var FeaturesCarousel = {
  handleRunSlider: function() {
    // Slider for produk deskripsi
    if ($(window).width() > 767.98) {
      $('.js-features-slider').owlCarousel({
        nav: true,
        dots: true,
        smartSpeed: 1500,
        autoWidth:true,
      });
    }
  },

  init: function() {
    FeaturesCarousel.handleRunSlider();
  }
}

FeaturesCarousel.init();