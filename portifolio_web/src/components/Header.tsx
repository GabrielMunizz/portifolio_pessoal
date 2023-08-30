import { HomeProps } from '../types';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import * as S from '../Style/home_styles'

const Header = ({ toggleTheme, isDark }: HomeProps) => {
  return(
    <S.Header>
      <button onClick={toggleTheme}>{ isDark ? <MdOutlineLightMode /> : <MdDarkMode /> }</button>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to='/contact'>Contact</Link>
        <div className='socialContainer'>
          <a href="https://www.linkedin.com/in/gabriel-muniz-dev/" target='_blank'>{ <AiFillLinkedin /> }</a>
          <a href="https://github.com/GabrielMunizz" target='_blank'>{ <AiFillGithub /> }</a>
        </div>
      </div>
    </S.Header>
  )
}

export default Header;