import styles from './Loader.module.css';

const Loader = ({ fullscreen }) => {
  if (fullscreen) {
    return (
      <div className={styles.loaderContainerFull}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
