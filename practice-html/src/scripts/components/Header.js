/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- Header
const Header = (() => {

  // --- windowTemp
  let _windowTemp = $(window).width();

  // --- handleNavMenu
  const handleNavMenu = () => {
    $('.js-mobile-menu').on('click', (e) => {
      if ($('body').hasClass('show-nav')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
      } else {
        Scrolllable.disable();
        $('body').addClass('show-nav');
      }
    });
  }

  // --- handleCheckClass
  const handleCheckClass = () => {
    if (_windowTemp >= 992) {
      if ($('body').hasClass('show-nav')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
      }
    }
  }

  // --- init
  const init = () => {
    handleNavMenu();
  }

  // --- return
  return {
    init,
    checkClass: handleCheckClass
  }

})();

export default Header;
