import styled from "styled-components";

export const HotItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 15px;
  color: #1890ff;
  margin-top: 8px;

  cursor: pointer;
  &:hover {
    .title {
      color: #ff1493;
    }
  }
  .title {
    border-bottom: 1px dashed #ccc;
    margin-left: 10px;
  }
  .index {
    width: 20px;
    height: 20px;
    color: white;
    display: flex;
    padding: 3px;
    border: 1px solid #ccc;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    background-color: ${(props) => {
      switch (props.index) {
        case 1:
          return "#FF5733";
        case 2:
          return "#FFBE45";
        case 3:
          return "#17FB03";
        default:
          return "rgba(0,0,0,.2)";
      }
    }};
  }
`;
