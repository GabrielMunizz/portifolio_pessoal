import { ReactNode, useRef } from "react";
import { PositionType } from "../assets/types";
import * as S from "../Style/Tab.style";
import { useNavigate } from "react-router-dom";

type TabProps = {
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<PositionType>>;
};

const Tab = ({ children, setPosition }: TabProps) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  };

  const handleNavigate = () => {
    const path = children?.toString().toLowerCase();
    navigate(`/${path}`);
  };
  return (
    <S.Tab
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      onMouseEnter={handleMouseEnter}
      onClick={handleNavigate}
      ref={ref}
    >
      {children}
    </S.Tab>
  );
};

export default Tab;
