/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useRef, useState } from "react";
import Img from '@/components/img/index'
import { FallImgWrapper } from "./style";
import { useDispatch ,useSelector,shallowEqual} from "react-redux";
import { SET_CURRENT_IMG_INDEX, SET_SHOW_PREVIEW_CPNS, SET_IS_FETCHING_DATA,SET_PRE_IMG_LIST_COUNT } from "../store/constants";

function debounce(fn, delay) {
  var timer; // 维护一个 timer
  return function () {
      var _this = this; // 取debounce执行作用域的this
      var args = arguments;
      if (timer) {
          clearTimeout(timer);
      }
      timer = setTimeout(function () {
          fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
      }, delay);
  };
}
function getMaxCount(width) {
  if (width >= 725) {
    return 4
  } else if (width < 725 && width >= 600) {
    return 3
  }
  return 2
}
const MARGIN_WIDTH = 12

export default memo(function Record({ imgList, listening, handleUpdateListening, handleLoadMore }) {
  const [maxCount,setMaxCount] = useState(2)
  const [colume,setColume] = useState([])
  const [heightList,setHeightList] = useState([])
  const [width,setWidth] = useState(100)
  const fallRef = useRef()
  const dispatch = useDispatch()
  const { isFetchingData,preImgListCount} = useSelector(
    (state) => ({
      isFetchingData: state.getIn(["record", "isFetchingData"]),
      preImgListCount: state.getIn(["record", "preImgListCount"]),

    }),
    shallowEqual
  );

  useEffect(()=>{
    window.addEventListener('resize',resize)
    window.addEventListener("scroll",scroll)
    window.dispatchEvent(new Event('resize'))
    return _=>{
      window.removeEventListener('resize',resize)
      window.removeEventListener("scroll",scroll)
    }
  })

  useEffect(()=>{
    let newColume = []
    let newHeightList = new Array(maxCount).fill(0)
    if(imgList.length === 0)return  
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
    if(e.target.className === "shy-img"){
      
      dispatch({
        type: SET_CURRENT_IMG_INDEX,
        payload: e.target.currentSrc.replace("?imageView2/q/10","")
      })
      dispatch({
        type:SET_SHOW_PREVIEW_CPNS,
        payload:true
      })
    }

  }
  const resize = debounce(function() {
    if(!fallRef.current)return
    const fatherWidth = fallRef.current.offsetWidth||100
    const maxCount = getMaxCount(fatherWidth)
    setWidth(fatherWidth/maxCount - MARGIN_WIDTH)
    setMaxCount(maxCount)
  },100)
  
  useEffect(()=>{
    if(!fallRef.current)return
    const fatherWidth = fallRef.current.offsetWidth||100
    const maxCount = getMaxCount(fatherWidth)
    setWidth(fatherWidth/maxCount - MARGIN_WIDTH)
    setMaxCount(maxCount)
  },[fallRef])
  
  function scroll(){
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
  }

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