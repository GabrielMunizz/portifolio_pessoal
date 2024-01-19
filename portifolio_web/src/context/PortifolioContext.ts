import { createContext } from 'react';

export type PortifolioContextType = {
  isBr: boolean,
  setIsBr: React.Dispatch<React.SetStateAction<boolean>>
};

const PortifolioContext = createContext({} as PortifolioContextType);

export default PortifolioContext;