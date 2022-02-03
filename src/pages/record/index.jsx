import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import FallImgs from './fall-imgs/index'
import { getRecordInfoAction } from "./store/actionCreators";
export default memo(function Record() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecordInfoAction())
  }, [dispatch])
  const { imgList } = useSelector(
    (state) => ({
      imgList: state.getIn(["record", "imgList"]),
    }),
    shallowEqual
  );

  return (
    <div>
      <FallImgs imgList={imgList}></FallImgs>
    </div>
  )
})