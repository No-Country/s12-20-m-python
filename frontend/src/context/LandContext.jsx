import { createContext, useContext, useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [land, setLand] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getLand();
        // console.log(res);
        if (res.status === 200) {
          setLand(res.data);
        }
      } catch (error) {
        setError({
          status: error.response.status,
          message: error.response.statusMessage || 'Error...',
        });
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const getLandReq = async () => {
    try {
      const res = await getLand();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { getLandReq, land, loading, error };

  return <LandContext.Provider value={values}>{children}</LandContext.Provider>;
};
