var Main = {
  jsTabbing: function() {
    $('.js-tab .tab__nav_link').on('click', function(){
      if (!$(this).hasClass('active')) {
        var target = $(this).attr('data-tab');
        $(this).siblings('li').removeClass('active');
        $(this).parents('.js-tab').find('.tab__content').removeClass('active');

        $(this).addClass('active');
        $(target).addClass('active');
      }
    })
  },

  jsAccordion: function() {
    $('.js-accordion .accordion__item__title').on('click', function() {
      var _parent = $(this).parents('.accordion__item');
      
      if (_parent.hasClass('active')) {
        _parent.removeClass('active').find('.accordion__item__body').slideUp();
      } else {
        $(this).parents('.js-accordion').find('.accordion__item').removeClass('active').find('.accordion__item__body').slideUp();
        _parent.addClass('active').find('.accordion__item__body').slideDown();
      }
        
    });

  },

  init: function() {
    Main.jsTabbing();
    Main.jsAccordion();
  }
}

Main.init();