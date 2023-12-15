import styles from '../Vision/Vision.module.css';
import Compromiso from "../../assets/HomeIllustrations/compromiso.png"
import Responsabilidad from "../../assets/HomeIllustrations/consciencia-ambiental.png"
import Participacion from "../../assets/HomeIllustrations/participacion-comunitaria.png"
import Respeto from "../../assets/HomeIllustrations/respeto.png"

function Vision() {
  return (
    <div className={styles.visionContainer}>
      <div className={styles.visionCard}>
        <img src={Compromiso} alt="" />
        <h3>Compromiso</h3>
        <p>
        con la preservación de especies nativas.
        </p>
      </div>
      <div className={styles.visionCard}>
      <img src={Participacion} alt="" />
        <h3>Participación Comunitaria</h3>
        <p>
        como forma de trabajo para lograr un bien común.
        </p>
      </div>
      <div className={styles.visionCard}>
      <img src={Respeto} alt="" />
        <h3>Respeto</h3>
        <p>
        por el planeta y todas sus formas de vida.
        </p>
      </div>
      <div className={styles.visionCard}>
      <img src={Responsabilidad} alt="" />
        <h3>Responsabilidad</h3>
        <p>
        y conciencia ambiental.
        </p>
      </div>
    </div>
  );
}

export default Vision;
