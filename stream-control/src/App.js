import React from "react";
import io from "socket.io-client";

const socket = io.connect("ws://localhost:4000");

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          socket.emit("msg", Math.random());
        }}
      ></button>
    </div>
  );
}

export default App;
