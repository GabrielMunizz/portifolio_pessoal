import Main from '../components/Main';
import Footer from '../components/Footer';
import * as S from '../Style/homeStyle'
import { useContext } from 'react';
import PortifolioContext from '../context/PortifolioContext';
import MotionDiv from '../components/MotionDiv';


const Home = () => {
  const { isChanging } = useContext(PortifolioContext);
  return(
    <S.Home>
      <MotionDiv />      
      {!isChanging && (
        <>
          <Main />
          <Footer />
        </>
      )}    
    </S.Home>
  )
}

export default Home;