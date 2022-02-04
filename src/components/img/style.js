import styled from "styled-components";

export const ImgWrapper = styled.span`
display:inline;
.shy-img{
  padding: 10px;
  margin: 5px;
  height: auto;
  border: 1px solid #ccc;
  transition: transform .3s linear;   
  position:relative;
}
img{
  z-index:99;
  cursor:pointer;
}
`;
  