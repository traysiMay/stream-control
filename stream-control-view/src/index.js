import "./index.css";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  SphereGeometry
} from "three";
import io from "socket.io-client";
const socket = io.connect("ws://localhost:4000");
buildNames();
let namesClasses;
function buildNames() {
  document.body.innerHTML = "";
  const namesContainer = document.createElement("div");
  namesContainer.id = "names-container";
  document.body.appendChild(namesContainer);
  namesClasses = ["first", "second", "third"];
  namesClasses.map(nc => {
    const names = document.createElement("div");
    names.id = nc;
    names.className = "names";
    names.innerHTML = nc;
    namesContainer.appendChild(names);
  });
}

socket.on("new_names", newNames => {
  const { first, second, third } = newNames;
  const namesArray = [first, second, third];
  namesClasses.forEach((n, i) => {
    document.querySelector(`#${n}`).innerHTML = namesArray[i];
  });
});

socket.on("change_view", newView => {
  if (newView !== "names") {
    document.body.innerHTML = "ORB TIME";
    buildThree();
  } else {
    buildNames();
  }
});

socket.on("slider", slider => {
  val = slider;
});

let val = 1;
function buildThree() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  document.body.appendChild(renderer.domElement);

  const geometry = new SphereGeometry(1, 5, 5);
  const material = new MeshBasicMaterial({ color: 0xff0000 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.scale.x = val / 10;
    cube.scale.y = val / 10;
    cube.scale.z = val / 10;
  }
  animate();
}
