import React, { memo, useEffect, useRef } from "react";
import {
  ScheduleOutlined,
  TagOutlined,
  UserOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { ProductionItemWrap } from "./style";
export default memo(function ProductionItem(props) {
  const ProductionRef = useRef();
  const { item, index, isShow, io } = props;
  useEffect(() => {
    io.observe(ProductionRef.current)
  }, [io])
  return (
    <ProductionItemWrap className={`battle${index}`} img={item.img} index={index} ref={ProductionRef} isShow={isShow}>
      <div className="production_top">
        <div className="innerInfo">
          <div className="title">{item.title}</div>
          <div className="des">{item.des}</div>
        </div>
      </div>
      <div className="foot">
        <span>
          <ScheduleOutlined style={{ color: "lightseagreen" }} />
          {item.creatTime && item.creatTime.substr(0, 10)}
        </span>
        <span>
          <TagOutlined style={{ color: "rgb(255,0,255" }} />
          {item.type}
        </span>
        <span>
          <UserOutlined style={{ color: "lightseagreen" }} />
          DingShiYi
        </span>
        {item.url && (
          <a className="link" href={item.url} title={item.title}>
            <LinkOutlined style={{ fontSize: "15px", color: "#005DD7" }} />
          </a>
        )}
      </div>
    </ProductionItemWrap>
  );
});
