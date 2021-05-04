import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  friends: [],
  commentList: [],
  ThrowEmail: false,
  hotComments: [], //热门评论
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FRIEND_LINK:
      return state.set("friends", action.friends);
    case actionTypes.CHANGE_INTERACT_COMMENTS:
      return state.set("commentList", action.commentList);
    case actionTypes.CHANGE_HOT_COMMENTS:
      return state.set("hotComments", action.hotComments);
    default:
      return state;
  }
}
export default reducer;
