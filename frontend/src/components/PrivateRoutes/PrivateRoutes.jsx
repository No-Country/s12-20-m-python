import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const PrivateRoutes = () => {
  const { isAuth } = useUser();
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to='/login' />;
};

export default PrivateRoutes;
