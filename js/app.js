const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

/* Barba js for page transitions */
barba.init({
  transitions: [
    {
      name: "slide-left",
      sync: true,
      from: {
        custom: ({ trigger }) => {
          return trigger.classList && trigger.classList.contains('slide-left');
        }
      },
      leave(data) {
        return gsap.to(data.current.container, {
          x: "-100%",
          ease: "expo.out",
          duration: 0.4
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          x: "100%",
          ease: "expo.out",
          duration: 0.4
        });
      }
    },
    {
      name: "slide-right",
      sync: true,
      from: {
        custom: ({ trigger }) => {
          return trigger.classList && trigger.classList.contains('slide-right');
        }
      },
      leave(data) {
        return gsap.to(data.current.container, {
          x: "100%",
          ease: "expo.out",
          duration: 0.4
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          x: "-100%",
          ease: "expo.out",
          duration: 0.4
        });
      }
    }
  ]
});

barba.hooks.before(() => {
  document.querySelector("main").style.position = "absolute";
});
barba.hooks.beforeEnter(() => {
  scroller.destroy();
  window.scrollTo(0,0);
});
barba.hooks.after(() => {
  scroller.init();
});


/* Menu btn */
let navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", function(){
  this.classList.toggle("open");
});