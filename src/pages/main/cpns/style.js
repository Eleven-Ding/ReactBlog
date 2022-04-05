import styled from "styled-components";
export const HomeModalWrapper = styled.div`
  img{
    width:50%;
  }
  span{
    color: #8B8B8B;
    font-size: 12px;
    margin-top: 10px;
    display: block;
  }
  .img-container{
    height:314px;
    display:flex;
    align-items:flex-start;
    overflow:hidden;
  }
  @media not screen and (min-width: 50em) {
    .img-container{
      height:217px;
     
    }
  }
`;
