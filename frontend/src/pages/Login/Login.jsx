import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

const Login = () => {
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
