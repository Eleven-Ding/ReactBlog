import React, { memo, useState } from "react";
import { UploadWrap } from "./style";
import { CloudUploadOutlined } from "@ant-design/icons";
import { message, Input, Button } from "antd";
import { addShare } from "@/network/share";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
import { useDispatch } from "react-redux";
export default memo(function ShareUpload(props) {
  //state and props
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  //hooks
  const dispatch = useDispatch()
  //handle
  const inputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const { name, type } = file;
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      //读取成功后
      fileReader.onload = function (e) {
        //1.转成base64
        let src = e.target.result
        //2.使用image预览图片
        setUrl(src);
        b642Image(src, name, type)
      }
    }
  };
  function b642Image(b64, name, type) {
    const image = new Image()
    image.src = b64;
    image.onload = () => {
      img2Blob(image, name, type)
    }
  }
  function img2Blob(image, name, type) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const file = new File([blob], name, {
        type,
        lastModified: Date.now()
      });
      setFile(file);
    }, 'image/jpeg', 0.2)
  }
  const descChange = (e) => {
    setDesc(e.target.value);
  };
  const submit = () => {
    if (!file) {
      message.error("请选择图片");
      return;
    }
    if (!desc) {
      message.error("请输入您想说的话");
      return;
    }
    dispatch(changeMainLoadingAction(true))
    setShow(true);
    const params = new FormData();
    params.append("file", file);
    params.append("des", desc);
    params.append("userId", localStorage.getItem("userId"));
    addShare(params).then((res) => {
      dispatch(changeMainLoadingAction(false))
      const type = res.data.type;
      const Message = res.message;
      if (type) {
        message.success(Message);
      } else {
        message.error(Message);
      }
      setFile(null);
      setUrl("");
      setDesc("");
      setShow(false);
    });
  };
  return (
    <UploadWrap>
      <div className="item img">
        <div>
          <label htmlFor="file">
            <CloudUploadOutlined
              className="icon"
              style={{ fontSize: "50px", color: "#40A9FF" }}
            />
          </label>
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={(e) => inputChange(e)}
            style={{ display: "none" }}
          />
        </div>
        <img src={url} alt="" />
      </div>
      <div className="item">
        <Input
          placeholder="此刻您想说的话"
          value={desc}
          onChange={(e) => descChange(e)}
        />
      </div>
      <div className="item">
        <Button
          type="primary"
          onClick={() => submit()}
          disabled={show ? "disabled" : null}
        >
          Submit Now
        </Button>
        {/* 
          TODO: 这里直接改用url上传
        */}
        <span style={{ color: "#868686", marginLeft: "10px" }}>(Tip:博主的服务器很差,传图片可能比较慢,请谅解！最近将会优化这个问题,优化后上传速度蹭蹭上涨)</span>
      </div>
    </UploadWrap>
  );
});
