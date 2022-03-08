var Modal = {
  handleClick: function() {
    $('.js-show-modal').on('click', function() {
      var _target = $(this).attr('data-target');
      console.log(_target);
    });
  },

  init: function() {
    Modal.handleClick();
  }
}

Modal.init();