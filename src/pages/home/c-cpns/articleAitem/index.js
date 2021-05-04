import React, { memo, useState } from "react";
import { HomeArticleItem } from "./style";
import { handleTimeStamp } from "@/utils/format.js";
import {
  ScheduleOutlined,
  MessageOutlined,
  FireOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useRef } from "react";

export default memo(function ArticleItem(props) {

  const { item, btnClick, io, index, homeFontColor, isShow } = props;
  const HomeArticleItemRef = useRef();

  useEffect(() => {
    if (io) {
      io.observe(HomeArticleItemRef.current)
    }
  }, [io])
  // const [isShow, setIsShow] = useState(false)
  return (
    <HomeArticleItem
      ref={HomeArticleItemRef}
      homeFontColor={homeFontColor}
      isShow={isShow}
      className={`homeItem${index}`}
    >
      {item.articleType == 1 && <div className="bat">实战</div>}

      <div onClick={() => btnClick(item.article_id)}>
        <h2 className="title">{item.title}</h2>
        <div className="article_info">
          {item.isTop === "1" && (
            <div className="page_top">
              <ToTopOutlined></ToTopOutlined> 本页置顶
            </div>
          )}
          <div className="time">
            <ScheduleOutlined
              style={{ color: "lightseagreen", fontSize: "16px" }}
            />
            {handleTimeStamp(item.createTime)}
          </div>

          {item.tags.map((item2) => {
            return (
              <span
                key={item2.tag_id}
                className="tag_item"
                style={{ backgroundColor: item2.tag_color }}
              >
                {item2.tag_name}
              </span>
            );
          })}

          <div className="readingCount">
            <FireOutlined style={{ fontSize: "16px", color: "red" }} />{" "}
            {item.readingCount}
          </div>
          <div className="commentCount">
            <MessageOutlined style={{ fontSize: "16px" }} /> {item.commentCount}
          </div>
        </div>
        {item.faceUrl && (
          <div className="image_box flex-wrap">
            <img src={isShow ? item.faceUrl : "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb75fc5b61441db0de8f3caeba20275e8107d270811b329-QsLrXX_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622022562&t=c327623c796967e46b8c053abd1c37f3"} alt="" />
          </div>
        )}
        <div className="des">{item.des}</div>
        <div className="view_all"></div>
      </div>
    </HomeArticleItem>
  );
});
