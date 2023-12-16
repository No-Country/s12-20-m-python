import TestTreee from '../../assets/testTree.png';
import styles from './AdoptionCard.module.css';

const AdoptionCard = ({ adoption }) => {
  return (
    <div className={styles.adoptionCard}>
      <img src={TestTreee} alt='Imagen Adopción' className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>Nombre árbol</h2>
        <p className={styles.cardDescription}>{adoption.typeName}</p>
        <p className={styles.cardDescription}>Cumpleaños 11/11/11</p>
      </div>
    </div>
  );
};

export default AdoptionCard;
