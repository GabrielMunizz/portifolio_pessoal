import { createContext } from 'react';

export type PortifolioContextType = {
  isBr: boolean,
  setIsBr: React.Dispatch<React.SetStateAction<boolean>>,
  selected: string,
  setSelected: React.Dispatch<React.SetStateAction<string>>,
  orderBy: string,
  setOrderBy: React.Dispatch<React.SetStateAction<string>>,
  isChanging: boolean,
  handleClick: (route: string) => void,
};

const PortifolioContext = createContext({} as PortifolioContextType);

export default PortifolioContext;