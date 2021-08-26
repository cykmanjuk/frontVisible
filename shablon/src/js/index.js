// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files



//  import './modules/mobileMenu.js'
  import './modules/forms.js'
//  import './modules/modals.js'
//  import './modules/sliders.js'
//  import './modules/stickyHeader.js'
//  import './modules/tabs.js'
//  import './modules/select.js'
 import './modules/filter.js'
 import './modules/counter.js'
//  import './modules/map.js'
 //import './modules/intersectionObserver.js'



 window.setActive = function(list = {}) {
    if(list.length) {
        list.forEach(function(item) {
            item.classList.add("active");
        })
    }
}
window.removeActive = function(list = {}) {
    if(list.length) {
        list.forEach(function(item) {
            item.classList.remove("active");
        })
    }
}  



// window.addEventListener('load', function(){
//     let searchInput = document.querySelector('#searchInput');
//     let searchPage__resultWrap = document.querySelector('.searchPage__resultWrap');
//     let searchPage__preloader = document.querySelector('.searchPage__preloader');
//     let searchPage__result = document.querySelector('.searchPage__result');

//     let searchObjects = {
//         wrap : document.querySelector('.searchPage__resultWrap'),
//         preloader : document.querySelector('.searchPage__resultWrap'),
//         result : document.querySelector('.searchPage__resultWrap')
//     };

//     searchObjects.result = 

//     let searchTimer = false;
//     if (searchInput != null && searchPage__resultWrap != null && searchPage__preloader !=null && searchPage__result != null) {
//         searchInput.oninput =  function(){
//             clearTimeout(searchTimer);
//             searchTimer = setTimeout(function(){
//                 let value = searchInput.value;
//                 if(value.length > 3) {
//                     searchPage__result.classList.remove('searchPage__result-active');
//                     searchPage__resultWrap.classList.add('searchPage__resultWrap-active');
//                     searchPage__preloader.classList.add('searchPage__preloader-active');
//                    // send alax request...
//                    setTimeout(function(){
//                        searchPage__preloader.classList.remove('searchPage__preloader-active');
//                        searchPage__result.classList.add('searchPage__result-active');
//                    },2000)
//                 } else {
//                     searchPage__resultWrap.classList.remove('searchPage__resultWrap-active');  
//                 }
//             },200)
//         }
//     }
// });


let anim = new ZWAnim();
    anim.scrollAnim({
       object : ".block",
       startEvent : function(element) {
           element.style.opacity = "0";
       },
       events : {
           10 : {
               condition : ">=",
               callback : function(element) {
                   anim.lineAnim({
                       element : [element],
                       from : {
                           marginLeft : "0%",
                           opacity: 1
                       },
                       to : {
                           transition: "1s",
                           marginLeft : "50%"
                       }
                   })
               }
           }
       }
   })
