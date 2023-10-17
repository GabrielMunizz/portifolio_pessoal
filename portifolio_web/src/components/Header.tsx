import { HeaderProps } from '../types';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import * as S from '../Style/styles'

const Header = ({ toggleTheme, isDark }: HeaderProps) => {
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