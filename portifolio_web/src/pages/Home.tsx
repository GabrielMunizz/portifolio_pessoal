import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { HomeProps } from '../types';

const Home = ({ toggleTheme, isDark }: HomeProps) => {
  return(
    <>
      <Header toggleTheme={ toggleTheme } isDark={ isDark }/>
      <Main />
      <Footer />
    </>
  )
}

export default Home;