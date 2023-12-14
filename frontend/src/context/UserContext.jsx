import { createContext, useContext, useState } from 'react';
import { loginUser, registerUser } from '../api/auth';

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error('Context Error');
  } else {
    return context;
  }
};

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [regOk, setRegOk] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    setIsAuth(false);
  };
  const login = () => {
    setIsAuth(true);
  };

  const registerReq = async (data) => {
    setLoading(true);
    setError(null);
    setRegOk(null);
    try {
      const res = await registerUser(data);
      if (res.status === 201) {
        setRegOk(res.data);
      }
    } catch (error) {
      setError({
        error: error.response.data,
        status: error.response.status,
      });
    } finally {
      setLoading(false);
    }
  };

  const loginReq = async (data) => {
    setLoading(true);
    setError(null);
    setIsAuth(false);
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuth(true);
      }
    } catch (error) {
      setError({
        error: error.response.data,
        status: error.response.status,
      });
    } finally {
      setLoading(false);
    }
  };

  const values = {
    loading,
    error,
    user,
    registerReq,
    regOk,
    loginReq,
    isAuth,
    login,
    logout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
