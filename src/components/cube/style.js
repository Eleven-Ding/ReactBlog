import styled from "styled-components";
export const CubeWrap = styled.div `
  z-index: 9999999;
  /* position: fixed;
  left: 100px;
  bottom: 150px; */
  height: 300px;
  margin-top: 70px;
  transform: scale(0.7);
  .wrap {
    height: 200px;
    perspective: 1000px;
    position: absolute;
  }
  img{
    height:100%;
    width:100%;
  }
  .wrap .cube {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: absolute;
    transform-style: preserve-3d;
    animation: rotate 15s linear infinite;
  }

  .wrap .cube div {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    font-size: 40px;
    color: white;
    transition: all 0.3s ease-in;
  }

  .wrap .cube .front {
    transform: translateZ(-100px);
  }

  .wrap .cube .back {
    transform: translateZ(100px);
  }

  .wrap .cube .right {
    transform: rotateY(90deg) translateZ(-100px);
  }

  .wrap .cube .left {
    transform: rotateY(90deg) translateZ(100px);
  }

  .wrap .cube .top {
    transform: rotateX(90deg) translateZ(100px);
  }

  .wrap .cube .bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }

  /* hover*/
  .wrap .cube:hover .front {
    background-color: blue;
    opacity: 0.8;
    transition: transform 0.3s ease-in;
    transform: translateZ(-200px);
  }

  .wrap .cube:hover .back {
    background-color: #ffc0cb;
    opacity: 0.8;
    transform: translateZ(200px);
  }

  .wrap .cube:hover .right {
    background-color: darkred;
    opacity: 0.8;
    transform: rotateY(90deg) translateZ(-200px);
  }

  .wrap .cube:hover .left {
    background-color: cyan;
    opacity: 0.8;
    transform: rotateY(90deg) translateZ(200px);
  }

  .wrap .cube:hover .top {
    background-color: grey;
    opacity: 0.8;
    transform: rotateX(90deg) translateZ(200px);
  }

  .wrap .cube:hover .bottom {
    background-color: #ffff00;
    opacity: 0.8;
    transform: rotateX(-90deg) translateZ(200px);
  }

  /*小盒子*/

  .wrap .cube i {
    display: inline-block;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    position: absolute;
  }

  .wrap .cube .i_front {
    transform: translateZ(-75px);
  }

  .wrap .cube .i_back {
    transform: translateZ(75px);
  }

  .wrap .cube .i_right {
    transform: rotateY(90deg) translateZ(-75px);
  }

  .wrap .cube .i_left {
    transform: rotateY(90deg) translateZ(75px);
  }

  .wrap .cube .i_top {
    transform: rotateX(90deg) translateZ(75px);
  }

  .wrap .cube .i_bottom {
    transform: rotateX(-90deg) translateZ(75px);
  }

  img {
    width: 100%;
  }
  /*:hover*/

  @keyframes rotate {
    0% {
      transform: rotateY(0deg) rotateX(360deg);
    }

    100% {
      transform: rotateY(360deg) rotateX(0deg);
    }
  }
  @media not screen and (min-width: 50em) {
    height: 200px;
    margin-top: -40px;
    transform: scale(0.4);
  }
`;