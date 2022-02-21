import React, { memo, useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  getArticleDetailAction,
  getArticleCommentListAction,
  changeAnchorListAction,
} from "./store/actionCreators";
import { DetailWrapper } from "./style";
import { Divider, Button, message, Popover } from "antd";
import { TagsOutlined } from "@ant-design/icons";
import { changeArticleReadingCount, addComment } from "@/network/detail";
import { handleTimeStamp } from "@/utils/format.js";
import Comment from "@/components/comment";
import {
  changeHomePageAction,
  changeTagIdAction,
} from "@/pages/home/store/actionCreators";
import {
  ScheduleOutlined,
  MessageOutlined,
  RiseOutlined,
  RedEnvelopeOutlined,
  QqOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import MyAnchor from "@/pages/detail/cpns/anchor";
import { SelfSelector } from "@/utils/common";
import { changeScrollTop } from "../main/store/actionCreators";
import { BlogTheme } from "@/constant";
import { getNodeInfo } from "@/utils/common";
import { blogImgUrls } from "@/constant";
const { TextArea } = Input;
const payImgStyle = { width: "100px", height: "100px" }
const dividerStyle = { color: "#3c78d8", fontSize: 18 }
export default memo(function ArticleDetail(props) {
  const mdRef = useRef();
  const article_id = props.location.pathname.split("/")[2];
  const [comment, setComment] = useState("");
  //分页 每一页的数据
  const [limit, setLimit] = useState(10);
  //hooks
  const { articleDetail, theme, commentList } = SelfSelector({
    detail: ['articleDetail', 'commentList'],
    header: 'theme'
  });
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(changeScrollTop(0))
  }, [dispatch])
  useEffect(() => {
    dispatch(getArticleDetailAction(article_id));
    //更新文章的浏览量
    changeArticleReadingCount(article_id);
    //获取文章的评论列表
    dispatch(getArticleCommentListAction(article_id, 0, limit, 1));
  }, [dispatch, article_id, limit]);
  useEffect(() => {
    const HList = mdRef.current.querySelectorAll("h1,h2,h3,h4,h5");
    const AnchorArray = getNodeInfo(HList);
    dispatch(changeAnchorListAction(AnchorArray));
    //更改文章标题
  }, [articleDetail, dispatch]);


  const submitComment = () => {
    addComment({
      themeId: article_id,
      comment,
      fatherId: -1,
      userId: localStorage.getItem("userId"), //这里到时候登陆成功会返回一个id
      levelId: -1, //从这里发出的评论的levelId都是-1
      area: localStorage.getItem("position"),
      type: 0,
    }).then((res) => {
      const Message = res.message;
      const type = res.data.type;
      if (type) {
        dispatch(getArticleCommentListAction(article_id, 0, limit, 1));
        message.success(Message);
        setComment("");
      } else {
        message.error(Message);
      }
    });
  };

  const TextAreaChange = (e) => {
    setComment(e.target.value);
  };

  //handle
  const handleTagClick = (tag) => {
    dispatch(changeTagIdAction(tag.tag_id));
    dispatch(changeHomePageAction(1));
    window.scrollTo(0, 0);
    props.history.push("/home");
  };
  const showMoreComment = () => {
    dispatch(getArticleCommentListAction(article_id, 0, limit + 10, 1));
    setLimit(limit + 10);
  };
  const { tags = [] } = articleDetail || [];
  return (
    <DetailWrapper homeFontColor={BlogTheme[theme].homeFontColor}>
      <div className="detail_header">
        <div
          className="home"
          onClick={() => {
            props.history.push("/home");
          }}
        >
          首页 &nbsp;
        </div>
        <div> / {articleDetail.title}</div>
      </div>
      <div className="detail_all_info">
        <div className="detail_title">{articleDetail.title}</div>
        <div className="detail_info">
          <div className="time">
            <div></div>
            <ScheduleOutlined
              style={{ color: "lightseagreen", fontSize: "16px" }}
            />
            {handleTimeStamp(articleDetail.createTime)}
          </div>
          <div className="readingCount">
            <RiseOutlined style={{ fontSize: "16px", color: "red" }} />
            {articleDetail.readingCount}
          </div>
          <div className="commentCount">
            <MessageOutlined style={{ fontSize: "16px" }} />
            {articleDetail.commentCount}
          </div>
        </div>
        {articleDetail.faceUrl && (
          <div className="detail_image">
            <img
              src={articleDetail.faceUrl}
              alt="兴趣使然的前端技术小站"
              title="兴趣使然的前端技术小站"
            />
          </div>
        )}
        {articleDetail.audioUrl && (
          <div className="audio">
            <Divider orientation="center" style={{ color: "#3c78d8" }}>
              视频介绍
            </Divider>
            <video controls="controls" src={articleDetail.audioUrl}></video>
          </div>
        )}
      </div>
      <Divider orientation="center" style={dividerStyle}>
        description
      </Divider>
      <div style={{ color: "#6B6A6A", padding: "10px" }}>
        {articleDetail.des}
      </div>
      <div className="AnchorMenu">
        <MyAnchor isShow={false}></MyAnchor>
      </div>
      <Divider orientation="center" style={dividerStyle}>
        正文
      </Divider>
      <div
        ref={mdRef}
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: articleDetail.html }}
      ></div>

      <hr />
      <div className="article_tags">
        <div className="article_tags_container">
          <TagsOutlined style={{ fontSize: "23px", color: "#1890FF" }} />
          {tags.map((item) => {
            return (
              <span
                onClick={() => handleTagClick(item)}
                key={item.tag_id}
                className="tag_item"
                style={{ backgroundColor: item.tag_color }}>
                {item.tag_name}
              </span>
            );
          })}
        </div>
        <div className="modifyTime">
          最后修改于:{handleTimeStamp(articleDetail.modifyTime)}
        </div>
      </div>
      <Divider orientation="center" style={{ fontSize: "30px" }}>
        <Popover
          content={
            <div>
              <img
                alt=""
                style={payImgStyle}
                src={blogImgUrls.wepay}
              />
              <img
                alt=""
                style={payImgStyle}
                src={blogImgUrls.airpay}
              />
            </div>
          }
          title="打赏...谢谢老板！"
        >
          <RedEnvelopeOutlined
            style={{ color: "#ff5777", padding: "0 10px" }}
          />
        </Popover>
        <Popover
          content={
            <img alt="" src={blogImgUrls.qq} />
          }
          title="我的QQ"
        >
          <QqOutlined style={{ color: "#1B92FF", padding: "0 10px" }} />
        </Popover>
        <Popover
          content={
            <img alt="" src={blogImgUrls.wechat} />
          }
          title="我的微信"
        >
          <WechatOutlined style={{ color: "#1CD66C", padding: "0 10px" }} />
        </Popover>
      </Divider>
      {/* 下面是评论 组件传一个数组进去*/}

      < div className="comment_input_wrap" >
        <div className="input_and_submit" style={{ textAlign: "right" }}>
          <hr className="parting-line" />
          <div className="dsy_tip">可以在这里发表您的看法或则建议<span style={{ color: "#ec5328" }}>(支持markdown语法)</span></div>
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
            onClick={() => submitComment()}
            style={{ marginTop: "15px" }}
            type="primary"
          >
            提交评论
          </Button>
        </div>
        {Number(articleDetail.openComment) === 1 ? (
          <div>
            <Comment
              commentList={commentList}
              article_id={article_id}
            ></Comment>
          </div>
        ) : (
          <h3>本文章关闭了评论回复权限</h3>
        )}
      </div >
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
    </DetailWrapper >
  );
});
