import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <div>
          <h3>LOGO</h3>
        </div>
        <Navbar handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
        <div onClick={handleOpenMenu} className={styles.openMenu}>
          <IoMenu size={32} />
        </div>
      </section>
    </header>
  );
};

export default Header;
