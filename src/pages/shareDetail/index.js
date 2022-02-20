/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getShareDetailAction } from "./store/actionCreators";
import { handleTimeString } from "@/utils/format";
import { ShareDetailWrap } from "./style";
import { getArticleCommentListAction } from "../detail/store/actionCreators";
import { Button, Input, message } from "antd";
import { addComment } from "@/network/detail";
import Comment from "@/components/comment";
import { SelfSelector } from "@/utils/common";
const { TextArea } = Input;
export default memo(function ShareDetail(props) {
  //state and props
  const id = props.location.search.split("=")[1];
  const [limit, setLimit] = useState(10);
  const [comment, setComment] = useState("");
  const [ban, setBan] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "故事感悟(*•̀ᴗ•́*)و ̑̑ "
    dispatch(getShareDetailAction(id));
    //获取评论
    dispatch(getArticleCommentListAction(id, 1, limit, 1));
  }, [dispatch]);

  const { shareDetail, commentList } = SelfSelector({
    shareDetail: 'shareDetail',
    detail: 'commentList'
  });

  const username = shareDetail.userInfo ? shareDetail.userInfo.username : "";
  const qqurl = shareDetail.userInfo ? shareDetail.userInfo.qqurl : "";

  //handle
  const submitComment = () => {
    setBan(false);
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
        //重新发一次请求
        // dispatch(getArticleCommentListAction(-1, 0, limit, 1));
        message.success(Message);
        setComment("");
        dispatch(getArticleCommentListAction(id, 1, limit, 1));
        //重新发一次请求
      } else {
        message.error(Message);
      }
      setBan(true);
    });
  };
  const TextAreaChange = (e) => {
    setComment(e.target.value);
  };
  const showMoreComment = () => {
    dispatch(getArticleCommentListAction(id, 1, limit + 11, 1));
    setLimit(limit + 11);
  };
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
        <TextArea
          style={{
            background:
              "url(https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/comment.png) right bottom no-repeat",
          }}
          placeholder="请输入内容"
          rows={5}
          onChange={(e) => TextAreaChange(e)}
          value={comment}
        />
        <div className="operation">
          <Button
            disabled={ban ? "" : "disabled"}
            onClick={() => submitComment()}
            type="primary"
          >
            提交评论
          </Button>
        </div>
      </div>
      <Comment commentList={commentList} article_id={id} type3={1}></Comment>
      <p
        style={{ textAlign: "center", color: "#1890FF ", marginTop: "20px", cursor: "pointer" }}
        onClick={() => showMoreComment()}
      >
        查看更多留言。。。
      </p>
    </ShareDetailWrap>
  );
});
