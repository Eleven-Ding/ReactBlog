import React, { memo, useState, createElement } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Comment, Tooltip, Avatar } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { HotCommentsWrap } from "./style";
// import { useRef } from "react";
import { useEffect } from "react";
import { changeHotCommentsAction } from "../../pages/interact/store/actionCreators";
export default memo(function HotComment(props) {
  //state and props
  const { homeFontColor } = props;
  const [height, setHeight] = useState(0);
  const [timer, setTimer] = useState(null);
  //Hooks
  const dispatch = useDispatch();
  const { hotComments } = useSelector(
    (state) => ({
      hotComments: state.getIn(["interact", "hotComments"]),
    }),
    shallowEqual
  );
  //handle

  const actions = [];

  useEffect(() => {
    //height变了 就setComments
    const array = [...hotComments];
    const item = array.shift();

    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        if (item) {
          array.push(item);
          setHeight(0);
          dispatch(changeHotCommentsAction(array));
        }
      }, 3000)
    );
    return () => {
      clearTimeout(timer)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);
  useEffect(() => {
    const list = document.getElementsByClassName("hot_comment_item");
    // console.log(list.length);
    if (list[0]) {
      let p = 0;
      if (height === list[0].clientHeight) p = 0.1;
      setHeight(list[0].clientHeight + p);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotComments]);
  return (
    <HotCommentsWrap height={height} >
      <div className="hot"
        style={
          { color: homeFontColor }
        }>
        Hot 评论
      </div>
      <div className="hot_comment_list" > {
        hotComments &&
        hotComments.map((item, index) => {
          return (
            <Comment key={item.id}
              className="hot_comment_item"
              actions={actions}
              author={
                <a style={{ color: "#1890FF" }} >
                  {item.username}
                </a>}
              avatar={
                <Avatar src={item.qqurl} alt={item.username} />}
              content={
                <div
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: item.comment }}
                ></div>
              }
              datetime={
                <Tooltip key="comment-basic-like"
                  title="点赞次数" >
                  <span style={
                    { fontSize: "13px", color: " #209d7b" }
                  }>
                    {createElement(LikeOutlined)}
                    <span className="comment-action" > {item.likeCount} </span>
                  </span >
                </Tooltip>
              }
            />
          );
        })
      } </div>
    </HotCommentsWrap >
  );
});