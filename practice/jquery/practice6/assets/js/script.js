var Main = {
  jsTabbing: function() {
    $('.js-tab .tab__nav_link').on('click', function(){
      var tab_id = $(this).attr('data-tab');
      $(this).siblings('li').removeClass('active');
      $(this).parents('.js-tab').find('.tab__content').removeClass('active');

      $(this).addClass('active');
      $('#'+tab_id).addClass('active');
    })
  },

  jsAccordion: function() {
    $('body').on('click', '.js-accordion .accordion__item__title', function() {

      if ($(this).parents('.accordion__item').hasClass('active')) {
        $(this).parents('.accordion__item').removeClass('active').find('.accordion__item__body').slideUp();
      } else {
        $('.accordion__item').removeClass('active').find('.accordion__item__body').slideUp();
        $(this).parents('.accordion__item').addClass('active').find('.accordion__item__body').slideDown();
      }
        
    });

  },

  init: function() {
    Main.jsTabbing();
    Main.jsAccordion();
  }
}

Main.init();