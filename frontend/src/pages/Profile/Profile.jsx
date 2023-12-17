import UserInfo from '../../components/UserInfo/UserInfo';
import MyAdoptions from '../../components/MyAdoptions/MyAdoptions';
import styles from './Profile.module.css';
import { FaChevronRight } from "react-icons/fa";
import UserCategory from '../../components/UserCategory/UserCategory';

const Profile = () => {
  return (
    <div className={styles.profileBox}>
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      <UserInfo />
      <br></br>
      <div>
        <MyAdoptions />
      </div>
      <div>
        <button>Información personal <FaChevronRight /></button>
      </div>
    </div>

     <UserCategory />

    </div>
  );
};

export default Profile; 
