import styled from "styled-components";

export const PreViewListWrapper = styled.div`
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  height:200px;
  .pre-list-container{
    width:1000px;
    padding:10px 0;
    margin:0 auto;
    overflow:scroll;
    .container-list{
      height:90px;
      display:flex;
      overflow:hidden;
      padding:20px 0;
      .pre-img-container{  

        img{
        width:70px;
         display:inline-block;
         cursor:pointer;
         transition:all linear .2s;
         &:hover{
          box-shadow: 0 0 10px yellow;
          transform:translateY(-5px)
         }
        }
      }
    }
  }

`;
