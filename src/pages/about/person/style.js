import styled from "styled-components";

export const PersonWrap = styled.div`

transform:translateY(-100%);
animation:aboutcss .6s forwards;
@keyframes aboutcss{
  0%{
    opacity:0;
    transform:translateY(-100%)
  }
  100%{
    opacity:1;
    transform:translateY(0)
  }
}
border-radius:5px;
  border-bottom:1px solid ${props=>props.homeFontColor};
  .top {

    height: 200px;
    display: flex;
    align-items: flex-end;
    background: url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/person.png")
      no-repeat top;
  }
  .Info {

    background-color: white;
    display:flex;

    .info_right{
    padding:0 5px 0 10px;
      display:flex;
      flex-direction:column;
      font-size:17px;
      font-family:"楷体";
    }
    .content{
      margin-top:10px;
    }
    .avat {
     img{
      border-radius:10px;
     }
  
     margin-left:40px;
     transform:translateY(-40px);
    }
  }
`;
