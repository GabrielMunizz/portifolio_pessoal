import * as S from '../Style/mainStyle';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  return(
   <S.Main>
    <header>
      <h1>Projects:</h1>
    </header>
    <section>
      <ProjectsCard />
    </section>
   </S.Main>
  )
}

export default Projects;