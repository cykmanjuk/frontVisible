class studio54Menu
{
    constructor(params = {})
    {
        this.params = {};
        this.params["keyClose"] = (typeof(params["keyClose"]) != "undefined") ? params["keyClose"] : false;
        this.params["bodyClose"] = (typeof(params["bodyClose"]) != "undefined") ? params["bodyClose"] : false;

        this.wrap = document.querySelector(".mobileMenuWrap");
        this.mmCross = this.wrap.querySelectorAll('.cross');
        this.mobileMenu = this.wrap.querySelectorAll('.mobileMenu');
        this.mmItem = this.wrap.querySelectorAll('.item .link');
        this.goBack = this.wrap.querySelectorAll(".goBack");
        this.burger = document.querySelector('.mobileMenuBurger');

        console.log(this.params);
        this.init();
    }

    openMenu()
    {
        this.wrap.classList.add('active');
        this.burger.classList.add('active');
    }

    closeMenu()
    {
        this.mobileMenu.forEach((menu) => {menu.classList.remove("active")})
        this.wrap.classList.remove('active');
        this.burger.classList.remove('active');
    }


    init(params = {})
    {
        let $this = this;

        // ПРИ КЛИКЕ ВНЕ МЕНЮ
        if($this.params["bodyClose"] == true)
        {
            document.body.addEventListener("click", (e) =>
            {
                let target = e.target;
                if(!target.classList.contains("mobileMenuWrap") && !target.closest(".mobileMenuWrap") && !target.classList.contains("mobileMenuBurger") && !target.closest(".mobileMenuBurger"))
                {
                    $this.closeMenu();
                }
            });
        }

        // ПРИ НАЖАТИИ НА ESCAPE
        if($this.params["keyClose"] == true)
        {
            document.body.addEventListener("keyup", (e) =>
            {
                if(e.keyCode == 27)
                {
                    $this.closeMenu();
                }
            })
        }

        //  КНОПКА НАЗАД
        $this.goBack.forEach((element) =>
        {
            element.addEventListener("click", () =>
            {
                element.closest(".mobileMenu").classList.remove("active");
            })
        });

        // ЗАКРЫТИЕ МЕНЮ
        $this.mmCross.forEach((cross) =>
        {
            cross.addEventListener("click", () =>
            {
                $this.closeMenu();
            })
        });

        // ОТКРЫТИЕ ПОДМЕНЮ
        $this.mmItem.forEach((item) =>
        {
            item.addEventListener("click", (e) =>
            {
                let target = e.target;
                if(!target.classList.contains("cross"))
                {
                    let subMenu = item.parentNode.querySelector(".mobileMenu");
                    if(subMenu) subMenu.classList.add('active');
                }
            })
        });

        // ОТКРЫТИЕ МОБИЛЬНОГО МЕНЮ
        $this.burger.addEventListener('click', (e) => 
        {
            //проверка на класс актив!
            let result = (!$this.burger.classList.contains("active")) ? $this.openMenu() : $this.closeMenu();
        });
    }
}


window.onload = function()
{
    let MAINMENU = new studio54Menu
    ({
        keyClose : true, //Закрытие меню клавишей ESC (true / false)
        bodyClose : true //Закрытие меню при клике вне области(true / false)
    });
}

// window.onload = function(){


// let wrap = document.querySelector(".mobileMenuWrap");
// let mmCross = wrap.querySelectorAll('.cross');
// let mobileMenu = wrap.querySelectorAll('.mobileMenu');
// let mmItem = wrap.querySelectorAll('.item .link');
// let goBack = wrap.querySelectorAll(".goBack");
// let burger = document.querySelector('.mobileMenuBurger');




















// }