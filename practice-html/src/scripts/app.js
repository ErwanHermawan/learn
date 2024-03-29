// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- components
import {
  WinScroll,
  WindowResize,
  Header,
  Footer,
  HeroBanner,
  Testimony,
  Card
} from 'components';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  }

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();

  }

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();
      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();
      // --- Project
      WindowResize.init();
      WinScroll.init();
      Header.init();
      Footer.init();
      HeroBanner.init();
      Testimony.init();
      Card.init();
    })(jQuery);
  }

  // --- load
  const load = () => {
    (($) => {
      $(window).on("load", () => {

      });
    })(jQuery);
  }

  // --- init
  const init = () => {
    load();
    ready();
  }

  // --- return
  return {
    init
  }

})();

// ---  run main js
App.init();
