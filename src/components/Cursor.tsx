import * as S from "../Style/Cursor.style";
import { PositionType } from "../assets/types";

type CursorProps = {
  position: PositionType;
};

const Cursor = ({ position }: CursorProps) => {
  return <S.Cursor animate={position} />;
};

export default Cursor;
