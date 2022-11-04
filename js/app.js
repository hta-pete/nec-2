/* Smooth Scrollbar js */
let Scrollbar       = window.Scrollbar;
const smoothScroll  = document.querySelector('#scroll');
const scrollOptions = {
  'damping': 0.08
};


function setScrollbar(){
  if (window.matchMedia("(min-width: 1024px)").matches) {
    Scrollbar.init(smoothScroll, scrollOptions); 
  } else{
    Scrollbar.destroy(smoothScroll);
  } 
}
setScrollbar();


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

barba.hooks.beforeEnter(() => {
  Scrollbar.destroy(smoothScroll);
  window.scrollTo(0,0);
});

barba.hooks.after(() => {
  setScrollbar();
});



window.addEventListener("resize", function(){
  setScrollbar();
});

/* Menu btn */
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", function(){
  this.classList.toggle("open");
});










