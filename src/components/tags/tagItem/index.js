import React, { memo } from "react";
import { TagItemWrap } from "./style";
import {
  changeHomePageAction,
  changeTagIdAction,
} from "@/pages/home/store/actionCreators";
import { withRouter } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { Tag } from "antd";
export default withRouter(memo(function TagItem(props) {
  const { tag, ThemeColor } = props;
  const fontColor = props.color;
  const dispatch = useDispatch();
  const handleTagClick = () => {

    dispatch(changeTagIdAction(tag.tag_id));
    dispatch(changeHomePageAction(1));
    window.scrollTo(0, 0)
    props.history.push("/home");
  };
  return (
    <TagItemWrap color={tag.tag_color} fontColor={fontColor} ThemeColor={ThemeColor}>
      <Tag color={tag.tag_color} onClick={() => handleTagClick()}>{tag.tag_name}</Tag>
    </TagItemWrap>
  );
}));
