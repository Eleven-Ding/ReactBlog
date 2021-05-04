import React, { memo, useState, useCallback } from "react";

import { CommentWrap } from "./style";
import CommentItem from "./c-cpns/commentItem";
export default memo(function Comment(props) {
  const { article_id, commentList, type3 } = props;
  const [isShowArray, setIsShowArray] = useState(new Array())

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  //IntersectionObserver
  const [io] = useState(
    new IntersectionObserver((entries => {
      // console.log(entries);
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          // entry.target.style.animation = "cssnice .5s ease-out forwards"
          isShowArray[entry.target.className.split('commentItem')[1]] = true
          // console.log(entry.target.className);
          setIsShowArray(isShowArray)
          forceUpdate()
          io.unobserve(entry.target)
        }
      })

    })))
  // 在这里获取到全部的评论
  //hooks
  return (
    <CommentWrap>
      {commentList &&
        commentList.map((item, index) => {
          return (
            <div key={item.id}>
              <CommentItem
                io={io}
                type3={type3}
                index={index}
                isShow={isShowArray[index]}
                levelId={item.id}
                item={item}
                article_id={article_id}
              ></CommentItem>
              <div className="children">
                {item.children.map((item2) => {
                  return (
                    <CommentItem
                      io={io}
                      isShow={isShowArray[index]}
                      type3={type3}
                      article_id={article_id}
                      levelId={item.id}
                      item={item2}
                      key={item2.id}
                    ></CommentItem>
                  );
                })}
              </div>
            </div>
          );
        })}
      {commentList.length === 0 && (
        <div className="comment_tip">
          <h2>暂时没有评论哦,快来抢沙发٩(๑❛ᴗ❛๑)۶</h2>
        </div>
      )}
    </CommentWrap>
  );
});
