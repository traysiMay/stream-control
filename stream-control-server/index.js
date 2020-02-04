const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();
const server = http.createServer(app);
const ws = io(server);

ws.on("connection", socket => {
  socket.on("change_names", names => {
    console.log(names);
    socket.broadcast.emit("new_names", names);
  });
});

server.listen(4000);
