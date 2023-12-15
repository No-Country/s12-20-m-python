import UserInfo from '../../components/UserInfo/UserInfo';
import MyAdoptions from '../../components/MyAdoptions/MyAdoptions';
import { useUser } from '../../context/UserContext';
import styles from './Profile.module.css';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      <div>{JSON.stringify(user)}</div>
      <UserInfo />
      <div>
        <MyAdoptions />
      </div>
    </div>
  );
};

export default Profile;
