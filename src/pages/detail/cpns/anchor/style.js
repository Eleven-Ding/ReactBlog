import styled from "styled-components";

export const MyAnchorWrap = styled.div`
  .hot {
    font-weight: 600;
    text-align: center;
    border-bottom: 2px solid #4ce6ce;
    border-radius: 5px;
    font-size: 15px;
  }
  .ant-anchor-wrapper::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .ant-anchor-wrapper::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: #f4a7ca;
    background-image: repeating-linear-gradient(
      -45deg,
      #fff,
      #ff5777 2px,
      transparent 0,
      transparent 4px
    );
  }

  .ant-anchor-wrapper::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
`;
