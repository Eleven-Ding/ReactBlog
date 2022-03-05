import styled from "styled-components";

export const PreviewWrapper = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
background-color:#000000d9;
display:${props => {
    return props.show ? "flex" : "none"
  }};
z-index:99999999;
justify-content:center;
align-items:center;
img{
  width:500px;
  cursor:grab;
  z-index:999;
  user-drag:none;
  transition:transform .1s linear;
  transform:translate(${props=>props.point.x}px,${props=>props.point.y}px) scale(${props=>props.ratio});
}
.operation{
  font-size:24px;
  position:fixed;
  width:100vw;
  top:0px;
  color:#cdcdcd;
  z-index:9999;
  text-align:right;
  padding:0 40px;
  background-color:#00000059;
  &>span{
    cursor:pointer;
    padding:10px;
    &:hover{
      color:white;
    }
  }
  .min-ratio{
    pointer-events:${props=>{
      return props.ratio>1?"auto":"none"
    }}
  }
  .plus-ratio{
    pointer-events:${props=>{
      return props.ratio<6?"auto":"none"
    }}
  }
}
`;
