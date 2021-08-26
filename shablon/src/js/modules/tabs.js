let tabPill = document.querySelectorAll('.tabs .tabNavs .tabPill');


for(let i=0;i<=tabPill.length-1;i++)
{
    tabPill[i].addEventListener('click', function(e) {

        for(let c=0;c<=tabPill.length-1;c++)
        {
            tabPill[c].classList.remove('active');
        }
        this.classList.add('active');
    });
}