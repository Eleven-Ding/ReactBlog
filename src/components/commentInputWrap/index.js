import React, { memo } from "react";
import Comment from "@/components/comment";
import { Input, Button } from "antd";

import { CommentInputWraper } from "./style";
const { TextArea } = Input;
export default memo(function CommentInputWrap({ TextAreaChange, submitComment, articleDetail, article_id, showMoreComment, comment, commentList, type3 }) {


  return <CommentInputWraper>
    < div className="comment_input_wrap" >
      <div className="input_and_submit" style={{ textAlign: "right" }}>
        {articleDetail && <div className="dsy_tip">可以在这里发表您的看法或则建议<span style={{ color: "#ec5328" }}>(支持markdown语法)</span></div>}
        <TextArea
          style={{
            background:
              "url(https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/comment.png) right bottom no-repeat",
          }}
          placeholder="请输入内容"
          rows={5}
          onChange={(e) => TextAreaChange(e)}
          value={comment}
        />
        <Button
          onClick={submitComment}
          style={{ marginTop: "15px" }}
          type="primary"
        >
          提交评论
        </Button>
      </div>
      {!articleDetail || Number(articleDetail.openComment) === 1 ? (
        <div>
          <Comment
            commentList={commentList}
            article_id={article_id}
            type3={type3}
          ></Comment>
          <p
            style={{
              textAlign: "center",
              color: "#1890FF ",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => showMoreComment()}
          >
            查看更多留言。。。
          </p>
        </div>
      ) : (
        <h3>本文章关闭了评论回复权限</h3>
      )}
    </div >
  </CommentInputWraper>
})