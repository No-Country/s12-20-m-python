import styles from './PurchaseSummary.module.css';

import { treeImages } from '../../helpers/TreeImages.js';

const PurchaseSummary = ({ purchase }) => {
  const totalPrice = purchase.reduce((acc, item) => acc + item.quantity * 5, 0);
  return (
    <div>
      <h4>Resumen de Adopción</h4>

      {purchase.map((item) => (
        <div key={item.typeId}>
          <div className={styles.purchaseResume}>
            <img src={treeImages[item.typeId]} alt='' />
            <p>
              {item.typeName} x{item.quantity}
            </p>

            <p>5 USD</p>
          </div>
        </div>
      ))}

      <hr />
      <div>
        <p className={styles.purchaseTotal}>
          Total <span>{totalPrice} USD</span>
        </p>
      </div>
    </div>
  );
};

export default PurchaseSummary;
