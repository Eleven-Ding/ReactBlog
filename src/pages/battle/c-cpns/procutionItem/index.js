import React, { memo, useRef } from "react";
import {
  ScheduleOutlined,
  TagOutlined,
  UserOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { ProductionItemWrap } from "./style";
import { getPreviewImgUrl } from "@/utils/format";
export default memo(function ProductionItem(props) {
  const ProductionRef = useRef();
  const { item, index, isShow } = props;
  return (
    <ProductionItemWrap className={['shy-battl', `battle${index}`].join(" ")} img={getPreviewImgUrl(item.img, { q: 40 })} index={index} ref={ProductionRef} isShow={isShow}>
      <div className="production_top">
        <div className="innerInfo">
          <div className="title">{item.title}</div>
          <div className="des">{item.des}</div>
        </div>
      </div>
      <div className="foot">
        <span className="ScheduleOutlined">
          <ScheduleOutlined />
          {item.creatTime && item.creatTime.substr(0, 10)}
        </span>
        <span>
          <TagOutlined className="TagOutlined" />
          {item.type}
        </span>
        <span>
          <UserOutlined className="UserOutlined" />
          DingShiYi
        </span>
        {item.url && (
          <a className="link" href={item.url} title={item.title}>
            <LinkOutlined className="LinkOutlined" />
          </a>
        )}
      </div>
    </ProductionItemWrap>
  );
});
