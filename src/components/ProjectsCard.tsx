import { ProjectsCardType } from "../assets/types";
import PortifolioContext from "../context/PortifolioContext";
import { useContext } from "react";
import * as S from "../Style/Projects.style";
import { AnimatePresence, motion } from "framer-motion";

type ProjectsCardsProps = {
  project: ProjectsCardType;
  slideSelection: number;
};

const ProjectsCard = ({ project, slideSelection }: ProjectsCardsProps) => {
  const { isBr } = useContext(PortifolioContext);
  const { title, image, url, deploy, descriptionEng, descriptionPT } = project;

  const variants = {
    initial: { opacity: 0, zIndex: 0 },
    animate: { opacity: 1, zIndex: 1 },
    exit: { opacity: 0, zIndex: 0 },
  };

  return (
    <AnimatePresence initial={false}>
      <S.ProjectCard>
        <div className="projectTitleContainer">
          <motion.h1
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={slideSelection}
          >
            {title}:
          </motion.h1>
        </div>
        <div className="projectDataContainer">
          <a href={deploy} target="_blank">
            <motion.img
              src={image}
              alt={title}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={slideSelection}
            />
          </a>
          <motion.p
            className="description"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={slideSelection}
          >
            {isBr ? descriptionPT : descriptionEng}
            <span className="styledDot">.</span>
          </motion.p>
          <div className="linksContainer">
            <button>
              <a href={url} target="_blank">
                GitHub
              </a>
            </button>

            <button>
              <a href={deploy} target="_blank">
                Deploy
              </a>
            </button>
          </div>
        </div>
      </S.ProjectCard>
    </AnimatePresence>
  );
};

export default ProjectsCard;
