import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  articleDetail: {},
  commentList: [], //评论的数组
  AnchorArray: [], //锚点数组
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLE_DETAIL:
      return state.set("articleDetail", action.articleDetail);
    case actionTypes.CHANGE_ARTICLE_COMMENT_LIST:
      return state.set("commentList", action.commentList);
    case actionTypes.CHANGE_ANCHOR_LIST:
      return state.set("AnchorArray", action.AnchorArray);
    default:
      return state;
  }
}
export default reducer;
