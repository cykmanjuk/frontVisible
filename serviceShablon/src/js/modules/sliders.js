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
        element : ".mpPortfolio .sliderWrap .list",
         slidesToShow : {default: 3, 1200: 3, 770: 2, 500: 1},
         slidesToMove : 1,
         sliderSpeed : 500,
         slidesGap : {default: 32, 1200: 24, 770: 18, 500: 8},
         sliderDots : false,
         autoGap: true,
         sliderAutoPlay : true,
         sliderAutoPlaySpeed : 7000,
         sliderInfinity : true,
         controls : {prev : ".mpPortfolio .sliderWrap .sliderBtns .sliderBtn.left", next : ".mpPortfolio .sliderWrap .sliderBtns .sliderBtn.right"},
     });


     
     ZWEBSLIDER.createSlider
        ({
        element : ".partners .sliderWrap .list",
         slidesToShow : {default: 6, 1200: 4, 770: 3, 500: 2},
         slidesToMove : 1,
         sliderSpeed : 500,
         slidesGap : {default: 32, 1200: 24, 770: 18, 500: 8},
         sliderDots : false,
         autoGap: true,
         sliderAutoPlay : true,
         sliderAutoPlaySpeed : 7000,
         sliderInfinity : true,
         controls : {prev : ".partners .sliderWrap .sliderBtns .sliderBtn.left", next : ".partners .sliderWrap .sliderBtns .sliderBtn.right"},
     });


     ZWEBSLIDER.createSlider
     ({
     element : ".ourTeam .sliderWrap .list",
      slidesToShow : {default: 4, 1200: 3, 770: 2, 500: 1},
      slidesToMove : 1,
      sliderSpeed : 500,
      slidesGap : {default: 32, 1200: 24, 770: 18, 500: 8},
      sliderDots : false,
      autoGap: true,
      sliderAutoPlay : true,
      sliderAutoPlaySpeed : 7000,
      sliderInfinity : true,
      controls : {prev : ".ourTeam .sliderWrap .sliderBtns .sliderBtn.left", next : ".ourTeam .sliderWrap .sliderBtns .sliderBtn.right"},
  });


  ZWEBSLIDER.createSlider
  ({
  element : ".gallery .sliderWrap .list",
   slidesToShow : {default: 4, 1200: 3, 770: 2},
   slidesToMove : 1,
   sliderSpeed : 500,
   slidesGap : {default: 32, 1200: 24, 770: 18, 500: 8},
   sliderDots : false,
   autoGap: true,
   sliderAutoPlay : true,
   sliderAutoPlaySpeed : 7000,
   sliderInfinity : true,
   controls : {prev : ".gallery .sliderWrap .sliderBtns .sliderBtn.left", next : ".gallery .sliderWrap .sliderBtns .sliderBtn.right"},
});
