import React, { memo } from "react";
import { HotItemWrap } from "./style";
import { Tooltip } from "antd";
export default memo(function HotItem(props) {
  const { item, index, history } = props;
  // console.log(history);
  // props.history.push(`/detail/${id}`);

  //handle
  const goDetail = () => {
    history.push(`/detail/${item.article_id}`);
  }
  return (
    <HotItemWrap index={index + 1} onClick={() => goDetail()}>
      <span className="index">{index + 1}</span>
      <Tooltip title={item.title}>
        <span className="title">{item.title}</span>
      </Tooltip>


    </HotItemWrap>
  );
});
