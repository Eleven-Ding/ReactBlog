import styled from "styled-components";

export const HotCommentsWrap = styled.div`
  padding: 0 15px;
  overflow-y: hidden;
  
  height: 500px;

  @keyframes hotMove {
    0% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0);
    }
  }
  .hot_comment_list {
    overflow-y: hidden;
    margin-top: 40px;
    transform: translateY(50%);
    animation: hotMove 1.0s forwards;
    /* margin-top:${(props) => `-${props.height}px`}; */
    /* transform: ${(props) => `translateY(-${props.height}px)`}; */
    .hot_comment_item {
      margin-top: -10px;
    }
  }

  .hot {
    text-align: center;
    border-bottom: 2px solid #80f511;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  .item-enter {
    opacity: 0;
    transform: scale(0.6);
  }

  .item-enter-active {
    opacity: 1;
    transition: all 0.7s;
    transform: scale(1);
  }

  .item-enter-done {
    color: red;
  }

  .item-exit {
    opacity: 1;
    transform: scale(1);
  }

  .item-exit-active {
    opacity: 0;
    transform: scale(0.6);
    transition: all 0.7s;
  }
  .item-exit-done {
    opacity: 0;
  }
`;
