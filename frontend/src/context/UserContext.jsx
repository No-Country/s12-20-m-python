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
  const [user, setUser] = useState({ name: 'user1' });
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    setIsAuth(false);
  };
  const login = () => {
    setIsAuth(true);
  };

  const registerReq = async (data) => {
    try {
      const res = await registerUser(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const loginReq = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { user, registerReq, loginReq, isAuth, login, logout };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
