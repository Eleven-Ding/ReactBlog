import React, { memo, useEffect, useRef, useState, useLayoutEffect } from "react";
import Img from '@/components/img/index'
import { FallImgWrapper } from "./style";
import { useDispatch } from "react-redux";
import { SET_CURRENT_IMG_INDEX, SET_SHOW_PREVIEW_CPNS } from "../store/constants";

function getMaxCount(width) {
  if (width >= 725) {
    return 4
  } else if (width < 725 && width >= 600) {
    return 3
  }
  return 2
}

let imgOnloadNumber = 0
export default memo(function Record({ imgList, listening, handleUpdateListening, handleLoadMore }) {
  const [width, setWidth] = useState(0);
  const [heightList, setHeightList] = useState([])
  const [imgRenderList, setImgRenderList] = useState([])
  //默认四个 根据当前宽度决定
  const fallRef = useRef()
  const dispatch = useDispatch()
  function resize() {
    const fatherWidth = fallRef.current.offsetWidth
    const maxCount = getMaxCount(fatherWidth)
    const width = fatherWidth / maxCount - 13;
    setHeightList(new Array(maxCount).fill(0))
    setWidth(width)
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', resize)
    window.dispatchEvent(new Event('resize'))
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [fallRef])


  useEffect(() => {
    if (heightList.length === 0) {
      return
    }
    setTimeout(() => {
      const fatherWidth = fallRef.current.offsetWidth
      const maxCount = getMaxCount(fatherWidth)
      const imgList = document.getElementsByClassName("shy-ppp");
      setImgRenderList(imgList);
      [...imgRenderList].forEach((img, index) => {
        if (index < maxCount) {
          heightList[index % maxCount] = heightList[index % maxCount] + img.clientHeight
          img.style.transform = `translateY(${(-img.offsetTop)}px)`;
        } else {
          const position = heightList[index % maxCount]
          img.style.transform = `translateY(${(-(img.offsetTop - position - 10))}px)`;
          heightList[index % maxCount] = heightList[index % maxCount] + img.clientHeight + 10
        }
      })
    }, 100)
  }, [heightList, imgRenderList])

  function hanldeOnload() {
    imgOnloadNumber++;
    if (imgOnloadNumber % 4 === 0 || imgOnloadNumber === imgList.length) {
      window.dispatchEvent(new Event('resize'))
    }
    if (imgOnloadNumber === imgRenderList.length) {
      handleUpdateListening(true)
    }
  }
  useEffect(() => {
    window.onscroll = function () {
      if (!listening) return
      var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);

      if (clientHeight + scrollTop >= scrollHeight - 200) {
        //抛出一个事件后停止抛出
        handleLoadMore();
      }
    }
  }, [fallRef, handleLoadMore, listening])
  function handleImgClick(e) {
    dispatch({
      type: SET_CURRENT_IMG_INDEX,
      payload: e.target.dataset.index
    })
    if (e.target.className === 'shy-img') {
      dispatch({
        type: SET_SHOW_PREVIEW_CPNS,
        payload: true
      })
    }
  }
  return (
    <FallImgWrapper onClick={handleImgClick} ref={fallRef}>
      {
        imgList.map((item, index) => {
          return <Img   width={width} item={item} index={index} hanldeOnload={hanldeOnload} key={index}></Img>
        })
      }
    </FallImgWrapper>
  )
})