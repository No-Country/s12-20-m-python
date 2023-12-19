import { FiPlusCircle } from 'react-icons/fi';
import { BiMinusCircle } from 'react-icons/bi';
import styles from './TreePurchaseForm.module.css';
import { useLand } from '../../context/LandContext';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { treeImages } from '../../helpers/TreeImages.js';
import { useState } from 'react';
import Loader from '../Loader/Loader.jsx';

const TreePurchaseForm = ({ type_tree, max_amount, placeId }) => {
  const adoptionPrice = 5;

  const { setPurchase, purchase } = useLand();
  const [loadingSimulated, setLoadingSimulated] = useState(false);
  const { isAuth } = useUser();

  const getQuantityTree = (id) => {
    const quantityType = purchase.find((item) => item.typeId === id);
    return quantityType ? quantityType.quantity : 0;
  };
  const navigate = useNavigate();

  const getTotalPrice = purchase
    .map((item) => item.quantity * adoptionPrice)
    .reduce((acc, item) => acc + item, 0);

  const getTotalQuantity = purchase
    .map((item) => item.quantity)
    .reduce((acc, item) => acc + item, 0);

  const addItem = (type) => {
    if (getTotalQuantity < max_amount) {
      setPurchase((prev) => {
        const itemExist = prev.find((item) => item.typeId === type.id);

        if (itemExist) {
          const itemUpdated = {
            ...itemExist,
            quantity: itemExist.quantity + 1,
          };

          const newData = prev.map((item) =>
            item.typeId === type.id ? itemUpdated : item,
          );

          return newData;
        } else {
          const newItem = {
            typeId: type.id,
            landId: placeId,
            typeName: type.name,
            typeCommonName: type.common_name,
            typeScientificName: type.scientific_name,
            adoptionDate: new Date().toLocaleDateString('es-ES'),
            quantity: 1,
          };

          return [...prev, newItem];
        }
      });
    }
  };

  const deleteItem = (type) => {
    setPurchase((prev) => {
      const foundItem = prev.find((item) => item.typeId === type.id);

      if (!foundItem) return prev;

      if (foundItem && foundItem.quantity === 1) {
        const newData = prev.filter((item) => item.typeId !== type.id);
        return newData;
      }

      if (foundItem.quantity > 0) {
        const itemUpdated = {
          ...foundItem,
          quantity: foundItem.quantity - 1,
        };
        const newData = prev.map((item) =>
          item.typeId === type.id ? itemUpdated : item,
        );

        return newData;
      }
    });
  };

  const handleCompraClick = async () => {
    if (purchase.length < 1) return;

    if (isAuth) {
      // Enviar información al backend y realizar la compra
      setLoadingSimulated(true);
      const loadingSim = await setTimeout(() => {
        setLoadingSimulated(false);
        clearTimeout(loadingSim);
        navigate('/adoptioncar');
      }, 1000);
    } else {
      // Mostrar formulario de registro o inicio de sesión
      navigate('/login');
      // Puedes almacenar temporalmente la información del carrito y redirigir a la página de registro/inicio de sesión.
    }
  };

  return (
    <>
      <div className={styles.containerTree}>
        {loadingSimulated && <Loader fullscreen={true} />}
        {type_tree.map((type) => (
          <div key={type.id} className={styles.treeContainer}>
            <div>
              <img
                // src={treeImages[Math.floor(Math.random() * treeImages.length)]}
                src={treeImages[type.id]}
                alt='imagen tipo árbol'
                className={styles.imgAdoption}
              />
            </div>

            <label>
              <p className={styles.typeName}>{type.name}</p>
              <p className={styles.typePrice}>{adoptionPrice} USD</p>
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
      <div className={styles.confirmContainer}>
        <h4>Subtotal: {getTotalPrice} USD</h4>
        <button
          className={styles.purchaseButton}
          onClick={() => handleCompraClick()}
        >
          Adoptar
        </button>
      </div>
    </>
  );
};

export default TreePurchaseForm;
