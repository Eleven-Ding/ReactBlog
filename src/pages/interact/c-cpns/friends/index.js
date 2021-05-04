import React, { memo } from "react";
import { FriendItemList } from "./style";
import { useSelector, shallowEqual } from "react-redux";
import FriendItem from '../friendItem'
export default memo(function FriendLink(props) {
  //props

  const { friends } = props;
  const { homeFontColor } = useSelector(
    (state) => ({
      homeFontColor: state.getIn(["home", "homeFontColor"]),
    }),
    shallowEqual
  );
  //handle

  return (
    <FriendItemList >
      {friends &&
        friends.map((friend, index) => {
          return (
            <FriendItem friend={friend} homeFontColor={homeFontColor} key={friend.id} index={index}></FriendItem>
            // <div
            //   className="friend-item"
             
            //   onClick={() => jump_link(friend.url)}
            //   key={friend.id}
            // >
            //   <div className="left_wrap">
            //     <div className="title">
            //       <div style={{color:homeFontColor}}>{friend.friendTitle}</div>
            //     </div>
            //     <div className="des">
            //       <div>{friend.description}</div>
            //     </div>
            //   </div>
            //   <img className="avat" src={friend.avaUrl} alt="" />
            // </div>
          );
        })}
    </FriendItemList>
  );
});
