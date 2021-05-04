import styled from "styled-components";

export const ItemWrap = styled.div`
  width: 100%;
  margin-top: 20px;

  background-color: #fff;
  overflow: hidden;
  break-inside: avoid;

  &:hover .top_left img {
    transition: all 0.5s;
    transform: rotate(360deg);
  }
  .top {
    display: flex;
    .top_left {
      img {
        width: 45px;
        transition: all 0.5s;
        border-radius: 50%;
      }
    }
    .top_right {
      padding-left: 20px;
      .username {
        font-weight: bold;
        color: #ff5777;
      }
      .time {
        font-size: 14px;
        color: #ccc;
      }
    }
  }
  .bottom {
    .des {
      padding: 4px;
    }
    .img {
      img {
        border-radius: 4px;
        width: 100%;
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      span {
        cursor: pointer;
        padding: 3px 5px;
      }
      .expand {
        color: #02A2FF;
        cursor: pointer;
      }
    }
  }
`;
