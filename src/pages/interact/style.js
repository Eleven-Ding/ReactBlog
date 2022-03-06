import styled from "styled-components";

export const InteractWrap = styled.div`
  padding: 15px;
  .center_wrap {
    text-align: center;
  }
  .link_title {
    color: rgb(122, 122, 122);
    margin: 30px 0 30px 0;
    font-weight: bold;
  }
  .parting-line {
    height: 4px;
    border: 0;
    background-color: #ddd;
    margin: 20px 0;
    background-image: repeating-linear-gradient(
      -45deg,
      #fff,
      #ff5777 5px,
      transparent 0,
      transparent 8px
    );
  }
  .apply_link {
    .input {
      width: 70%;
      margin: 10px 0;
    }
  }
  .tip {
    color: #a1a1a1;
  }

  @media not screen and (min-width: 50em) {
    .apply_link {
      .input {
        width: 90%;
        margin: 10px 0;
      }
    }
  }
`;
