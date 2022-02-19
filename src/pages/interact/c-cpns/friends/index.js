import React, { memo } from "react";
import { FriendItemList } from "./style";
import { useSelector, shallowEqual } from "react-redux";
import FriendItem from '../friendItem'
export default memo(function FriendLink(props) {
  const { friends } = props;
  const { homeFontColor } = useSelector(
    (state) => ({
      homeFontColor: state.getIn(["home", "homeFontColor"]),
    }),
    shallowEqual
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
