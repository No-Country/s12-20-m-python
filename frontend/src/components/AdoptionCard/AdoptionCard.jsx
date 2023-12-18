import { useNavigate } from 'react-router-dom';
import { treeImages } from '../../helpers/TreeImages.js';
import styles from './AdoptionCard.module.css';

const AdoptionCard = ({ adoption }) => {
  const navigate = useNavigate();

  const showAdoptionInfo = () => {
    navigate(`/adoption-info/${adoption.adoptionId}`);
  };

  return (
    <div onClick={showAdoptionInfo} className={styles.adoptionCard}>
      <img
        src={treeImages[adoption.typeId]}
        alt='Imagen Adopción'
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>Nombre árbol</h2>
        <p className={styles.cardDescription}>{adoption.typeName}</p>
        <p className={styles.cardDescription}>
          Fecha de adopción: {adoption.adoptionDate}
        </p>
      </div>
    </div>
  );
};

export default AdoptionCard;
