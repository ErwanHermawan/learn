var dataTeam = [
                {
                  photo: '1.png',
                  name: 'Nikmah Tiana',
                  position: 'UI Developer',
                  description: 'Nikmah Tiana Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
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
                  socialMedia: {
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
                  socialMedia: {
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
                  '<div class="team__item">'+
                    '<div class="team__item_img">'+
                      '<img src="../../../images/uhkti/'+ v.photo +'" alt="'+ v.name +'" />'+
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
    $("body").on("click", ".js-popup", function() {
      var dataName = $('.js-popup').attr('data-name'),
      dataPosition = $('.js-popup').attr('data-position'),
      dataPhoto = $('.js-popup').attr('data-photo'),
      dataDesc = $('.js-popup').attr('data-desc'),
      dataFacebook = $('.js-popup').attr('data-facebook'),
      dataInstagram = $('.js-popup').attr('data-instagram'),
      dataTwitter = $('.js-popup').attr('data-twitter'),
      image = 'assets/img/';
      $('.popup-name').text(dataName);
      $('.popup-position').text(dataPosition);
      $('.popup-desc').text(dataDesc);
      $('.facebook').attr('href', dataFacebook);
      $('.Instagram').attr('href', dataInstagram);
      $('.twitter').attr('href', dataTwitter);
      $('.popup-img').find('img').attr('src', image.concat(dataPhoto));
      $('body').addClass('no-overflow');
      $(".js-popup-modal").fadeIn(300);
    });
  },

  jsCloseModal: function() {
    $("body").on("click", ".js-close", function() {
      $('body').removeClass('no-overflow');
      $(".js-popup-modal").fadeOut(300);
    });
    $('body').on("click", function (e) {
      if ($(e.target).is('.popup-box')) {
        $('body').removeClass('no-overflow');
        $(".js-popup-modal").fadeOut(300);
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
