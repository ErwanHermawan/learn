var WHITESPACE = /^ *$/;
var EMAIL = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var PHONE = /^[0-9]+$/;

var validationForm = {
  handleOnInput: function() {
    var elementSelector = [
                            {
                              id: 'name',
                              validation: {
                                required: true
                              }
                            },
                            {
                              id: 'email',
                              validation: {
                                required: true,
                                email: true
                              }
                            },
                            {
                              id: 'password',
                              validation: {
                                required: true,
                                mininum: true,
                                mininumChar: 4
                              }
                            },
                            {
                              id: 'phone',
                              validation: {
                                required: true,
                                phone: true
                              }
                            },
                          ],
    elementEvents = ['oninput', 'onblur'];

    // for each even
    elementEvents.forEach(function(ve, ie) {
      //for each element
      elementSelector.forEach(function(v, i) {
        document.getElementById(v.id)[ve] = function() {
          var _val = this.value,
          _target = this.getAttribute('data-target'),
          _alertElement = document.getElementById(_target),
          _errorMessage;

          _alertElement.classList.remove('is-error');
          _alertElement.style.display = 'none';

          //validate email
          if (v.validation.email) {
            if (!EMAIL.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-invalid-email');
            }
          }

          //validate minumum
          if (v.validation.mininum) {
            if (_val.length < v.validation.mininumChar) {
              _errorMessage = _alertElement.getAttribute('data-min');
            }
          }

          //validate telephone
          if (v.validation.phone) {
            if (!PHONE.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-invalid-phone');
            }
          }

          //validate null or space
          if (v.validation.required) {
            if (WHITESPACE.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-req');
            }
          }

          if (_errorMessage !== undefined) {
            _alertElement.innerText = _errorMessage;
            _alertElement.style.display = 'block';
            _alertElement.classList.add('is-error');
          }
        }
      });
    });

    document.getElementById('send').onclick = function(e) {
      elementSelector.forEach(function(v, i) {
        document.getElementById(v.id).onblur();
      });
      if (document.getElementsByClassName('is-error').length > 0) {
        e.preventDefault();
      }
    }

    var i,
    lengthNumber = document.getElementsByClassName('number-only').length;
    for (i = 0; i < lengthNumber; i++) {
      document.getElementsByClassName('number-only')[i].onkeypress = function(e) {
        if (!PHONE.test(e.key)) {
          e.preventDefault();
        }
      }
    }
  },
  init: function() {
    this.handleOnInput();
  }
}

validationForm.init();