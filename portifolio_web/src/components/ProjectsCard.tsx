import { ProjectsCardType } from '../types';
import PortifolioContext from '../context/PortifolioContext';
import { useContext } from 'react';
import * as S from '../Style/projectsStyle';

type ProjectsCardsProps = {
  project: ProjectsCardType
}

const ProjectsCard = ({ project }: ProjectsCardsProps) => {
  const { isBr } = useContext(PortifolioContext)
  const { title, image, url, deploy, descriptionEng, descriptionPT } = project;
  return(
    <S.ProjectCard>
      <div className='projectTitleContainer'>
        <h1>{ title }:</h1>
      </div>
      <div className='projectDataContainer'>
        <a href={ deploy } target='_blank'>
          <img src={ image } alt={ title } />
        </a>        
        <p className='description'>
          { isBr ? descriptionPT : descriptionEng }
          <span className='styledDot'>.</span>
        </p>
        <p>
          GitHub: <a href={ url } target='_blank'>{ url }</a>
        </p>
      </div>
    </S.ProjectCard>
  ) 
}

export default ProjectsCard;