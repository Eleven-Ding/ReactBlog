import { ItemWrap } from "./style";
import React, { memo, useState } from "react";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import { MessageOutlined, LikeFilled, ExpandOutlined } from "@ant-design/icons";
import { handleTimeString } from "@/utils/format";
import { updateLike } from "@/network/share";
export default withRouter(
  memo(function ShareItem(props) {
    const { item } = props;
    const [likeCount, setLikeCount] = useState(item.like);
    const [first, setFirst] = useState(1);
    //handle
    const goToShareDetail = () => {
      const { id } = item;
      props.history.push(`/shareDetail?id=${id}`);
    };
    const like = () => {
      if (first) {
        const { id } = item;
        updateLike(id).then((res) => {
          const type = res.data.type;
          const Message = res.message;
          if (type) {
            setLikeCount(likeCount + 1);
            message.success(Message);
          } else {
            message.error(Message);
          }
        });
        setFirst(0);
      }
    };
    return (
      <ItemWrap>
        <div className="top">
          <div className="top_left">
            <img src={item.userInfo.qqurl} alt="" />
          </div>
          <div className="top_right">
            <div className="username">{item.userInfo.username}</div>
            <div className="time">{handleTimeString(item.createTime)}</div>
          </div>
        </div>

        <div className="bottom">
          <div className="des">{item.des}</div>
          <div className="img">
            <img src={item.url} alt="" />
          </div>
          <div className="info">
            <div>
              <span onClick={() => like()}>
                <LikeFilled style={{ color: "#ff5777" }} />
                {likeCount}
              </span>
              <span>
                <MessageOutlined />
                {item.commentCount}
              </span>
            </div>
            <div className="expand" onClick={() => goToShareDetail()}>
              <ExpandOutlined />
            </div>
          </div>
        </div>
      </ItemWrap>
    );
  })
);
