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
            src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1619835493645.JPEG2000?imageView2/1/q/80"
            alt="头像"
          />
        </div>
        <div className="info_right">
          <div
            className="name"
          >
            Eleven-Ding
          </div>
          <div className="sex">
            <span className="position"><EnvironmentOutlined />自贡</span> |
            <span className="sex-name"> 男<ManOutlined /></span>
          </div>
          <div className="content">
            Hi,我叫丁时一,为了练习学到的东西,做了一个小站,初来乍到,多有不足,请谅解！
          </div>
        </div>
      </div>
    </PersonWrap>
  );
});
