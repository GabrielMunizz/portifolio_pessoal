import ProjectsCard from '../components/ProjectsCard';
import { projects } from '../assets/projects';
import * as S from '../Style/projectsStyle'
import { useContext } from 'react';
import PortifolioContext from '../context/PortifolioContext';
import Categories from '../components/Categories';
import OrderBy from '../components/OrderBy';
import MotionDiv from '../components/MotionDiv';

const Projects = () => {
  const { selected, isBr, orderBy, isChanging } = useContext(PortifolioContext);  
  const selectedProjects = projects
    .filter((project) => project.categories.includes(selected));

  const newestProjects = selectedProjects
  .slice()
    .sort((a, b) => b.id - a.id);
  return(
   <>
    <MotionDiv />
    {!isChanging && (
      <S.Projects>   
      <section>
        <div className='selectContainer'>
          <span>
            {isBr ? 'Selecione a categoria: ' : 'Select category: '}
            <Categories />
          </span>
          <span>
            {isBr ? 'Ordenado por: ' : 'Order by: '}
            <OrderBy />
          </span>
        </div>
        {
          orderBy === 'Oldest projects' || orderBy === 'Mais antigos' ? 
          selectedProjects
            .map((project) => <ProjectsCard key={ project.id } project={ project }/>) 
          :
          newestProjects
            .map((project) => <ProjectsCard key={ project.id } project={ project }/>)
        }
      </section>
     </S.Projects>
    )}
   </>
  )
}

export default Projects;