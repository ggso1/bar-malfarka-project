// Отримуємо контейнер
const container = document.getElementById('container');

// Створюємо сцену, камеру і рендерер
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Включаємо згладжування
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Додаємо освітлення
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Загальне світло
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Завантажуємо GLB-модель
const loader = new THREE.GLTFLoader();
loader.load('untitled.glb', function (gltf) {
    const model = gltf.scene;
    model.position.set(0, -0.5, 0); // Позиція моделі (налаштуйте за необхідності)
    scene.add(model);
}, undefined, function (error) {
    console.error('Помилка завантаження моделі:', error);
});

// Налаштування камери
camera.position.set(0, 1, 3);

// Додаємо OrbitControls для керування камерою (інтерактивність)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Згладжене управління

// Анімація рендерингу
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Оновлення контролів
    renderer.render(scene, camera);
}
animate();

// Адаптація до зміни розміру контейнера
window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
});
