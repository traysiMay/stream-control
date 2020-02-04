import './index.css'
import io from "socket.io-client"
const socket = io.connect("ws://localhost:4000");

const namesContainer = document.createElement("div")
namesContainer.id = "names-container"
document.body.appendChild(namesContainer)
const namesClasses = ['first', 'second', 'third']
namesClasses.map(nc => {
  const names = document.createElement("div");
  names.id = nc
  names.className = 'names'
  names.innerHTML = nc
  namesContainer.appendChild(names);
})


socket.on("new_names", newNames => {
  const { first, second, third } = newNames
  const namesArray = [first, second, third]
  namesClasses.forEach((n, i) => {
    document.querySelector(`#${n}`).innerHTML = namesArray[i]
  })
});
