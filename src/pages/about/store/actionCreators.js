import * as actionTypes from "./constants";
import {
  getAbout,
  getSkills
} from "@/network/about.js";
import {
  getPosition
} from "@/network/life";
import { getPositionPrefetch } from "../../../network/prefetch";
//获取HTML
import { changeMainLoadingAction } from "@/pages/main/store/actionCreators";
export const getAboutHtmlAction = () => {
  return (dispatch) => {
    getAbout().then((res) => {
      dispatch(changeAboutHtmlAction(res.data.row.html));
      dispatch(changeMainLoadingAction(false))
    });
  };
};
const changeAboutHtmlAction = (html) => {
  return {
    type: actionTypes.CHANGE_ABOUT_HTML,
    html,
  };
};

//获取博主技能点
export const getSkillsAction = () => {
  return (dispatch) => {
    getSkills().then((res) => {
      dispatch(changeSkills(res.data.doc));
    });
  };
};

const changeSkills = (skills) => {
  return {
    type: actionTypes.CHANGE_SKILLS,
    skills,
  };
};

//获取ip信息
export const getIpAction = () => {
  return (dispatch) => {
    getPositionPrefetch().then((res) => {
      const position =
        res.data?.position.province + " " + res.data?.position.city;
      const ip = res.data?.ip
      localStorage.setItem("ip", ip);
      dispatch(changeIpAction(ip));
      localStorage.setItem("position", position);
      dispatch(changePositionAction(position));
      localStorage.setItem("time", new Date(Date.now()).toLocaleString());

    });
  };
};
const changeIpAction = (ip) => {
  return {
    type: actionTypes.CHANGE_IP,
    ip,
  };
};
const changePositionAction = (position) => {
  return {
    type: actionTypes.CHANGE_POSITION,
    position,
  };
};

export const changeTimeAction = (time) => {
  return {
    type: actionTypes.CHANGE_TIME,
    time,
  };
};