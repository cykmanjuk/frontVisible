


var targetsAnimation = document.querySelectorAll('.container');

var options = {
  rootMargin: '0px',
  threshold: [0,0.25,0.5,0.75,1]
};

var observer = new IntersectionObserver(items => {
  items.forEach(el => {
  	if(el.isIntersecting && el.intersectionRatio>0.25) {
          PubSub.publish('SectionInView',el.target);
         // PubSub.publish('TitleInView',el.target);
  	}
  });
}, options);

for (var i = 0; i < targetsAnimation.length; i++) {
  observer.observe(targetsAnimation[i]);
}




function goText(msg, obj) {
    if (!$(obj).hasClass('activated')) {
      $(obj).addClass('activated');
      let animationText = $(obj).find('.anim-text');
      let animationTitle = $(obj).find('.anim-title');

      let tl1 = new TimelineMax();
      tl1
      .staggerFromTo(animationTitle, .6,{y: '100', opacity: 0},{ y: 0, opacity: 1},0.1,'0')

      setTimeout(function(){

        let tl2 = new TimelineMax();
        tl2
        .staggerFromTo(animationText, .6,{y: '100', opacity: 0},{ y: 0, opacity: 1},0.1,'-0.4')

    },400);     
    }
  }



PubSub.subscribe('SectionInView', goText);
