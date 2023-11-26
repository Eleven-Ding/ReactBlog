import * as actionTypes from "./constants";
import { setFPMReady } from "../../../utils/fmp";

import {
  getArticlesAByTitle,
} from "@/network/home_request.js";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
import { getHomeArticlesPrefetch } from "../../../network/prefetch";
export const changeCounterAction = (counter) => {
  return {
    type: actionTypes.CHANGE_COUNTER,
    counter,
  };
};
//获取文章信息
export const getHomeArticlesAction = (limit, page, tag_id) => {
  return (dispatch) => {
    dispatch(changeMainLoadingAction(true));
    getHomeArticlesPrefetch(limit, page, tag_id).then((res) => {
      let articles = res.data.articles;

      for (let i = 0; i < articles.length; i++) {
        let item = articles[i]
        if (item.isTop === "1") {
          articles.splice(i, 1)
          articles.unshift(item)
        }
      }
      dispatch(changeArticlesAction(res.data.articles));
      dispatch(changeArticleTotalAction(res.data.total));
      dispatch(changeMainLoadingAction(false));
      setFPMReady()
    });
  };
};
const changeArticlesAction = (articles) => {
  return {
    type: actionTypes.CHANGE_ARTICLES_ACTION,
    articles,
  };
};


const changeArticleTotalAction = (total) => {
  return {
    type: actionTypes.CHANGE_ARTICLE_TOTAL,
    total,
  };
};

//改变文章分页
export const changeHomePageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_HOME_PAGE,
    currentPage,
  };
};

//改变tag_id
export const changeTagIdAction = (tag_id) => {
  return {
    type: actionTypes.CHANGE_HOME_TAG_ID,
    tag_id,
  };
};

//获取搜索文章列表

export const getSearchListAction = (title) => {
  return (dispatch) => {
    dispatch(changeMainLoadingAction(true));
    getArticlesAByTitle(title).then((res) => {
      dispatch(changeSearchListAction(res.data.doc));
      dispatch(changeHomeSearchListShowAction(true));
      dispatch(changeMainLoadingAction(false));
    });
  };
};

const changeSearchListAction = (searchList) => {
  return {
    type: actionTypes.CHANGE_SEARCH_LIST,
    searchList,
  };
};

//改变首页文章列表的显示
export const changeHomeSearchListShowAction = (visible) => {
  return {
    type: actionTypes.CHANGE_HOME_SEARCH_LIST_SHOW,
    visible,
  };
};
