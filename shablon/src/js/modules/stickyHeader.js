function top() {
    let stickyHeader = document.querySelector('.stickyHeader');
    let topWindow = document.body.scrollTop || document.documentElement.scrollTop;
    let windowWidth = document.documentElement.clientWidth;
        if (topWindow > 150 & windowWidth > 1200)  {
            stickyHeader.classList.add('active');
        } else {
            stickyHeader.classList.remove('active');
        }
    };
    
    console.log( document.documentElement.clientWidth);
    
    window.addEventListener('scroll', top);
    document.body.addEventListener('scroll', top);