import styles from './Achievements.module.css';

function Achievements() {
  return (
    <div className={styles.container}>
      <div>
        <h1>5000</h1>
        <p>Árboles Sembrados</p>
      </div>
      <div>
        <h1>1200</h1>
        <p>Nuestros Guardianes</p>
      </div>
      <div>        
        <h1>300</h1>
        <p>Siembras Realizadas</p>
      </div>
      <div>
        <h1>5</h1>
        <p>Años de Experiencia</p>
      </div>
    </div>
  );
}

export default Achievements;
