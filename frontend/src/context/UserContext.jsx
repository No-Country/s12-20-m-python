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
  const [user, setUser] = useState({ name: 'user1' });
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
    try {
      const res = await registerUser(data);
      console.log(res);
    } catch (error) {
      setError({
        status: error.response.status,
        message: error.response.statusMessage || 'Error...',
      });
    } finally {
      setLoading(false);
    }
  };

  const loginReq = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await loginUser(data);
      console.log(res);
      // setUser(res.data)
    } catch (error) {
      setError({
        status: error.response.status,
        message: error.response.statusMessage || 'Error...',
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
    loginReq,
    isAuth,
    login,
    logout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
