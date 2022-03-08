var Card = {
  setHeight: function() {
    var _height = 0;
    $('.card__item').each(function(i, el) {
      if ($(el).find('.card__box').outerHeight() > _height) {
        _height = $(el).find('.card__box').outerHeight();
      }
    });

    $('.card__item .card__box').height(_height);
  },


  init: function() {
    Card.setHeight();
  }
}

Card.init();