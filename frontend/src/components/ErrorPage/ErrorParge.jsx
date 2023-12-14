import React from 'react';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
       <h1 className={styles.heading}>¡Acceso Denegado!</h1>
      <p className={styles.errorMessage}>
        Lo siento, parece que has intentado ingresar a una zona protegida por los Guardianes del Bosque.
        <br />
        Solo aquellos que son dignos y respetuosos con la naturaleza pueden acceder. 
        <br />
        ¡Conviértete en un guardián!
      </p>
      {/* Puedes agregar más información o elementos alusivos al bloqueo */}
    </div>
  );
};

export default ErrorPage;