import React, { memo } from "react";
import { Progress } from "antd";
import { SkillWrap } from './style'
import { SelfSelector } from "@/utils/common";
import { BlogTheme } from "@/constant";
const strokeColor = {
  "0%": "#108ee9",
  "100%": "#87d068",
}
export default memo(function Skills() {
  const { skills, theme } = SelfSelector({
    about: 'skills',
    header: 'theme'
  });

  return (
    <SkillWrap homeFontColor={BlogTheme[theme].homeFontColor}>
      <div className="hot">
        Skills
      </div>
      <div className="skill_list">
        {
          skills?.map((item) => {
            return (
              <div key={item.skill_id} className="skill_item">
                <span className="skill_name" >{item.skill_name}</span>
                <Progress
                  style={{ width: "70%" }}
                  status="active"
                  strokeColor={strokeColor}
                  percent={item.percent}
                />
              </div>
            );
          })}
      </div>
    </SkillWrap>
  );
});
