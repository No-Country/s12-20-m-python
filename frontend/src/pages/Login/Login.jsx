import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';
import { useUser } from '../../context/UserContext';

const Login = () => {
  const { isAuth } = useUser();
  if (isAuth) return <Navigate to={'/profile'} />;

  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContent}>
        {/*    <h2>Login</h2> */}
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
