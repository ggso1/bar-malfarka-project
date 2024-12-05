// Знаходимо бургер-кнопку та меню
const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header-menu');

// Додаємо обробник події кліку
burgerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('open');
});