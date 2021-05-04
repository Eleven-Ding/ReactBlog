import  styled from 'styled-components'


export const HotArticlesWrap = styled.div`

.hot{
  text-align:center;
  border-bottom:2px solid red;
  border-radius:5px;
  font-size:15px;
  font-weight:bold;
}
animation:rotation 1s;
@keyframes rotation{
  0%{
    transform:rotateY(360deg)
  }

  100%{
    transform:rotateY(0deg)
  }
}
`