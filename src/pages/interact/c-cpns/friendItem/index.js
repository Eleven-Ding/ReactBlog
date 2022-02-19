import React, { memo } from "react";
import { FriendItemWrap } from './style'
import { getPreviewImgUrl } from "@/utils/format";
export default memo(function FriendItem(props) {
  const { friend, index, homeFontColor } = props;
  const jump_link = (link) => {
    window.open(link);
  };
  return (
    <FriendItemWrap
      index={index}
      className="friend-item"
      onClick={() => jump_link(friend.url)}
      key={friend.id}
    >
      <div className="left_wrap">
        <div className="title" title={friend.friendTitle}>
          <div style={{ color: homeFontColor }}>{friend.friendTitle}</div>
        </div>
        <div className="des">
          <div>{friend.description}</div>
        </div>
      </div>
      <img className="avat" src={getPreviewImgUrl(friend.avaUrl, { w: 100, q: 80 })} alt="" />
    </FriendItemWrap>
  );
});
