import React, { memo } from "react";
import { FriendItemList } from "./style";
import FriendItem from '../friendItem'
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
export default memo(function FriendLink(props) {
  const { friends } = props;
  const { theme } = SelfSelector({
    header: 'theme'
  }
  );
  return (
    <FriendItemList >
      {friends &&
        friends.map((friend, index) => {
          return (
            <FriendItem friend={friend} homeFontColor={BlogTheme[theme].homeFontColor} key={friend.id} index={index} ></FriendItem>
          );
        })}
    </FriendItemList >
  );
});
