import React, { memo, useState, useEffect } from "react";
import { BackTopWrap } from "./style";
import { RocketOutlined } from "@ant-design/icons";
export default memo(function BackTop() {
  const [scrollTop, setScrollTop] = useState(0)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    function handleScroll(e) {
      setScrollTop(document.documentElement.scrollTop || document.body.scrollTop)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const backTop = () => {
    let timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      var oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (oTop > 0) {
        window.scrollTo(0, oTop - 150);
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    });
  };
  return (
    <BackTopWrap scrollTop={scrollTop}>
      <img
        onClick={() => backTop()}
        src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/backTop.png"
        title="嗷呜~~~"
        alt="返回顶部"
      />
      <div className="mobile" onClick={() => backTop()}>
        <RocketOutlined style={{ color: 'pink', position: "absolute", fontSize: "25px", borderRadius: "50%", padding: "6px", backgroundColor: "rgba(0,0,0,.3)" }}></RocketOutlined>
      </div>
    </BackTopWrap>
  );
});
