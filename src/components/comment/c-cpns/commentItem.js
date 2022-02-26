/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useEffect, createElement, useCallback } from "react";
import { Modal, Input, Comment, Tooltip, Avatar, message } from "antd";
import { CommentItemWrap } from "./style";
import { getArticleCommentListAction, changeArticleCommentListAction, } from "@/pages/detail/store/actionCreators";
import { LikeOutlined, LikeFilled, DeleteOutlined } from "@ant-design/icons";
import { handleTimeString } from "@/utils/format.js";
import { addComment } from "@/network/detail";
import { updateComment, deleteComment } from "@/network/interact";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators"
import { SelfSelector } from "@/utils/common";
const { TextArea } = Input;
export default memo(function CommentItem(props) {
  const { item, article_id, levelId, type3, io, index, isShow } = props;
  const [visible, setVisible] = useState(false);
  const [likes, setLikes] = useState(item.likeCount);
  const [canBit, setCanBit] = useState(0);
  const [action, setAction] = useState(null);
  const [comment, setComment] = useState("");
  const CommentRef = useRef();


  const showModal = useCallback(() => {
    setVisible(true);
  }, []);
  const { commentList } = SelfSelector({ detail: "commentList" })
  const deleteComent = useCallback(() => {
    dispatch(changeMainLoadingAction(true))
    //使用dispatch来删除评论
    deleteComment({ themeId: article_id, ...item }).then(res => {
      dispatch(changeMainLoadingAction(false))
      const { type } = res.data
      if (type) {
        message.success(res.message)
        // 两种情况 第一种是第一级评论
        if (item.levelId === -1) {
          const index = commentList.findIndex(comment => {
            return item.id === comment.id
          })
          commentList.splice(index, 1)
        } else {
          //先找到l
          const levelIndex = commentList.findIndex(comment => {
            return comment.id === item.levelId
          })
          const levelList = commentList[levelIndex].children;
          const index = levelList.findIndex(comment => {
            return comment.id === item.id
          })
          levelList.splice(index, 1)
        }
        dispatch(changeArticleCommentListAction([...commentList]))
      } else {
        message.error(res.message)
      }


    })
  }, [])

  //hooks
  const dispatch = useDispatch();
  const hideModal = (type) => {
    if (type === 1) {
      //发送请求
      addComment({
        themeId: article_id,
        comment,
        fatherId: item.userId,
        userId: localStorage.getItem("userId"),
        levelId,
        area: localStorage.getItem("position"),
        email: localStorage.getItem("email"),
        qq: item.qq,
        aimComment: item.comment,
        type: 0,
        type3: type3
      }).then((res) => {
        const type = res.data.type;
        const Message = res.message;
        if (type) {
          //重新发一次请求
          dispatch(getArticleCommentListAction(article_id, type3 ? 1 : 0, 10, 1));
          message.success(Message);
          setComment("");
          //重新发一次请求
        } else {
          message.error(Message);
        }
      });
    }
    setVisible(false);
  };

  const like = () => {
    if (canBit === 0) {
      setCanBit(1);
      setLikes(likes + 1);
      updateComment(item.id).then((res) => {
        const type = res.data.type;
        const Message = res.message;
        if (type) {
          message.success(Message);
        } else {
          message.error(Message);
        }
      });
      setAction("liked");
    }
  };

  const CommentChange = (e) => {
    setComment(e.target.value);
  };

  const actions = [

    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,

    <span
      key="comment-basic-reply-to"
      onClick={() => showModal()}
      style={{ color: "#1890FF" }}
    >
      回复
    </span>,
    <span
      key="comment-basic-reply-to"
      onClick={() => deleteComent()}
      style={{ color: "#1890FF" }}
    >
      删除<DeleteOutlined />
    </span>,
  ];

  return (
    <CommentItemWrap ref={CommentRef} isShow={isShow} className={['shy-comment', `commentItem${index}`].join(" ")}>
      <Comment
        actions={actions}
        author={
          // 这些样式应该都放到style里面去
          <span style={{ fontSize: "12px", color: "#ff5777" }} href="#">
            {item.username}
            {item.type === '1' && <span className="upPerson">博主</span>}
          </span>
        }
        avatar={
          <Avatar className="avatar" src={item.qqurl} alt={item.username} />
        }
        content={
          <>
            {item.fathername && (
              <span className="comment_father">@{item.fathername}:</span>
            )}
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: item.comment }}
            ></div>
          </>
        }
        datetime={
          <Tooltip title={item.commentTime}>
            <span>{handleTimeString(item.commentTime)}</span>
            <span style={{ marginLeft: "5px" }}>{item.area}</span>
          </Tooltip>
        }
      />
      <Modal
        title="输入您想说的话~"
        visible={visible}
        onOk={() => hideModal(1)}
        onCancel={() => hideModal(2)}
        okText="确认"
        cancelText="取消"
      >
        <Input
          placeholder={`回复@${item.username}`}
          style={{ borderRadius: "5px" }}
          disabled={true}
        />
        <TextArea
          value={comment}
          rows={4}
          onChange={(e) => CommentChange(e)}
          style={{ marginTop: "10px", borderRadius: "5px" }}
        />
        <div> <span style={{ color: "#ec5328" }}>(tip:支持markdown语法)</span></div>

      </Modal>
    </CommentItemWrap>
  );
});
