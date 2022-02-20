import React, { memo, useState } from "react";
import { HeaderWrapper } from "./style";
import { Dropdown, message } from "antd";
import { withRouter } from 'react-router-dom'
import {
  CaretDownOutlined,
  MenuFoldOutlined,
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
import { getHeaderRenderIndexByWidth } from "@/constant";
import HeaderMenu from './cpns/head-menu'
import { iconList } from "./cpns/head-menu";
import { handleRouterChange } from "@/utils/common";
export default withRouter(memo(function Header(props) {
  useEffect(() => {
    handleRouterChange(props.location.pathname)
  }, [props.location])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [renderIndex, setRenderIndex] = useState(5)
  const dispatch = useDispatch();
  const {
    isHidden = false,
    ThemeColor,
    fontColor,
    HoverColor,
    visible,
    username,
    screenWidth
  } = SelfSelector({
    header: ["isHidden", 'ThemeColor', 'fontColor', 'HoverColor'],
    drawer: "visible",
    main: ['moveRight', 'username', 'screenWidth']
  });
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    })
  }, []);

  useEffect(() => {
    setRenderIndex(getHeaderRenderIndexByWidth(screenWidth))
  }, [screenWidth])
  const showLogin = () => {
    dispatch(changeLoginPanelShow(true));
  };
  // 这种方式是否会重复声明渲染?
  const loginOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("userId")
    localStorage.removeItem("email")
    dispatch(changeUserName(null));
    message.success("成功退出");
  };
  return (
    <HeaderWrapper
      className="flex-wrap"
      ThemeColor={ThemeColor}
      isHidden={isHidden}
      HoverColor={HoverColor}
      fontColor={fontColor}
    >
      <div className="header-box">
        <div
          className="left-menu"
          style={{ cursor: "pointer", color: "white" }}
          onClick={() => dispatch(changeLeftVisibleAction(!visible))}
        >
          <MenuFoldOutlined />
        </div>
        <div className="blog-info">
          <div
            className="blog-title"
            title="Loneliness后台管理系统"
            onClick={() => window.open("https://www.dingshiyi.top/control")}>
            DingShiYi
            <span role="img" aria-label="图片">🌲</span>
          </div>
          <div className="some-sentence">万水千山，你愿意陪我一起看吗</div>
        </div>
        <div className="header-right">
          <div className="tab-list">
            {tabList.slice(0, renderIndex).map((item, index) => {
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
                    <span className="tab-item-name">{item.text}</span>
                  </div>
                </div>
              );
            })}
            <Dropdown overlay={<HeaderMenu tabList={tabList} renderIndex={renderIndex} username={username} loginOut={loginOut} showLogin={showLogin} history={props.history} />}>
              <a className="ant-dropdown-link" style={{ color: "white", fontSize: '13px' }} href="@" onClick={e => e.preventDefault()}>
                <CaretDownOutlined />
              </a>
            </Dropdown>,
          </div>
        </div>

      </div>
    </HeaderWrapper>
  );
}));
