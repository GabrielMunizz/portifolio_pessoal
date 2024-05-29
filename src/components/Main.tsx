import { Link } from "react-router-dom";
import applicationTexts from "../assets/applicationTexts";
import photo from "../images/fotoPerfilRedonda.png";
import * as S from "../Style/Main.style";
import { useContext } from "react";
import PortifolioContext from "../context/PortifolioContext";

const Main = () => {
  const { isBr, handleClick } = useContext(PortifolioContext);
  const { eVersion, ptVersion } = applicationTexts;

  return (
    <S.Main>
      <S.Aside>
        <div className="nameContainer">
          <h1>
            Gabriel Muniz<span>.</span>
          </h1>
        </div>
        <hr />
        <div className="professionalContainer">
          {isBr
            ? ptVersion.professional.map((prof, i) => <h3 key={i}>{prof}</h3>)
            : eVersion.professional.map((prof, i) => <h3 key={i}>{prof}</h3>)}
        </div>
        <div className="contactContainer">
          <a href="./assets/CV_Muniz_Atualizado.pdf" download>
            Download CV
          </a>
        </div>
      </S.Aside>
      <section className="mainContent">
        <div className="imgContainer">
          <img src={photo} alt="photo" />
        </div>
        <div className="introContainer">
          <S.H2>{isBr ? ptVersion.intro.head : eVersion.intro.head}</S.H2>
          <h1>{isBr ? ptVersion.intro.title : eVersion.intro.title}</h1>
          <h4>
            {isBr ? ptVersion.intro.bioPreview : eVersion.intro.bioPreview}
          </h4>
          <Link to="/aboutme" onClick={() => handleClick("/aboutme")}>
            {isBr ? ptVersion.seeFullBio : eVersion.seeFullBio}
          </Link>
        </div>
      </section>
    </S.Main>
  );
};

export default Main;
