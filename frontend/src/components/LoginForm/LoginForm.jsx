import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    alert(`datos : ${JSON.stringify(data)}`);
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor='email'>
        Email:
        <input
          id='email'
          type='email'
          name='email'
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
      </label>

      <label htmlFor='password'>
        Contraseña:
        <input
          id='password'
          type='password'
          name='password'
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

      <input type='submit' value={'Acceder'} />
      <p>
        ¿No tienes cuenta? Registrate <Link to={'/register'}>Aquí</Link>
      </p>
    </form>
  );
};

export default LoginForm;
