import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useLand } from '../../context/LandContext';
import { useUser } from '../../context/UserContext';
import { useNavigate, Navigate } from 'react-router-dom';
import PurchaseSummary from '../PurchaseSummary/PurchaseSummary';
import styles from './ShoppingCar.module.css';
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';
import Loader from '../Loader/Loader';

const ShoppingCar = () => {
  const [loadingSimulated, setLoadingSimulated] = useState(false);
  const { isAuth, user } = useUser();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { purchase, setPurchase, setAdoptionData } = useLand();

  const navigate = useNavigate();
  const [name, setName] = useState('');

  const { handleSubmit, control } = useForm();

  // console.log(isAuth)
  // if (!isAuth) return <Navigate to={'/login'} />;

  const onSubmit = async (data) => {
    // envío de email

    const serviceId = 'service_rt93a4x';
    const templateId = 'template_1y7bw38';
    const publicKey = 'CEV6XbbBu0Lvz2Qfx';

    const templateParams = {
      from_name: 'Guardianes del Bosque',
      from_email: user.email,
      to_name: user.username,
      message: message,
      to_email: user.email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // console.log('envío email exitoso', response);

        Swal.fire({
          title: '¡Correo enviado!',
          text: 'Hemos enviado un correo de confirmación de la adopción a tu dirección de email.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        // console.error('error en el envío de mail', error);

        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el correo de confirmación. Por favor, inténtalo de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });

    const adoptionData = purchase.reduce((acc, item) => {
      for (let i = item.quantity; i > 0; i--) {
        delete item.quantity;
        acc.push({
          adoptionId: crypto.randomUUID(),
          userId: user.id,
          ...item,
        });
      }
      return acc;
    }, []);

    setAdoptionData((prev) => {
      if (prev === null) return adoptionData;

      return [...prev, ...adoptionData];
    });

    setPurchase([]);
    localStorage.setItem('purchaseData', JSON.stringify([]));

    setLoadingSimulated(true);
    const loadingSim = await setTimeout(() => {
      setLoadingSimulated(false);
      clearTimeout(loadingSim);
      navigate('/success');
    }, 1000);
  };

  return (
    <div className={styles.bigAdoptionContainer}>
      <div className={styles.shoppingContainer}>
        {/* <pre>{JSON.stringify(purchase, null, 2)}</pre> */}
        {loadingSimulated && <Loader fullscreen={true} />}

        <div className={styles.shoppingLeft}>
          <h4>Medio de Pago</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name='cardNumber'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <input
                    {...field}
                    type='text'
                    id='cardNumber'
                    placeholder='Número de Tarjeta'
                    maxLength='16' // Establecer la longitud máxima del número de tarjeta
                    pattern='[0-9]*' // Solo permite dígitos
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                  />
                )}
              />
            </div>

            <div className={styles.cardData}>
              <div>
                <Controller
                  name='cardHolder'
                  control={control}
                  defaultValue=''
                  rules={{
                    required: true,
                    pattern: /^[A-Za-z\s]+$/, // Permite solo letras y espacios
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  render={({ field }) => (
                    <input
                      {...field}
                      type='text'
                      id='cardHolder'
                      placeholder='Titular de Tarjeta'
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          '',
                        );
                      }}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  name='expirationDate'
                  control={control}
                  defaultValue=''
                  rules={{
                    required: true,
                    pattern: /^(0[1-9]|1[0-2])\/\d{2}$/, // Acepta formato 'mm/aa'
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type='text'
                      id='expirationDate'
                      placeholder='Vencimiento mm/aa'
                      maxLength='5' // Limita la longitud a 5 caracteres
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9/]/g, ''); // Permite solo números y '/'
                      }}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  name='ccv'
                  control={control}
                  defaultValue=''
                  rules={{
                    required: true,
                    pattern: /^\d{3}$/, // Acepta solo 3 números
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type='text'
                      id='ccv'
                      placeholder='CCV'
                      maxLength='3' // Limita la longitud a 3 caracteres
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Permite solo números
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <div className={styles.cardDni}>
              <div>
                <Controller
                  name='dni'
                  control={control}
                  defaultValue=''
                  rules={{
                    required: true,
                    pattern: /^[A-Za-z0-9]{7,9}$/,
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type='text'
                      id='dni'
                      placeholder='DNI'
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z0-9]/g,
                          '',
                        );
                      }}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  name='documentType'
                  control={control}
                  render={({ field }) => (
                    <select {...field}>
                      <option value='dni'>DNI</option>
                      <option value='pasaporte'>Pasaporte</option>
                      {/* Agrega más opciones según sea necesario */}
                    </select>
                  )}
                />
              </div>
            </div>


            <button type='submit'>Confirmar Adopción</button>
          </form>
        </div>

        <div className={styles.shoppingRight}>
          <PurchaseSummary purchase={purchase} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
