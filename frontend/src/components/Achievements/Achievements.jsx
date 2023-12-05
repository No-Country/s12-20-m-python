import styles from './Achievements.module.css';
import Co2 from './../../assets/HomeIllustrations/co2.png'
import Adoptantes from './../../assets/HomeIllustrations/adoptantes.png'
import Hec from './../../assets/HomeIllustrations/hec.png'
import Plantados from './../../assets/HomeIllustrations/plantados.png'

function Achievements() {
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <div>
        <img src={Plantados} alt="" />
        <h1>85.693</h1>
        <p>Árboles plantados</p>
      </div>
      <div>
      <img src={Adoptantes} alt="" />
        <h1>23521</h1>
        <p>Adoptantes de árboles</p>
      </div>
      <div>  
      <img src={Co2} alt="" />      
        <h1>11.111</h1>
        <p>Co2 captado</p>
      </div>
      <div>
      <img src={Hec} alt="" />
        <h1>5</h1>
        <p>Hectáreas reforestadas</p>
      </div>
      </div>
    </div>
  );
}

export default Achievements;
