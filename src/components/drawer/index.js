import React, { memo, useCallback, useEffect, useState } from "react";
import { Drawer } from "antd";
import { useDispatch } from "react-redux";
import { DrawerWrap } from "./style";
import TopInfo from "@/pages/rightbar/c-cpns/topInfo/index";
import Tags from "@/components/tags";
import DrawerFriend from "./drawerFriend";
import Cube from '@/components/cube'
import { changeLeftVisibleAction } from "./store/actionCreators";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
const drawerStyle = { padding: 0, margin: 0 }
const bodyStyle = { padding: "20px 0 0 0" }
export default memo(function LeftDrawer() {
  //hooks
  const dispatch = useDispatch();
  const [color, setColor] = useState("black")
  const { visible, theme } = SelfSelector({
    drawer: "visible",
    header: 'theme'
  });
  const onClose = useCallback(() => {
    dispatch(changeLeftVisibleAction(false));
  }, [dispatch])

  useEffect(() => {
    setColor(BlogTheme[theme].ThemeColor)
  }, [theme])
  return (
    <Drawer
      placement={"left"}
      drawerStyle={{ backgroundColor: color, ...drawerStyle }}
      bodyStyle={bodyStyle}
      onClose={() => onClose()}
      visible={visible}
      key={"left"}
    >
      <DrawerWrap ThemeColor={color} HoverColor={BlogTheme[theme].HoverColor} homeFontColor={BlogTheme[theme].homeFontColor} >
        <TopInfo ThemeColor={BlogTheme[theme].ThemeColor}></TopInfo>
        <div className="information" >
          <div>访客信息</div>
          <div>
            欢迎来自 <a href="@">{localStorage.getItem("position")} </a>的访问者
          </div>
          <div>
            您于<a href="@">{localStorage.getItem('time')}</a>访问
          </div>
          <div>
            ip:<a href="@" >{localStorage.getItem("ip")}</a>(密)
          </div>
        </div>
        <DrawerFriend onClose={onClose}></DrawerFriend>
        <Tags ThemeColor={color} color="white"></Tags>
        <Cube></Cube>
      </DrawerWrap>
    </Drawer>
  );
});
