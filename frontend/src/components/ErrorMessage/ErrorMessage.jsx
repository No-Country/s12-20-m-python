import styles from './ErrorMessage.module.css';
const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <h4>Error:</h4>
      <p className={styles.textMessage}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
