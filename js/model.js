  // Створення сцени
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Додавання освітлення
  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  // Завантаження моделі
  const loader = new THREE.GLTFLoader();
  loader.load('untitled.glb', function (gltf) {
      scene.add(gltf.scene);
  }, undefined, function (error) {
      console.error(error);
  });

  camera.position.z = 5;

  // Анімація
  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  }
  animate();