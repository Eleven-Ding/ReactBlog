"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CubeWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  z-index: 9999999;\n  /* position: fixed;\n  left: 100px;\n  bottom: 150px; */\n  height: 300px;\n  margin-top: 70px;\n  transform: scale(0.7);\n  .wrap {\n    height: 200px;\n    perspective: 1000px;\n    position: absolute;\n  }\n  img{\n    height:100%;\n    width:100%;\n  }\n  .wrap .cube {\n    width: 200px;\n    height: 200px;\n    margin: 0 auto;\n    position: absolute;\n    transform-style: preserve-3d;\n    animation: rotate 15s linear infinite;\n  }\n\n  .wrap .cube div {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    text-align: center;\n    font-size: 40px;\n    color: white;\n    transition: all 0.3s ease-in;\n  }\n\n  .wrap .cube .front {\n    transform: translateZ(-100px);\n  }\n\n  .wrap .cube .back {\n    transform: translateZ(100px);\n  }\n\n  .wrap .cube .right {\n    transform: rotateY(90deg) translateZ(-100px);\n  }\n\n  .wrap .cube .left {\n    transform: rotateY(90deg) translateZ(100px);\n  }\n\n  .wrap .cube .top {\n    transform: rotateX(90deg) translateZ(100px);\n  }\n\n  .wrap .cube .bottom {\n    transform: rotateX(-90deg) translateZ(100px);\n  }\n\n  /* hover*/\n  .wrap .cube:hover .front {\n    background-color: blue;\n    opacity: 0.8;\n    transition: transform 0.3s ease-in;\n    transform: translateZ(-200px);\n  }\n\n  .wrap .cube:hover .back {\n    background-color: #ffc0cb;\n    opacity: 0.8;\n    transform: translateZ(200px);\n  }\n\n  .wrap .cube:hover .right {\n    background-color: darkred;\n    opacity: 0.8;\n    transform: rotateY(90deg) translateZ(-200px);\n  }\n\n  .wrap .cube:hover .left {\n    background-color: cyan;\n    opacity: 0.8;\n    transform: rotateY(90deg) translateZ(200px);\n  }\n\n  .wrap .cube:hover .top {\n    background-color: grey;\n    opacity: 0.8;\n    transform: rotateX(90deg) translateZ(200px);\n  }\n\n  .wrap .cube:hover .bottom {\n    background-color: #ffff00;\n    opacity: 0.8;\n    transform: rotateX(-90deg) translateZ(200px);\n  }\n\n  /*\u5C0F\u76D2\u5B50*/\n\n  .wrap .cube i {\n    display: inline-block;\n    top: 50%;\n    left: 50%;\n    width: 150px;\n    height: 150px;\n    margin-left: -75px;\n    margin-top: -75px;\n    position: absolute;\n  }\n\n  .wrap .cube .i_front {\n    transform: translateZ(-75px);\n  }\n\n  .wrap .cube .i_back {\n    transform: translateZ(75px);\n  }\n\n  .wrap .cube .i_right {\n    transform: rotateY(90deg) translateZ(-75px);\n  }\n\n  .wrap .cube .i_left {\n    transform: rotateY(90deg) translateZ(75px);\n  }\n\n  .wrap .cube .i_top {\n    transform: rotateX(90deg) translateZ(75px);\n  }\n\n  .wrap .cube .i_bottom {\n    transform: rotateX(-90deg) translateZ(75px);\n  }\n\n  img {\n    width: 100%;\n  }\n  /*:hover*/\n\n  @keyframes rotate {\n    0% {\n      transform: rotateY(0deg) rotateX(360deg);\n    }\n\n    100% {\n      transform: rotateY(360deg) rotateX(0deg);\n    }\n  }\n  @media not screen and (min-width: 50em) {\n    height: 200px;\n    margin-top: -40px;\n    transform: scale(0.4);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CubeWrap = _styledComponents["default"].div(_templateObject());

exports.CubeWrap = CubeWrap;