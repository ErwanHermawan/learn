var Dropdown = {
  handleKeyup: function() {
    $('body').on('keyup', function(e) {
      if (e.which === 27) {
        if ($('.js-dropdown').hasClass('show')) {
          $('.js-dropdown').removeClass('show');
        }
      }
    });
  },

  handleClick: function() {
    $('body').on('click', function() {
      if ($('.js-dropdown').hasClass('show')) {
        ('.js-dropdown').removeClass('show');
      }
    });

    $('.js-dropdown').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-dropdown .dropbtn').on('click' , function() {
      if ($(this).parents('.js-dropdown').hasClass('show')) {
        $(this).parents('.js-dropdown').removeClass('show');
      } else {
        $('.js-dropdown').removeClass('show');
        $(this).parents('.js-dropdown').addClass('show');
      }
    });
  },

  init: function() {
    Dropdown.handleKeyup();
    Dropdown.handleClick();
  }
}

Dropdown.init();
