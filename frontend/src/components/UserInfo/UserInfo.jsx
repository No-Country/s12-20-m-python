import { useUser } from '../../context/UserContext';
import styles from './UserInfo.module.css';

const UserInfo = () => {
  const { user } = useUser();

  return (
    <section className={styles.userContainer}>
      <div className={styles.imgContainer}>
        <img
          src='https://dummyimage.com/100x100/000/fff'
          alt='imagen de perfil'
        />
      </div>
      <article>
        <p>
          {user.first_name} {user.last_name}
        </p>
        <p>{user.email}</p>
      </article>
    </section>
  );
};

export default UserInfo;
