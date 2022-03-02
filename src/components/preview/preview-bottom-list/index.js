import React, { memo } from "react";
import { PreViewListWrapper } from "./style";
import { getPreviewImgUrl } from "@/utils/format";
// preList 用来展示
// TODO: 渐进加载
export default memo(function PreViewBottomList({ preImgsList }) {
  console.log(preImgsList);
  return <PreViewListWrapper>
    <div className="pre-list-container">
      <div className="container-list">
        {
          preImgsList?.map((item => {
            return <div key={item.id} className="pre-img-container">
              <img src={getPreviewImgUrl(item.url, { w: 300, q: 50 })} alt="图片加载失败"></img>
            </div>
          }))
        }
      </div>
    </div>
  </PreViewListWrapper>
})