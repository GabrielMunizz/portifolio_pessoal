import Main from "../components/Main";
import Footer from "../components/Footer";
import * as S from "../Style/Home.style";
import ProjectsSlider from "../components/ProjectsSlider";

const Home = () => {
  return (
    <S.Home>
      <Main />
      <Footer />
      <ProjectsSlider />
    </S.Home>
  );
};

export default Home;
