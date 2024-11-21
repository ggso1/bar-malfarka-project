// Ініціалізація лічильника при завантаженні сторінки
window.onload = function () {
    // Перевіряємо, чи є в localStorage значення для лічильника
    if (localStorage.getItem('counter')) {
        // Якщо є - відновлюємо значення лічильника
        document.getElementById("counter").innerText = localStorage.getItem('counter');
    } else {
        // Якщо значення немає, встановлюємо 0
        localStorage.setItem('counter', 0);
        document.getElementById("counter").innerText = 0;
    }

    // Запускаємо таймер для додавання 3 сонечок кожні 30 секунд
    setInterval(addSonechka, 10000);
};

// Функція для додавання 3 сонечок кожні 30 секунд
function addSonechka() {
    let currentValue = parseInt(localStorage.getItem('counter'));
    currentValue += 6; // Додаємо 3 сонечка
    localStorage.setItem('counter', currentValue); // Оновлюємо значення в localStorage
    document.getElementById("counter").innerText = currentValue; // Оновлюємо на сторінці
}

// Функція для зміни значення лічильника сонечок
function changeValue(inputId, delta) {
    const input = document.getElementById(inputId);
    let currentValue = parseInt(input.value);
    currentValue += delta;

    if (currentValue < 1) currentValue = 3;
    if (currentValue > 3) currentValue = 1;

    input.value = currentValue;
}

// Функція для змішування коктейлів
function mix() {
    const input1 = document.getElementById("zillia1");
    const input2 = document.getElementById("zillia2");
    const input3 = document.getElementById("zillia3");
    const code = input1.value + input2.value + input3.value;
    console.log(code);
    animateImages(code);
    deductSonechka(code);
}

// Функція для випадкового коктейлю
function mixRandom() {
    const digits = ['1', '2', '3'];
    const input1 = digits[Math.floor(Math.random() * digits.length)];
    const input2 = digits[Math.floor(Math.random() * digits.length)];
    const input3 = digits[Math.floor(Math.random() * digits.length)];

    document.getElementById("zillia1").value = input1;
    document.getElementById("zillia2").value = input2;
    document.getElementById("zillia3").value = input3;

    const code = input1 + input2 + input3;
    console.log(code);
    animateImages(code);
    deductSonechka(code);
}

// Функція для віднімання сонечок на основі ціни коктейлю
function deductSonechka(code) {
    // Шукаємо коктейль за кодом
    const cocktail = data.find(item => item.code === code);
    if (cocktail) {
        const price = parseInt(cocktail.price.replace(' ☀️', '')); // Отримуємо ціну коктейлю без символу "☀️"
        let currentValue = parseInt(localStorage.getItem('counter'));

        // Перевіряємо, чи вистачає сонечок
        if (currentValue >= price) {
            currentValue -= price; // Віднімаємо необхідну кількість сонечок
            localStorage.setItem('counter', currentValue);
            document.getElementById("counter").innerText = currentValue;
        } else {
            alert("Недостатньо сонечок для замовлення цього коктейлю!");
        }
    }
}

// Функція для анімації зміни зображень (залишаємо без змін)
function animateImages(targetCode) {
    const imageElement = document.getElementById("display-image");
    let currentIndex = 0;
    let speed = 10;
    let slowdownStart = 15;
    const frames = 27;
    const digits = ['1', '2', '3'];
    const images = [];

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                images.push(`img/${digits[i]}${digits[j]}${digits[k]}.jfif`);
            }
        }
    }

    const targetIndex = images.indexOf(`img/${targetCode}.jfif`);

    function updateImage() {
        imageElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % frames;

        if (slowdownStart > 0) {
            slowdownStart--;
            speed += 10;
        } else if (currentIndex === targetIndex) {
            imageElement.src = images[currentIndex];
            choosecoctail(targetCode);
            return;
        }

        setTimeout(updateImage, speed);
    }

    updateImage();
}

// Функція для вибору коктейлю
function choosecoctail(code) {
    document.getElementById("name").innerText = "Коктейль";
    document.getElementById("description").innerText = "Опис";
    document.getElementById("full_description").innerText = "Детальний Опис";
    document.getElementById("price").innerText = "Ціна";

    data.forEach((element) => {
        if (element.code == code) {
            document.getElementById("name").innerText = element.name;
            document.getElementById("description").innerText = element.description;
            document.getElementById("full_description").innerText = element.ful_description;
            document.getElementById("price").innerText = element.price;

            const imageElement = document.getElementById("display-image");
            imageElement.src = `img/${element.img}`;
        }
    });
}
