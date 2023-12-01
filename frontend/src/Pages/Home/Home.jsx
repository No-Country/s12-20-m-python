import LatestPlantings from '../../components/LatestPlantings/LatestPlantings';
import Vision from '../../components/Vision/Vision';
import Achievements from '../../components/Achievements/Achievements';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.ourvision}>
        <p>
          Nosotros visualizamos un futuro donde nuestro proyecto de siembra de
          árboles no solo reduce la huella de carbono, sino que también actúa
          como un catalizador para la regeneración ambiental. Buscamos crear un
          entorno sostenible y equilibrado, donde los árboles no solo se
          consideran sumideros de carbono, sino también protectores de la
          biodiversidad y recursos vitales para las comunidades locales. A
          través de la colaboración y la innovación constante, aspiramos a ser
          líderes en la promoción de prácticas responsables y la creación de un
          impacto duradero en la salud de nuestro planeta
        </p>
        <Link to={'/adoption'}>
          <button>CTA</button>
        </Link>
      </div>
      <div>
        <Vision />
      </div>
      <div className={styles.whyadopt}>
        <h1>¿Por qué adoptar un árbol?</h1>
        <p>
          Al adoptar un árbol en nuestro proyecto de siembra, no solo estás
          comprometiéndote con la sostenibilidad y la responsabilidad ambiental,
          sino que también estás contribuyendo activamente a la creación de un
          futuro más verde. Tu adopción no solo reduce tu huella de carbono
          personal, sino que también forma parte de un esfuerzo colectivo para
          preservar nuestro entorno natural y promover la biodiversidad. Al
          unirte a nosotros, no solo adoptas un árbol, sino que también adoptas
          un compromiso compartido de construir un mundo más saludable y
          sostenible para las generaciones futuras. Únete a nosotros en esta
          emocionante jornada hacia un planeta más verde y próspero.
        </p>
      </div>
      <div>
        <Achievements />
      </div>
      <div>
        <LatestPlantings />
      </div>
    </div>
  );
}

export default Home;
