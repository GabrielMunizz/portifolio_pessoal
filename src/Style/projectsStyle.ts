import styled from 'styled-components';

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; 

  & .selectContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    & .selectContainer {      
      font-size: 0.8rem;
    }
  }

  @media (max-width: 350px) {    
    & .selectContainer {      
      font-size: 0.7rem;
    }
  }
`
export const ProjectCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  & .projectTitleContainer h1,
  .projectDataContainer a {
    color: ${(props) => props.theme.colors.text_details};
  }

  & .projectTitleContainer,
  .projectDataContainer img {
    margin-bottom: 2rem;
  }

  & .projectDataContainer img {
    width: 50rem;
    height: 20rem;
    border-radius: 5px;
  }

  & .description {
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 50rem;
  }

  & .styledDot {
    color: ${(props) => props.theme.colors.themeBtn_color};
  }

  & .githubLink {
    margin-top: 1rem;
  }

  @media (max-width: 825px) {
    & .projectDataContainer img {
      width: 40rem;
      height: 15rem;
    }

    & .description {
      max-width: 40rem;
    }
  }

  @media (max-width: 675px) {
    & .projectDataContainer img {
      width: 35rem;
      height: 10rem;
    }

    & .description {
      max-width: 35rem;
    }
  }

  @media (max-width: 675px) {
    & .projectDataContainer img {
      width: 30rem;
    }

    & .description {
      max-width: 30rem;
      font-size: 0.8rem;
    }

    & .githubLink {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    & .projectDataContainer img {
      width: 25rem;
    }

    & .description {
      height: 8rem;
      max-width: 25rem;
    }

    & .githubLink {
      max-width: 2.5rem;
    }
  }

  @media (max-width: 425px) {
    
    & .projectDataContainer img {
      width: 20rem;
    }

    & .description {      
      max-width: 20rem;
    }
  }

  @media (max-width: 350px) {
    
    & .projectDataContainer img {
      width: 15rem;
    }

    & .description {      
      max-width: 15rem;
    }

    & .githubLink {
      margin-top: 3rem;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 300px) {

    & .description {      
      font-size: 0.6rem;
    }
    & .githubLink {  
      margin-top: 0;   
      font-size: 0.6rem;
    }
  }
`;

export const Categories = styled.div`

  & select {
    font-size: 1rem;
  }

  @media (max-width: 675px) {
    & select {
    font-size: 0.8rem;
    }
  }

  @media (max-width: 350px) {
    & select {
    font-size: 0.7rem;
    }
  }
`

export const OrderBy = styled.div`
   
   & select {
    font-size: 1rem;
  }

  @media (max-width: 675px) {
    & select {
    font-size: 0.8rem;
    }
  }

  @media (max-width: 350px) {
    & select {
    font-size: 0.7rem;
    }
  }
`