/* eslint-disable jsx-a11y/alt-text */
import { Modal } from 'antd'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { HeartFilled } from '@ant-design/icons'
import { message } from 'antd'
import { changeBlogTheme } from '@/components/header/store/actionCreators'
import { BlogThemeKeys } from '@/constant'
import { HomeModalWrapper } from './style'
import { SelfSelector } from '@/utils/common'
export default memo(function MainInfoModal() {
  const [visible, setVisible] = useState(true)
  const dispatch = useDispatch()
  const onOk = () => {
    setVisible(false)
    message.success('^_^加油~')
    dispatch(changeBlogTheme(BlogThemeKeys.DARKNORMAL))
  }
  const {
    globalConfig: { mianModalInfo = {} },
  } = SelfSelector({
    main: 'globalConfig',
  })
  return (
    <Modal
      centered='true'
      title={
        <span style={{ color: 'red' }}>
          {mianModalInfo?.title || '-'} <HeartFilled />
        </span>
      }
      visible={visible && mianModalInfo.showModal}
      onOk={() => onOk()}
      onCancel={() => setVisible(false)}
      cancelText='略过'
      okText='加油'
    >
      <HomeModalWrapper>
        <p>{mianModalInfo?.time || '0000-00-00 00:00:00'}</p>
        <p>{mianModalInfo?.description || '-'}</p>
        <div className='img-container'>
          {(mianModalInfo?.urls || []).map((item, index) => {
            return (
              <img key={index} style={{ width: 100 / (mianModalInfo?.urls || []).length + '%' }} src={item} alt='' />
            )
          })}
        </div>

        <span>
          <p>{mianModalInfo?.tips || ''}</p>
          <p>(挣钱了就可以做自己想做的事，去自己想去的地方.....)</p>
        </span>
      </HomeModalWrapper>
    </Modal>
  )
})
