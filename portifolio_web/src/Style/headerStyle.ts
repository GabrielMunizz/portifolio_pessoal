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
    margin-left: 1.5rem;
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

  @media (min-width: 4860px) and (min-height: 1495px) {
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
`;