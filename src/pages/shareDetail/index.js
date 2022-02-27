/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getShareDetailAction } from "./store/actionCreators";
import { handleTimeString } from "@/utils/format";
import { ShareDetailWrap } from "./style";
import { getArticleCommentListAction } from "../detail/store/actionCreators";
import { message } from "antd";
import { addComment } from "@/network/detail";
import { SelfSelector } from "@/utils/common";
import CommentInputWrap from "@/components/commentInputWrap";
export default memo(function ShareDetail(props) {
  //state and props
  const id = props.location.search.split("=")[1];
  const [limit, setLimit] = useState(10);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShareDetailAction(id));
    dispatch(getArticleCommentListAction(id, 1, limit, 1));
  }, [dispatch]);

  const { shareDetail, commentList } = SelfSelector({
    shareDetail: 'shareDetail',
    detail: 'commentList'
  });

  const username = shareDetail.userInfo ? shareDetail.userInfo.username : "";
  const qqurl = shareDetail.userInfo ? shareDetail.userInfo.qqurl : "";

  const submitComment = () => {
    addComment({
      themeId: id,
      comment,
      fatherId: -1,
      userId: localStorage.getItem("userId"),
      levelId: -1,
      area: localStorage.getItem("position"),
      type: 0,
      type3: 1,
    }).then((res) => {
      const Message = res.message;
      const type = res.data.type;
      if (type) {
        message.success(Message);
        setComment("");
        dispatch(getArticleCommentListAction(id, 1, limit, 1));
      } else {
        message.error(Message);
      }
    });
  };
  const TextAreaChange = (e) => {
    setComment(e.target.value);
  };
  const showMoreComment = useCallback(() => {
    dispatch(getArticleCommentListAction(id, 1, limit + 11, 1));
    setLimit(limit + 11);
  }, [limit]);
  return (
    <ShareDetailWrap>
      {ShareDetail && (
        <div className="top_info">
          <div className="top">
            <div className="top_left">
              <img src={qqurl} alt="" />
            </div>
            <div className="top_right">
              <div className="username">{username}</div>
              <div className="time">
                {handleTimeString(shareDetail.createTime)}
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="des">{shareDetail.des}</div>
            <div className="img">
              <img src={shareDetail.url} alt="" />
            </div>
          </div>
        </div>
      )}
      <div style={{ marginTop: "30px" }}>
        <div style={{ "textAlign": "center" }}> <h2>欢迎留言评论</h2> <span style={{ color: "#ec5328" }}>(支持markdown语法)</span></div>
        <CommentInputWrap
          TextAreaChange={TextAreaChange}
          comment={comment}
          showMoreComment={showMoreComment}
          submitComment={submitComment}
          commentList={commentList}
          article_id={id}
          type3={1}
        />
      </div>
    </ShareDetailWrap>
  );
});
