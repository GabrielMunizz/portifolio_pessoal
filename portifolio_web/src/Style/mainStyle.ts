import { styled } from 'styled-components';

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
