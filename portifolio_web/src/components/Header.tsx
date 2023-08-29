import { HomeProps } from '../types';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Header = ({ toggleTheme, isDark }: HomeProps) => {
  return(
    <header>
      <button onClick={toggleTheme}>{ isDark ? <MdLightMode /> : <MdDarkMode /> }</button>
      <h1>Header</h1>
    </header>
  )
}

export default Header;