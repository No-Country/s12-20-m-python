import { useForm } from 'react-hook-form';
import styles from './RegisterForm.module.css';
import { useUser } from '../../context/UserContext';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const { registerReq, loading, error, regOk } = useUser();

  const submitButtonClass = isValid
    ? styles.submitButtonValid
    : styles.submitButton;

  const onSubmit = handleSubmit(async (data) => {
    const newData = {
      user: {
        username: data.username,
        first_name: trimmedValue(data.name),
        last_name: trimmedValue(data.lastName),
        email: data.email,
        password: data.password,
      },
      birthdate: data.birthdate,
      country: data.country,
    };

    await registerReq(newData);

    reset();
  });

  const trimmedValue = (value) => value.replace(/\s+/g, ' ').trim();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h3>Registro</h3>

      {loading && <Loader fullscreen={true} />}
      {error && <ErrorMessage message={error.error} />}

      {regOk && <div>Registro Exitoso!</div>}

      <label htmlFor='username'>
        <input
          id='username'
          type='text'
          name='username'
          placeholder='Nombre de Usuario'
          {...register('username', {
            validate: {
              required: (value) =>
                trimmedValue(value) !== '' || 'Nombre de Usuario es requerido',
              usernameValid: (value) =>
                /^[a-zA-Z][a-zA-Z0-9]*$/.test(value) ||
                'Este campo solo acepta números y letras, debe comenzar con una letra.',
              minLength: (value) =>
                trimmedValue(value).length >= 3 ||
                'El minimo de caracteres permitidos es 3',
              maxLength: (value) =>
                trimmedValue(value).length <= 200 ||
                'El máximo de caracteres permitidos es 200',
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </label>
      <div className={styles.firstAndLastName}>
        <label htmlFor='name'>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Nombre'
            {...register('name', {
              validate: {
                required: (value) =>
                  trimmedValue(value) !== '' || 'Campo nombre es requerido',
                onlyLetter: (value) =>
                  !/[0-9]/.test(value) ||
                  'No se permiten números para este campo',
                minLength: (value) =>
                  trimmedValue(value).length >= 3 ||
                  'El minimo de caracteres permitidos es 3',
                maxLength: (value) =>
                  trimmedValue(value).length <= 200 ||
                  'El máximo de caracteres permitidos es 200',
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

        <label htmlFor='lastName'>
          <input
            id='lastName'
            type='text'
            name='lastName'
            placeholder='Apellido'
            {...register('lastName', {
              validate: {
                required: (value) =>
                  trimmedValue(value) !== '' || 'Campo apellido es requerido',
                onlyLetter: (value) =>
                  !/[0-9]/.test(value) ||
                  'No se permiten números para este campo',
                minLength: (value) =>
                  trimmedValue(value).length >= 3 ||
                  'El minimo de caracteres permitidos es 3',
                maxLength: (value) =>
                  trimmedValue(value).length <= 200 ||
                  'El máximo de caracteres permitidos es 200',
              },
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </label>
      </div>
      <label htmlFor='email'>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Correo electrónico'
          {...register('email', {
            validate: {
              required: (value) =>
                trimmedValue(value) !== '' || 'Campo email es requerido',
              pattern: (value) =>
                /^[\w-.]+@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,4})$/.test(value) ||
                'Email no valido',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label htmlFor='birthdate'>
        <input
          id='birthdate'
          type='date'
          name='birthdate'
          placeholder='Fecha de nacimiento'
          {...register('birthdate', {
            validate: {
              required: (value) =>
                trimmedValue(value) !== '' ||
                'Fecha de nacimiento es requerida',
              validAge: (value) => {
                const currentDate = new Date();
                const birthdate = new Date(value);
                const differenceTime =
                  currentDate.getTime() - birthdate.getTime();
                const age = Math.floor(
                  differenceTime / (1000 * 60 * 60 * 24 * 365.25),
                );
                if (age < 18) {
                  return 'Debes ser mayor de edad';
                }
              },
            },
          })}
        />
        {errors.birthdate && <p>{errors.birthdate.message}</p>}
      </label>

      <label htmlFor='pais'>
        <select
          id='pais'
          name='country'
          {...register('country', {
            required: 'País es requerido',
          })}
        >
          <option value=''>País</option>
          <option value='1'>Argentina</option>
        </select>
        {errors.country && <p>{errors.country.message}</p>}
      </label>

      <label htmlFor='password'>
        <input
          id='password'
          type='password'
          name='password'
          placeholder='Contraseña'
          {...register('password', {
            validate: {
              required: (value) =>
                trimmedValue(value) !== '' || 'La contraseña es requerida',
              pattern: (value) =>
                /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/.test(
                  value,
                ) || 'Contraseña no valida',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        {watch('password') && watch('password').length > 0 && (
          <ul className={styles.checklistPassword}>
            <p>La contraseña debe contener al menos:</p>
            <li
              className={`${
                /[a-z]/.test(watch('password'))
                  ? styles.passReq
                  : styles.default
              }`}
            >
              Una letra minuscula.
            </li>
            <li
              className={`${
                /[A-Z]/.test(watch('password'))
                  ? styles.passReq
                  : styles.default
              }`}
            >
              Una letra mayúscula.
            </li>
            <li
              className={`${
                /\d/.test(watch('password')) ? styles.passReq : styles.default
              }`}
            >
              Un número.
            </li>
            <li
              className={`${
                /[.,*!?¿¡/#$%&]/.test(watch('password'))
                  ? styles.passReq
                  : styles.default
              }`}
            >
              Un simbolo (.,*!?¿¡/#$%&).
            </li>
            <li
              className={`${
                /.{8,64}/.test(watch('password'))
                  ? styles.passReq
                  : styles.default
              }`}
            >
              8 caracteres.
            </li>
          </ul>
        )}
      </label>

      <label htmlFor='confirmPassword'>
        <input
          id='confirmPassword'
          type='password'
          name='confirmPassword'
          placeholder='Confirmar contraseña'
          {...register('confirmPassword', {
            validate: {
              required: (value) =>
                trimmedValue(value) !== '' ||
                'La confirmación de contraseña es requerida',
              isEqual: (value) =>
                value === watch('password') || 'Las contraseñas no coinciden',
            },
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </label>

      <div className={styles.buttons}>
        {/* <input type='reset' value={'Limpiar'} /> */}
        <input
          type='submit'
          value={'Registrarse'}
          className={submitButtonClass}
        />
      </div>
      {/* <div>{JSON.stringify(watch())}</div> */}
    </form>
  );
};

export default RegisterForm;
