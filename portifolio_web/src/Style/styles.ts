import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  height: 100px;
  margin: 0 20px;

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
  width: 30%;
  font-size: 25px;  
}

& .navbar a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.main_text_color};
  transition: 0.3s ease;
  padding-bottom: 10px;

  &:hover {
    transform: scale(1.1);    
    border-bottom: 3px solid ${(props) => props.theme.colors.themeBtn_color};    
  }
}

& .socialContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 15%;
  font-size: 35px;
}

& .socialContainer a:hover {  
  border: none;
}
`