// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files


 import './modules/niceSelect.js'
 import './modules/mobileMenu.js'
 import './modules/forms.js'
 import './modules/modals.js'
 import './modules/sliders.js'
//  import './modules/stickyHeader.js'
 import './modules/tabs.js'
 import './modules/select.js'
 import './modules/filter.js'
//  import './modules/map.js'
//  import './modules/LEARN.js'
 //import './modules/intersectionObserver.js'

 $(document).ready(function() {
    $('select').niceSelect();
  });
  

  try {
    let act = document.querySelectorAll('.actWrap');

    act.forEach(function(e){
      e.addEventListener('click', function(){
        let list = this.querySelector('.list');
        list.classList.toggle('active');
      });
    })
} catch(e) {
  
}


 try {
      var example4 = new zWebScrollElement({
         object : ".filterCrumbs",
         length : 300,
         orientation : "H",
         disableIntervals : true
   });
 } catch {
  
 }

 document.querySelector('.mobileSortBtn').addEventListener("click", function(){
   if (document.querySelector('.leftSort').classList.contains('active')) {
      document.querySelector('.leftSort').classList.remove('active');
   } else {
      document.querySelector('.leftSort').classList.add('active');
   }
 });

 document.querySelector('.mobileCross').addEventListener('click', function(){
   document.querySelector('.leftSort').classList.remove('active');
 });
