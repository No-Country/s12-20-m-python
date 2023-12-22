import { createContext, useContext, useEffect, useState } from 'react';
import { getJson, getLand } from '../api/land';
import { json } from 'react-router-dom';

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
  const [land, setLand] = useState(null);
  const [purchase, setPurchase] = useState(
    JSON.parse(localStorage.getItem('purchaseData')) || [],
  );
  const [adoptionData, setAdoptionData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('adoptionData') && adoptionData === null) {
      const data = JSON.parse(localStorage.getItem('adoptionData'));
      setAdoptionData(data);
    }

    if (adoptionData !== null)
      localStorage.setItem('adoptionData', JSON.stringify(adoptionData));
  }, [adoptionData]);

  useEffect(() => {
    localStorage.setItem('purchaseData', JSON.stringify(purchase));
  }, [purchase]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getLand();
        // const res = await getJson();
        if (res.status === 200) {
          setLand(res.data);
        }
      } catch (error) {
        if (error.response) {
          setError({
            status: error.response.status,
            message: error.response.statusMessage || 'Error...',
          });
        } else {
          console.error(error);
        }
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

  const values = {
    adoptionData,
    setAdoptionData,
    getLandReq,
    land,
    loading,
    error,
    purchase,
    setPurchase,
  };

  return <LandContext.Provider value={values}>{children}</LandContext.Provider>;
};
