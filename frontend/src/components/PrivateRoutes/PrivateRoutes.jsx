import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Loader from '../Loader/Loader';

const PrivateRoutes = () => {
  const { isAuth, user } = useUser();
  if (user === null){
    return<Loader fullscreen={true}/>
  }
  console.log(isAuth)
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to='/login' />;
};

export default PrivateRoutes;
