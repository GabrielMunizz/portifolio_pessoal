import { styled } from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.footer_background};
  width: 100%;
  min-height: 20.6rem;
  margin-top: auto;
  

  & .hardSkillsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }

  & h2 {
    margin-top: 20px;
  }

  @media (min-width: 4860px) and (min-height: 1495px) {
    font-size: 1.5rem;

    & .hardSkillsContainer {
      height: 25.25rem;
    }
  }

  @media (max-width: 1723px) and (max-height: 1050px) {
    min-height: 15rem;
  }

  @media (max-width: 1185px) and (max-height: 820px) {
    min-height: 13rem;

    & .hardSkillsContainer {
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) and (max-height: 1024px) {
    margin-top: auto;
    & .hardSkillsContainer {
      margin-top: 10px;
    }
  }

  @media (max-width: 643px) {
    & .hardSkillsContainer {
      flex-wrap: wrap;      
    }
  }

  @media (max-width: 411px) and (max-height: 731px) {
    width: 100%;
    & .hardSkillsContainer {
      flex-wrap: wrap;      
    }

    & h2 {
      margin-top: 12px;
    }
  }

  @media (max-width: 375px) and (max-height: 812px) {    
    & .hardSkillsContainer {
      flex-wrap: wrap;      
    }

    & h2 {
      margin-top: 12px;
    }
  }
  
`;