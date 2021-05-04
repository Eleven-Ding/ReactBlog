import styled from 'styled-components'


export const ShareDetailWrap = styled.div`
padding:10px;
.top {
    display: flex;
    .top_left {
      img {
        width: 45px;
        transition: all 0.5s;
        border-radius: 50%;
      }
    }
    .top_right {
      padding-left: 20px;
      .username {
        font-weight: bold;
        color: #ff5777;
      }
      .time {
        font-size: 14px;
        color: #ccc;
      }
    }
  }
  .bottom{
    .img{
      text-align:center;
      img{
       
        max-width:100%;
      }
    }
  }

`