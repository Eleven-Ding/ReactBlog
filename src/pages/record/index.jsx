/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import FallImgs from './fall-imgs/index'
import { getRecordInfoAction } from './store/actionCreators'
import Preview from '@/components/preview/index'
import { SelfSelector } from '@/utils/common'
const limit = 15
export default memo(function Record() {
  const [listening, updateListening] = useState(true)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecordInfoAction(page, limit, []))
  }, [dispatch])
  const { imgList } = SelfSelector({
    record: 'imgList',
  })
  function handleUpdateListening(bool) {
    updateListening(bool)
  }
  function handleLoadMore() {
    const p = page + 1
    setPage(p)
    dispatch(getRecordInfoAction(p, limit, imgList))
    updateListening(false)
  }

  return (
    <div>
      <Preview />
      <FallImgs
        listening={listening}
        handleLoadMore={handleLoadMore}
        handleUpdateListening={handleUpdateListening}
        imgList={imgList}
      ></FallImgs>
    </div>
  )
})
