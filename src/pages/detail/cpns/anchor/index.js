import React, { memo } from "react";
import { Anchor } from "antd";
import { shallowEqual, useSelector } from "react-redux";
import { MyAnchorWrap } from "./style";
const { Link } = Anchor;
export default memo(function MyAnchor(props) {
  const { isShow } = props;
  const { AnchorArray } = useSelector(
    (state) => ({
      AnchorArray: state.getIn(["detail", "AnchorArray"]),
    }),
    shallowEqual
  );
  return (
    <MyAnchorWrap>
      <Anchor affix={isShow ? true : false} offsetTop={10}>
        <div className="hot">文章目录</div>
        {AnchorArray &&
          AnchorArray.map((item, index) => {
            return (
              <Link key={index} href={item.href} title={item.title}>
                {item&&item.children.map((item2, index2) => {
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
