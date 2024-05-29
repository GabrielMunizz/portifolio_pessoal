import * as S from "../Style/NavBar.style";
import Cursor from "./Cursor";
import { useState } from "react";
import { PositionType } from "../assets/types";
import Tab from "./Tab";

const NavBar = () => {
  const initialPosition = {
    width: 0,
    left: 0,
    opacity: 0,
  };
  const [position, setPosition] = useState<PositionType>(initialPosition);

  return (
    <S.Nav>
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Cursor position={position} />
    </S.Nav>
  );
};

export default NavBar;
