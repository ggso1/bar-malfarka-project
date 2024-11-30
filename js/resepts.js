document.addEventListener("DOMContentLoaded", () => {
    const formatsList = document.getElementById("formatsList");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const formats = document.querySelectorAll(".formats-item");
    const visibleCount = 3; // Кількість видимих елементів
    let currentIndex = 0;

    // Функція для оновлення видимості карток
    function updateVisibleItems() {
        formats.forEach((item, index) => {
            // Додаємо клас "visible" тільки для перших трьох елементів
            if (index >= currentIndex && index < currentIndex + visibleCount) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }

    // Функція для оновлення зсуву каруселі
    function updateCarousel() {
        // Блокуємо кнопки, якщо гортати більше не можна
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= formats.length - visibleCount;
    }

    // Обробники подій для кнопок
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateVisibleItems();
            updateCarousel();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < formats.length - visibleCount) {
            currentIndex++;
            updateVisibleItems();
            updateCarousel();
        }
    });

    // Початкове відображення
    updateVisibleItems();
    updateCarousel();
});
