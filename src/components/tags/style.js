import styled from "styled-components";

export const TagsWrap = styled.div`
  @keyframes moveUp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: moveUp 0.7s;
  padding: 10px;
  .title {
    font-size: 17px;
    color: #2db7f5;
    padding-bottom: 10px;
  }
  .tag_list {
    display: flex;
    flex-wrap: wrap;
  }
`;
