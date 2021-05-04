import { getFriendLinks, getComments,getHotComment } from "@/network/interact";
import * as actionTypes from "./constants";

//友链
export const getFriendLinksAction = () => {
  return (dispatch) => {
    getFriendLinks().then((res) => {
      dispatch(changeFriendLinksAction(res.data.row));
    });
  };
};

const changeFriendLinksAction = (friends) => {
  return {
    type: actionTypes.CHANGE_FRIEND_LINK,
    friends,
  };
};

//评论留言
export const getInteractComments = () => {
  return (dispatch) => {
    getComments().then((res) => {
      dispatch(changeInteractAction(res.data.CommentArray));
    });
  };
};
const changeInteractAction = (commentList) => {
  return {
    type: actionTypes.CHANGE_INTERACT_COMMENTS,
    commentList,
  };
};


//获取热门评论
export const getHotCommentsAction=()=>{
  return dispatch=>{
    getHotComment().then(res=>{
      // console.log(res);
      dispatch(changeHotCommentsAction(res.data.doc))
    })
  }
}
export const changeHotCommentsAction = (hotComments)=>{
  return {
    type:actionTypes.CHANGE_HOT_COMMENTS,
    hotComments
  }
} 