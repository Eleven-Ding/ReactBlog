import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding-bottom: 10px;
  margin-top: 20px;
  color: #8f8f8f;
  .left {
    background-color: #ff5500;
    color: white;
    padding: 3px;
    border-radius: 3px;
    font-size: 12px;
  }
  .right {
    background-color: #2db7f5;
    color: white;
    border-radius: 3px;
    font-size: 12px;
    padding: 3px;
  }

  .time {
    font-size: 12px;
    color: #fd7cbc;
  }
  .about_smile{
    display:flex;
    
  }
  .smile {
    color:#ff5777;

    animation:dancing 1s infinite;
  }
  @keyframes dancing {
    0% {
      transform:  translateY(0) rotate(0);
    }

    50% {
      transform:  translateY(5px) rotate(-5deg);
    }
    70% {
      transform: translateY(0) rotate(-5deg);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }
`;
