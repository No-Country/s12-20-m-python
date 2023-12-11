import { createContext, useContext, useState } from 'react';
import { getLand } from '../api/land';

export const LandContext = createContext();

export const useLand = () => {
  const context = useContext(LandContext);

  if (!context) {
    throw Error('Context Error');
  } else {
    return context;
  }
};

export const LandProvider = ({ children }) => {
  const [land, setLand] = useState(null);

  const getLandReq = async () => {
    try {
      const res = await getLand();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { land, getLandReq };

  return <LandContext.Provider value={values}>{children}</LandContext.Provider>;
};
