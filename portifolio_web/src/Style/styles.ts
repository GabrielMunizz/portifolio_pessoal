import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  height: 100px;
  padding: 0 35px;
  

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

  &:hover {
    transform: scale(1.1);    
    border-bottom: 3px solid ${(props) => props.theme.colors.text_details};    
  }
}

& .socialContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 15%;
  font-size: 35px;
}

& .socialContainer a:hover {  
  border: none;
}
`
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
    transform: translateX(-10%)
  }

  & .imgContainer {
    min-width: 65%;
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
`
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-around;  
  align-items: left;
  min-width: 10%; 
  height: 100%;
 
  & .nameContainer h1 {
    font-size: 45px;
  }

  & hr {
    width: 70px;    
    border-color: ${(props) => props.theme.colors.text_details};
    border-width: 2px;    
  }

  & .nameContainer span {
    color: ${(props) => props.theme.colors.text_details}
  }

  & .contactContainer a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_details};
    border: 2px solid ${(props) => props.theme.colors.text_details};
    padding: 10px;
  } 
`

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.text_details};
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${((props) => props.theme.colors.footer_background)};
  width: 100%;
  height: 39.80vh;

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
`
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
  color: ${(props) => props.theme.colors.text_details};
  border-radius: 8px;

  & img {
    width: 150px;
    height: 150px;
  }
`