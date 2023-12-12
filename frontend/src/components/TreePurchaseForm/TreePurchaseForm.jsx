import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import { BiMinusCircle } from 'react-icons/bi';
import styles from './TreePurchaseForm.module.css';

const TreePurchaseForm = () => {
  const [treeTypes, setTreeTypes] = useState({
    olmo: { name: 'Olmo', price: 10, quantity: 0 },
    espinillo: { name: 'Espinillo', price: 15, quantity: 0 },
    alamo: { name: 'Álamo', price: 20, quantity: 0 },
  });

  const [total, setTotal] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleQuantityChange = (type, quantity) => {
    const updatedTreeTypes = {
      ...treeTypes,
      [type]: { ...treeTypes[type], quantity },
    };
    setTreeTypes(updatedTreeTypes);
    calculateTotal(updatedTreeTypes);
  };

  const calculateTotal = (types) => {
    let newTotal = 0;
    Object.keys(types).forEach((type) => {
      newTotal += types[type].price * types[type].quantity;
    });
    setTotal(newTotal);
  };

  const handleCompraClick = () => {
    if (isUserLoggedIn) {
      // Enviar información al backend y realizar la compra
      alert(
        'Compra realizada con éxito. Se ha enviado la información al backend.',
      );
    } else {
      // Mostrar formulario de registro o inicio de sesión
      alert(
        'Usuario no registrado. Mostrar formulario de registro o inicio de sesión.',
      );
      // Puedes almacenar temporalmente la información del carrito y redirigir a la página de registro/inicio de sesión.
    }
  };

  return (
    <>
      <div className={styles.containerTree}>
        {Object.keys(treeTypes).map((type) => (
          <div key={type}>
            <div className={styles.treeContainer}>
              <img
                src='ruta_de_imagen_1'
                alt='Imagen'
                className={styles.imgadoption}
              />
              <label>
                <p>{treeTypes[type].name}</p>${treeTypes[type].price}
                <div className={styles.counterContainer}>
                  <button
                    onClick={() =>
                      handleQuantityChange(type, treeTypes[type].quantity - 1)
                    }
                    className={styles.buttonCounterMinus}
                  >
                    <BiMinusCircle size={'24px'} color={'#31572C'} />
                  </button>
                  <span>{treeTypes[type].quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(type, treeTypes[type].quantity + 1)
                    }
                    className={styles.buttonCounterPlus}
                  >
                    <FiPlusCircle size={'24px'} color={'#31572C'} />
                  </button>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4>Subtotal: ${total}</h4>
        <Link to='/login'>
          <button className={styles.purchaseButton} onClick={handleCompraClick}>
            Adoptar
          </button>
        </Link>
      </div>
    </>
  );
};

export default TreePurchaseForm;