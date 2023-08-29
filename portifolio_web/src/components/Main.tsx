import { Link } from 'react-router-dom';
import * as S from '../Style/styles';

const Main = () => {
  return(
    <S.Main>
      <S.Aside>
        <div className='nameContainer'>
          <h1>
            Gabriel Muniz<span>.</span>
          </h1>
        </div>
        <hr />
        <div className='professionalContainer'>
          <h3>
            Front-End Developer
          </h3>
        </div>
        <div className='contactContainer'>
          <Link to="/contact">CONTACT ME</Link>
        </div>
      </S.Aside>
      <section className='mainContent'>
        <div className='imgContainer'>
          <img src="" alt="" />
        </div>
        <div className='introContainer'>
          <h2>Introduction:</h2>
          <h1>Front-End Web Developer</h1>
          <h4>texto</h4>
        </div>
      </section>
    </S.Main>
  )
}

export default Main;