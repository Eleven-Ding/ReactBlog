import styled from "styled-components";

export const CommentInputWraper = styled.div`

  .comment_input_wrap {
    padding: 15px;

    .parting-line {
      height: 4px;
      border: 0;
      background-color: #ddd;
      margin: 20px 0;
      background-image: repeating-linear-gradient(
        -45deg,
        #fff,
        #fff 4px,
        transparent 0,
        transparent 8px
      );
    }
    .dsy_tip {
      padding: 5px 0;
      text-align: center;
      font-size: 19px;
      font-weight: 600;
      color: rgb(153, 153, 153);
    }
  }
`;
