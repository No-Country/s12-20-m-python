import React from 'react';
import styles from './PurchaseSummary.module.css';

import image1 from '../../assets/imagen.png';
import image2 from '../../assets/imagen1.png';
import image3 from '../../assets/imagen2.png';

const PurchaseSummary = ({ purchase }) => {
  const treeImages = [image1, image2, image3];

  const totalPrice = purchase.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div>
      <h4>Resumen de compra</h4>

      {purchase.map((item) => (
        <div key={item.typeId}>
          <div className={styles.purchaseResume}>
            <img
              src={treeImages[Math.floor(Math.random() * treeImages.length)]}
              alt=''
            />
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
