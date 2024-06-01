import { styled } from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.footer_background};
  width: 100%;
  height: 40rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  margin-top: auto;

  & .hardSkillsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-top: 20px;
  }

  & h2 {
    margin-top: 20px;
  }
`;
