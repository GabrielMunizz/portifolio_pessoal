import styled from 'styled-components';

export const AboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;

  & h1 {
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.text_details}
  }

  & p {
    border: 1px solid ${(props) => props.theme.colors.text_details};
    padding: 2rem;
  }

  @media (max-width: 300px) {
    & h1 {
      font-size: 1rem;
    }

    & p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 250px) {
    padding: 0 2rem;

    & p {
      padding: 1rem;
    }
  }
`