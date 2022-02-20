import { Modal } from "antd";
import React, { memo,useState } from "react";
import { useDispatch } from "react-redux";
import { HeartFilled } from "@ant-design/icons";
import { message } from "antd";
import {
    changeHeaderBackColorAction,
    changeHeaderFontColorAction,
    changeHeaderHoverColorAction,
} from "@/components/header/store/actionCreators";
import { changeHomeFontColor } from "@/pages/home/store/actionCreators";
export default memo(function MainInfoModal(){
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  
  const onOk = () => {
    setVisible(false);
    message.success("谢谢!!╭（′▽‵）╭,2021加油!!");
    dispatch(changeHeaderBackColorAction("rgb(40,54,70)"));
    dispatch(changeHeaderFontColorAction("#B4B9BE"));
    dispatch(changeHeaderHoverColorAction("white"));
    dispatch(changeHomeFontColor("#1890FF"));
};
return (
  <Modal
  centered="true"
  title={
      <span style={{ color: "red" }}>
          Welcome ! <HeartFilled />
      </span>
  }
  visible={visible}
  onOk={() => onOk()}
  onCancel={() => setVisible(false)}
  cancelText="略过"
  okText="加油 !"
>
  <p>2021-12-31 22:10:20</p>
  <p>新的一年，希望一切越来越好。</p>
  <img
      style={{ width: "50%" }}
      src="
      https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640959677473.JPEG2000?imageView2/1/q/70"
      alt=""
  />
  <img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640960246399.JPEG2000?imageView2/1/q/70" alt="" style={{ width: "50%" }} />
  <span
      style={{
          color: "#8B8B8B",
          fontSize: "12px",
          marginTop: "10px",
          display: "block",
      }}
  >
      <p>
          不要跟我谈理想，我的理想就是挣钱，挣很多的钱。
      </p>
      (Tips:挣钱后就可以到处去旅行，去自己想去的地方✧٩(ˊωˋ*)و✧)
  </span>
</Modal>
)
})