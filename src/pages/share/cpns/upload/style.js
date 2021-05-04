import styled from "styled-components";

export const UploadWrap = styled.div`
padding:10px;
.item{
  margin:10px 0;
}
  .img {
    display:flex;
    img {
     height:100px;
     margin-left:20px;
    }
    label {
      cursor: pointer;
      background-color: white;
      border-radius: 5px;
      border: 1px dashed blue;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
    }
  }
`;
