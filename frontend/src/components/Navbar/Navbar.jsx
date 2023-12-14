import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import styles from './Navbar.module.css';
import { useUser } from '../../context/UserContext';

const Navbar = ({ handleCloseMenu, openMenu, isHomePage }) => {
  const { setIsAuth, isAuth, setUser } = useUser();

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    const confirm = window.confirm('¿Estas seguro de salir?');
    if (confirm) {
      setUser(null);
      setIsAuth(false);
      localStorage.removeItem('userData');
      navigate('/');
    }
  };

  const menuItems = isAuth
    ? [
        { label: 'Inicio', path: '/' },
        { label: 'Nosotros', path: '/about' },
        { label: 'Adopta', path: '/adoption' },
        { label: 'Actividades', path: '/activities' },
        { label: 'Perfil', path: '/profile' },
      ]
    : [
        { label: 'Inicio', path: '/' },
        { label: 'Nosotros', path: '/about' },
        { label: 'Adopta', path: '/adoption' },
        { label: 'Actividades', path: '/activities' },
        { label: 'Iniciar Sesión', path: '/login' },
        { label: 'Registrarse', path: '/register' },
      ];

  return (
    <nav
      className={`${styles.nav} ${openMenu ? styles.navIsActive : ''}`}
      onClick={handleCloseMenu}
    >
      <div onClick={handleCloseMenu} className={styles.closeMenu}>
        <FaArrowRight size={32} className={styles.closeMenuIcon} />
      </div>
      <ul
        className={`${styles.navList} ${openMenu ? styles.listIsActive : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {menuItems.map((item, index) => (
          <li key={`${item.path}_${index}`}>
            <Link
              className={`${styles.navLink} ${
                !isHomePage && styles.navLinkDark
              }`}
              to={item.path}
              onClick={handleCloseMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {isAuth && (
          <li>
            <Link
              className={`${styles.navLink} ${
                !isHomePage && styles.navLinkDark
              }`}
              onClick={(e) => handleLogout(e)}
            >
              Salir
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
