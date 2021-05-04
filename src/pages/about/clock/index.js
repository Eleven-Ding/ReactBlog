import React, { memo, useEffect, useRef } from "react";
import { ClockWrap } from "./style";
export default memo(function Clock() {
  const hrRef = useRef();
  const mnRef = useRef();
  const scRef = useRef();
  useEffect(() => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let i = sec;
    setInterval(() => {
      hour = date.getHours();
      if (hrRef.current && mnRef.current && scRef.current) {
        hrRef.current.style.transform = `rotateZ(${hour * 30 + min / 2}deg)`;
        mnRef.current.style.transform = `rotateZ(${min * 6}deg)`;
        scRef.current.style.transform = `rotateZ(${sec * 6}deg)`;
        i++;
        min = min + parseInt(i / 60);
        sec++;
        if (i === 60) i = 0;
      }
    }, 1000);
  }, []);
  return (
    <ClockWrap>
      <div className="hour">
        <div ref={hrRef} className="hr"></div>
      </div>

      <div className="min">
        <div ref={mnRef} className="mn"></div>
      </div>

      <div className="sec">
        <div ref={scRef} className="sc"></div>
      </div>
    </ClockWrap>
  );
});
