import './style.css';
import { Scene, DirectionalLight } from 'three';
import camera from './camera';
import renderer from './renderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new Scene();

const controls = new OrbitControls(camera, renderer.domElement);

const directionalLight = new DirectionalLight(0xffffff, 2);
scene.add(directionalLight);

// const directionalLightHelper = new DirectionalLightHelper(directionalLight);
// scene.add(directionalLightHelper);

const loader = new GLTFLoader();

loader.load('model.glb', gltf => {
  const model = gltf.scene.children[0];
  model.scale.set(0.5, 0.5, 0.5);
  scene.add(gltf.scene);
});

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  controls.update();
}

animate();
