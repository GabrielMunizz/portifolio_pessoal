import { HeaderProps } from "../assets/types";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import * as S from "../Style/Header.style";
import states from "../images/american.png";
import br from "../images/br.jpeg";
import { useContext } from "react";
import PortifolioContext from "../context/PortifolioContext";
import NavBar from "./NavBar";

const Header = ({ toggleTheme, isDark }: HeaderProps) => {
  const { setIsBr, isBr } = useContext(PortifolioContext);
  const versionHandler = () => {
    setIsBr((prev) => !prev);
  };

  return (
    <S.Header>
      <button onClick={toggleTheme} className="themeBtn">
        {isDark ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
      <div className="navbar">
        <NavBar />
        <div className="socialContainer">
          <a
            href="https://www.linkedin.com/in/gabriel-muniz-dev/"
            target="_blank"
          >
            {<AiFillLinkedin />}
          </a>
          <a href="https://github.com/GabrielMunizz" target="_blank">
            {<AiFillGithub />}
          </a>
          <button className="flags" onClick={versionHandler}>
            <img src={isBr ? states : br} alt="flags" />
          </button>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
