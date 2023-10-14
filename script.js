const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const body = document.querySelector('body');
btnToggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});

const btnAsideMenu = document.querySelector('.btn-aside-menu');
const asideMenu = document.querySelector('.aside-menu');
btnAsideMenu.addEventListener('click', () => {
  asideMenu.classList.add('show');
});

const btnCloseAsideMenu = document.querySelector('.aside-menu .close');
btnCloseAsideMenu.addEventListener('click', () => {
  asideMenu.classList.remove('show');
});