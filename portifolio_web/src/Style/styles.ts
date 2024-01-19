import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20rem;

  & .flags {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.7rem;
    margin-left: 1.2rem;
    border: none;
    transition: 0.3s ease;
  }

  & .flags:hover {
    transform: scale(1.1);
  }

  & .flags img {
    width: 35px;
    height: 32px;
    border-radius: 50%;
  }

  & button {
    background-color: transparent;
    border: none;
    font-size: 40px;
    transition: 0.3s ease;
    color: ${(props) => props.theme.colors.themeBtn_color};
  }

  & button:hover {
    cursor: pointer;
  }

  & .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 30%;
    font-size: 25px;
  }

  & .navbar a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.main_text_color};
    transition: 0.3s ease;
    padding-bottom: 10px;
    margin-left: 20px;    
    height: 3rem;

    &:hover {      
      border-bottom: 3px solid ${(props) => props.theme.colors.text_details};
    }
  }

  & .socialContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 20%;
    font-size: 35px;
  }

  & .socialContainer a:hover {
    transform: scale(1.1);
    border: none;
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  padding: 0 35px;

  & .mainContent {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 89%;
    height: 100%;
    transform: translateX(-10%);
  }

  & .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 65%;
    height: 400px;
  }

  .imgContainer img {
    width: 380px;
    height: 480px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px #000;
  }

  & .introContainer {
    max-width: 15%;
    text-overflow: ellipsis;
  }

  & .introContainer h1 {
    font-size: 40px;
  }

  & .introContainer a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_details};
  }
`;
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  min-width: 15%;
  height: 100%;
  margin-left: 12%;
  

  & .professionalContainer {
    width: 100%;    
  }

  & .nameContainer h1 {
    font-size: 45px;
  }

  & hr {
    width: 70px;
    border-color: ${(props) => props.theme.colors.text_details};
    border-width: 2px;
  }

  & .nameContainer span {
    color: ${(props) => props.theme.colors.text_details};
  }

  & .contactContainer a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_details};
    border: 2px solid ${(props) => props.theme.colors.text_details};
    padding: 10px;
  }
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.text_details};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.footer_background};
  width: 100%;
  height: 39.8vh;

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
`;
export const HardSkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 230px;
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.main_text_color};
  border-radius: 8px;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  & img {
    width: 150px;
    height: 150px;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 200px;
  border: 1px solid ${(props) => props.theme.colors.main_text_color};

  & span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & div h4 {
    margin: 8px;
  }

  & div a {
    color: ${(props) => props.theme.colors.text_details};
  }
`;