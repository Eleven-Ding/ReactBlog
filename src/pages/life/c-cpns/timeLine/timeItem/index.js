import React, { memo, useRef } from "react";
import { TimeItemWrap } from "./style";
export default memo(function TimeItem(props) {
  const { item, index, isShow } = props;
  const TimeItemRef = useRef();

  return (
    <TimeItemWrap ref={TimeItemRef} className={['shy-timeline', `timeItem${index}`].join(" ")} isShow={isShow}>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: item.content }}
      ></div>
      <div
        className="time"
        style={{ color: item.color, borderBottom: `1px dashed ${item.color}` }}
      >
        {item.time}
      </div>
    </TimeItemWrap>
  );
});
