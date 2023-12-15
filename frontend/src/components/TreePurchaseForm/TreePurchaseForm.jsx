import { FiPlusCircle } from 'react-icons/fi';
import { BiMinusCircle } from 'react-icons/bi';
import styles from './TreePurchaseForm.module.css';
import { useLand } from '../../context/LandContext';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const TreePurchaseForm = ({ type_tree, max_amount, placeId }) => {
  const { setPurchase, purchase } = useLand();
  const { isAuth } = useUser();

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
            landId: placeId,
            name: type.name,
            price: type.price || 5,
            quantity: 1,
            img: type.img,
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

  const handleCompraClick = () => {
    if (isAuth) {
      // Enviar información al backend y realizar la compra
      navigate('/shoppingcar');
    } else {
      // Mostrar formulario de registro o inicio de sesión
      navigate('/login');
      // Puedes almacenar temporalmente la información del carrito y redirigir a la página de registro/inicio de sesión.
    }
  };

  return (
    <>
      <pre>{JSON.stringify(purchase, null, 2)}</pre>
      <div className={styles.containerTree}>
        {type_tree.map((type) => (
          <div key={type.id} className={styles.treeContainer}>
            <div>
              <img src={type.img} alt='' className={styles.imgAdoption} />
            </div>

            <label>
              <p className={styles.typeName}>{type.name}</p>
              <p className={styles.typePrice}>{type.price} USD</p>
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
