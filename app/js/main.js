// Tweenmax GSAP slide effect

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const openBtn = document.querySelector('.burger');
const headline = document.querySelector('.headline');


const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "85%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "100%" }, { width: "85%", ease: Power2.easeInOut })
  .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power1.easeInOut }, "-= 1.2")
  .fromTo(headline, 0.5, {opacity: 0, x: 100}, {opacity: 1, x: 0})
  .fromTo(logo, 1, {opacity: 0, x:40},{opacity: 1, x:0}, "=-0.5");


// Open - Close nav bar
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}

