import React, { memo } from "react";
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
export default memo(function LeftDrawer() {
  //hooks
  const dispatch = useDispatch();
  const { visible, theme } = SelfSelector({
    drawer: "visible",
    header: 'theme'
  }); const onClose = () => {
    dispatch(changeLeftVisibleAction(false));
  };

  return (
    <DrawerWrap>
      <Drawer
        placement={"left"}
        drawerStyle={{ backgroundColor: BlogTheme[theme].ThemeColor, padding: 0, margin: 0 }}
        bodyStyle={{ padding: "20px 0 0 0" }}
        onClose={() => onClose()}
        visible={visible}
        key={"left"}
      >
        {/* TODO:这些color到时候放style里 */}
        <div style={{ height: "100%", overflowY: "scroll" }}>
          <TopInfo ThemeColor={BlogTheme[theme].ThemeColor}></TopInfo>
          <div className="information" style={{ textAlign: "center" }}>
            <div style={{ color: BlogTheme[theme].HoverColor }}>访客信息</div>
            <div style={{ fontSize: "12px", color: BlogTheme[theme].HoverColor }}>
              欢迎来自 <span style={{ color: BlogTheme[theme].homeFontColor }}>{localStorage.getItem("position")} </span>的访问者
            </div>
            <div style={{ fontSize: "12px", color: BlogTheme[theme].HoverColor }}>
              您于<span style={{ color: BlogTheme[theme].homeFontColor }}>{localStorage.getItem('time')}</span>访问
            </div>
            <div style={{ fontSize: "12px", color: BlogTheme[theme].HoverColor }}>
              ip:<span style={{ color: BlogTheme[theme].homeFontColor }}>{localStorage.getItem("ip")}</span>(密){" "}
            </div>
          </div>
          <DrawerFriend onClose={onClose}></DrawerFriend>
          <Tags ThemeColor={BlogTheme[theme].ThemeColor} color="white"></Tags>
          <Cube></Cube>
        </div>
      </Drawer>
    </DrawerWrap>
  );
});
