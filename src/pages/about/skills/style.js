import styled from "styled-components";

export const SkillWrap = styled.div`
  padding: 10px;
  overflow-x: hidden;
  .hot {
    text-align: center;
    border-bottom: 2px solid #249AD4;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    color:${props => props.homeFontColor}
  }
  .skill_name{
    color:${props => props.homeFontColor}
  }
  @keyframes moveLeft {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }
  .skill_list {
    transform: translateX(-100%);
    animation: moveLeft 1s forwards;
    .skill_item {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }
  }
`;
