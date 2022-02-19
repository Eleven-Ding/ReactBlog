import React, { memo } from "react";
import { CubeWrap } from "./style";
export default memo(function Cube() {
  return (
    <CubeWrap>
      <div className="wrap">
        <div className="cube">
          {/* 
        TODO: 这里用缩略图处理 省去流量
       */}
          <div className="front"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347165453.JPEG2000" alt="" /></div>
          <div className="back"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347187176.JPEG2000" alt="" /></div>
          <div className="right"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347209119.JPEG2000" alt="" /></div>
          <div className="left"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347233766.JPEG2000" alt="" /></div>
          <div className="top"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347249106.JPEG2000" alt="" /></div>
          <div className="bottom"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347264254.JPEG2000" alt="" /></div>
          <i className="i_front"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347280246.JPEG2000" alt="" /></i>
          <i className="i_back"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347307997.JPEG2000" alt="" /></i>
          <i className="i_right"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347636780.JPEG2000" alt="" /></i>
          <i className="i_left"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1641347662012.JPEG2000" alt="" /></i>
          <i className="i_top"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604935561804.png" alt="" /></i>
          <i className="i_bottom"> <img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604935594127.png" alt="" /> </i>
        </div>
      </div>
    </CubeWrap>
  );
});
