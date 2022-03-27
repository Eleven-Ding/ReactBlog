/* eslint-disable jsx-a11y/alt-text */
import { Modal } from 'antd'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { HeartFilled } from '@ant-design/icons'
import { message } from 'antd'
import { changeBlogTheme } from '@/components/header/store/actionCreators'
import { BlogThemeKeys } from '@/constant'
import { blogImgUrls } from '@/constant'
import { HomeModalWrapper } from './style'
export default memo(function MainInfoModal() {
  const [visible, setVisible] = useState(true)
  const dispatch = useDispatch()
  const onOk = () => {
    setVisible(false)
    message.success('愿天堂没有痛苦')
    dispatch(changeBlogTheme(BlogThemeKeys.DARKNORMAL))
  }
  return (
    <Modal
      centered='true'
      title={
        <span style={{ color: 'red' }}>
          致哀 <HeartFilled />
        </span>
      }
      visible={visible}
      onOk={() => onOk()}
      onCancel={() => setVisible(false)}
      cancelText='致哀'
      okText='致哀'
    >
      <HomeModalWrapper>
        <p>2022-03-27 19:12:20</p>
        <p>向 "3·21" 东航飞行事故遇难者致以沉痛哀悼。</p>
        <img
          style={{ width: '100%' }}
          src='https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1648381187179.webp'
          alt=''
        />
        {/* <img
                    src={blogImgUrls.homeModalPic1}
                />
                <img
                    src={blogImgUrls.homeModalPic2}
                /> */}
        {/* <span>
          <p>不要跟我谈理想，我的理想就是挣钱，挣很多的钱。</p>
          (Tips:挣钱后就可以到处去旅行，去自己想去的地方✧٩(ˊωˋ*)و✧)
        </span> */}
      </HomeModalWrapper>
    </Modal>
  )
})
