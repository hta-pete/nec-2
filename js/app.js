// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init({
  transitions: [
    {
      name: 'slide-drive',
      sync: true,
      leave() {},
      enter() {},
      from: {
        namespace: 'home'
      },
      to: {
        namespace: 'drivers'
      }
    },
    {
      name: 'slide-ship',
      sync: true,
      leave() {},
      enter() {},
      from: {
        namespace: 'home'
      },
      to: {
        namespace: 'shippers'
      }
    },
    {
      name: 'slide-home',
      sync: true,
      leave() {},
      enter() {},
      from: {
        namespace: 'drivers'
      },
      to: {
        namespace: 'home'
      }
    },
    {
      name: 'slide-home-left',
      sync: true,
      leave() {},
      enter() {},
      from: {
        namespace: 'shippers'
      },
      to: {
        namespace: 'home'
      }
    }
  ]
});



$(function(){
  /*
  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getDirection: true
  });


  scroller.on('scroll', (instance) => {
    document.documentElement.setAttribute('data-direction', instance.direction)
  });

  */

	var $window = $(window);
	var raf           = requestAnimationFrame;
  var lastScrollTop = $('main').offset().top;

  $window.on('load', function(){
    window.dispatchEvent(new Event('resize'));
  });

  if (raf) {
    loop();
  }

  function loop() {

    var scrollTop = $('main').offset().top;
    var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');

    if (lastScrollTop === scrollTop) {
      raf(loop);
      return;
    } else {
      lastScrollTop = scrollTop;
      raf(loop);
    }

    lastScrollTop = scrollTop;

    if (scrollTop < -50){
      $("header").addClass("active");
    } else{
      $("header").removeClass("active");
    }
   
  }

    
});










