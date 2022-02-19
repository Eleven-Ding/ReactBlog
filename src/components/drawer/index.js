import React, { memo } from "react";
import { Drawer } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DrawerWrap } from "./style";
import TopInfo from "@/pages/rightbar/c-cpns/topInfo/index";
import Tags from "@/components/tags";
import DrawerFriend from "./drawerFriend";
import Cube from '@/components/cube'
import { changeLeftVisibleAction } from "./store/actionCreators";

export default memo(function LeftDrawer() {
  //hooks
  const dispatch = useDispatch();
  const { visible, ThemeColor, homeFontColor, HoverColor } = useSelector(
    (state) => ({
      visible: state.getIn(["drawer", "visible"]),
      ThemeColor: state.getIn(["header", "ThemeColor"]),
      homeFontColor: state.getIn(["home", "homeFontColor"]),
      HoverColor: state.getIn(["header", "HoverColor"]),
    }),
    shallowEqual
  );

  const onClose = () => {
    dispatch(changeLeftVisibleAction(false));
  };

  return (
    <DrawerWrap>
      <Drawer
        placement={"left"}
        drawerStyle={{ backgroundColor: ThemeColor, padding: 0, margin: 0 }}
        bodyStyle={{ padding: "20px 0 0 0" }}
        onClose={() => onClose()}
        visible={visible}
        key={"left"}
      >
        <div style={{ height: "100%", overflowY: "scroll" }}>
          <TopInfo ThemeColor={ThemeColor}></TopInfo>
          <div className="information" style={{ textAlign: "center" }}>
            <div style={{ color: HoverColor }}>访客信息</div>
            <div style={{ fontSize: "12px", color: HoverColor }}>
              欢迎来自 <span style={{ color: homeFontColor }}>{localStorage.getItem("position")} </span>的访问者
            </div>
            <div style={{ fontSize: "12px", color: HoverColor }}>
              您于<span style={{ color: homeFontColor }}>{localStorage.getItem('time')}</span>访问
            </div>
            <div style={{ fontSize: "12px", color: HoverColor }}>
              ip:<span style={{ color: homeFontColor }}>{localStorage.getItem("ip")}</span>(密){" "}
            </div>
          </div>
          <DrawerFriend onClose={onClose}></DrawerFriend>
          <Tags ThemeColor={ThemeColor} color="white"></Tags>
          <Cube></Cube>
        </div>
      </Drawer>
    </DrawerWrap>
  );
});
