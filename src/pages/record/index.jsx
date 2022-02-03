import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import FallImgs from './fall-imgs/index'
import { getRecordInfoAction } from "./store/actionCreators";
const limit = 15;
let page = 1;
export default memo(function Record() {
  const [listening, updateListening] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecordInfoAction(page, limit,[]))
  }, [dispatch])
  const { imgList } = useSelector(
    (state) => ({
      imgList: state.getIn(["record", "imgList"]),
    }),
    shallowEqual
  );
  function handleUpdateListening(bool) {
    updateListening(bool)
  }
  function handleLoadMore() {
    dispatch(getRecordInfoAction(++page, limit,imgList))
    updateListening(false)
  }


  return (
    <div>
      <FallImgs listening={listening} handleLoadMore={handleLoadMore} handleUpdateListening={handleUpdateListening} imgList={imgList}></FallImgs>
    </div>
  )
})