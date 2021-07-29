// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files



 import './modules/mobileMenu.js'
 import './modules/forms.js'
 import './modules/modals.js'
 import './modules/sliders.js'
 import './modules/tabs.js'



 $('.accordion .list .item .accTop').on('click', function(){
    let item = $(this).closest('.accordion .list .item');
    let itemBody = item.find('.accBody');
    if (item.hasClass('active')) {
        itemBody.slideUp(300);
        item.removeClass('active');
    } else {
        itemBody.slideDown(300);
        item.addClass('active');
    }
  });

  