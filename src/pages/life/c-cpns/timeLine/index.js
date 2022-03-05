import React, { memo, useCallback, useState } from "react";
import { Timeline } from "antd";
import { TimeWrap } from "./style";
import TimeItem from "./timeItem";
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
export default memo(function Time(props) {
  const { timeList } = props;
  const { theme } = SelfSelector({
    header: "theme"
  });
  const [isShowArray, setIsShowArray] = useState([])

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  //IntersectionObserver
  const [io] = useState(
    new IntersectionObserver((entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          isShowArray[entry.target.className.split('timeItem')[1]] = true
          setIsShowArray(isShowArray)
          forceUpdate()
          io.unobserve(entry.target)
        }
      })

    })))
  return (
    <TimeWrap>
      <Timeline pending="博主努力学习中..." mode="alternate">
        {timeList.map((item, index) => {
          return (
            <Timeline.Item style={{ marginLeft: '5px' }} key={item.id} color={item.color}>
              <TimeItem index={index} io={io} isShow={isShowArray[index]} style={{ marginLeft: '5px' }} item={item} homeFontColor={BlogTheme[theme].homeFontColor}></TimeItem>
            </Timeline.Item>
          );
        })}
        <Timeline.Item>
          <div>
            <div
              className="content"
              style={{ fontWeight: 600, color: BlogTheme[theme].homeFontColor }}
            >
              谢谢你看到了这里!
            </div>
            <div
              className="time"
              style={{ color: "blue", borderBottom: `1px dashed black` }}
            >
              走不到时间的尽头。。。
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
    </TimeWrap>
  );
});

