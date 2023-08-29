import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  height: 100px;
  

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
  height: 40vh;
  

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
  }

  & .introContainer h2 {
    color: ${(props) => props.theme.colors.text_details}
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