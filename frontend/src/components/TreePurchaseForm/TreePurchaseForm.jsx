import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import { BiMinusCircle } from 'react-icons/bi';
import styles from './TreePurchaseForm.module.css';
import { useLand } from '../../context/LandContext';
import { useNavigate } from 'react-router-dom';

const TreePurchaseForm = ({ type_tree, max_amount }) => {
  const { setPurchase, purchase } = useLand();

  const getQuantityTree = (id) => {
    const quantityType = purchase.find((item) => item.id === id);
    return quantityType ? quantityType.quantity : 0;
  };
  const navigate = useNavigate();

  const getTotalPrice = purchase
    .map((item) => item.quantity * item.price)
    .reduce((acc, item) => acc + item, 0);

  const getTotalQuantity = purchase
    .map((item) => item.quantity)
    .reduce((acc, item) => acc + item, 0);

  // const [treeTypes, setTreeTypes] = useState({
  //   olmo: { name: 'Olmo', price: 10, quantity: 0 },
  //   espinillo: { name: 'Espinillo', price: 15, quantity: 0 },
  //   alamo: { name: 'Álamo', price: 20, quantity: 0 },
  // });

  // const [total, setTotal] = useState(0);
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // const handleQuantityChange = (type, quantity) => {
  //   const updatedTreeTypes = {
  //     ...treeTypes,
  //     [type]: { ...treeTypes[type], quantity },
  //   };
  //   setTreeTypes(updatedTreeTypes);
  //   calculateTotal(updatedTreeTypes);
  // };
  const addItem = (type) => {
    if (getTotalQuantity < max_amount) {
      setPurchase((prev) => {
        const itemExist = prev.find((item) => item.id === type.id);

        if (itemExist) {
          const itemUpdated = {
            ...itemExist,
            quantity: itemExist.quantity + 1,
          };

          const newData = prev.map((item) =>
            item.id === type.id ? itemUpdated : item,
          );

          return newData;
        } else {
          const newItem = {
            id: type.id,
            name: type.name,
            price: type.price,
            quantity: 1,
          };

          return [...prev, newItem];
        }
      });
    }
  };

  const deleteItem = (type) => {
    setPurchase((prev) => {
      const foundItem = prev.find((item) => item.id === type.id);

      if (!foundItem) return prev;

      if (foundItem && foundItem.quantity === 1) {
        const newData = prev.filter((item) => item.id !== type.id);
        return newData;
      }

      if (foundItem.quantity > 0) {
        const itemUpdated = {
          ...foundItem,
          quantity: foundItem.quantity - 1,
        };
        const newData = prev.map((item) =>
          item.id === type.id ? itemUpdated : item,
        );

        return newData;
      }
    });
  };

  // const calculateTotal = (types) => {
  //   let newTotal = 0;
  //   Object.keys(types).forEach((type) => {
  //     newTotal += types[type].price * types[type].quantity;
  //   });
  //   setTotal(newTotal);
  // };

  const handleCompraClick = () => {
    navigate('/shoppingcar');

    // if (isUserLoggedIn) {
    //   // Enviar información al backend y realizar la compra
    //   alert(
    //     'Compra realizada con éxito. Se ha enviado la información al backend.',
    //   );

    // } else {
    //   // Mostrar formulario de registro o inicio de sesión
    //   alert(
    //     'Usuario no registrado. Mostrar formulario de registro o inicio de sesión.',
    //   );
    //   // Puedes almacenar temporalmente la información del carrito y redirigir a la página de registro/inicio de sesión.
    // }
  };

  return (
    <>
      <div className={styles.containerTree}>
        {/* {Object.keys(treeTypes).map((type) => (
          <div key={type}>
            <div className={styles.treeContainer}>
              <img
                src='ruta_de_imagen_1'
                alt='Imagen'
                className={styles.imgAdoption}
              />
              <label>
                <p>{treeTypes[type].name}</p>${treeTypes[type].price}
                <div className={styles.counterContainer}>
                  <button
                    onClick={() => {
                      handleQuantityChange(type, treeTypes[type].quantity - 1);
                    }}
                    className={styles.buttonCounterMinus}
                  >
                    <BiMinusCircle size={'24px'} color={'#31572C'} />
                  </button>
                  <span>{treeTypes[type].quantity}</span>
                  <button
                    onClick={() => {
                      handleQuantityChange(type, treeTypes[type].quantity + 1);
                      addItem(type);
                    }}
                    className={styles.buttonCounterPlus}
                  >
                    <FiPlusCircle size={'24px'} color={'#31572C'} />
                  </button>
                </div>
              </label>
            </div>
          </div>
        ))} */}

        {type_tree.map((type) => (
          <div key={type.id} className={styles.treeContainer}>
            <div>
              <img src={type.img} alt='' className={styles.imgAdoption} />
            </div>

            <label>
              <p>{type.name}</p>${type.price}
              <div className={styles.counterContainer}>
                <button
                  onClick={() => {
                    deleteItem(type);
                  }}
                  className={styles.buttonCounterMinus}
                >
                  <BiMinusCircle size={'24px'} color={'#31572C'} />
                </button>
                <span>{getQuantityTree(type.id)}</span>
                <button
                  onClick={() => {
                    addItem(type);
                  }}
                  className={styles.buttonCounterPlus}
                >
                  <FiPlusCircle size={'24px'} color={'#31572C'} />
                </button>
              </div>
            </label>
          </div>
        ))}
      </div>
      {getTotalQuantity >= max_amount && (
        <p>
          El límite máximo de árboles disponibles para esta zona es {max_amount}
        </p>
      )}
      <div>
        <h4>Subtotal: ${getTotalPrice}</h4>
        <button className={styles.purchaseButton} onClick={handleCompraClick}>
          Adoptar
        </button>
      </div>
    </>
  );
};

export default TreePurchaseForm;
