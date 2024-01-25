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
    justify-content: space-between;
  }
`
export const ProjectCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  & .projectTitleContainer h1, .projectDataContainer a {
    color: ${(props) => props.theme.colors.text_details}
  }

  & .projectTitleContainer, .projectDataContainer img {
    margin-bottom: 2rem;
  } 

  & .projectDataContainer img {
    width: 900px;
    height: 300px;
    border-radius: 5px;
  }

  & .description {
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 50rem;
  }

  & .styledDot {
    color: ${(props) => props.theme.colors.themeBtn_color}
  }

  & .githubLink {
    margin-top: 1rem;
  }  
`