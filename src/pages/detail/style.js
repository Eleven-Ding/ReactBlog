import styled from "styled-components";

export const DetailWrapper = styled.div`


  background-color:white;
  padding: 10px 0px;
  .detail_header {
    background-color: #e1f0ff;
    padding: 10px 0;
    display: flex;
    color: #007988;
    font-size: 16px;
    padding-left: 5px;
    .home {
      color: ${(props) => props.homeFontColor};
      cursor: pointer;
      text-decoration: underline;
      font-weight: 600;
    }
  }
  .detail_all_info {
    padding: 0 10px;
    text-align: center;
    width: 100%;
  }
  .detail_title {
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => props.homeFontColor};
  }
  .detail_info {
    display: flex;
    padding: 20px 0;
    justify-content: center;
    div {
      padding: 0 10px;
    }
  }
  .detail_image {
    width: 100;
    img {
      width: 100%;
    }
  }
  .audio {
    width: 100;
    padding: 10px 0;
    video {
      width: 100%;
    }
    span {
      font-size: 23px;
    }
  }
  .markdown-body {
    margin-top: 30px;
    padding: 0 10px;
  }
  .article_tags {
    background-color: #f6f8fa;
    width: 100%;
    padding: 10px;
    .article_tags_container{
      display: flex;
      alignItems: center;
    }
    .tag_item {
      margin-left: 6px;
      padding: 4px 10px;
      height: 60px;
      border-radius: 7px;
      color: white;
      cursor: pointer;
      height: 23px;
      display: flex;
      align-items: center;
    }
    .modifyTime {
      text-align: right;
      color: #ccc;
      font-size: 15px;
    }
  }

  
  .AnchorMenu {
    display: none;
  }
  @media not screen and (min-width: 50em) {
    .AnchorMenu {
      display: block;
    }
  }
`;
