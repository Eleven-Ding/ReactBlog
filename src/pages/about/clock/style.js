import styled from "styled-components";

export const ClockWrap = styled.div`
 @keyframes moveee {
    0% {
      transform: scale(0.1) translateY(-300%);
    }
    100% {
      transform: scale(0.6) translateY(0) ;
    }
  }
  animation: moveee 1s;
    margin: -50px auto;
    transform: scale(0.6);
    min-width: 100px;
    width: 250px;
    height: 250px;
    background-color: white;
    border: 15px solid white;
    border-radius: 50%;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1),
    0 10px 10px rgba(0, 0, 0, 0.3), 0 0 0 4px white;
    background-image: url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/clock.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  .clock::before {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    z-index: 999;
    background-color: rgb(58, 58, 58);
    border-radius: 50%;
  }
  .hour,
  .min,
  .sec {
    position: absolute;
  }
  .hour,
  .hr {
    width: 130px;
    height: 130px;
  }
  .min,
  .mn {
    width: 160px;
    height: 160px;
  }
  .sec,
  .sc {
    width: 200px;
    height: 200px;
  }
  .hr,
  .mn,
  .sc {
    display: flex;
    justify-content: center;
    position: absolute;
  }
  .hr::before {
    width: 5px;
    height: 60px;
    background-color: rgba(219, 0, 0, 0.808);
    content: "";
    border-radius: 6px 6px 0 0;
  }
  .mn::before {
    width: 3px;
    height: 80px;
    background-color: rgb(0, 235, 125);
    content: "";
    border-radius: 6px 6px 0 0;
  }
  .sc::before {
    width: 3px;
    height: 120px;
    background-color: rgb(0, 170, 248);
    content: "";
    border-radius: 6px;
  }
  .sc {
    transition: linear 1s;
  }
  .mn {
    transition: linear 0.1s;
  }
  .hr {
    transition: linear 0.1s;
  }
`;
