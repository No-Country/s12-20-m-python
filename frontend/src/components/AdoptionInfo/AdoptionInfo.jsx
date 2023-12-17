import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './AdoptionInfo.module.css';
import { useUser } from '../../context/UserContext';
import { useLand } from '../../context/LandContext';
import TestTreee from '../../assets/testTree.png';

const AdoptionInfo = () => {
  const { adoptions } = useUser();
  const { land } = useLand();

  const { id } = useParams();

  const adoptionData = adoptions.find((item) => item.adoptionId === id);

  const zoneInfo = land.find((item) => item.id === adoptionData.landId);

  return (
    <div className={styles.adoptionInfoContainer}>
      <Link className={styles.adoptionInfoBackBtn} to={'/profile'}>
        <FaArrowLeft size={32} />
      </Link>
      <div className={styles.adoptionInfoContent}>
        <div className={styles.adoptionInfoImgCont}>
          <img src={TestTreee} alt='imagen tipo de árbol' />
        </div>
        <div className={styles.adoptionInfoText}>
          <h4>
            {adoptionData.typeName} (<em>{adoptionData.typeScientificName}</em>)
          </h4>
          <p>Nombre común: {adoptionData.typeCommonName}</p>
          <p>Zona: {zoneInfo.place}</p>
          <p>
            Descripción de tipo de árbol Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magni, id? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi, ea.
          </p>
          <p>
            Fecha de adopción: <strong>{adoptionData.adoptionDate}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdoptionInfo;
