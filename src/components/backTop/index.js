/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import { BackTopWrap } from "./style";
import { RocketOutlined } from "@ant-design/icons";
import { changeScrollTop } from "@/pages/main/store/actionCreators";
import { useDispatch } from "react-redux";
import { SelfSelector } from '@/utils/common'
import { changeIsHiddenAction } from "@/components/header/store/actionCreators";
export default memo(function BackTop() {
  const dispatch = useDispatch()
  const { scrollTop, isHidden } = SelfSelector({
    main: "scrollTop",
    header: "isHidden",
  })
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    function handleScroll() {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop
      dispatch(changeScrollTop(scroll))
      if (!isHidden && parseInt(scrollTop) >= 200) {
        dispatch(changeIsHiddenAction(!isHidden));
      }
      if (isHidden && parseInt(scrollTop) < 200) {
        dispatch(changeIsHiddenAction(!isHidden));
      }
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch, scrollTop])
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
