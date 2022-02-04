import React, { memo } from "react";
import './style.css'
import { formatTimeWithDate } from "../../utils/format";
import { ImgWrapper } from "./style";
export default memo(function Img({ width = 100, item, index,hanldeOnload }) {
  const { url, time } = item
  return (
    <ImgWrapper time={formatTimeWithDate(time)}>
      <img src={url} className="shy-img" data-index={index} onLoad={hanldeOnload} style={{ width: width + 'px' }} alt="图片加载失败" />
    </ImgWrapper>
  )
})