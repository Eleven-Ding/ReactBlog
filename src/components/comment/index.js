import React, { memo, useState, useCallback, useEffect } from "react";

import { CommentWrap } from "./style";
import CommentItem from "./c-cpns/commentItem";
import { InterSectionLazyLoad } from "../../middlewares/IntersectionLoad";
export default memo(function Comment(props) {
  const { article_id, commentList, type3 } = props;
  const [isShowArray, setIsShowArray] = useState([])
  const [, updateState] = useState();
  useEffect(() => {
    InterSectionLazyLoad("shy-comment", entry => {
      isShowArray[entry.target.className.split('commentItem')[1]] = true
      setIsShowArray([...isShowArray])
    })
  }, [commentList])
  return (
    <CommentWrap>
      {commentList &&
        commentList.map((item, index) => {
          return (
            <div key={item.id}>
              <CommentItem
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
      {commentList?.length === 0 && (
        <div className="comment_tip">
          <h2>暂时没有评论哦,快来抢沙发٩(๑❛ᴗ❛๑)۶</h2>
        </div>
      )}
    </CommentWrap>
  );
});
