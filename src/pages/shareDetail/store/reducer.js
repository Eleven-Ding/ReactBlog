import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  shareDetail: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SHARE_DETAIL:
      return state.set('shareDetail',action.shareDetail)
    default:
      return state;
  }
}
export default reducer;
