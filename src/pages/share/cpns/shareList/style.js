import styled from "styled-components";

export const ShareListWrap = styled.div`
  .list {
    margin-top: 20px;
    columns: 3;
    column-gap: 10px;
  }
  @media not screen and (min-width: 50em) {
    .list {
    margin-top: 20px;
    columns: 1;
  }
  }
`;
