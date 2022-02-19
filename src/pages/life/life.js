/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TimeLine from './c-cpns/timeLine'
import { LifeWrap } from "./style";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import {
  getSongListAction,
} from "../life/store/actionCreators";
import {
  getTimeListAction,
  getHotArticleAction,
} from "@/pages/life/store/actionCreators";
import Shy from 'shy-player'
export default memo(function Life() {
  const { fontColor, timeList, hotArticles, songList } = useSelector(state => ({
    fontColor: state.getIn(['header', 'fontColor']),
    timeList: state.getIn(['life', 'timeList']),
    hotArticles: state.getIn(["life", "hotArticles"]),
    songList: state.getIn(['life', 'songList'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = "历程记录✧٩(ˊωˋ*)و✧"
    dispatch(changMainMoveRight(true))
    if (songList.length === 0)
      dispatch(getSongListAction());
    //获取时间轴
    if (timeList.length === 0)
      dispatch(getTimeListAction());
    //获取热门文章
    if (hotArticles.length === 0)
      dispatch(getHotArticleAction());
    //获取当前歌词
  }, [dispatch])
  return (
    <LifeWrap fontColor={fontColor}>
      <div className="music">
        <p>我喜欢听的歌不多</p>
        <p style={{ textAlign: "center" }}>歌曲库里只有40多首</p>
        <p style={{ textAlign: "right" }}>我想把我喜欢的分享出来</p>
      </div>
      <Shy></Shy>
      <div className="introduce">
      </div>
      <TimeLine timeList={timeList}></TimeLine>
    </LifeWrap>
  );
});
