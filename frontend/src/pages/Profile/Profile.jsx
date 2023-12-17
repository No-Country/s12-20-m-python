import UserInfo from '../../components/UserInfo/UserInfo';
import MyAdoptions from '../../components/MyAdoptions/MyAdoptions';
import styles from './Profile.module.css';
import { FaChevronRight } from "react-icons/fa";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      <UserInfo />
      <div>
        <MyAdoptions />
      </div>
      <div>
        <button>Información personal <FaChevronRight /></button>
      </div>
    </div>
  );
};

export default Profile;
