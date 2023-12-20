import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navigate = useNavigate();

  const { loginReq, loading, error } = useUser();

  const onSubmit = handleSubmit(async (data) => {
    const success = await loginReq(data);

    if (success) {
      navigate('/profile');
    }
  });

  const submitButtonClass = isValid
    ? styles.submitButtonValid
    : styles.submitButton;

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h3>Iniciar sesión</h3>

      {loading && <Loader fullscreen={true} />}
      {error && <ErrorMessage message={error.error} />}

      <label htmlFor='username'>
        <input
          id='username'
          type='text'
          name='username'
          placeholder='Nombre de Usuario'
          {...register('username', {
            validate: {
              required: (value) =>
                value !== '' || 'Nombre de Usuario es requerido',
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </label>

      {/* <label htmlFor='email'>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Correo electrónico'
          {...register('email', {
            validate: {
              required: (value) => value !== '' || 'Campo email es requerido',
              pattern: (value) =>
                /^[\w-.]+@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,4})$/.test(value) ||
                'Email no valido',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label> */}

      <label htmlFor='password'>
        <input
          id='password'
          type='password'
          name='password'
          placeholder='Contraseña'
          {...register('password', {
            validate: {
              required: (value) => value !== '' || 'La contraseña es requerida',
              pattern: (value) =>
                /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/.test(
                  value,
                ) || 'Contraseña no valida',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>
      <p className={styles.forget}>Olvidé mi contraseña</p>
      <input
        type='submit'
        value={'Iniciar sesión'}
        className={submitButtonClass}
        disabled={loading}
      />
      <p className={styles.goToRegister}>
        ¿Sos un usuario nuevo? <Link to={'/register'}>Registrate</Link>
      </p>
    </form>
  );
};

export default LoginForm;
