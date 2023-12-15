import UserInfo from '../../components/UserInfo/UserInfo';
import MyAdoptions from '../../components/MyAdoptions/MyAdoptions';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      <UserInfo />
      <div>
        <MyAdoptions />
      </div>
    </div>
  );
};

export default Profile;
