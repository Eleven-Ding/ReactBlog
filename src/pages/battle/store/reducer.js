import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  productionList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PRODUCTION_LIST:
      return state.set("productionList", action.productionList);
    default:
      return state;
  }
}
export default reducer;
