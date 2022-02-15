import styled from "styled-components";

export const ImgWrapper = styled.div`
display:inline-block;
transition: all .3s linear;
position:relative;
margin: 5px;
overflow:hidden;
.shy-img{
  padding: 10px;
  height: auto;
  border: 1px solid #ccc;
  cursor:zoom-in;
}
&:hover{
  .info-line{
    top:0;
    transition: top .3s linear;
  }
  .shy-delete{
    display:initial;
  }
}
.info-line{
  position:absolute;
  background-color:#7d6b6bc9;
  display:flex;
  align-items:center;
  width:100%; 
  padding:0 10px;
  font-size:12px;
  top:-30px;
  color:white;
  justify-content:space-between;
  transition: top .3s linear;
}
.shy-delete{
  position:absolute;
  bottom:10px;
  display:none;
  right:15px;
  color:white;
  cursor:pointer;
  font-size:16px;
  &:hover{
    color:red;
  }
}
.shy-avator{
  width:25px;
  height:25px;
  border-radius:50%;
}
`;
