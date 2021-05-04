import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  shareList:[]
});

function reducer(state = defaultState, action) {
  switch (action.type) {
   case actionTypes.CHANGE_SHARE_LIST:
     return state.set("shareList",action.shareList)
    default:
      return state;
  }
}
export default reducer;
