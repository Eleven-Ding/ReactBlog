import React, { memo, useEffect, useRef, useState, useLayoutEffect } from "react";
import Img from '@/components/img/index'
import { FallImgWrapper } from "./style";
function getMaxCount(width) {
  if (width >= 725) {
    return 4
  } else if (width < 725 && width >= 600) {
    return 3
  }
  return 2
}

let imgOnloadNumber = 0
export default memo(function Record({ imgList }) {
  const [width, setWidth] = useState(0);
  const [heightList, setHeightList] = useState([])
  //默认四个 根据当前宽度决定
  const fallRef = useRef()
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
      const imgList = document.getElementsByClassName("shy-img");

      [...imgList].forEach((img, index) => {
        if (index < maxCount) {
          heightList[index % maxCount] = heightList[index % maxCount] + img.clientHeight
          img.style.transform = `translateY(${(-img.offsetTop)}px)`;
        } else {
          const position = heightList[index % maxCount]
          console.log(img.offsetTop - position);
          img.style.transform = `translateY(${(-(img.offsetTop - position - 10))}px)`;
          heightList[index % maxCount] = heightList[index % maxCount] + img.clientHeight + 10
        }
      })
    }, 100)
  }, [heightList])

  function hanldeOnload() {
    imgOnloadNumber++;
    if (imgOnloadNumber % 4 === 0||imgOnloadNumber===heightList.length) {
      window.dispatchEvent(new Event('resize'))
    }
  }
  return (
    <FallImgWrapper ref={fallRef}>
      {
        imgList.map((item, index) => {
          return <Img width={width} item={item}   hanldeOnload={hanldeOnload} key={index}></Img>
        })
      }
    </FallImgWrapper>
  )
})