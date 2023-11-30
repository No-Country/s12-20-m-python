import styles from '../LatestPlantings/LatestPlantings.module.css'; // Asegúrate de tener un archivo CSS para los estilos

function LatestPlantings() {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ backgroundImage: 'url("imagen1.jpg")' }}>
        <div className={styles.overlay}>
          <p className={styles.description}>Descripción 1</p>
          <button className={styles.button}>Botón 1</button>
        </div>
      </div>
      <div className={styles.card} style={{ backgroundImage: 'url("imagen2.jpg")' }}>
        <div className={styles.overlay}>
          <p className={styles.description}>Descripción 2</p>
          <button className={styles.button}>Botón 2</button>
        </div>
      </div>
      <div className={styles.card} style={{ backgroundImage: 'url("imagen3.jpg")' }}>
        <div className={styles.overlay}>
          <p className={styles.description}>Descripción 3</p>
          <button className={styles.button}>Botón 3</button>
        </div>
      </div>
    </div>
  );
}

export default LatestPlantings;
