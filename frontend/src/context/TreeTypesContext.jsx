import { createContext, useContext, useEffect, useState } from 'react';
import { getTreeType } from '../api/tree';

export const TreeTypeContext = createContext();

export const useTreeTypes = () => {
  const context = useContext(TreeTypeContext);

  if (!context) {
    throw Error('Context Error');
  } else {
    return context;
  }
};

export const TreeTypeProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [treeType, setTreeType] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getTreeType();
        console.log(res)
        if (res.status === 200) {
          setTreeType(res.data);
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

  const getTreeTypeReq = async () => {
    try {
      const res = await getTreeType();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { getTreeTypeReq, treeType, loading, error };

  return <TreeTypeContext.Provider value={values}>{children}</TreeTypeContext.Provider>;
};


 