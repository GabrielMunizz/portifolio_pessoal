import { styled } from "styled-components";

export const HardSkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 230px;
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.main_text_color};
  border-radius: 8px;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  & img {
    width: 150px;
    height: 150px;
  }
`;
