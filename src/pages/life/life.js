/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import TimeLine from './c-cpns/timeLine'
import { LifeWrap } from "./style";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import {
  getTimeListAction,
  getHotArticleAction,
} from "@/pages/life/store/actionCreators";
import Shy from 'shy-player'
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
export default memo(function Life() {
  const { theme, timeList, hotArticles } = SelfSelector({
    header: "theme",
    life: ['timeList', 'hotArticles']
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changMainMoveRight(true))

    //获取时间轴
    if (timeList.length === 0)
      dispatch(getTimeListAction());
    //获取热门文章
    if (hotArticles.length === 0)
      dispatch(getHotArticleAction());
    //获取当前歌词
  }, [dispatch])
  return (
    <LifeWrap fontColor={BlogTheme[theme].fontColor} >
      <div className="music">
        <p>我喜欢听的歌不多</p>
        <p style={{ textAlign: "center" }}>歌曲库里只有40多首</p>
        <p style={{ textAlign: "right" }}>我想把我喜欢的分享出来</p>
      </div>
      <Shy></Shy>
      <div className="introduce">
      </div>
      <TimeLine timeList={timeList}></TimeLine>
    </LifeWrap >
  );
});
