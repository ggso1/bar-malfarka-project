// Ваш токен для бота
const token = '7643771807:AAFNISXPwKvLSF6VJFwCqjcjhXBA5eALGPc';  // Замість цього вставте ваш токен
// ID чату або групи
const chatId = '-4545119175'; // Замість цього вставте username або chat_id групи
const testGroupID = '-1002472181316'

// URL для запиту до API
const url = `https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=${chatId}`;
const updatesUrl = `https://api.telegram.org/bot${token}/getUpdates`;

function getMemberCount() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Вивести кількість учасників
                document.getElementById('people-count').textContent = data.result;
            } else {
                document.getElementById('memberCount').textContent = 'Помилка при отриманні даних';
            }
        })
        .catch(error => {
            console.error('Error fetching member count:', error);
            document.getElementById('memberCount').textContent = 'Не вдалося отримати дані';
        });
}


// // function getUpdates() {
// //     fetch(updatesUrl)
// //         .then(response => response.json())
// //         .then(data => {
// //             let element = document.querySelector(".popularcom")
// //             data.result.forEach(update => {
// //                 if (update.message && update.message.text) {
// //                     element.innerHTML += ` <p class="coment">${update.message.text}</p>`;
// //                 }

//             });
//             // if (hasNewMessages == False) {
//             //     element.innerHTML += ` <p class="coment">Немає останніх к</p>`;
//             // }
//             // 
//         })
//         .catch(error => {
//             console.error('Error fetching member count:', error);
//             document.querySelector(".popularcom").textContent += 'Не вдалося отримати дані';
//         });
// }


// Виклик функції для отримання кількості учасників
getMemberCount();

getUpdates();