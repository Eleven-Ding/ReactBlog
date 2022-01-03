"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var actionTypes = _interopRequireWildcard(require("./constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultState = (0, _immutable.Map)({
  counter: 0,
  articles: [],
  homeFontColor: " #209d7b",
  total: 0,
  currentPage: 1,
  //第几页
  tag_id: -1,
  //是否是点的标签
  searchList: [],
  //模糊搜索的文章列表
  visible: false //首页搜索文章的结果列表的显示

});

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
      return state.set('visible', action.visible);

    default:
      return state;
  }
}

var _default = reducer;
exports["default"] = _default;