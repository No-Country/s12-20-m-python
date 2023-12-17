import styles from './About.module.css';
import BosqueAmarillo from '../../assets/bosque-amarillo.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <div className={styles.aboutImg}>
    <img src={BosqueAmarillo} alt="" ></img>
    </div>
    <div className={styles.aboutContainer}>
      
      <h2>Sobre Nosotros</h2>
      <p>
      En Guardianes del Bosque, nos apasiona la preservación de nuestros bosques mediante la reforestación de áreas vulnerables con especies nativas. Nuestro equipo diverso y comprometido trabaja en estrecha colaboración con comunidades locales y organizaciones afines para impulsar prácticas sostenibles y generar un impacto positivo a largo plazo.

Cuidamos cada paso del proceso, desde la selección de zonas hasta el seguimiento continuo del crecimiento de cada árbol plantado. Nuestro compromiso va más allá de sembrar árboles; aspiramos a inspirar a otros a unirse a nosotros en la protección de nuestros bosques y del planeta para las generaciones venideras.

¡Únete a nuestra emocionante misión! Juntos, podemos marcar la diferencia para un futuro más verde y próspero.
      </p>
      <section className={styles.section}>
      <h2>Únete a nuestra causa hoy mismo</h2>
   <div className={styles.joinBox}>
  
  <div>
  <p>Cada árbol plantado es un paso hacia un futuro más verde y próspero. ¡Tú puedes marcar la diferencia! Únete a nosotros en nuestra misión de preservar y proteger nuestros bosques nativos.</p>
  </div>
  <div className={styles.finalCall}>
  <p>Juntos, podemos ser los guardianes que nuestro bosque necesita. ¡Únete a la causa y sé parte del cambio!</p>
  <Link to={"/adoption"}>
            <button className={styles.secondButton}>Adoptá un árbol</button>
          </Link>
          
  </div>
</div>
</section>

    </div>
    </>
  );
};

export default About;
