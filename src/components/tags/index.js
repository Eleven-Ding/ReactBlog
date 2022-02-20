import React, { memo } from "react";
import { TagsWrap } from "./style";
import TagItem from "./tagItem";
import { AntCloudOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
export default memo(function Tags(props) {

  const { color, ThemeColor } = props;
  const { tags, theme } = SelfSelector({
    right: "tags",
    header: 'theme'
  });

  return (
    <TagsWrap>
      <div className="title">
        <span style={{ color: BlogTheme[theme].homeFontColor }}>标签云</span>
        <AntCloudOutlined style={{ color: BlogTheme[theme].homeFontColor }} />
      </div>
      <div className="tag_list">
        <TagItem
          ThemeColor={ThemeColor}
          color={color}
          tag={{ tag_id: -1, tag_name: "全部", tag_color: "#00FFB4" }}
        ></TagItem>
        {tags &&
          tags.map((item) => {
            return (
              <TagItem
                ThemeColor={ThemeColor}
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
