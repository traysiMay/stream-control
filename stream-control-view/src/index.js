const io = require("socket.io-client");
const socket = io.connect("ws://localhost:4000");

const number = document.createElement("div");
document.body.appendChild(number);

socket.on("m", m => {
  number.innerHTML = m;
});
