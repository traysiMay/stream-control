export const CONNECT = "CONNECT";

export const UPDATE_NAME = "UPDATE_NAME";

export const CHANGE_VIEW = "CHANGE_VIEW";

export const changeView = view => {
  return (dispatch, getState) => {
    dispatch({ type: CHANGE_VIEW, view });
    const state = getState();
    const {
      socket: { socket }
    } = state;
    socket.emit("change_view", view);
  };
};
