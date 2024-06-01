import styled from "styled-components";

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;

  & .selectContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;

  & .projectDataContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 34rem;
  }

  & .projectTitleContainer h1 {
    color: ${(props) => props.theme.colors.project_title};
  }

  & .projectTitleContainer,
  .projectDataContainer img {
    margin-bottom: 0.5rem;
  }

  & .projectDataContainer img {
    width: 50rem;
    height: 20rem;
    border-radius: 7px;
  }

  & .description {
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 50rem;
  }

  & .styledDot {
    color: ${(props) => props.theme.colors.themeBtn_color};
  }

  & .linksContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
  }

  & .linksContainer a {
    text-decoration: none;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.project_buttons_text};
  }

  & .linksContainer button {
    border: none;
    border-radius: 7px;
    width: 6.5rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.project_buttons};
    transition: 0.3s ease;

    &:hover {
      cursor: pointer;
      border-radius: 0;
    }
  }
`;
