import React, { memo, useCallback } from "react";
import { DrawerFriendWrap } from "./style";
import { Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
const ButtonStyle = { backgroundColor: "#FF7CAA", color: "white", marginTop: "12px" }
export default withRouter(memo(function DrawerFriend(props) {
  const { friends, theme } = SelfSelector({
    interact: "friends",
    header: "theme"
  });
  const apply = useCallback(() => {
    props.onClose()
    props.history.push('/interact')
  }, [props])
  return (
    <DrawerFriendWrap>
      <h3 style={{ color: BlogTheme[theme].HoverColor }}>友情链接</h3>
      {friends &&
        friends.map((item) => {
          return (
            <div key={item.id} className="drawerItem">
              <a href={item.url}>{item.friendTitle}</a>
            </div>
          );
        })}
      <Button onClick={apply} size="small" style={ButtonStyle}>申请友链</Button>
    </DrawerFriendWrap>
  );
}));
