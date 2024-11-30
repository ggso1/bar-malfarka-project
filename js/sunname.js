// Ваш токен для бота
const token = 'ВАШ_ТОКЕН'; // Замініть на ваш реальний токен Telegram бота
// ID чату або групи
const chatId = 'ВАШ_CHAT_ID'; // Замініть на ваш реальний ID чату/групи

// Елементи на сторінці
const feedbackSent = document.getElementById('feedback-sent');
const sendBtn = document.querySelector('.sendtg-btn');
const feedbackInput = document.getElementById('feedback');
const usernameInput = document.getElementById('username');
const counterElement = document.getElementById('counter');

// Ініціалізація лічильника сонечок
function initializeCounter() {
    if (!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 0);
    }
    updateCounterDisplay();
}

// Оновлення відображення лічильника
function updateCounterDisplay() {
    const counter = localStorage.getItem('counter') || 0;
    counterElement.innerText = counter;
}

// Додавання сонечок
function addSonechka(amount) {
    const currentValue = parseInt(localStorage.getItem('counter')) || 0;
    const newValue = currentValue + amount;
    localStorage.setItem('counter', newValue);
    updateCounterDisplay();
}

// Надсилання коментаря в Telegram
sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const feedbackText = feedbackInput.value.trim();

    // Перевіряємо, чи заповнено ім'я
    if (!username) {
        alert("Будь ласка, введіть своє ім'я!");
        return;
    }

    // Формуємо текст повідомлення
    const textToSend = `${username}: ${feedbackText || feedbackInput.placeholder}`;
    const encodedText = encodeURIComponent(textToSend);

    // URL для надсилання повідомлення
    const sendMessageUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodedText}`;

    // Відправка повідомлення через Telegram API
    fetch(sendMessageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.ok) {
                feedbackInput.value = ''; // Очищаємо поле вводу
                addSonechka(300); // Додаємо 300 сонечок
                feedbackSent.textContent = 'Пророцтво збулось!';
                feedbackSent.classList.remove('hidden');
            } else {
                console.error("Помилка надсилання:", data);
                feedbackSent.textContent = 'Не вдалося надіслати пророцтво.';
                feedbackSent.classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error("Помилка надсилання:", error);
            feedbackSent.textContent = 'Виникла помилка при надсиланні.';
            feedbackSent.classList.remove('hidden');
        });
});

// Очищення повідомлення про статус при кліку на поле вводу
feedbackInput.addEventListener('click', () => {
    feedbackSent.textContent = ''; // Очищаємо повідомлення про статус
});

// Запускаємо ініціалізацію
window.onload = initializeCounter;
