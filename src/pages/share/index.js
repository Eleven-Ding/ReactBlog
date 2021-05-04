import React, { memo, useState } from "react";
import { ShareWrap } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import { getShareAction } from "@/pages/share/store/actionCreators";
import ShareList from "./cpns/shareList";
import ShareUpload from "./cpns/upload";

export default memo(function Share() {
  const [limit, setLimit] = useState(10);
  //hooks
  const dispatch = useDispatch();
  useEffect(() => {
    document.title="故事分享╭（′▽‵）╭（′▽‵）╯嗨森"
    dispatch(changMainMoveRight(true));
    //获取分享列表

    dispatch(getShareAction(limit, 1, 0, 1));
  }, [dispatch]);

  const { shareList } = useSelector(
    (state) => ({
      shareList: state.getIn(["share", "shareList"]),
    }),
    shallowEqual
  );

  //handle
  const showMore=()=>{
    dispatch(getShareAction(limit+5, 1, 0, 1));
    setLimit(limit+10)
  }

  //handle
  return (
    <ShareWrap>
      <ShareList shareList={shareList}></ShareList>

      <div className="showMore" onClick={()=>showMore()}>查看更多分享....</div>
      <hr/>

      <p>你好,陌生人.每个人都有欢乐和孤独,有些话,我觉得可以在这里说出来,当成一个发泄的方式!</p>
      <ShareUpload></ShareUpload>
    </ShareWrap>
  );
});
