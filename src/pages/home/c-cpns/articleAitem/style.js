import styled from "styled-components";
export const HomeArticleItem = styled.div `
  user-select: none;
  transition: all 0.3s;
  
  /* cursor: url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605510419334.png"),
    auto; */
  animation: ${(props) =>
    props.isShow ? "cssnice .7s ease-out forwards" : ""};
  cursor: pointer;
  font-size: 13px;
  overflow: hidden;
  transition: all 0.5s;
  opacity: 0;
  position: relative;
  @keyframes cssnice {
    0% {
      opacity: 0;
      transform: translate3d(-40%, 0, 0);
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
  /* @keyframes home_animate {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 0.5;

      transform: translateX(0);
    }
    75% {
      opacity: 7;
      transform: translateX(-3%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  } */ 

  &:hover {
    /* cursor: url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605510419334.png"),
      auto; */
    transform: translateY(-1px);
    box-shadow: 0 4px 10px #ccc;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .tag_item {
    display: flex;
    align-items: center;
    padding: 0px 10px;
    border-radius: 3px;
    margin-right: 10px;
    color: white;
  }

  .title {
    margin: 0;
    color: ${(props) => props.homeFontColor};
  }
  padding: 10px 4px;
  .article_info {
  
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    div {
      margin-right: 10px;
    }
    .time{
      display:flex;
      align-items:center;
    }
  }
  .des {
    color: #777;
    font-variant: tabular-nums;
    font-size: 14px;
  }
  .view_all {
    margin-top: 10px;
    text-align: right;
    padding-right: 5px;
    color: #1890ff;
    font-size: 14px;
    span {
      cursor: pointer;
    }
  }

  .bat {
    width: 140px;
    height: 25px;
    top: 8px;
    display: inline;
    right: -50px;
    text-align: center;
    line-height: 25px;
    transform: rotate(45deg);
    position: absolute;
    color: white;
    background: #f95e1f;
  }
  .page_top {
    padding: 0 2px;
    background-color: #fff1f0;
    /* border-color:red; */
    border: 1px solid red;
    font-size: 10px;
    color: red;
    border-radius: 4px;
  }
  @media not screen and (min-width: 50em) {
    animation: ${(props) =>
      props.isShow ? "cssnice .3s ease-out forwards" : ""};
    @keyframes cssnice {
      0% {
        opacity: 0;
        transform: scale(0);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;