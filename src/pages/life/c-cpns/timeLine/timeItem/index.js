import React, { memo, useRef, useEffect } from "react";
// import { shallowEqual, useSelector } from "react-redux";
import { TimeItemWrap } from "./style";
export default memo(function TimeItem(props) {
  const { item, index, io, isShow } = props;
  // const [isShow, setIsShow] = useState(false);
  const TimeItemRef = useRef();
  useEffect(() => {
    if (io) {
      io.observe(TimeItemRef.current)
    }
  }, [io])
  return (
    <TimeItemWrap ref={TimeItemRef} className={`timeItem${index}`} isShow={isShow}>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: item.content }}
      ></div>
      {/* <div className="content" style={{fontWeight:600,color:homeFontColor}}>{item.content}</div> */}
      <div
        className="time"
        style={{ color: item.color, borderBottom: `1px dashed ${item.color}` }}
      >
        {item.time}
      </div>
    </TimeItemWrap>
  );
});
