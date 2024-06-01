import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.footer_background};
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 200px;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  & span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & div h4 {
    font-size: 1.2rem;
    margin: 8px;
    color: #fff;
  }

  & div a {
    color: ${(props) => props.theme.colors.text_details};
  }
`;
