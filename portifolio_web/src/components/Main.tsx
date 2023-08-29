import { Link } from 'react-router-dom';
import * as S from '../Style/styles';

const Main = () => {
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
          <h3>Front-End Developer</h3>
        </div>
        <div className="contactContainer">
          <Link to="/contact">CONTACT ME</Link>
        </div>
      </S.Aside>
      <section className="mainContent">
        <div className="imgContainer">
          <img src="" alt="" />
        </div>
        <div className="introContainer">
          <h2>Introduction:</h2>
          <h1>Front-End Web Developer</h1>
          <h4>
            After 10 years working in business administration, I've decided to
            explore my passion for technology and embark on a new professional
            journey. In 2019, I've made a decision to take a break and reflect
            on my goals and interests...
          </h4>
          <Link to="/fullbio">{`-> ...See full bio.`}</Link>
        </div>
      </section>
    </S.Main>
  );
};

export default Main;
