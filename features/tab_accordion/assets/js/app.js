var Tab = {
  handleClick: function() {
    $('.js-tab .tab__item').on('click', function() {
      if (!$(this).hasClass('active')) {
        var _target = $(this).attr('data-target');
        $(this).siblings().removeClass('active');
        $(this).parents('.js-tab').find('.tab__pane').removeClass('active');

        $(this).addClass('active');
        $('[data-pane="'+ _target +'"]').addClass('active');
      }
    });
  },

  init: function() {
    Tab.handleClick();
  }
}

Tab.init();


var Accordion = {
  handleClick: function() {
    $('body').on('click', '.js-accordion .accordion__title', function() {
      var _parrent = $(this).parents('.accordion__item');
      if (_parrent.hasClass('show')) {
        _parrent.removeClass('show').find('.accordion__body').slideUp();
      } else {
        $(this).parents('.js-accordion').find('.accordion__item').removeClass('show').find('.accordion__body').slideUp();
        _parrent.addClass('show').find('.accordion__body').slideDown();
      }
    });
  },

  init() {
    Accordion.handleClick();
  }
}

Accordion.init();