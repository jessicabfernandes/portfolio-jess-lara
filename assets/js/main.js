AOS.init({
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  duration: 1200,
  offset: 200,
});

var rellax = new Rellax(".rellax", {
  breakpoints: [576, 768, 1201],
});

//FIXED HEADER
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".header");
  menu.classList.toggle("rolling", window.scrollY > 300);
});

//fechar off canvas
$(".offcanvas-end a").click(function () {
  $(".offcanvas").offcanvas("hide");
});

//deixando o scroll suave
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

//link anchor para lenis

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute("href"));
  });
});
