import * as actionTypes from "./constants";

import {
  getAllTime,
  getHotArticle,
} from "@/network/life";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";






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
