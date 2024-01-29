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
    margin-left: 1.3rem;
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

  @media (min-width: 4860px) {
    height: 200px;
    padding: 0 40rem;

    & button {
      font-size: 55px;
    }

    & .navbar a {
      font-size: 35px;
    }

    & .socialContainer a {
      font-size: 50px;
    }

    & .flags {
      justify-content: center;
      padding-bottom: 0;
    }

    & .flags img {
      width: 48px;
      height: 45px;      
    }
  }

  @media (max-width: 1930px) {
    padding: 0 14rem;
  }

  @media (max-width: 1353px) {
    padding: 0 10rem;
  }

  @media (max-width: 1185px) {
    height: 70px;
    padding: 0 8.5rem;

    & .navbar {
      font-size: 18px;
    }

    & .navbar a {
      height: 2rem;
    }

    & button {
      font-size: 30px;
    }

    & .socialContainer a {
      font-size: 25px;
    }

    & .flags img {
      width: 25px;
      height: 23px;      
    }

    & .flags {
      padding-bottom: 0.3rem;
      margin-left: 1.2rem;
    }
  }

  @media (max-width: 768px) and (max-height: 1024px) {
    padding: 0 4rem 0 2rem;
  }

  @media (max-width: 500px)  {
    & .navbar {
      font-size: 16px;
    }

    & .navbar a {
      margin-left: 8px;
    }

    & .flags {     
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 425px) {
    padding: 0 2rem;
    height: 50px;

    & .navbar {
      margin-top: 22px;
      font-size: 15px;
      min-width: 15%;
    }  

    & .socialContainer {
      margin-left: 1rem;
      min-width: 10%;
    }

    & .socialContainer a {
      font-size: 20px;
    }

    & .flags {
      padding-bottom: 0.7rem;     
    }

    & .flags img {
      width: 22px;
      height: 19px;      
    }

    & .themeBtn {
      padding-top: 1rem;
      font-size: 22px;
    }
  }

  @media (max-width: 375px) {    
    padding: 0 2rem;
    height: 50px;

    & .navbar {
      margin-top: 22px;
      font-size: 15px;
      min-width: 15%;
    }

    & .navbar a {
      margin-left: 8px;
    }

    & .socialContainer {
      margin-left: 1rem;
      min-width: 10%;
    }

    & .socialContainer a {
      font-size: 20px;
    }

    & .flags {      
      margin-left: 0.5rem;
    }

    & .flags img {
      width: 22px;
      height: 19px;      
    }

    & button {
      font-size: 22px;
    }
  } 

  @media (max-width: 360px) {
    & button {
      padding-top: 1rem;
    }

    & .navbar a {
      height: 2rem;
    }
    
    & .flags {
      padding-bottom: 1.7rem;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 340px) {
    & button {
      font-size: 14px;
    }

    & .navbar a {
      font-size: 12px;
      height: 2.6rem;
    }

    & .socialContainer {
      margin-left: 8px;
    }

    & .socialContainer a {
      font-size: 16px;
      margin-left: 2px;
    }

    & .flags {
      padding-bottom: 2.6rem;
      margin-left: 2px;
    }

    & .flags img {
      width: 16px;
      height: 15px;
    }

    & .themeBtn {
      padding-top: 0;
    }
  }

  @media (max-width: 285px) {
    padding: 0.5rem;
  }

  @media (max-width: 245px) {
    & .themeBtn {
      font-size: 1rem;
    }
  }
`;