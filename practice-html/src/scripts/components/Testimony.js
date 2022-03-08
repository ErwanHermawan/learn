/* ------------------------------------------------------------------------------
@name: Testimony
--------------------------------------------------------------------------------- */

const Testimony = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const selector =  $('.js-testimony');
    const itemLength = $('.js-testimony .testimony__item').length;
    const itemRun = 1;

    // destroy carousel
    selector.owlCarousel('destroy');

    // --- check if itemLength > itemRun
    if (itemLength > itemRun) {
      // --- init carousel
      selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        navText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
        touchDrag: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        responsive : {
          0 : {
            items: 1,
            margin: 30
          },
          768 : {
            items: 1,
            margin: 20
          }
        }
      });
    }
  }

  // init
  const init = () => {
    handleRunCarousel();
  }

  return {
    init
  }

})();

export default Testimony
