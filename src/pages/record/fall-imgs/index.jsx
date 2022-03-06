/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useRef, useState } from "react";
import Img from '@/components/img/index'
import { FallImgWrapper } from "./style";
import { useDispatch} from "react-redux";
import { SET_CURRENT_IMG_INDEX, SET_SHOW_PREVIEW_CPNS, SET_IS_FETCHING_DATA,SET_PRE_IMG_LIST_COUNT } from "../store/constants";
import { SelfSelector } from "@/utils/common";
import { getMaxCount } from "@/utils/common";
import { MARGIN_WIDTH } from "@/constant";
export default memo(function Record({ imgList,handleLoadMore }) {
  const [maxCount,setMaxCount] = useState(2)
  const [colume,setColume] = useState([])
  const [,setHeightList] = useState([])
  const [width,setWidth] = useState(100)
  const fallRef = useRef()
  const dispatch = useDispatch()
  const { isFetchingData,preImgListCount,scrollTop,screenWidth} = SelfSelector({
    record:['isFetchingData','preImgListCount'],
    main: ["scrollTop",'screenWidth'],
  });

  useEffect(()=>{
    window.dispatchEvent(new Event('resize'))
  },[])

  useEffect(()=>{
    let newColume = []
    let newHeightList = new Array(maxCount).fill(0)
    if(!imgList||imgList.length === 0)return  
    imgList.forEach((img,index)=>{
      if(!Array.isArray(newColume[index%maxCount])){
        newColume[index%maxCount] = []
      }
      const min =newHeightList.findIndex(item=>item === Math.min(...newHeightList))
      newHeightList[min] += width/img.ratio
      newColume[min].push(img)
    })
    setColume(newColume)
    setHeightList(newHeightList)
    dispatch({
      type:SET_PRE_IMG_LIST_COUNT,
      payload:preImgListCount||0+15
    })
  },[imgList, maxCount, width])

  

  function handleImgClick(e) {
    if(e.target.className === "shy-img"&&e.target.nodeName==="IMG"){
      
      dispatch({
        type: SET_CURRENT_IMG_INDEX,
        payload: e.target.currentSrc.replace("?imageView2/2/w/300/q/50","")
      })
      dispatch({
        type:SET_SHOW_PREVIEW_CPNS,
        payload:true
      })
    }

  }
  useEffect(()=>{
    if(!fallRef.current)return
    const fatherWidth = fallRef.current.offsetWidth||100
    const maxCount = getMaxCount(fatherWidth)
    setWidth(fatherWidth/maxCount - MARGIN_WIDTH)
    setMaxCount(maxCount)
  },[screenWidth])
  
  useEffect(()=>{
    if(!fallRef.current)return
    const fatherWidth = fallRef.current.offsetWidth||100
    const maxCount = getMaxCount(fatherWidth)
    setWidth(fatherWidth/maxCount - MARGIN_WIDTH)
    setMaxCount(maxCount)
  },[fallRef])
  useEffect(()=>{
    let clientHeight  = document.documentElement.clientHeight; //浏览器高度
    let scrollHeight = document.body.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let distance = 50;  //距离视窗还用50的时候，开始触发；
    if ((scrollTop + clientHeight) >= (scrollHeight - distance)&&!isFetchingData) {
        dispatch({
          type:SET_IS_FETCHING_DATA,
          payload:true
        })
        handleLoadMore()
    }
  },[scrollTop])

  return (
    <FallImgWrapper onClick={handleImgClick} ref={fallRef}>
      {
        colume?.map((line,index)=>{
          return <div className="shy-colume" key={index}>
              {
                line?.map((img,index2)=>{
                  return <Img  key={index2} width={width} item={img}></Img>
                })
              }
          </div>
        })
      }
    </FallImgWrapper>
  )
})