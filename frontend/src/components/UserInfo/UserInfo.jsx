import styles from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <section className={styles.userContainer}>
      <div className={styles.imgContainer}>
        <img
          src='https://dummyimage.com/100x100/000/fff'
          alt='imagen de perfil'
        />
      </div>
      <article>
        <p>Nombre de Usuario</p>
        <p>email@gmail.com</p>
      </article>
    </section>
  );
};

export default UserInfo;
