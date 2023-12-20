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
        <h2 className={styles.cardTitle}>{adoption.typeName}</h2>

        {adoption.customName ? (
          <h4>{adoption.customName}</h4>
        ) : (
          <em className={styles.cardDefaulName}>Sin nombre</em>
        )}

        <p className={styles.cardDescription}>
          Fecha de adopción: {adoption.adoptionDate}
        </p>
      </div>
    </div>
  );
};

export default AdoptionCard;
