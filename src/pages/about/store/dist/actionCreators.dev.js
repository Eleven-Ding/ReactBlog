"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIpAction = exports.getSkillsAction = exports.getAboutHtmlAction = void 0;

var actionTypes = _interopRequireWildcard(require("./constants"));

var _about = require("@/network/about.js");

var _life = require("@/network/life");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//获取HTML
var getAboutHtmlAction = function getAboutHtmlAction() {
  return function (dispatch) {
    (0, _about.getAbout)().then(function (res) {
      dispatch(changeAboutHtmlAction(res.data.row.html));
    });
  };
};

exports.getAboutHtmlAction = getAboutHtmlAction;

var changeAboutHtmlAction = function changeAboutHtmlAction(html) {
  return {
    type: actionTypes.CHANGE_ABOUT_HTML,
    html: html
  };
}; //获取博主技能点


var getSkillsAction = function getSkillsAction() {
  return function (dispatch) {
    (0, _about.getSkills)().then(function (res) {
      // console.log(res);
      dispatch(changeSkills(res.data.doc));
    });
  };
};

exports.getSkillsAction = getSkillsAction;

var changeSkills = function changeSkills(skills) {
  return {
    type: actionTypes.CHANGE_SKILLS,
    skills: skills
  };
}; //获取ip信息


var getIpAction = function getIpAction() {
  return function (dispatch) {
    (0, _life.getPosition)().then(function (res) {
      var position = res.data.position.province + " " + res.data.position.city;
      var ip = res.data.ip;
      localStorage.setItem("ip", ip);
      dispatch(changeIpAction(ip));
      localStorage.setItem("position", position); // console.log(res);

      dispatch(changePositionAction(position)); //保存时间

      var time = new Date(Date.now()).toLocaleString();
      localStorage.setItem("time", new Date(Date.now()).toLocaleString());
      dispatch(changeTimeAction(time));
    });
  };
};

exports.getIpAction = getIpAction;

var changeIpAction = function changeIpAction(ip) {
  return {
    type: actionTypes.CHANGE_IP,
    ip: ip
  };
};

var changePositionAction = function changePositionAction(position) {
  return {
    type: actionTypes.CHANGE_POSITION,
    position: position
  };
};

var changeTimeAction = function changeTimeAction(time) {
  return {
    type: actionTypes.CHANGE_TIME,
    time: time
  };
};