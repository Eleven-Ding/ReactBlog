"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LifeWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbackground-color:white;\npadding:8px;\n.music{\n  transition:all .4s;\n  background: url(", ") no-repeat 50%;\n  background-size:cover;\n  p{\n  color:", ";\n    font-size:17px;\n    font-weight:bold;\n    font-family:\"\u6977\u4F53\";\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LifeWrap = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.fontColor === "white" ? "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/music_back1.png" : "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/music_back2.jpg";
}, function (props) {
  return props.fontColor === "white" ? " #21856a" : 'white';
});

exports.LifeWrap = LifeWrap;