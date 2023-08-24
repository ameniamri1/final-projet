import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const atomGeometry = new THREE.SphereGeometry(1, 32, 32);
const protonMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const neutronMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

const proton = new THREE.Mesh(atomGeometry, protonMaterial);
const neutron = new THREE.Mesh(atomGeometry, neutronMaterial);
const nucleus = new THREE.Group();

nucleus.add(proton);
nucleus.add(neutron);

proton.position.x = -0.5;
neutron.position.x = 0.5;

scene.add(nucleus);

camera.position.z = 5;

let fusionInProgress = false;

const animate = () => {
  requestAnimationFrame(animate);

  if (fusionInProgress) {
    nucleus.scale.x += 0.005;
    nucleus.scale.y += 0.005;
    nucleus.scale.z += 0.005;
  }

  renderer.render(scene, camera);
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'f' && !fusionInProgress) {
    fusionInProgress = true;
  }
});

animate();



