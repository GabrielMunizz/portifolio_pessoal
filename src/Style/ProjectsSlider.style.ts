import styled from "styled-components";

export const ProjectsSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42rem;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 45rem;
    border-radius: 7px;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 5rem;
  border: none;
  color: ${(props) => props.theme.colors.main_text_color};

  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
  }
`;
