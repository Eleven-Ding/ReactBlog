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
  transition: transform .8s linear;
  width:${props => props.width}px;
  animation:scaleInit 1s linear
}

.shy-video{
    width: 140px;
    height: 20px;
    top: 8px;
    display: inline;
    right: -50px;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    position: absolute;
    color: white;
    background: #ff742e;
    z-index:10;
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
  z-index:10;
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
@keyframes scaleInit{
  0%{
    transform:scale(0)
  }
  100%{
    transform:scale(1)
  }
}
`;
