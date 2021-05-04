import styled from "styled-components";

export const CommentItemWrap = styled.div`
display:block;
transition:all .5s;
/* transform:translateX(110%); */
animation:${props=>props.isShow?"moveRight .5s forwards":""};
.markdown-body{
  margin-top:0;
}
@keyframes moveRight{
  0%{
    transform:translateX(110%);
  }
  100%{
    transform:translateX(0);
  }
}
  &:hover {
    .avatar {
      transition:all .5s;
      transform: rotate(360deg);
    }
  }
  .avatar{
    transition:all .5s;
  }

  .upPerson {
    color: #ff6137;
    border: 1px solid #ff6137;
    font-size: 10px;
    padding: 1px 2px;
    margin-right: 2px;
    border-radius: 2px;
    font-weight: 600;
  }
.comment_father{
  color:blue;
}

`;
