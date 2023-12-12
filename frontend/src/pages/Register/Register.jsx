import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from './Register.module.css';

const Register = () => {
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
