import React, { memo } from "react";
import { Anchor } from "antd";
import { MyAnchorWrap } from "./style";
import { SelfSelector } from "@/utils/common";
const { Link } = Anchor;
export default memo(function MyAnchor({ isShow = true }) {

  const { AnchorArray } = SelfSelector({
    detail: 'AnchorArray'
  });
  return (
    <MyAnchorWrap>
      <Anchor affix={isShow} offsetTop={10}>
        <div className="hot">文章目录</div>
        {AnchorArray &&
          AnchorArray.map((item, index) => {
            return (
              <Link key={index} href={item.href} title={item.title}>
                {item && item.children.map((item2, index2) => {
                  return (
                    <Link key={index2} href={item2.href} title={item2.title} />
                  );
                })}
              </Link>
            );
          })}
      </Anchor>
    </MyAnchorWrap>
  );
});
