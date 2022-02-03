import React, { memo } from "react";
import './style.css'
export default memo(function Img({ width = 100, item, hanldeOnload }) {
  const { url } = item
  return (
    <img src={url} className="shy-img" onLoad={hanldeOnload} style={{ width: width + 'px' }} alt="图片加载失败" />
  )
})