import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { treeImages } from '../../helpers/TreeImages.js';
import styles from './AdoptionInfo.module.css';
import { useUser } from '../../context/UserContext';
import { useLand } from '../../context/LandContext';
/* import TestTreee from '../../assets/TreeDetail.jpg'; */
import TimeLine from '../TimeLine/TimeLine';
import TreeInfo from '../TreeInfo/TreeInfo';
import EditableField from '../EditableField/EditableField.jsx';
import Loader from '../Loader/Loader.jsx';

const AdoptionInfo = () => {
  const { adoptions } = useUser();
  const { land } = useLand();
  const { id } = useParams();

  if (!land) return <Loader fullscreen={true} />;

  const adoptionData = adoptions.find((item) => item.adoptionId === id);

  const zoneInfo = land.find((item) => item.id === adoptionData.landId);

  return (
    <div className={styles.adoptionInfoContainer}>
      <Link className={styles.adoptionInfoBackBtn} to={'/profile'}>
        <FaArrowLeft size={32} />
      </Link>
      <div className={styles.totalCont}>
        <div className={styles.adoptionInfoContent}>
          <div className={styles.adoptionInfoImgCont}>
            <img
              src={treeImages[adoptionData.typeId]}
              alt='imagen tipo de árbol'
            />
          </div>

          <div className={styles.adoptionInfoText}>
            <div>
              <h4>
                {adoptionData.typeName} (
                <em>{adoptionData.typeScientificName}</em>)
              </h4>
              <p className={styles.text}>
                Nombre común: {adoptionData.typeCommonName}
              </p>

              <div className={styles.customNameContainer}>
                <p>Nombre personalizado:</p>
                <EditableField
                  initialText={
                    adoptionData.customName
                      ? adoptionData.customName
                      : 'Sin nombre'
                  }
                  adoptionId={adoptionData.adoptionId}
                />
              </div>

              <p className={styles.textZone}>Zona: {zoneInfo.place}</p>
              <p className={styles.text}>
                El algarrobo es un árbol de hoja perenne que crece en regiones
                áridas y subtropicales, conocido por sus vainas comestibles y su
                madera resistente. Sus hojas son pequeñas y sus frutos, las
                algarrobas, son legumbres dulces y nutritivas utilizadas en
                diversas preparaciones culinarias. Además, el algarrobo
                desempeña un papel crucial en la ecología al ser un fijador de
                nitrógeno en el suelo y proveer refugio a la fauna local.
              </p>
              <p>
                Fecha de adopción: <strong>{adoptionData.adoptionDate}</strong>
              </p>
            </div>
            <div>
              <TreeInfo />
            </div>
          </div>
        </div>
        <div>
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default AdoptionInfo;
