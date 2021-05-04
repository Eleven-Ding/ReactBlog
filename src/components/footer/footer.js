import React, { memo, useState } from "react";

import { FooterWrapper } from "./style";
export default memo(function Footer() {
  const [runTime, setRunTime] = useState("00天:00时:00分:00秒");
  setInterval(() => {
    let startTime = new Date("2020-10-22"); // 开始时间
    let endTime = new Date(); // 结束时间
    let usedTime = endTime - startTime; // 相差的毫秒数
    let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
    let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
    let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
    let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
    let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
    let level3 = leavel2 - minutes * 60 * 1000;
    let seconds = Math.floor(level3 / 1000);
    setRunTime(days + "天" + hours + "时" + minutes + "分" + seconds + "秒");
  }, 1000);

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

