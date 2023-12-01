import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import styles from './Navbar.module.css';

const Navbar = ({ handleCloseMenu, openMenu }) => {
  const menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Adopta un árbol', path: '/adoption' },
    { label: 'Perfil', path: '/profile' },
    { label: 'Iniciar Sesión', path: '/login' },
    { label: 'Registrarse', path: '/register' },
  ];

  return (
    <nav
      className={`${styles.nav} ${openMenu ? styles.navIsActive : ''}`}
      onClick={handleCloseMenu}
    >
      <div onClick={handleCloseMenu} className={styles.closeMenu}>
        <FaArrowRight size={32} />
      </div>
      <ul
        className={`${styles.navList} ${openMenu ? styles.listIsActive : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {menuItems.map((item, index) => (
          <li key={`${item.path}_${index}`}>
            <Link
              className={styles.navLink}
              to={item.path}
              onClick={handleCloseMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
