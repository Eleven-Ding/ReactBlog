/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useRef } from "react";
import {  useDispatch } from 'react-redux'
import { PreviewWrapper } from "./style";
import { CloseCircleOutlined, PlusCircleOutlined, MinusCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { SET_SHOW_PREVIEW_CPNS } from "@/pages/record/store/constants";
import { useCallback } from "react";
import { useEffect } from "react";
import { SelfSelector } from "@/utils/common";
export default memo(function PreView() {
  const dispatch = useDispatch()
  const imgRef = useRef()
  const [ratio, setRatio] = useState(1)
  const [point, setPoint] = useState({ x: 0, y: 0 })
  const { showPreViewCpn, currentImgIndex } = SelfSelector({
    record:['showPreViewCpn','currentImgIndex']
  });
  useEffect(() => {
    function keyDown(e) {
      if (e.keyCode === 27)
        dispatch({
          type: SET_SHOW_PREVIEW_CPNS,
          payload: false
        })
    }
    window.addEventListener('keydown', keyDown)
    return _ => {
      window.removeEventListener('keydown', keyDown)
    }
  }, [])

  useState(()=>{
    if(ratio===1){
      setPoint({
        x:0,
        y:0
      })
    }
  },[ratio])

  const handleMouseDown = (e) => {
    let currentPoint = {
      x: e.clientX,
      y: e.clientY
    }
    imgRef.current.onmousemove = throttle((e) => {
      const currentX = e.clientX;
      const currentY = e.clientY
      const { x, y } = currentPoint
      const preX = point.x;
      const preY = point.y
      setPoint({
        x: preX + currentX - x,
        y: preY + currentY - y
      })
    }, 10);
  }
  function throttle(fn, delay) {
    var timer;
    return function () {
      var _this = this;
      var args = arguments;
      if (timer) {
        return;
      }
      timer = setTimeout(function () {
        fn.apply(_this, args);
        timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
      }, delay)
    }
  }

  const mouseUp = useCallback(() => {
    imgRef.current.onmousemove = null
  }, [imgRef])


  return (
    <PreviewWrapper point={point} show={showPreViewCpn} ratio={ratio} className="shy-preview">
      <LeftOutlined className="opt-page-left" />
      <img ref={imgRef} onMouseDown={handleMouseDown} onMouseUp={mouseUp} src={currentImgIndex} alt="" />
      <div className="operation">
        <PlusCircleOutlined className="plus-ratio" onClick={() => { setRatio(ratio + 0.3) }} />
        <MinusCircleOutlined className="min-ratio" onClick={() => { setRatio(ratio - 0.3) }} />
        <CloseCircleOutlined onClick={() => {
          dispatch({
            type: SET_SHOW_PREVIEW_CPNS,
            payload: false
          })
          setRatio(1)
          setPoint({
            x: 0,
            y: 0
          })
        }} />
      </div>
      <RightOutlined className="opt-page-right" />
    </PreviewWrapper>
  )
})