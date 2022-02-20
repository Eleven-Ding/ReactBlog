/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { BattleWrap } from "./style";
import { Input } from "antd";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import { getProductionListAction } from "@/pages/battle/store/actionCreators";
import ProductionItem from './c-cpns/procutionItem'
import { SelfSelector } from "@/utils/common";
export default memo(function Battle() {
  const dispatch = useDispatch();
  const { productionList } = SelfSelector({ battle: "productionList" });
  const [isShowArray, setIsShowArray] = useState([])

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [io] = useState(
    new IntersectionObserver((entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          isShowArray[entry.target.className.split('battle')[1]] = true
          setIsShowArray(isShowArray)
          forceUpdate()
          io.unobserve(entry.target)
        }
      })
    })))
  useEffect(() => {
    document.title = "实战页面(｀∇´)ψ"
    dispatch(changMainMoveRight(true));
    if (productionList.length === 0)
      dispatch(getProductionListAction())
  }, [dispatch]);

  return (
    <BattleWrap>
      <div className="home_content_header">
        <span className="info">
          实战与生活 <span> {productionList && productionList.length} </span> 篇
        </span>
        <Input
          style={{ width: 150, borderRadius: 5, color: "#7a7a7a" }}
          suffix={<SearchOutlined />}
        />
      </div>
      <div className="production_list">
        {
          productionList && productionList.map((item, index) => {
            return <ProductionItem io={io} isShow={isShowArray[index]} item={item} index={index} key={item.production_id}></ProductionItem>
          })
        }
      </div>
    </BattleWrap>
  );
});
