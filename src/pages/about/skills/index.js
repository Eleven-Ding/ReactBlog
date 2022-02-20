import React, { memo } from "react";
import { Progress } from "antd";
import { SkillWrap } from './style'
import { SelfSelector } from "@/utils/common";
export default memo(function Skills() {
  const { skills, homeFontColor } = SelfSelector({
    about: 'skills',
    home: 'homeFontColor'
  });

  return (
    <SkillWrap>
      <div className="hot" style={{ color: homeFontColor }}>
        博主 Skills
      </div>
      <div className="skill_list">
        {skills &&
          skills.map((item) => {
            return (
              <div key={item.skill_id} className="skill_item">
                <span style={{ color: homeFontColor }}>{item.skill_name}</span>
                <Progress
                  style={{ width: "70%" }}
                  status="active"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={item.percent}
                />
              </div>
            );
          })}
      </div>
    </SkillWrap>
  );
});
