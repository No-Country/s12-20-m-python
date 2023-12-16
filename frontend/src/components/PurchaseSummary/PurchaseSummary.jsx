import React from 'react';
import styles from './PurchaseSummary.module.css';

const PurchaseSummary = ({ purchase }) => {
  const totalPrice = purchase.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div>
      <h4>Resumen de compra</h4>

      {purchase.map((item) => (
        <div key={item.typeId}>
          <div className={styles.purchaseResume}>
            <img src={item.img} alt='' />
            <p>
              {item.typeName}x{item.quantity}
            </p>
            <p>{item.price} USD</p>
          </div>
        </div>
      ))}

      <hr />
      <div>
        <p>Total: {totalPrice} USD</p>
      </div>
    </div>
  );
};

export default PurchaseSummary;
