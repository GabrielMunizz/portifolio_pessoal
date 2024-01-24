import ProjectsCard from '../components/ProjectsCard';
import { projects } from '../assets/projects';
import * as S from '../Style/projectsStyle'
import { useContext } from 'react';
import PortifolioContext from '../context/PortifolioContext';
import Categories from '../components/Categories';

const Projects = () => {
  const { selected, isBr } = useContext(PortifolioContext);  
  const selectedProjects = projects
    .filter((project) => project.categories.includes(selected));
  return(
   <S.Projects>   
    <section>
      <span>
        {isBr ? 'Selecione a categoria: ' : 'Select category: '}
        <Categories />
      </span>
      {selectedProjects
        .map((project) => <ProjectsCard key={ project.id } project={ project }/>)}
    </section>
   </S.Projects>
  )
}

export default Projects;