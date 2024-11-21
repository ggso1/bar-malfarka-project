document.addEventListener("DOMContentLoaded", () => {
  const numberOfFireflies = 50; // Кількість світлячків

  const createFirefly = () => {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    // Встановлюємо випадковий розмір для кожного світлячка
    const size = Math.random() * 4 + 2; // Випадковий розмір від 2 до 6px
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;

    // Випадкова позиція на екрані
    const positionX = Math.random() * window.innerWidth;
    const positionY = Math.random() * window.innerHeight;
    firefly.style.left = `${positionX}px`;
    firefly.style.top = `${positionY}px`;

    document.body.appendChild(firefly);
  };

  for (let i = 0; i < numberOfFireflies; i++) {
    createFirefly();
  }
});
