// let home4Sliders = new zWebSlider
//     ({
//         element : ".comparisonSlider",
//         showItems : 4,
//         slideItems : 1,
//         startItem: 1,
//         speed : 1000,
//         itemsGap: 14,
//         autoPlay : false,
//         autoPlaySpeed : 5000,
//         controls : {prev : ".comparisonSlider .sliderBtn.left", next : ".comparisonSlider .sliderBtn.right"},
//         resolutions :
//         [
//             {screen : 1100, showItems : 3, itemsGap: 10},
//             {screen : 900, showItems : 2, itemsGap: 10},
//             {screen : 500, showItems : 1}
//         ]
//     });


    ZWEBSLIDER.createSlider
    ({
        element : ".selection .sliderWrap .list",
        slidesToShow : {default: 4, 1200: 3, 770: 2, 500: 1},
        slidesToMove : 1,
        sliderSpeed : 500,
        slidesGap : 32,
        sliderDots : false,
        sliderAutoPlay : true,
        sliderAutoPlaySpeed : 7000,
        sliderInfinity : true,
        controls : {prev : ".selection .sliderArrows .btnArrow.left", next : ".selection .sliderArrows .btnArrow.right"},
    });

    ZWEBSLIDER.createSlider
    ({
        element : ".category .sliderWrap .list",
        slidesToShow : {default: 6, 1200: 4, 770: 3, 500: 2},
        slidesToMove : 1,
        sliderSpeed : 500,
        slidesGap : 32,
        sliderDots : false,
        sliderAutoPlay : true,
        sliderAutoPlaySpeed : 7000,
        sliderInfinity : true,
        controls : {prev : ".category .sliderArrows .btnArrow.left", next : ".category .sliderArrows .btnArrow.right"},
        
    });

    ZWEBSLIDER.createSlider
    ({
        element : ".offers .sliderWrap .list",
        slidesToShow : {default: 6, 1200: 4, 770: 3, 500: 2},
        slidesToMove : 1,
        sliderSpeed : 500,
        slidesGap : 32,
        sliderDots : false,
        sliderAutoPlay : true,
        sliderAutoPlaySpeed : 7000,
        sliderInfinity : true,
        controls : {prev : ".offers .sliderArrows .btnArrow.left", next : ".offers .sliderArrows .btnArrow.right"},
        
    });


 
    ZWEBSLIDER.createSlider
    ({
        element : ".cardSlider .bigSlider .list",
        sliderID : "bigSlider",
        slidesToShow : 1,
        slidesToMove : 1,
        sliderSpeed : 1000,
        disableSliderControls : true,
        disableSliderDrag : true
    });
    
    ZWEBSLIDER.createSlider
    ({
        element : ".cardSlider .littleSlider .list",
        sliderID : "miniSlider",
        slidesToShow : 4,
        slidesToMove : 1,
        sliderSpeed : 1000,
        disableSliderControls: true,
        slidesGap : 24,
        controlSlide : true,
        disableSlidesClick : false,
        sliderOrientation : {default: "V", 500: "H"}
    });
    
    ZWEBSLIDER.setSliderConnection(["bigSlider", "miniSlider"]);
