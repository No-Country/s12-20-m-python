import TreeAmico from '../../assets/tree-amico.png';
import styles from './SuccessAdoption.module.css';

function SuccessAdoption() {
  return (
    <div className={styles.sucessContainer}>
      <div className={styles.successAdoption}>
        <h3>¡Adoptaste un árbol!</h3>
        <img src={TreeAmico} alt='' />
        <p>
          Vas a poder hacerle un seguimiento sobre su crecimiento y recibir
          actualizaciones periódicas para mantenerte informado sobre su
          desarrollo.
        </p>
        <button>Configurar un árbol</button>
      </div>
    </div>
  );
}

export default SuccessAdoption;
