import styles from './Activities.module.css';
import Paseo from '../../assets/paseo-bosque.jpg'
import Visita from '../../assets/visita.jpg'
import Conferencia from '../../assets/conferencia.jpg'
import LatestPlantings from '../../components/LatestPlantings/LatestPlantings'

const Activities = () => {
  return (
    <>
    <div className={styles.activitiesImg}>
    <img src={Paseo} alt="" ></img>
    </div>
    <div className={styles.activitiesContainer}>
      
      <h2>Próximas actividades</h2>
     <div className={styles.activitiesBox}>
      <div className={styles.activitieCard}>
        <div className={styles.innerCard}>
        <h2>Visita Guiada a Nuestra Plantación</h2>
        <h5>10 de Julio de 2024</h5>
        <img src={Visita} alt="" ></img>
        </div>
        <div className={styles.innerCard}>
        <p>Únete a nuestra emocionante visita guiada a una de nuestras plantaciones recientemente establecidas. Aprende sobre nuestras técnicas de reforestación, conoce las especies nativas que estamos cultivando y descubre el impacto positivo que estas plantaciones tienen en la restauración del ecosistema.</p>
        <button className={styles.activitieButton}>Reservá tu lugar</button>
        </div>
      </div>
      <div className={styles.activitieCard}>
      <div className={styles.innerCard}>
        <h2>Conservación del Bosque Nativo</h2>
        <h5>25 de Mayo de 2024</h5>
        <img src={Conferencia} alt="" ></img>
        </div>
        <div className={styles.innerCard}>
        <p>Acompáñanos en esta conferencia donde expertos en conservación compartirán estrategias clave para la preservación de nuestro bosque nativo. Descubre cómo puedes contribuir a través de prácticas sostenibles y educativas.</p>
        <button className={styles.activitieButton}>Participá</button>
        </div>
      </div>
    
     </div>
    
     

    </div>
    <LatestPlantings />
    </>
  );
};

export default Activities;
