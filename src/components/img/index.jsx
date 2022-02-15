import React, { memo ,useState} from "react";
import { ImgWrapper } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Popconfirm, message } from 'antd';
import { deletePic } from "../../network/record";
import { GET_RECORD_LIST } from "../../pages/record/store/constants";
import { DeleteOutlined } from '@ant-design/icons'
export default memo(function Img({ width = 100, item, index, changeList }) {
  const { url, time, qqUrl } = item;
  const [scale,setScale] = useState(0)
  const dispatch = useDispatch()
  const { imgList } = useSelector(
    (state) => ({
      imgList: state.getIn(["record", "imgList"]),
    }),
    shallowEqual
  );
  function handleDelete() {
    //弹窗
    deletePic(item).then(res => {
      const Alert = res.status === 200 ? message.success : message.error
      Alert(res.message)
      if (res.status === 200) {
        const index = imgList.findIndex(img => item === img)
        imgList.splice(index, 1);
        dispatch({
          type: GET_RECORD_LIST,
          payload: imgList
        })
        window.dispatchEvent(new Event('resize'))
      }

    })
  }
  function hanldeOnload(){
    setScale(1)
  }
  return (
    <ImgWrapper className="shy-ppp">
      <div className="info-line">
        <img src={qqUrl} className="shy-avator" alt="头像" />
        <span className="shy-time">{time}</span>
      </div>
      <img src={url+'?imageView2/q/10'} style={{transform:`scale(${scale})`,width: width + 'px' }}   className="shy-img" data-index={index} onLoad={hanldeOnload}  alt="图片加载失败" />
      <span className="shy-delete">
        <Popconfirm
          title="您确定要删除这张图片吗？"
          onConfirm={handleDelete}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined />
        </Popconfirm>
      </span>
    </ImgWrapper>
  )
})