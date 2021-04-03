// var WHITESPACE = 

var jsList = {
  jsInputAdd: function() {
    $('.js-input').on('keypress', function(e) {
      if (e.keyCode === 13) {
        var _val = $(this).val(),
        _item = '<div class="alert">' + _val +
                  '<buton type="button" class="btn js-remove">Hapus</buton>' +
                '</div>';
        $('.js-list').prepend(_item);
        $(this).val('');
      }
    });
  },

  jsRemove: function() {
    $('body').on('click', '.js-remove', function(e) {
      $(this).parent().remove();
    });
  },

  init: function() {
    this.jsInputAdd();
    this.jsRemove();
  }
}

jsList.init();