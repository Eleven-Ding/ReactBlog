import React, { memo } from "react";
import { ShareListWrap } from "./style";
import ShareItem from "../shareItem";
export default memo(function ShareList(props) {
  //state and props
  const { shareList } = props;
  return (
    <ShareListWrap>
   <div>Here,You Can Share Your Thoughts With Us</div>
      <div className="list">
        {shareList &&
          shareList.map((item) => {
            return <ShareItem key={item.id} item={item}></ShareItem>;
          })}
      </div>
    </ShareListWrap>
  );
});
