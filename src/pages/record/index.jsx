import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import FallImgs from './fall-imgs/index'
import { getRecordInfoAction } from "./store/actionCreators";
const limit = 15;
export default memo(function Record() {
  const [listening, updateListening] = useState(true)
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecordInfoAction(page, limit, []))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const p = page+1;
    setPage(p)
    dispatch(getRecordInfoAction(p, limit, imgList))
    updateListening(false)
  }


  return (
    <div>
      <FallImgs listening={listening} handleLoadMore={handleLoadMore} handleUpdateListening={handleUpdateListening} imgList={imgList}></FallImgs>
    </div>
  )
})