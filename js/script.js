// // const player = document.getElementById("player");
// const sun = document.getElementById("sun");
// const scoreDisplay = document.getElementById("score");
// let score = 0;

// // Встановлення початкових позицій
// let playerPosition = { x: 280, y: 180 };
// let gameArea = document.getElementById("game-area").getBoundingClientRect();

// // Рух гравця
// document.addEventListener("keydown", (e) => {
//     const step = 20; // Крок переміщення
//     if (e.key === "ArrowUp" || e.key === "w") playerPosition.y = Math.max(playerPosition.y - step, 0);
//     if (e.key === "ArrowDown" || e.key === "s") playerPosition.y = Math.min(playerPosition.y + step, gameArea.height - 40);
//     if (e.key === "ArrowLeft" || e.key === "a") playerPosition.x = Math.max(playerPosition.x - step, 0);
//     if (e.key === "ArrowRight" || e.key === "d") playerPosition.x = Math.min(playerPosition.x + step, gameArea.width - 40);

//     player.style.top = playerPosition.y + "px";
//     player.style.left = playerPosition.x + "px";

//     checkCollision();
// });

// // З’явлення сонечка
// function spawnSun() {
//     const x = Math.random() * (gameArea.width - 30);
//     const y = Math.random() * (gameArea.height - 30);

//     sun.style.left = x + "px";
//     sun.style.top = y + "px";
//     sun.style.display = "block";
// }

// // Перевірка зіткнення
// function checkCollision() {
//     const playerRect = player.getBoundingClientRect();
//     const sunRect = sun.getBoundingClientRect();

//     if (
//         playerRect.x < sunRect.x + sunRect.width &&
//         playerRect.x + playerRect.width > sunRect.x &&
//         playerRect.y < sunRect.y + sunRect.height &&
//         playerRect.y + playerRect.height > sunRect.y
//     ) {
//         score++;
//         scoreDisplay.textContent = score;
//         sun.style.display = "none";

//         // Через 1 секунду знову показати сонечко
//         setTimeout(spawnSun, 1000);
//     }
// }

// // Почати гру
// // spawnSun();
