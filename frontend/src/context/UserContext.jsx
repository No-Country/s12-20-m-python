import { createContext, useContext, useEffect, useState } from 'react';
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

  if (localStorage.getItem('userData') && user === null) {
    const data = JSON.parse(localStorage.getItem('userData'));
    setIsAuth(true);
    setUser(data);
  }

  useEffect(() => {
    if (user !== null) localStorage.setItem('userData', JSON.stringify(user));
  }, [user]);

  const registerReq = async (data) => {
    setLoading(true);
    setError(null);
    setRegOk(null);
    try {
      const res = await registerUser(data);
      if (res.status === 201) {
        // console.log(res.data);
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
        console.log(res.data);
        const data = {
          ...res.data.user_profile.user,
          token: res.data.token,
        };
        setUser(data);
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
    setUser,
    user,
    registerReq,
    regOk,
    loginReq,
    setIsAuth,
    isAuth,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
