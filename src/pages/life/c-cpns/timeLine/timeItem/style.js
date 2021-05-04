import styled from "styled-components";
export const TimeItemWrap = styled.div`
  display: block;
  animation: ${(props) => (props.isShow ? " moveTop .6s forwards " : "")};
  transition: all 0.6s;

  opacity: 0;
  @keyframes moveTop {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
