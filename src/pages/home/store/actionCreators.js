import * as actionTypes from "./constants";

import {
  getHomeArticles,
  getArticlesAByTitle,
} from "@/network/home_request.js";
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
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
    getHomeArticles(limit, page, tag_id).then((res) => {
      // console.log(res);
      let articles = res.data.articles;

      for(let i =0;i<articles.length;i++){
        let item= articles[i]
        if(item.isTop==="1"){
          articles.splice(i,1)
          articles.unshift(item)
        }
      }
      //检查是否有置顶的
      // const top_articles = articles.filter(item=>{
      //   return item.isTop==="1"
      // })
      // for(let i=0;i<top_articles.length;i++){
      //   let index = articles.findIndex(item=>{
      //     return item.isTop ==="1"
      //   })
      //   articles.splice(index,1)
      // }

      // articles.unshift(...top_articles)
      // console.log(top_articles);
      // console.log(index);  
      dispatch(changeArticlesAction(res.data.articles));

      dispatch(changeArticleTotalAction(res.data.total));
      // console.log(res.data.total);
      dispatch(changeMainLoadingAction(false));
    });
  };
};
const changeArticlesAction = (articles) => {
  return {
    type: actionTypes.CHANGE_ARTICLES_ACTION,
    articles,
  };
};

//改变文章的标题颜色
export const changeHomeFontColor = (homeFontColor) => {
  return {
    type: actionTypes.CHANGE_HOME_FONT_COLOR,
    homeFontColor,
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
      // console.log(res);

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
