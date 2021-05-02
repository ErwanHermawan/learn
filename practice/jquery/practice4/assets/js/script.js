var dataTeam = [
                {
                  photo: '1.png',
                  name: 'Nikmah Tiana',
                  position: 'UI Developer',
                  description: 'Nikmah Tiana Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  sosmed: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '2.png',
                  name: 'Tiara Fauziah',
                  position: 'UX Developer',
                  description: 'Tiara Fauziah Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  sosmed: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '3.png',
                  name: 'Ferina',
                  position: 'Front End Developer',
                  description: 'Ferina Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'hijab.png',
                  name: 'Camelia',
                  position: 'UI Developer',
                  description: 'Camelia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  sosmed: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
              ];
var Main = {

  setData: function() {
    var content = '';
    dataTeam.forEach(function(v, i) {
      content +=  '<div class="col-4">'+ 
                  '<div class="team__item js-popup" data-name="'+ v.name +'" data-photo="'+ v.photo +'" data-position="'+ v.position +'" > '+
                    '<div class="team__item_img">'+
                      '<img src="../../../images/uhkti/'+ v.photo +'" alt="'+ v.name +'" /> '+
                    '</div>'+
                    '<div class="team__item_txt">'+
                      '<h3 class="team__item_txt_name">'+ v.name +'</h3>'+
                      '<p class="team__item_txt_position">'+ v.position +'</p>'+
                    '</div>'+
                  '</div>'+
                '</div>';
    });
    $('.js-list').html(content);
  }, 

  jsOpenModal: function() {
    $(document).on('click', '.js-popup', function() {
      const url = '../../../images/uhkti/';
      var photo = $(this).data('photo'),
      name = $(this).data('name'),
      position = $(this).data('position');

      $('.popup__img').find('img').attr('src', url+photo);
      $('.popup__txt__name').text(name);
      $('.popup__txt__position').text(position);
      $('.js-popup-modal').fadeIn(300);
    });
  },

  jsCloseModal: function() {
    $(document).on('click', '.js-close', function() {
      $('.js-popup-modal').fadeOut(300);
    });

    $(document).on('click', function (e) {
      if ($(e.target).is('.popup__box')) {
        $('.js-popup-modal').fadeOut(300);
      }
    });

    $(document).on('keyup', function(e) {
      if (e.which === 27) {
         $('.js-popup-modal').fadeOut(300);
      }
    });
  },

  init: function() {
    Main.setData();
    Main.jsOpenModal();
    Main.jsCloseModal();
  }
}

Main.init();
