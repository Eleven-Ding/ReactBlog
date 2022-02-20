import React, { memo, useEffect, useState } from "react";
import { getCurrentFormatTime } from "@/utils/common";
import { FooterWrapper } from "./style";

export default memo(function Footer() {
  const [runTime, setRunTime] = useState("00天:00时:00分:00秒");
  useEffect(() => {
    const timer = setInterval(() => {
      setRunTime(getCurrentFormatTime());
    }, 1000);
    return _ => {
      clearInterval(timer)
    }
  }, [])

  return (
    <FooterWrapper className="flex-column-wrap">
      <div>本系统由React+Node+Antd Design联合驱动</div>
      <div className="flex-wrap">
        <span className="left">COS对象存储</span>
        <a href="http://www.beian.miit.gov.cn/">蜀ICP备20019999-2</a>
        <span className="right">托管于阿里云</span>
      </div>
      <div className="flex-wrap">
        <span>本站已苟且偷生 </span>
        <span className="time">{runTime}</span>
      </div>
      <div className='about_smile'><div>DingShiYi's Blog </div> <div className="smile"> ｸﾞｯ!(๑•̀ㅂ•́)و✧</div> </div>
    </FooterWrapper>
  );
});

