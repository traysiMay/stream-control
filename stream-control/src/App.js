import React from "react";
// import io from "socket.io-client";
import Form from "./Form";
import Nav from "./Nav";
import { connect } from "react-redux";

// const socket = io.connect("ws://localhost:4000");

function App({ view, socket }) {
  console.log(view);
  return (
    <div className="App">
      <Nav />
      {view.view === "names" && <Form />}
      {view.view === "orb" && (
        <div className="slidecontainer">
          <input
            onInput={e => socket.socket.emit("slider", e.target.value)}
            type="range"
            min="1"
            max="100"
            defaultValue="50"
            className="slider"
            id="myRange"
          />
        </div>
      )}
    </div>
  );
}
const mapStateToProps = ({ view, socket }) => ({
  view,
  socket
});
export default connect(mapStateToProps)(App);
