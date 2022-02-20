import React, { memo } from "react";
import { DrawerFriendWrap } from "./style";
import { Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { SelfSelector } from "@/utils/common";
export default withRouter(memo(function DrawerFriend(props) {
  const { friends, HoverColor } = SelfSelector({
    interact: "friends",
    header: "HoverColor"
  });
  //handle
  const apply = () => {
    props.onClose()
    props.history.push('/interact')
  }
  return (
    <DrawerFriendWrap>
      <h3 style={{ color: HoverColor }}>友情链接</h3>
      {friends &&
        friends.map((item) => {
          return (
            <div key={item.id} className="drawerItem">
              <a href={item.url}>{item.friendTitle}</a>
            </div>
          );
        })}
      <Button onClick={() => apply()} size="small" style={{ backgroundColor: "#FF7CAA", color: "white", marginTop: "12px" }}>申请友链</Button>
    </DrawerFriendWrap>
  );
}));
