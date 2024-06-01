import { useContext, useState } from "react";
import applicationTexts from "../assets/applicationTexts";
import PortifolioContext from "../context/PortifolioContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { H2 } from "../Style/Main.style";
import * as S from "../Style/ProjectsSlider.style";
import { projects } from "../assets/projects";
import ProjectsCard from "./ProjectsCard";

const ProjectsSlider = () => {
  const [slideSelection, setSlideSelection] = useState(0);

  const { isBr } = useContext(PortifolioContext);
  const { ptVersion, eVersion } = applicationTexts;
  const { header: ptHeader } = ptVersion;
  const { header: eHeader } = eVersion;

  const handleNext = () => {
    setSlideSelection((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setSlideSelection((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  return (
    <S.ProjectsSliderContainer>
      <div>
        <H2>{isBr ? ptHeader.projects : eHeader.projects}</H2>
      </div>
      <div className="content">
        <S.Button onClick={handlePrevious}>
          <IoMdArrowRoundBack />
        </S.Button>
        <S.Slider>
          <ProjectsCard
            project={projects[slideSelection]}
            slideSelection={slideSelection}
          />
        </S.Slider>
        <S.Button onClick={handleNext}>
          <IoMdArrowRoundForward />
        </S.Button>
      </div>
    </S.ProjectsSliderContainer>
  );
};

export default ProjectsSlider;
