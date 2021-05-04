import styled from "styled-components";

export const FriendItemWrap = styled.div`
.title{
  overflow: hidden;
    /*文本不会换行*/
    white-space: nowrap;
    /*当文本溢出包含元素时，以省略号表示超出的文本*/
    text-overflow: ellipsis;
}
  opacity: 0;
  @keyframes dsyMove {
    0% {
      opacity: 0;
      -webkit-transform: translateY(300px);
      transform: translateY(300px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  animation: dsyMove 0.8s forwards;
  animation-delay: ${(props) => {
    return props.index / 10 + "s";
  }};
`;
