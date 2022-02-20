import React, { memo } from "react";
import { PersonWrap } from "./style";
import { ManOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
export default memo(function PersonInfo() {
  const { theme } = SelfSelector({ header: 'theme' });
  return (
    <PersonWrap homeFontColor={BlogTheme[theme].homeFontColor}>
      <div className="top"></div>
      <div className="Info">
        <div className="avat">
          <img
            style={{ width: "100px" }}
            src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/avat.jpg"
            alt=""
          />
        </div>
        <div className="info_right">
          <div
            className="name"
            style={{ color: BlogTheme[theme].homeFontColor, fontWeight: 600 }}
          >
            Loneliness
          </div>
          <div className="sex" style={{ fontSize: "15px" }}>
            <span><EnvironmentOutlined style={{ color: "#00CD90" }} />自贡 |</span>
            <span> 男<ManOutlined style={{ color: "#019FCF" }} /></span>
          </div>
          <div className="content">
            Hi,我叫丁时一,为了练习学到的东西,做了一个小站,初来乍到,多有不足,请谅解！
          </div>
        </div>
      </div>
    </PersonWrap>
  );
});
