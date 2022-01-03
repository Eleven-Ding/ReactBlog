"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PositionWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nspan{\n  color:", "\n}\npadding:15px;\n.YourInfo{\n  font-size:14px;\n  font-family:\"\u6977\u4F53\";\n  color:#858585;\n  padding-top:10px;\n}\n.your_words{\n  font-size:17px;\n  border-radius:4px;  \n  border-bottom:1px solid  #21856a;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PositionWrap = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.homeFontColor;
});

exports.PositionWrap = PositionWrap;