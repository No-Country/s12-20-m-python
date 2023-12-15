import React from 'react';
import styles from './MyAdoptions.module.css';
import TestTreee from '../../assets/testTree.png';

function MyAdoptions({purchase}) {

  console.log(purchase);
  return (
    <>
      <h4>Tus Adopciones</h4>
      <div className={styles.myAdoptionsContainer}>
        <div className={styles.adoptionCard}>
          <img src={TestTreee} alt='Card' className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Nombre árbol</h2>
            <p className={styles.cardDescription}>Tipo de Árbol</p>
            <p className={styles.cardDescription}>Cumpleaños 11/11/11</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAdoptions;
