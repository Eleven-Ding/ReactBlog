import React, { memo } from "react";
import { TagsWrap } from "./style";
import TagItem from "./tagItem";
import { AntCloudOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
const defaultTag = { tag_id: -1, tag_name: "全部", tag_color: "#00FFB4" }
export default memo(function Tags(props) {

  const { color } = props;
  const { tags, theme } = SelfSelector({
    right: "tags",
    header: 'theme'
  });

  return (
    <TagsWrap>
      <div className="title">
        <span style={{ color: BlogTheme[theme].homeFontColor }}>Tag Cloud</span>
        <AntCloudOutlined style={{ color: BlogTheme[theme].homeFontColor }} />
      </div>
      <div className="tag_list">
        <TagItem
          color={color}
          tag={defaultTag}
        ></TagItem>
        {tags &&
          tags.map((item) => {
            return (
              <TagItem
                color={color}
                key={item.tag_id}
                tag={item}
              ></TagItem>
            );
          })}
      </div>
    </TagsWrap>
  );
});
