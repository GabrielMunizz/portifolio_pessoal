import { ReactNode, useRef } from "react";
import { PositionType } from "../assets/types";
import * as S from "../Style/Tab.style";

type TabProps = {
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<PositionType>>;
};

const Tab = ({ children, setPosition }: TabProps) => {
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
  return (
    <S.Tab
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      onMouseEnter={handleMouseEnter}
      ref={ref}
    >
      {children}
    </S.Tab>
  );
};

export default Tab;
