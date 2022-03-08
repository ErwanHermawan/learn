var Dropdown = {
  handleClick: function() {
    $('body').on('click', function() {
      $('.js-dropdown').removeClass('show');
    });

    $('.dropdown').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-dropdown .btn').on('click', function() {
      var _parent = $(this).parents('.js-dropdown');
      if (_parent.hasClass('show')) {
        _parent.removeClass('show');
      } else {
        $('.js-dropdown').removeClass('show');
        _parent.addClass('show');
      }
    });
  },

  handleKeyup: function() {
    $('body').on('keyup', function(e) {
      if ((e.which === 27) && $('.js-dropdown').hasClass('show')) {
        $('.js-dropdown').removeClass('show');
      }
    });
  },

  init: function() {
    Dropdown.handleClick();
    Dropdown.handleKeyup();
  }
}

Dropdown.init();