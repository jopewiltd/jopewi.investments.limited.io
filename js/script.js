// ------------ Responsive menu ------------
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('show'));

// ------------ Carousel ------------
const slidesContainer = document.querySelector('.slides');

// ✅ Use root–relative paths for GitHub Pages
const images = [
  "../images/slide1.png",
  "../images/slide2.png",
  "../images/slide3.png",
  "../images/slide4.png"
];

// Create <img> elements dynamically
images.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = "Carousel image";
  slidesContainer.appendChild(img);
});

let index = 0;

function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Manual controls
document.querySelector('.left').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.right').addEventListener('click', () => showSlide(index + 1));

// Automatic slide every 4 seconds
setInterval(() => showSlide(index + 1), 4000);






