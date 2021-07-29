let tabNav = document.querySelectorAll(".tabNavs .tabPill");
let tabContent = document.querySelectorAll(".tabContent .tabPane");
tabNav.forEach(function(item) {
  
  item.addEventListener('click', function(){

    tabNav.forEach(function(navItem){
        navItem.classList.remove('active');
    });
    item.classList.add('active');
    let tabNavId = item.getAttribute("data-id");

    tabContent.forEach(function(e){
      let tabContentId = e.getAttribute("data-id");
      if (tabNavId != tabContentId) {
        e.classList.remove('active');
      } else {
        e.classList.add('active');
      }
    });
  });
});

