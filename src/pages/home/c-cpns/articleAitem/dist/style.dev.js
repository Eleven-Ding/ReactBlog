"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeArticleItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  user-select: none;\n  transition: all 0.3s;\n  \n  /* cursor: url(\"https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605510419334.png\"),\n    auto; */\n  animation: ", ";\n  cursor: pointer;\n  font-size: 13px;\n  overflow: hidden;\n  transition: all 0.5s;\n  opacity: 0;\n  position: relative;\n  @keyframes cssnice {\n    0% {\n      opacity: 0;\n      transform: translate3d(-40%, 0, 0);\n    }\n    50% {\n      opacity: 1;\n      transform: translate3d(3%, 0, 0);\n    }\n    65% {\n      opacity: 1;\n      transform: translate3d(-2.5%, 0, 0);\n    }\n    80% {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n    90% {\n      opacity: 1;\n      transform: translate3d(-1%, 0, 0);\n    }\n    100% {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  /* @keyframes home_animate {\n    0% {\n      opacity: 0;\n      transform: translateX(-100%);\n    }\n    50% {\n      opacity: 0.5;\n\n      transform: translateX(0);\n    }\n    75% {\n      opacity: 7;\n      transform: translateX(-3%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  } */ \n\n  &:hover {\n    /* cursor: url(\"https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605510419334.png\"),\n      auto; */\n    transform: translateY(-1px);\n    box-shadow: 0 4px 10px #ccc;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  .tag_item {\n    display: flex;\n    align-items: center;\n    padding: 0px 10px;\n    border-radius: 3px;\n    margin-right: 10px;\n    color: white;\n  }\n\n  .title {\n    margin: 0;\n    color: ", ";\n  }\n  padding: 10px 4px;\n  .article_info {\n  \n    padding: 10px 0;\n    display: flex;\n    flex-wrap: wrap;\n    align-items:center;\n    div {\n      margin-right: 10px;\n    }\n    .time{\n      display:flex;\n      align-items:center;\n    }\n  }\n  .des {\n    color: #777;\n    font-variant: tabular-nums;\n    font-size: 14px;\n  }\n  .view_all {\n    margin-top: 10px;\n    text-align: right;\n    padding-right: 5px;\n    color: #1890ff;\n    font-size: 14px;\n    span {\n      cursor: pointer;\n    }\n  }\n\n  .bat {\n    width: 140px;\n    height: 25px;\n    top: 8px;\n    display: inline;\n    right: -50px;\n    text-align: center;\n    line-height: 25px;\n    transform: rotate(45deg);\n    position: absolute;\n    color: white;\n    background: #f95e1f;\n  }\n  .page_top {\n    padding: 0 2px;\n    background-color: #fff1f0;\n    /* border-color:red; */\n    border: 1px solid red;\n    font-size: 10px;\n    color: red;\n    border-radius: 4px;\n  }\n  @media not screen and (min-width: 50em) {\n    animation: ", ";\n    @keyframes cssnice {\n      0% {\n        opacity: 0;\n        transform: scale(0);\n      }\n\n      100% {\n        opacity: 1;\n        transform: scale(1);\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeArticleItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.isShow ? "cssnice .7s ease-out forwards" : "";
}, function (props) {
  return props.homeFontColor;
}, function (props) {
  return props.isShow ? "cssnice .3s ease-out forwards" : "";
});

exports.HomeArticleItem = HomeArticleItem;