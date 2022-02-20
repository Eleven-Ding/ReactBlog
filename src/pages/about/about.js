/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";

import { AboutWrap } from "./style";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import { SelfSelector } from "@/utils/common";
import {
  getSkillsAction,
} from "../about/store/actionCreators";
import {
  getAboutHtmlAction,
} from "../about/store/actionCreators";
import PersonInfo from './person'
import Clock from "./clock";
export default memo(function About() {
  const { html, skills } = SelfSelector({
    about: ['skills', 'html']
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changMainMoveRight(true));
    if (!html)
      dispatch(getAboutHtmlAction());
    if (skills.length === 0)
      dispatch(getSkillsAction());
  }, [dispatch]);
  return (
    <AboutWrap>

      <PersonInfo></PersonInfo>
      <h1 className="aboutMe">时间不等人</h1>
      <Clock></Clock>

      <div
        className="markdown-body"
        style={{ width: "100%" }}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </AboutWrap>
  );
});
