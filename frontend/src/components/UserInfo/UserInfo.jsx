import { useUser } from '../../context/UserContext';
import styles from './UserInfo.module.css';
import profileIma from '../../assets/default-profile-image.png';

const UserInfo = () => {
  const { user } = useUser();

  return (
    <section className={styles.userContainer}>
      <div className={styles.imgContainer}>
        <img src={profileIma} alt='imagen de perfil' />
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
