// đóng/mở menu

const menu = document.querySelector('.navbar__list');

const menuToggle = document.querySelector('.navbar__toggle__mb');

let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
   if (!isMenuOpen) {
      menu.classList.add('active');
      menuToggle.classList.add('active');
      isMenuOpen = true;
   } else {
      menu.classList.remove('active');
      menuToggle.classList.remove('active');
      isMenuOpen = false;
   }
});

// hiển thị shadow cho navbar khi scroll

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
   if (window.pageYOffset > 0) {
      header.classList.add('active');
   } else {
      header.classList.remove('active');
   }
});

// hiển thị slide
const slides = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');

let slideIndex = 0;
showSlides();

function showSlides() {
   slides.forEach(slide => {
      slide.style.display = 'none';
   });
   slideIndex++;
   if (slideIndex > slides.length) {
      slideIndex = 1;
   }

   dots.forEach(dot => {
      dot.className = dot.className.replace('active', '');
   });
   slides[slideIndex - 1].style.display = 'block';
   dots[slideIndex - 1].className += ' active';
   setTimeout(showSlides, 5000);
}


