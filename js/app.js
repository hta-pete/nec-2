const $window      = window;
const $main        = document.querySelector("#scroll-content");

let mainScrollTop;

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getDirection: true,
  smartphone: {
    smooth: false,
  },
  tablet: {
    smooth: false,
  }
});

function scrollStuff(){
  const $header       = document.querySelector("header");
  const $mouseScroll  = document.querySelector(".mouse-scroll");
  mainScrollTop       = $main.getBoundingClientRect().top + window.scrollY;
  let windowScrollTop = $window.scrollY;

  if( mainScrollTop < -90 || windowScrollTop > 90 ){
    $header.classList.add('active');
    $mouseScroll.classList.add('hide');
  } else{
    $header.classList.remove('active');
    $mouseScroll.classList.remove('hide');
  }
}
scroll.on('scroll', scrollStuff);

$window.addEventListener('load', function(){
  window.dispatchEvent(new Event('resize'));
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
  const main = document.querySelector("main");
  main.style.position = "absolute";
  scroll.destroy();
});
barba.hooks.beforeLeave(() => {
  scroll.init();
});
barba.hooks.afterEnter(() => {
  scroll.update();
  scroll.on('scroll', scrollStuff);
  window.dispatchEvent(new Event('resize'));
});

/* Menu btn */
const navBtn        = document.querySelector(".nav-btn");
const siteMenu      = document.querySelector("#site-menu");
const siteMenuLinks = siteMenu.querySelectorAll("a");

navBtn.addEventListener("click", (e) => { 
  e.currentTarget.classList.toggle("open");
  siteMenu.classList.toggle("open");
  if( mainScrollTop > -90 ){
    $header.classList.toggle('active');
  } 
});

siteMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBtn.classList.remove("open");
    siteMenu.classList.remove("open");
  });
});











