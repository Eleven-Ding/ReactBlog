import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  getArticleDetailAction,
  getArticleCommentListAction,
  changeAnchorListAction,
} from "./store/actionCreators";
import { DetailWrapper } from "./style";
import { Divider, message, Popover } from "antd";
import { TagsOutlined } from "@ant-design/icons";
import { changeArticleReadingCount, addComment } from "@/network/detail";
import { handleTimeStamp } from "@/utils/format.js";
import {
  changeHomePageAction,
  changeTagIdAction,
} from "@/pages/home/store/actionCreators";
import {
  ScheduleOutlined,
  MessageOutlined,
  RiseOutlined,
  QqOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import MyAnchor from "@/pages/detail/cpns/anchor";
import { SelfSelector } from "@/utils/common";
import { changeScrollTop } from "../main/store/actionCreators";
import { BlogTheme } from "@/constant";
import { getNodeInfo } from "@/utils/common";
import { blogImgUrls } from "@/constant";
import CommentInputWrap from "@/components/commentInputWrap";

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


  const submitComment = useCallback(() => {
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
  }, [article_id, comment, dispatch, limit]);

  const TextAreaChange = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  //handle
  const handleTagClick = useCallback((tag) => {
    dispatch(changeTagIdAction(tag.tag_id));
    dispatch(changeHomePageAction(1));
    window.scrollTo(0, 0);
    props.history.push("/home");
  }, [dispatch, props.history]);
  const showMoreComment = useCallback(() => {
    dispatch(getArticleCommentListAction(article_id, 0, limit + 10, 1));
    setLimit(limit + 10);
  }, [article_id, dispatch, limit]);
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
      <CommentInputWrap TextAreaChange={TextAreaChange} submitComment={submitComment} articleDetail={articleDetail} article_id={article_id} showMoreComment={showMoreComment} comment={comment} commentList={commentList} />
    </DetailWrapper >
  );
});
