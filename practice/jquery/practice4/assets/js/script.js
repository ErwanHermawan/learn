var dataTeam = [
                {
                  photo: '1.jpeg',
                  name: 'Alexander Smith',
                  position: 'UI Developer',
                  description: 'Alexander Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '2.jpeg',
                  name: 'Jhon Smith',
                  position: 'UX Developer',
                  description: 'Jhon Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '3.jpeg',
                  name: 'Adam Smith',
                  position: 'Front End Developer',
                  description: 'Adam Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '4.jpg',
                  name: 'Asep Smith',
                  position: 'UI Developer',
                  description: 'Asep Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '5.jpg',
                  name: 'Lisa Alexander',
                  position: 'Back End Developer',
                  description: 'Lisa Alexander Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '6.jpg',
                  name: 'Steve Jhon',
                  position: 'UI Developer',
                  description: 'Steve Jhon Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '7.jpg',
                  name: 'Chika Amanda',
                  position: 'UX Developer',
                  description: 'Chika Amanda Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: '8.jpg',
                  name: 'Peter Parkour',
                  position: 'UI Developer',
                  description: 'Peter Parkour Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
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
      content +=  '<div class="col-4">' +
                    '<div class="team-item js-popup" data-name="' + v.name +'" data-photo="' + v.photo +'" data-position="' + v.position +'" data-desc="' + v.description +'" data-facebook="' + v.socialMedia.facebook +' "data-instagram="' + v.socialMedia.instagram +'" data-twitter="' + v.socialMedia.twitter +'">' +
                      '<div class="team-img">' +
                        '<img src="assets/img/' + v.photo + '" alt="' + v.name + '">' +
                      '</div>' +
                      '<div class="team-text">' +
                        '<h3 class="team-name">' + v.name + '</h3>' +
                        '<p class="team-position">' + v.position + '</p>' +
                      '</div>' +
                    '</div>' +
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
