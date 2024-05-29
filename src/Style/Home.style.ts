import styled from 'styled-components';

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  
  @media (min-width: 4860px) and (min-height: 1495px) {
    min-height: calc(100vh - 200px);
  }

  @media (max-width: 1178px) {
    min-height: calc(100vh - 70px);
  } 

  @media (max-width: 768px) and (max-height: 1024px) {
    min-height: calc(100vh - 100px);
  } 
  
  @media (max-width: 768px) {
    min-height: calc(100vh - 70px);
  }

  @media (max-width: 411px) and (max-height: 731px) {
    min-height: calc(100vh - 50px);
  }

  @media (max-width: 375px) and (max-height: 812px) {
    min-height: calc(100vh - 50px);
  }
`