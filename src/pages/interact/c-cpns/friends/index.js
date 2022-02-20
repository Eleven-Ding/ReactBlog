import React, { memo } from "react";
import { FriendItemList } from "./style";
import FriendItem from '../friendItem'
import { SelfSelector } from "@/utils/common";
export default memo(function FriendLink(props) {
  const { friends } = props;
  const { homeFontColor } = SelfSelector({
    home: 'homeFontColor'
  }
  );
  return (
    <FriendItemList >
      {friends &&
        friends.map((friend, index) => {
          return (
            <FriendItem friend={friend} homeFontColor={homeFontColor} key={friend.id} index={index}></FriendItem>
          );
        })}
    </FriendItemList>
  );
});
