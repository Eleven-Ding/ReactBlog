import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Progress } from "antd";
import { SkillWrap} from './style'
export default memo(function Skills() {
  const { skills,homeFontColor } = useSelector((state) => ({
    skills: state.getIn(["about", "skills"]),
    homeFontColor: state.getIn(["home", "homeFontColor"]),
  }),shallowEqual);

  return (
    <SkillWrap>
       <div className="hot" style={{ color: homeFontColor }}>
       博主 Skills
      </div>
      <div className="skill_list">
        {skills &&
          skills.map((item) => {
            return (
              <div  key={item.skill_id} className="skill_item">
                <span style={{color:homeFontColor}}>{item.skill_name}</span>
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
