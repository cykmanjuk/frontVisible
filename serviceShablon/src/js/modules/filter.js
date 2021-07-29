let filterBlock = document.querySelectorAll(".catalogFilter .block");
let overlay = document.querySelector(".overlay");

if (filterBlock) {
    filterBlock.forEach(block => {
    let caption = block.querySelector(".caption");
    let inner = block.querySelector(".innerBlock");
    caption.addEventListener('click', function(){
        if (caption.classList.contains('active')) {
            caption.classList.remove('active');
            inner.classList.remove('active');
        } else {
            caption.classList.add('active');
            inner.classList.add('active');
        }
    });
});
};

let filter = document.querySelector(".catalogFilter");
if(filter){
    let filterBtn = document.querySelector(".mobileFilterBtn");
    let filterCross = filter.querySelector(".mobileCross");
    filterBtn.addEventListener('click', function(){
        if(filter.classList.contains('active')){
            overlay.classList.remove('active');
            filter.classList.remove('active')
        } else {
            filter.classList.add('active');
            overlay.classList.add('active');
        }
    });
    filterCross.addEventListener('click', function(){
        filter.classList.remove('active')
        overlay.classList.remove('active')
    });
    overlay.addEventListener('click', function(){
        filter.classList.remove('active')
        overlay.classList.remove('active')
    });
}