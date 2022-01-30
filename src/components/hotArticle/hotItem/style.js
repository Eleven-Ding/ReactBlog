import styled from "styled-components";

export const HotItemWrap = styled.div `
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;
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
    overflow:hidden; //超出的文本隐藏
    text-overflow:ellipsis; //溢出用省略号显示
    white-space:nowrap; //溢出不换行
  }
  .index {
    display:block;
    height: 20px;
    min-width:20px;
    line-height:20px;
    text-align:center;
    color: white;
    border-radius: 50%;
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