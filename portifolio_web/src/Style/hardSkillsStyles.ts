import { styled } from 'styled-components';

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

  @media (min-width: 4860px) and (min-height: 1495px) {
    width: 300px;
    height: 330px;
    font-size: 1.2rem;

    & img {
    width: 250px;
    height: 250px;
  }
  }

  @media (max-width: 1723px) and (max-height: 1050px) {
    width: 150px;
    height: 180px;
    font-size: 0.8rem;

    & img {
    width: 100px;
    height: 100px;
    }
  }

  @media (max-width: 1185px) and (max-height: 820px) {
    width: 100px;
    height: 130px;
    font-size: 0.6rem;

    & img {
    width: 60px;
    height: 60px;
    }
  }

  @media (max-width: 768px) and (max-height: 1024px) {
    width: 100px;
    height: 130px;
    font-size: 0.6rem;

    & img {
    width: 60px;
    height: 60px;
    }
  }

  @media (max-width: 411px) and (max-height: 731px) {
    width: 90px;
    height: 95px;
    font-size: 0.5rem;
    flex-wrap: wrap;

    & img {
    width: 40px;
    height: 40px;
    }
  }

  @media (max-width: 375px) and (max-height: 812px) {
    width: 90px;
    height: 95px;
    font-size: 0.5rem;
    flex-wrap: wrap;

    & img {
    width: 40px;
    height: 40px;
    }
  }
`;