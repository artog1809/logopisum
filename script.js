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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const body = document.querySelector('body');
btnToggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});

const btnBurgerMenu = document.querySelector('.btn-burger-menu');
const burgerMenu = document.querySelector('.burger-menu');
btnBurgerMenu.addEventListener('click', () => {
  burgerMenu.classList.add('show');
});

const btnCloseBurgerMenu = document.querySelector('.burger-menu .close');
btnCloseBurgerMenu.addEventListener('click', () => {
  burgerMenu.classList.remove('show');
});

const accordion = document.querySelector(".features-main-left");
accordion.addEventListener('click', (event) => {
  let btn = event.target.closest(".fml-block");
  if (btn) {
    const allBtns = document.querySelectorAll(".fml-block");
    allBtns.forEach((elem, index) => {
      if (elem === btn) {
        elem.classList.add("active");
        console.log(elem);
        elem.querySelector(".firstblock-main").classList.add("show");
        const imgs = [...document.querySelectorAll(".img-wrapper")];
        const img = imgs.find((elem,i) => {
          return i === index
        })
        if (img) { 
          img.classList.add("show");
        }
      } else {
        elem.classList.remove("active");
        elem.querySelector(".firstblock-main").classList.remove("show");
        const imgs = [...document.querySelectorAll(".img-wrapper")];
        const img = imgs.find((elem,i) => {
          return i === index
        })
        if (img) { 
          img.classList.remove("show");
        }
      }
    });
  }
})

