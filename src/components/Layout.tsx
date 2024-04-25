import { Outlet } from 'react-router-dom';
import Header from './Header';
import { HeaderProps } from '../assets/types';
import { useContext } from 'react';
import PortifolioContext from '../context/PortifolioContext';
import MotionDiv from './MotionDiv';

const Layout = ({ toggleTheme, isDark }: HeaderProps) => {
  const {isChanging} = useContext(PortifolioContext)
  return(
    <>
      <MotionDiv />
      {
        !isChanging && (
          <>      
            <Header toggleTheme={ toggleTheme } isDark={ isDark } />
            <Outlet />
          </>
        )
      }
    </>
  )
}

export default Layout;