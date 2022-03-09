import React, { memo, useRef } from 'react'
import { ImgWrapper } from './style'
import { useDispatch } from 'react-redux'
import { Popconfirm, message } from 'antd'
import { deletePic } from '@/network/record'
import { GET_RECORD_LIST } from '@/pages/record/store/constants'
import { DeleteOutlined } from '@ant-design/icons'
import { SelfSelector } from '@/utils/common'
import { getPreviewImgUrl } from '@/utils/format'
export default memo(function Img({ width = 100, item, index }) {
  const { url, time, qqUrl } = item
  // const [scale, setScale] = useState(1)
  const videoRef = useRef()
  const dispatch = useDispatch()
  const { imgList } = SelfSelector({ record: 'imgList' })
  function handleDelete() {
    deletePic(item).then((res) => {
      const flag = res.status === 200
      const Alert = flag ? message.success : message.error
      Alert(res.message)
      if (flag) {
        const index = imgList.findIndex((img) => item === img)
        imgList.splice(index, 1)
        dispatch({
          type: GET_RECORD_LIST,
          payload: [...imgList],
        })
        window.dispatchEvent(new Event('resize'))
      }
    })
  }
  // function hanldeOnload() {}
  // useEffect(() => {
  //   if (!videoRef?.current) return
  //   videoRef.current.addEventListener('canplay', hanldeOnload)
  //   return (_) => {}
  // }, [videoRef])
  return (
    <ImgWrapper className='shy-ppp' width={width}>
      <div className='info-line'>
        <img src={qqUrl} className='shy-avator' alt='头像' />
        <span className='shy-time'>{time}</span>
      </div>
      {url?.includes('.mp4') && <div className='shy-video'>视频</div>}
      {url?.includes('.mp4') ? (
        <video src={url} controls className='shy-img' ref={videoRef} data-index={index}></video>
      ) : (
        <img src={getPreviewImgUrl(url, { w: 300, q: 50 })} className='shy-img' data-index={index} alt='图片加载失败' />
      )}

      <span className='shy-delete'>
        <Popconfirm title='您确定要删除这张图片吗？' onConfirm={handleDelete} okText='Yes' cancelText='No'>
          <DeleteOutlined />
        </Popconfirm>
      </span>
    </ImgWrapper>
  )
})
