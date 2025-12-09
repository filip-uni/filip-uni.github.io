const title = document.getElementById('monitorizare-title');
const staticImages = document.getElementById('static-images');
const slideshow = document.getElementById('slideshow');
const slide = document.getElementById('slide');

const slides = [
  'images/cpu.png',
  'images/ram.png',
  'images/net.png'
];

let index = 0;
let interval;

function startSlideshow() {
  staticImages.style.display = 'none';
  slideshow.style.display = 'block';

  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    slide.src = slides[index];
  }, 3000);
}

title.addEventListener('dblclick', startSlideshow);
