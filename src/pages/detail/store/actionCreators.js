import * as actionTypes from "./constants";
import { getArticleDetail, getArticleComment } from "@/network/detail";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
//获取文章详情
export const getArticleDetailAction = (article_id) => {
  return (dispatch) => {
    dispatch(changeMainLoadingAction(true));
    getArticleDetail(article_id).then((res) => {
      // console.log(res);
      dispatch(changeArticleDetailAction(res.data.article));
      dispatch(changeMainLoadingAction(false));
    });
  };
};
//dispatch文章详情
const changeArticleDetailAction = (articleDetail) => {
  return {
    type: actionTypes.CHANGE_ARTICLE_DETAIL,
    articleDetail,
  };
};

//获取文章评论列表
export const getArticleCommentListAction = (article_id, type, limit, page) => {
  return (dispatch) => {
    dispatch(changeMainLoadingAction(true));
    getArticleComment(article_id, type, limit, page).then((res) => {
      dispatch(changeArticleCommentListAction(res.data.CommentArray));
      dispatch(changeMainLoadingAction(false));
    });
  };
};
//改变评论列表
export const changeArticleCommentListAction = (commentList) => {
  return {
    type: actionTypes.CHANGE_ARTICLE_COMMENT_LIST,
    commentList,
  };
};

//改变锚点数组
export const changeAnchorListAction = (AnchorArray) => {
  return {
    type: actionTypes.CHANGE_ANCHOR_LIST,
    AnchorArray,
  };
};
