import { combineReducers } from "redux";
import io from "socket.io-client";
import { CHANGE_VIEW, UPDATE_NAME, CONNECT } from "./actions";

const socketState = {
  socket: null
};

const socket = (state = socketState, action) => {
  switch (action.type) {
    case CONNECT:
      const socket = io.connect("ws://localhost:4000");
      return { ...state, socket };
    default:
      return state;
  }
};

const namesState = {
  first: null,
  second: null,
  third: null
};

const names = (state = namesState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      const { value, field } = action;
      return { ...state, [field]: value };
    default:
      return state;
  }
};

const viewState = {
  view: "names"
};

const view = (state = viewState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      const { view } = action;
      return { ...state, view };
    default:
      return state;
  }
};

export default combineReducers({ names, view, socket });
