/* import LatestPlantings from "../../components/LatestPlantings/LatestPlantings"; */
import Vision from "../../components/Vision/Vision";
import Achievements from "../../components/Achievements/Achievements";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import HomeVideo from "../../assets/video-header.mp4";
import HomeImage from "../../assets/image-home.jpg";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.ourvision}>
        <video className={styles.homeVideo}>
          <source src={HomeVideo} type="video/mp4" />
        </video>
        {/* <p>
          Nosotros visualizamos un futuro donde nuestro proyecto de siembra de
          árboles no solo reduce la huella de carbono, sino que también actúa
          como un catalizador para la regeneración ambiental. Buscamos crear un
          entorno sostenible y equilibrado, donde los árboles no solo se
          consideran sumideros de carbono, sino también protectores de la
          biodiversidad y recursos vitales para las comunidades locales. A
          través de la colaboración y la innovación constante, aspiramos a ser
          líderes en la promoción de prácticas responsables y la creación de un
          impacto duradero en la salud de nuestro planeta
        </p> */}
        <div className={styles.titleBox}>
          <h2>Vos también podes ser parte</h2>
          <Link to={"/adoption"}>
            <button className={styles.adoptButton}>Adoptá un árbol</button>
          </Link>
        </div>
      </div>

      <div>
        <Vision />
      </div>
      <div className={styles.whyadopt}>
        <div className={styles.adopyTexts}>
          <h2>¿Por qué adoptar un árbol?</h2>
          <p>
            La deforestación es una de las principales amenazas ambientales a
            las que se enfrenta nuestro planeta, ya que reduce los beneficios
            que los árboles proporcionan. Cada año, se pierden millones de
            hectáreas de bosques debido a la tala indiscriminada, entre otras
            actividades.
          </p>
          <p>
            Adoptar un árbol es una forma sencilla y gratificante de ayudar al
            medio ambiente, es una forma de conectarse con la naturaleza y hacer
            una diferencia positiva en el mundo. Al adoptar un árbol, ayudas a
            financiar la plantación de un nuevo árbol en un área que ha sido
            deforestada o degradada. También puede ayudar a proporcionar
            mantenimiento al árbol durante su vida útil.
          </p>
          <Link to={"/adoption"}>
            <button className={styles.secondButton}>Adoptá un árbol</button>
          </Link>
        </div>
        <div>
          <img src={HomeImage} alt="" />
        </div>
      </div>
      <div>
        <Achievements />
      </div>
      <div>
       {/*  <LatestPlantings /> */}
      </div>
    </div>
  );
}

export default Home;
