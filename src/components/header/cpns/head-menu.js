import { Menu } from "antd";
import React, { memo } from "react";
import {
  BankOutlined,
  EditOutlined,
  BarChartOutlined,
  WechatOutlined,
  UserOutlined,
  QqOutlined,
} from "@ant-design/icons";
export const iconList = [
  <BankOutlined />,
  <EditOutlined />,
  <BarChartOutlined />,
  <WechatOutlined />,
  <UserOutlined />,
  <BarChartOutlined />,
  <WechatOutlined />,
  <UserOutlined />,
];
export default memo(function HeaderMenu({ tabList, renderIndex, history, username, loginOut, showLogin }) {
  return (
    <Menu>
      {
        tabList.slice(renderIndex).map(tab => {
          return (
            <Menu.Item key={tab.index} onClick={() => history.push(tab.link)}>
              {iconList[tab.index]}
              <span>{tab.text}</span>
            </Menu.Item>
          )
        })
      }
      <Menu.Item onClick={username ? loginOut : showLogin}>
        <QqOutlined />
        <span >{username ? "退出登录" : "QQ邮箱登录"}</span>
      </Menu.Item>
    </Menu>
  )
})