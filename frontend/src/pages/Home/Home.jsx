import LatestPlantings from "../../components/LatestPlantings/LatestPlantings";
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
        <video autoPlay playsInline muted className={styles.homeVideo}>
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className={styles.titleBox}>
          <h2>Vos también podés ser parte</h2>
          <Link to={"/adoption"}>
            <button className={styles.adoptButton}>Adoptá un árbol</button>
          </Link>
        </div>
      </div>

      <div>
        <Vision />
      </div>
      <div className={styles.whyadoptBox}>
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
            deforestada o degradada. También podés colaborar para darle los cuidados necesarios durante todo su ciclo de vida, para que tu árbol crezca sano y fuerte.
          </p>
          <Link to={"/adoption"}>
            <button className={styles.secondButton}>Adoptá un árbol</button>
          </Link>
        </div>
        <div className={styles.imgBox}>
          <img src={HomeImage} alt="" />
        </div>
      </div>
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
