import * as S from "../Style/NavBar.style";
import Cursor from "./Cursor";
import { useContext, useState } from "react";
import { PositionType } from "../assets/types";
import Tab from "./Tab";
import applicationTexts from "../assets/applicationTexts";
import PortifolioContext from "../context/PortifolioContext";

const NavBar = () => {
  const initialPosition = {
    width: 0,
    left: 0,
    opacity: 0,
  };
  const [position, setPosition] = useState<PositionType>(initialPosition);
  const { isBr } = useContext(PortifolioContext);
  const { eVersion, ptVersion } = applicationTexts;
  const { header: ptHeader } = ptVersion;
  const { header: eHeader } = eVersion;

  return (
    <S.Nav>
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>
        {isBr ? ptHeader.projects : eHeader.projects}
      </Tab>
      <Tab setPosition={setPosition}>
        {isBr ? ptHeader.contact : eHeader.contact}
      </Tab>
      <Cursor position={position} />
    </S.Nav>
  );
};

export default NavBar;
