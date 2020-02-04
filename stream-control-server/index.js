const express = require("express");
const http = require("http");
const io = require("socket.io");

const app = express();
const server = http.createServer(app);
const ws = io(server);

ws.on("connection", socket => {
  socket.on("msg", msg => {
    console.log(msg);
    socket.broadcast.emit("m", msg);
  });
});

server.listen(4000);
