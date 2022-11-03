// init LocomotiveScroll on page load
let scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

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


// update the scroll after entering a page
barba.hooks.after(() => {
  scroller.update();
});








