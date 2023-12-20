import { Navigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useUser } from '../../context/UserContext';
import styles from './Register.module.css';

const Register = () => {
  const { isAuth } = useUser();
  if (isAuth) return <Navigate to={'/profile'} />;

  return (
    <section className={styles.loginSection}>
      <div className={styles.registerContent}>
        {/* <h2>Registro</h2> */}
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
