import * as actionTypes from "./constants";

import {
  getSongDetail,
  getSongLyric,
  getAllSongs,
  getAllTime,
  getHotArticle,
} from "@/network/life";
import { parseLyric } from "@/utils/format.js";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
//获取歌曲详情
export const getCurrentSongAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.data.songs[0]));
    });
    getSongLyric(ids).then((res) => {
      const lyric = res.data.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricList(lyricList));
    });
  };
};
const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
  };
};
//改变歌词列表
const changeLyricList = (lyricList) => {
  return {
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList,
  };
};

//改变是哪一个歌词
export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentLyricIndex,
});

//改变歌单
export const getSongListAction = () => {
  return (dispatch) => {
    getAllSongs().then((res) => {
      dispatch(changeSongListAction(res.data.data.songs));
    });
  };
};
const changeSongListAction = (songList) => {
  return {
    type: actionTypes.CHANGE_SONG_LIST,
    songList,
  };
};

//获取时间线
export const getTimeListAction = () => {
  return (dispatch) => {
    getAllTime().then((res) => {
      dispatch(changeTimeListAction(res.data.timeLineList));
      dispatch(changeMainLoadingAction(false))
    });
  };
};
const changeTimeListAction = (timeList) => {
  return {
    type: actionTypes.CHANGE_TIME_LIST,
    timeList,
  };
};

//获取热门文章

export const getHotArticleAction = () => {
  return (dispatch) => {
    getHotArticle().then((res) => {
      dispatch(changeHotArticleAction(res.data.doc))
    });
  };
};
const changeHotArticleAction = (hotArticles) => {
  return {
    type: actionTypes.CHANGE_HOT_ARTICLES,
    hotArticles,
  };
};
