import styles from './MyAdoptions.module.css';
import { useUser } from '../../context/UserContext';
import AdoptionCard from '../AdoptionCard/AdoptionCard';
import { Link } from 'react-router-dom';

function MyAdoptions() {
  const { adoptions } = useUser();

  return (
    <>
      {/* <pre>{JSON.stringify(adoptions, null, 2)}</pre> */}
      <h3>Tus Adopciones</h3>
      {adoptions.length < 1 && (
        <div className={styles.adoptionMessage}>
          <p>
            ¡Sin adopciones aún! Descubre nuestros proyectos de reforestación y
            sé parte del cambio.
          </p>
          <Link className={styles.adoptionBtn} to={'/adoption'}>
            Adoptar un árbol
          </Link>
        </div>
      )}
      <div className={styles.myAdoptionsContainer}>
        {adoptions.map((item) => (
          <AdoptionCard key={item.adoptionId} adoption={item} />
        ))}
      </div>
    </>
  );
}

export default MyAdoptions;
