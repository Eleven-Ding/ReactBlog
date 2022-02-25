import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { LoginPanelWrap } from "./style";
import {
  changeLoginPanelShow,
  changeUserName,
} from "@/pages/main/store/actionCreators";
import { useState } from "react";
import { SendLetter, Login } from "@/network/main";
let timer = null
const InputStyle = { marginTop: "20px", borderRadius: "6px" }
const ButtonStyle = { marginRight: "10px" }
let i = 60
export default memo(function LoginPanel() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [testing, setTesting] = useState("发送验证码");
  const [disabled, setDisabled] = useState(false);

  const hideLogin = useCallback(() => {
    dispatch(changeLoginPanelShow(false));
  }, [dispatch]);
  const send = useCallback(() => {
    clearInterval(timer)
    SendLetter(email).then((res) => {
      const type = res.data.type;
      const Message = res.message;
      if (type) {
        setDisabled(true)
        timer = setInterval(() => {
          i--;
          setTesting(i + "s")
          if (i <= 0) {
            clearInterval(timer)
            setTesting("发送验证码")
            setDisabled(false)
          }
        }, 1000)
        message.success(Message);
      } else {
        message.error(Message);
      }
    });
  }, [email])
  const login = () => {
    Login(username, email, code).then((res) => {
      const type = res.data.type;
      const Message = res.message;
      if (type) {
        //存本地
        localStorage.setItem("username", username);
        dispatch(changeUserName(username));
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("email", email);
        localStorage.setItem("token", res.data.token);
        message.success(Message);
        dispatch(changeLoginPanelShow(false));
      } else {
        message.error(Message);
      }
    });
  };
  return (
    <LoginPanelWrap >
      <div className="top item">QQ邮箱登录</div>
      <div className="input item">
        <div className="email">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="QQ邮箱(以@结尾)"
            style={{ borderRadius: "6px" }}
            prefix={<MailOutlined />}
          />
          <Button type="primary" disabled={disabled} onClick={send}>
            {testing}
          </Button>
        </div>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={InputStyle}
          placeholder="验证码"
          prefix={<LockOutlined />}
        />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={InputStyle}
          placeholder="您的笔名~~"
          prefix={<UserOutlined />}
        />
      </div>
      <div className="operation item" >
        <Button
          onClick={() => login()}
          type="primary"
          style={ButtonStyle}
        >
          登录
        </Button>
        <Button onClick={hideLogin} type="primary" danger>
          取消
        </Button>
      </div>
    </LoginPanelWrap>
  );
});
