import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  loading: true,
  moveRight: false,
  showLogin: false,
  username: null,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_MAIN_LOADING:
      return state.set("loading", action.loading);
    case actionTypes.CHANGE_MAIN_SCROLL_TOP:
      return state.set("scrollTop", action.scrollTop);
    case actionTypes.CHANGE_MAIN_MOVE_RIGHT:
      return state.set("moveRight", action.moveRight);
    case actionTypes.CHANGE_LOGIN_PANEL_SHOW:
      return state.set("showLogin", action.isShow);
    case actionTypes.CHANGE_USERNAME:
      return state.set("username", action.username);
    default:
      return state;
  }
}
export default reducer;
