import Main from '../components/Main';
import Footer from '../components/Footer';
import * as S from '../Style/homeStyle'
import { useEffect } from 'react';

const Home = () => {
  document.body.style.overflow = 'hidden';

  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 1000)
  }, [])
 
  return (
    <S.Home>
      <Main />
      <Footer />
    </S.Home>
  );
}

export default Home;