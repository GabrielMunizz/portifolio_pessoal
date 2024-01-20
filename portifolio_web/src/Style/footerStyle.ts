import { styled } from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.footer_background};
  width: 100%;
  height: 100%;

  & .hardSkillsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
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
`;