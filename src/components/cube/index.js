import React, { memo } from "react";
import { CubeWrap } from "./style";
export default memo(function Cube() {
  return (
    <CubeWrap>
     <div className="wrap">
     <div className="cube">
        <div className="front"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604936899640.png" alt=""/></div>
        <div className="back"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604936883772.png" alt=""/></div>
        <div className="right"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604936870969.png" alt=""/></div>
        <div className="left"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604936857787.jpg" alt=""/></div>
        <div className="top"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604936819401.png" alt=""/></div>
        <div className="bottom"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604936836975.png" alt=""/></div>
        <i className="i_front"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604935402996.png" alt=""/></i>
        <i className="i_back"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/avat.jpg" alt=""/></i>
        <i className="i_right"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604935423038.png" alt=""/></i>
        <i className="i_left"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604935547418.png" alt=""/></i>
        <i className="i_top"><img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604935561804.png" alt=""/></i>
        <i className="i_bottom"> <img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1604935594127.png" alt=""/> </i>
      </div>
     </div>
    </CubeWrap>
  );
});
