import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
    counter: 0,
    articles: [],
    homeFontColor: "rgb(85, 181, 154)",
    total: 0,
    currentPage: 1, //第几页
    tag_id: -1, //是否是点的标签
    searchList: [], //模糊搜索的文章列表
    visible: false, //首页搜索文章的结果列表的显示
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_COUNTER:
            return state.set("counter", action.counter);
        case actionTypes.CHANGE_ARTICLES_ACTION:
            return state.set("articles", action.articles);
        case actionTypes.CHANGE_HOME_FONT_COLOR:
            return state.set("homeFontColor", action.homeFontColor);
        case actionTypes.CHANGE_ARTICLE_TOTAL:
            return state.set("total", action.total);
        case actionTypes.CHANGE_HOME_PAGE:
            return state.set("currentPage", action.currentPage);
        case actionTypes.CHANGE_HOME_TAG_ID:
            return state.set("tag_id", action.tag_id);
        case actionTypes.CHANGE_SEARCH_LIST:
            return state.set("searchList", action.searchList);
        case actionTypes.CHANGE_HOME_SEARCH_LIST_SHOW:
            return state.set('visible', action.visible)
        default:
            return state;
    }
}
export default reducer;