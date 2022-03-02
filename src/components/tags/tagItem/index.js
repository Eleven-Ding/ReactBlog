import React, { memo, useCallback } from "react";
import { TagItemWrap } from "./style";
import {
  changeHomePageAction,
  changeTagIdAction,
} from "@/pages/home/store/actionCreators";
import { withRouter } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { Tag } from "antd";
export default withRouter(memo(function TagItem(props) {
  const { tag } = props;
  const dispatch = useDispatch();
  const handleTagClick = useCallback(() => {
    dispatch(changeTagIdAction(tag.tag_id));
    dispatch(changeHomePageAction(1));
    window.scrollTo(0, 0)
    props.history.push("/home");
  }, [dispatch, props.history, tag.tag_id]);
  return (
    <TagItemWrap color={tag.tag_color} fontColor={props.color} >
      <Tag color={tag.tag_color} onClick={handleTagClick}>{tag.tag_name}</Tag>
    </TagItemWrap>
  );
}));
