import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  imgList: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_RECORD_LIST:
      return {...state,imgList:action.payload}
      default:
        return state
  }
}
export default reducer;
