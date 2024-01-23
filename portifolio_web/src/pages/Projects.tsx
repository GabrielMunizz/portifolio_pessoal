import ProjectsCard from '../components/ProjectsCard';
import { projects } from '../assets/projects';
import * as S from '../Style/projectsStyle'

const Projects = () => {
  
  return(
   <S.Projects>   
    <section>
      {projects
        .map((project) => <ProjectsCard key={project.id} project={project}/>)}
    </section>
   </S.Projects>
  )
}

export default Projects;