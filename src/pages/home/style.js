import styled from "styled-components";
export const HomeWrapper = styled.div`
  padding: 15px 0px;


  
  .home_content_header {
    padding: 0 10px 5px 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info {
      color: #565656;
      font-weight: 600;
      span {
        color: red;
      }
    }
  }
  .home_article_list {
    width: 100%;
  }

  //图片 到时候可以改下这个的样式
  .image_box {
    /* cursor: url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605510419334.png"),
    auto; */
    max-height:260px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 6px;
    img {
      transition: all 0.5s;
      width: 100%;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .Pagination {
    text-align: center;
    padding: 15px 0;
  }
  .page {
    animation: rotationPage 0.6s;
    /* transform:rotate(30deg) */
  }
  @keyframes rotationPage {
    0% {
      transform: rotate(30deg);
    }

    50% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @media not screen and (min-width: 50em) {

  }
`;
