
    ZWEBSLIDER.createSlider
    ({
        element : ".mainScreen .sliderWrap .list",
        slidesToShow :1,
        slidesToMove : 1,
        sliderSpeed : 500,
        slidesGap : 0,
        sliderDots : false,
        sliderAutoPlay : true,
        sliderAutoPlaySpeed : 7000,
        sliderInfinity : true,
        controls : {prev : ".mainScreen .sliderWrap .left", next : ".mainScreen .sliderWrap .right"},
    });


    ZWEBSLIDER.createSlider
    ({
        element : ".command .sliderWrap .list",
        slidesToShow : {default: 4, 1200: 3, 770: 2, 500: 1},
        slidesToMove : 1,
        sliderSpeed : 500,
        slidesGap : 0,
        sliderDots : false,
        sliderAutoPlay : true,
        sliderAutoPlaySpeed : 7000,
        sliderInfinity : true,
        controls : {prev : ".command .sliderWrap .left", next : ".command .sliderWrap .right"},
    });



 