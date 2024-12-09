// Отримання елементів
const burgerButton = document.querySelector('.burger-button');
const modalMenu = document.querySelector('.modal-menu');
const closeButton = document.querySelector('.close-button');

// Відкрити модальне меню
burgerButton.addEventListener('click', () => {
  modalMenu.classList.add('active'); // Показуємо модальне меню
});

// Закрити модальне меню
closeButton.addEventListener('click', () => {
  modalMenu.classList.remove('active'); // Ховаємо модальне меню
});
