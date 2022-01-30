import styled from "styled-components";

export const ProductionItemWrap = styled.div `
padding:4px;
user-select: none;
  @keyframes css1 {
    0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    50% {
      opacity: 1;
      transform: translate3d(3%, 0, 0);
    }

    65% {
      opacity: 1;
      transform: translate3d(-2.5%, 0, 0);
    } 

    80% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    90% {
      opacity: 1;
      transform: translate3d(-1%, 0, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes css2 {
    0% {
      opacity: 0;
      transform: translate3d(0, 70%, 0);
    }
    50% {
      opacity: 1;
      transform: translate3d(0, -3%, 0);
    }
    65% {
      opacity: 1;
      transform: translate3d(0, 2.5%, 0);
    }
    80% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    90% {
      opacity: 1;
      transform: translate3d(0, 1%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  opacity:0;
  animation: ${(props) => {
    if (props.index %2== 0 && props.isShow) {
      return "css1 1s forwards";
    } else if (props.index %2==1 && props.isShow) {
      return "css2 1s forwards";
    }
  }};
  background-color: white;
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  .production_top {
    border-radius: 20px 20px 0 0px;
    height: 18rem;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 288px;
    .innerInfo {
      transition: all 0.4s;
      cursor: pointer;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      position: relative;
      color: white;
      .title {
        width: 100%;
        text-align: center;
        transition: all 0.3s;
        font-size: 35px;
        text-shadow: rgb(255, 255, 255) 0px 0px 8px;
      }
      border-radius: 20px 20px 0 0px;

      .des {
        padding: 0 4px;
        word-break: break-word; /* 文本行的任意字内断开 */
        transition: all 0.3s;
        position: absolute;
        bottom: 0;
        font-size: 18px;
        opacity: 0;
        transform: translateY(100%);
      }
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.4);

        .title {
          transition: all 0.3s;
          transform: translateY(-100%);
        }
        .des {
          opacity: 1;
          bottom: 50%;
        }
      }
    }
  }
  .foot {
    padding: 8px 0 8px 0;
    span {
      font-size: 13px;
      color: #525252;
      margin-left: 6px;
    }
    .link {
      position: absolute;
      right: 2%;
      color: blue;
    }
  }
  @media not screen and (min-width: 50em) {
    .production_top {
      height: 200px;
      .innerInfo {
        .title {
          transition: all 0.3s;
          font-size: 30px;
        }
        .des {
          font-size: 15px;
        }
      }
    }
  }
`;