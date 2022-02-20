import React, { memo, useState } from "react";
import { HeaderWrapper } from "./style";
import { Menu, Dropdown, message } from "antd";
import { withRouter } from 'react-router-dom'
import {
  CaretUpOutlined,
  BankOutlined,
  EditOutlined,
  BarChartOutlined,
  WechatOutlined,
  UserOutlined,
  MenuFoldOutlined,
  HeartFilled,
  CaretDownOutlined,
  QqOutlined,
} from "@ant-design/icons";
import { changeLoginPanelShow } from "@/pages/main/store/actionCreators";
import { changeLeftVisibleAction } from "@/components/drawer/store/actionCreators";
import {
  changMainMoveRight,
  changeUserName,
} from "@/pages/main/store/actionCreators";
import { useDispatch } from "react-redux";
import { tabList } from '@/constant.js'
import { useEffect } from "react";
import { SelfSelector } from "@/utils/common";

export default withRouter(memo(function Header(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const iconList = [
    <BankOutlined />,
    <EditOutlined />,
    <BarChartOutlined />,
    <WechatOutlined />,
    <UserOutlined />,
  ];

  const dispatch = useDispatch();
  const {
    isHidden = false,
    ThemeColor,
    fontColor,
    HoverColor,
    visible,
    username,
  } = SelfSelector({
    header: ["isHidden", 'ThemeColor', 'fontColor', 'HoverColor'],
    drawer: "visible",
    main: ['moveRight', 'username']
  });
  useEffect(() => { }, [username]);
  const openDrawer = () => {
    dispatch(changeLeftVisibleAction(!visible));
  };

  const showLogin = () => {
    dispatch(changeLoginPanelShow(true));
  };
  const loginOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("userId")
    localStorage.removeItem("email")
    dispatch(changeUserName(null));
    message.success("成功退出");
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <div style={{ padding: "10px 0", width: "100%" }} onClick={() => props.history.push('/share')}>
          <HeartFilled /><span style={{ marginLeft: "5px" }}>Halcyon</span>
        </div>

      </Menu.Item>
      <Menu.Item>
        <div style={{ padding: "10px 0", width: "100%" }} onClick={() => props.history.push('/record')}>
          <HeartFilled /><span style={{ marginLeft: "5px" }}>图库</span>
        </div>
      </Menu.Item>
      <Menu.Item
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!username ? (
          <div
            style={{ padding: "10px 0", width: "100%" }}
            onClick={() => showLogin()}
          >
            <QqOutlined /> <span>QQ邮箱登录</span>
          </div>

        ) : (
          <div onClick={() => loginOut()}>{username}退出登录</div>
        )}
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      {tabList.map((item) => {
        return (
          <div key={item.index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                className="nav-link"
                onClick={() => {
                  props.history.push(item.link)
                }}
                style={{
                  padding: "5px  20px",
                  width: "100%",
                  cursor: `url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605510419334.png"), auto`
                }}
              >
                <div
                  style={{
                    padding: "5px",
                    width: "100px",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <span className="tab-item-icon">{iconList[item.index]}</span>
                  <span className="tab-item-name">{item.title}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Menu.Item>
        <div style={{ padding: "10px 0", width: "100%" }} onClick={() => props.history.push('/share')}>
          <HeartFilled /><span style={{ marginLeft: "5px" }}>Halcyon</span>
        </div>

      </Menu.Item>
      <Menu.Item>
        <div style={{ padding: "10px 0", width: "100%" }} onClick={() => props.history.push('/record')}>
          <HeartFilled /><span style={{ marginLeft: "5px" }}>图库</span>
        </div>
      </Menu.Item>
      <Menu.Item>
        {!username ? (
          <div onClick={() => showLogin()}>
            <QqOutlined /> <span>QQ邮箱登录</span>
          </div>
        ) : (
          <div onClick={() => loginOut()}>{username}退出登录</div>
        )}
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper
      className="flex-wrap"
      ThemeColor={ThemeColor}
      isHidden={isHidden}
      HoverColor={HoverColor}
      fontColor={fontColor}
    >
      <div className="header-box flex-wrap">
        <div className="header-left">
          <div
            className="left-menu"
            style={{ cursor: "pointer", color: "white" }}
            onClick={() => openDrawer()}
          >
            <MenuFoldOutlined />
          </div>
          <div className="blog-info">
            <div
              className="blog-title"
              title="Loneliness后台管理系统"
              onClick={() => window.open("https://www.dingshiyi.top/control")}
            >
              DingShiYi <span role="img" aria-label="图片">🌲</span>
            </div>
            <div className="some-sentence">万水千山，你愿意陪我一起看吗</div>
          </div>
          <div className="right-menu">
            <Dropdown overlay={menu2} placement="bottomCenter">
              <span
                className="icon-drop"
                style={{
                  color: HoverColor === "white" ? HoverColor : "",
                  marginRight: "18px",
                }}
              >
                <CaretUpOutlined
                  className="up"
                  style={{
                    padding: "18px",
                    top: 0,
                    marginRight: "18px",
                    position: "absolute",
                  }}
                ></CaretUpOutlined>
                <CaretDownOutlined
                  style={{
                    padding: "18px",
                    marginRight: "18px",
                    top: 0,
                    position: "absolute",
                  }}
                  className="down"
                />
              </span>
            </Dropdown>
          </div>
        </div>
        <div className="header-right">
          <div className="tab-list">
            {tabList.map((item, index) => {
              return (
                <div className="tab-item" key={item.index}>
                  <div
                    className={["nav-link", index === currentIndex ? "tab-active" : ''].join(" ")}
                    onClick={() => {
                      dispatch(changMainMoveRight(false))
                      props.history.push(item.link)
                      setCurrentIndex(index)
                    }}
                  >
                    <span className="tab-item-icon">
                      {iconList[item.index]}
                    </span>
                    <span className="tab-item-name">{item.title}</span>
                  </div>
                </div>
              );
            })}
            <Dropdown overlay={menu} placement="bottomCenter">
              <span className="icon-drop" style={{ marginRight: "10px" }}>
                <CaretUpOutlined
                  className="up"
                  style={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    position: "absolute",
                  }}
                ></CaretUpOutlined>
                <CaretDownOutlined
                  style={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    position: "absolute",
                  }}
                  className="down"
                />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}));
